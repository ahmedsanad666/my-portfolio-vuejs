import { createStore } from "vuex";

import experiecesModule from "./Modules/experieces/index";
import personalInfoModule from "./Modules/personalInfo/index";
import projectsModel from "./Modules/projects/index";
import requestsModule from "./Modules/requests/index";
import authModule from './Modules/Auth/index';
const store = createStore({
  modules: {
    experieces: experiecesModule,
    infos: personalInfoModule,
    projects: projectsModel,
    requests: requestsModule,
    auth:authModule
  },
  // state: {},
  // getters: {},
  // mutations: {},
  // actions: {},
  // modules: {},
});

export default store;
