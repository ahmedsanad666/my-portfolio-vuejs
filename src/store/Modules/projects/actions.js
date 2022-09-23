export default {
  async createProject(context, payload) {
    const token = context.rootGetters.token; 

    const newProject = {
     
      title: payload.title,
      img: payload.img,
      link: payload.link,
    };

    const response = await fetch(
      ` https://my-portfolio-364f3-default-rtdb.firebaseio.com/projects.json?auth=${token}`,
      {
        method: "POST",
        body: JSON.stringify(newProject),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "faild to send your message!"
      );

      throw error;
    }

    newProject.id = responseData.id;
    context.commit("addProject", newProject);
  },

  // get all projects

  async getProjects(context) {
    const response = await fetch(
      "https://my-portfolio-364f3-default-rtdb.firebaseio.com/projects.json"
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "faild to get projects");

      throw error;
    }

    const projects = [];

    for (const key in responseData) {
      const project = {
        id:key,
        title: responseData[key].title,
        link: responseData[key].link,
        img: responseData[key].img,
      };

      projects.push(project);
    }



    context.commit("setProjects", projects);
  },
};
