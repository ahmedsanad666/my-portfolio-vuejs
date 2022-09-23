// const { defineConfig } = require("@vue/cli-service");

// module.exports = defineConfig({
//   transpileDependencies: true,

//   pluginOptions: {
//     'style-resources-loader': {
//       preProcessor: 'sass',
//       patterns: []
//     }
//   }
// });

const path = require("path");
module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/assets/styles/style.scss")],
    },
  },
};
