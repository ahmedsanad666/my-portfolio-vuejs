export default {
  async createProject(_, payload) {

   
    const response = await fetch(
      `https://localhost:7281/api/projects`,
      {
        method: "POST",
        body: payload
      }
    );
    console.log(payload);

    if (!response.ok) {
      const error = new Error(
       "faild to send your message!"
      );

      throw error;
    }

  
  },

  // get all projects

  async getProjects(context) {
    const response = await fetch( 
      "https://localhost:7281/api/projects"
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "faild to get projects");

      throw error;
    }

    const projects = [];


    responseData.forEach(element => {
      projects.push(element)
      
    });
    context.commit("setProjects", projects);
  },
};
