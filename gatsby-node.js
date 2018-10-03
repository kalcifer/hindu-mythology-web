const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const timelineTemplate = path.resolve(`src/templates/timeline.js`);
    resolve(
      graphql(`
        {
          info {
            godses {
              name {
                name
              }
              stories {
                title
              }
            }
          }
        }
      `).then(result => {
        result.data.info.godses.forEach(god => {
          const path = `/${god.name.name.toLowerCase()}_timeline`;
          createPage({
            path,
            component: timelineTemplate,
            context: {
              path,
              god
            }
          });
        });
      })
    );
  });
};
