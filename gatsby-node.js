const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const GodPageTemplate = path.resolve(`src/templates/god-page.js`);
    const StoryPageTemplate = path.resolve(`src/templates/story-page.js`);
    const ScripturePageTemplate = path.resolve(
      `src/templates/scripture-top-page.js`
    );
    resolve(
      graphql(`
        {
          info {
            godses {
              id
              name
            }
            scriptureses {
              id
              name
            }
            storieses {
              id
              title
            }
          }
        }
      `).then(result => {
        result.data.info.godses.forEach(god => {
          console.log(god);
          const path = `/gods/${god.name}`;
          createPage({
            path,
            component: GodPageTemplate,
            context: {
              path,
              god
            }
          });
        });

        result.data.info.scriptureses.forEach(scripture => {
          const path = `/scriptures/${scripture.id}`;
          createPage({
            path,
            component: ScripturePageTemplate,
            context: {
              path,
              scripture
            }
          });
        });

        result.data.info.storieses.forEach(story => {
          const path = `/stories/${story.id}`;
          createPage({
            path,
            component: StoryPageTemplate,
            context: {
              path,
              story
            }
          });
        });
      })
    );
  });
};
