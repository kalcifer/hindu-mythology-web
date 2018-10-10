import React from "react";

export default ({ pageContext: { story } }) => {
  return <div>{story.title}</div>;
};
