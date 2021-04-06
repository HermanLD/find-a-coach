const coaches = {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "Maximilian",
          lastName: "Schwarzmüller",
          areas: ["frontend", "backend", "career"],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: "c2",
          firstName: "Jimmy",
          lastName: "Jones",
          areas: ["frontend", "career"],
          description:
            "I am Jimmy and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 30,
        },
      ],
    };
  },
  actions: {
    async fetchCoaches() {
      const coachData = await fetch(
        "https://vuejs-http-6cd1d.firebaseio.com/coaches"
      )
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
      console.log(coachData); //!TEST

      // TODO: Replace coaches array with fresh data
    },
  },
  getters: {
    allCoaches: (state) => state.coaches,
  },
};
export default coaches;
