export default {
  updateMyInfo(state, payload) {
    const myInfos = state.myInfos;

    myInfos.firstName = payload.firstName;
    myInfos.lastName = payload.lastName;
    myInfos.age = payload.age;
    myInfos.freelance = payload.freelance;
    myInfos.phone = payload.phone;
    myInfos.skype = payload.skype;
    myInfos.nationality = payload.nationality;
    myInfos.address = payload.address;
    myInfos.email = payload.email;
    myInfos.languages = payload.languages;
    myInfos.skills = payload.skills;
  },
  getPersonalData(state, payload) {
    state.myInfos = payload;
  },
};
