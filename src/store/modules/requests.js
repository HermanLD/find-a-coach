import db from "../../firebase/database/firestore";

const requests = {
  namespaced: true,
  state() {
    return {
      requests: [],
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
    ADD_REQUEST(state, newRequest) {
      state.requests.push(newRequest);
    },
    TOGGLE_STATE(state, newState) {
      state.current = newState;
    },
  },
  actions: {
    addRequests({ commit, state }, newRequest) {
      commit("TOGGLE_STATE", state.transitions[state.current].on["LOAD"]);

      setTimeout(() => {
        db.collection("requests")
          .add(newRequest)
          .then((ref) => {
            commit("ADD_REQUEST", { ...newRequest, coachId: ref.id });
          })
          .catch((error) => {
            console.log(error);
          });

        commit("TOGGLE_STATE", state.transitions[state.current].on["RESOLVE"]);
      }, 500);
    },
    loadRequests({ commit, state }) {
      commit("TOGGLE_STATE", state.transitions[state.current].on["LOAD"]);

      setTimeout(() => {
        db.collection("requests")
          .get()
          .then((snapshot) => {
            console.log(snapshot.docs);
            const requestArr = snapshot.docs;

            for (let i = 0; i < requestArr.length; i++) {
              const requestItem = requestArr[i].data();

              commit("ADD_REQUEST", requestItem);
            }
          })
          .catch((error) => {
            console.log(error);
          });

        commit("TOGGLE_STATE", state.transitions[state.current].on["RESOLVE"]);
      }, 500);
    },
  },
  getters: {
    allRequests: (state) => state.requests,
    isLoading: (state) => state.current === "loading",
  },
};
export default requests;
