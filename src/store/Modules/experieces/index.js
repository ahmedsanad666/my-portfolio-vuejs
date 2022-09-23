import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      experiences: [
        {
          id: 1,
          startYear: "2019",
          endYear: "2021",
          title: "Mechanical engineering",
          company: "Damietta University",
          description:
            "I have studied the basics of general engineering and mechanical engineering at Damietta University",
        },
        {
          id: 2,
          startYear: "2019",
          endYear: "NOW",
          title: "Full Stack Web Development",
          company: "Self Study",
          description:
            "I have and still studying FULL STACK DEVELOPING with with VUEJS  as a front-end fram work and PHP & MYSQL  as a back-end and still deep learning ",
        },
        {
          id: 3,
          startYear: "2022",
          endYear: "2026",
          title: "Computer Engineering",
          company: "Bilecik Şeyh Edebali University",
          description:
            "I started learning Computer engineering as i have a great passion of learning software & computer engineering and always passionate about learning all new things on this field",
        },

        {
          id: 5,
          startYear: "2020",
          endYear: "NOW",
          title: "Freelancer ",
          company: "Locally",
          description:
            "I'm working on building commercial websites for local companies and have a quite little attempts to works as remotely on FREELANCER and UPWORK",
        },
      ],
    };
  },
  actions,
  mutations,

  getters,
};
