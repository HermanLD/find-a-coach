import db from "../../firebase/database/firestore";
import auth from "../../firebase/auth/auth";

const coaches = {
  namespaced: true,
  state() {
    return {
      coaches: [
        //* {
        //*   firstName: "Maximilian",
        //*   lastName: "Schwarzmüller",
        //*   areas: ["frontend", "career", "career"],
        //*   hourlyRate: 30,
        //*   description: "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
        //* }
      ],
      //? Using Finite State machine
      //? state.transitions[state.current].on[<EVENT>]
      current: "idle",
      transitions: {
        idle: { on: { LOAD: "loading" } },
        loading: { on: { RESOLVE: "idle" } },
      },
    };
  },
  mutations: {
    ADD_COACH(state, newCoach) {
      state.coaches.push(newCoach);
    },
    TOGGLE_STATE(state, newState) {
      state.current = newState;
    },
  },
  actions: {
    addCoach({ dispatch }, coach) {
      //? coach = {email, password, firstName, lastName, areas, rate, description}
      const newCoach = {
        firstName: coach.firstName,
        lastName: coach.lastName,
        areas: coach.areas,
        hourlyRate: coach.rate,
        description: coach.description,
      };

      // console.log(newCoach); //!
      // console.log("Email: ", coach.email); //!
      // console.log("Password: ", coach.password); //!

      //? State ----> loading
      dispatch("toggleState", "SIGNIN");

      // TODO: Create Auth user
      auth
        .createUserWithEmailAndPassword(coach.email, coach.password)
        .then((cred) => {
          //TODO: Add user to collection & App store
          // commit("ADD_COACH", { id: cred.user.uid, ...newCoach });
          console.log(cred);

          return db
            .collection("coaches")
            .doc(cred.user.uid)
            .set(newCoach);
        })
        .then(() => {
          //? State ----> RESOLVED = logged-in
          dispatch("toggleState", "RESOLVED");
        })
        .catch((error) => {
          alert(error.message);
          console.log(error.code);
          console.log(error.message);

          //? State ----> REJECT = logged-out
          dispatch("toggleState", "REJECT");
        });
    },
    fetchCoaches({ commit, state }) {
      commit("TOGGLE_STATE", state.transitions[state.current].on["LOAD"]);

      //? Show off loading State
      setTimeout(() => {
        //TODO: Access coach collection
        db.collection("coaches")
          .get()
          .then((snapshot) => {
            let docArray = snapshot.docs;

            for (let i = 0; i < docArray.length; i++) {
              let doc = docArray[i];

              //TODO: Add Coach obj from array to store
              commit("ADD_COACH", { ...doc.data(), id: doc.id });
            }
            commit(
              "TOGGLE_STATE",
              state.transitions[state.current].on["RESOLVE"]
            );
          })
          .catch((error) => {
            console.log(error); //!
          });
      }, 750);
    },
  },
  getters: {
    allCoaches: (state) => state.coaches,
    isLoading: (state) => state.current === "loading",
  },
};

export default coaches;
