import { setTimeout } from "core-js";
import { createStore } from "vuex";
import coaches from "./modules/coaches";
import requests from "./modules/requests";

export default createStore({
  state() {
    return {
      current: "loggedOut",
      states: {
        loggedOut: { on: { SIGNIN: "loading" } },
        loggedIn: { on: { SIGNOUT: "loggedOut" } },
        loading: { on: { RESOLVED: "loggedIn", REJECT: "loggedOut" } },
      },
    };
  },
  mutations: {
    TOGGLE(state, nextState) {
      state.current = nextState;
    },
  },
  actions: {
    //? context = { commit, dispatch, state }
    login({ commit, state, dispatch }) {
      if (state.current === "loggedOut") {
        const nextState = state.states[state.current].on["SIGNIN"];
        commit("TOGGLE", nextState); //? loading State
        dispatch("authOrLoad"); //? Resolved or Rejected
      } else {
        const nextState = state.states[state.current].on["SIGNOUT"];
        commit("TOGGLE", nextState);
      }
    },
    authOrLoad({ commit, state }) {
      setTimeout(() => {
        // TODO: Change state in event of REJECTED
        const nextState = state.states[state.current].on["RESOLVED"];
        commit("TOGGLE", nextState);
      }, 2000);
    },
  },
  getters: {
    currentState: (state) => state.current,
    isLoggedIn: (state) => state.current === "loggedIn",
    isLoading: (state) => state.current === "loading",
  },
  modules: {
    coaches: coaches,
    requests: requests,
  },
});
