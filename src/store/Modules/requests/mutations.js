export default {
  addRequest(state, payload) {
    state.requests.push({
      id:payload.id,
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
    });
  },
  getAllRequests(state, payload) {
    state.requests = payload;
  },
};
