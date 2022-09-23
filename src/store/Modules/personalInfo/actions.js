export default {
  async updateMyInfo(context, payload) {

    const token = context.rootGetters.token;

    const newData = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      age: payload.age,
      freelance: payload.freelance,
      phone: payload.phone, 
      skype: payload.skype,
      nationality: payload.nationality,
      address: payload.address,
      email: payload.email,
      languages: payload.languages,
      skills: payload.skills,
    };

    const response = await fetch(
      `https://my-portfolio-364f3-default-rtdb.firebaseio.com/info.json?auth=${token}`,
      {
        method: "PUT",
        body: JSON.stringify(newData),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to send request."
      );
      throw error;
    }

    context.commit("updateMyInfo", newData);
  },

  //   fetch personal data from dataa base

  async getPersonalData(context) {
    const response = await fetch(
      "https://my-portfolio-364f3-default-rtdb.firebaseio.com/info.json"
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error( responseData.message || "faild to get informaton"
      );

      throw error;
    }

    console.log(responseData);

    context.commit('getPersonalData',responseData)
  },
};
