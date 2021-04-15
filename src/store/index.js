// import { setTimeout } from "core-js";
import { createStore } from "vuex";
import auth from "../firebase/auth/auth";
import coaches from "./modules/coaches";
import requests from "./modules/requests";

export default createStore({
  state() {
    return {
      userId: null,
      //? Using Finite State machine
      //? state.transitions[state.current].on[<EVENT>]
      current: "loggedOut",
      transitions: {
        loggedOut: { on: { SIGNIN: "loading" } },
        loggedIn: { on: { SIGNOUT: "loggedOut" } },
        loading: { on: { RESOLVED: "loggedIn", REJECT: "loggedOut" } },
      },
    };
  },
  mutations: {
    SET_USER(state, newId) {
      state.userId = newId;
    },
    TOGGLE_STATE(state, nextState) {
      state.current = nextState;
    },
  },
  actions: {
    //? coach = { email, password }
    login({ commit, dispatch }, coach) {
      //? State ----> loading
      dispatch("toggleState", "SIGNIN");

      auth
        .signInWithEmailAndPassword(coach.email, coach.password)
        .then((cred) => {
          console.log(cred.user.uid); //!
          //TODO: Set user localId in App Store
          commit("SET_USER", cred.user.uid);

          //? State ----> logged-in
          dispatch("toggleState", "RESOLVE");
        })
        .catch((error) => {
          alert(error.message);
          console.log(error.code); //!
          console.log(error.message); //!

          //? State ----> logged-out
          dispatch("toggleState", "REJECT");
        });
    },
    logOut({ commit, dispatch }) {
      auth.signOut().then(() => {
        //TODO: State.userId ---> null
        commit("SET_USER", null);

        //? State ----> logged-out
        dispatch("toggleState", "SIGNOUT");
        console.log("COACH SIGNED OUT"); //!
      });
    },
    //? Run this on App.create()
    autoLogin({ commit }) {
      const user = auth.currentUser;

      //TODO: Inject data into App Store
      if (user) commit("SET_USER", user.uid);
      console.log("Current user is ", user); //!
    },
    toggleState({ commit, state }, event) {
      if (state.transitions[state.current] === undefined) {
        console.log("Current State: ", state.current);
        console.log("Current State does not accept: ", event);
      }
      commit("TOGGLE_STATE", state.transitions[state.current].on[event]);
    },
  },
  getters: {
    currentState: (state) => state.current,
    isLoggedIn: (state) => state.current === "logged-in",
    isLoading: (state) => state.current === "loading",
  },
  modules: {
    coaches: coaches,
    requests: requests,
  },
});
