export default {
  async submitRequest(context, payload) {
    const newRequest = {
      name: payload.name.val,
      email: payload.email.val,
      subject: payload.subject.val,
      message: payload.message.val,
    };

    const response = await fetch(
      "https://my-portfolio-364f3-default-rtdb.firebaseio.com/requests.json",
      {
        method: "POST",
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "failed to send messages try again!"
      );

      throw error;
    }

    newRequest.id = responseData.name;
    context.commit("addRequest", newRequest);
  },

  //   get all request

  async getAllReq(context) {
    const token = context.rootGetters.token;

    const response = await fetch(
      `https://my-portfolio-364f3-default-rtdb.firebaseio.com/requests.json?auth=${token}`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to get requests");
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        name: responseData[key].name,
        email: responseData[key].email,
        subject: responseData[key].subject,
        message: responseData[key].message,
      };

      requests.push(request);

      console.log(requests);
      context.commit("getAllRequests", requests);
    }
  },
};
