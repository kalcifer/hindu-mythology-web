import React from "react";

export default ({ pageContext: { story } }) => {
  return (
    <div>
      <h3>{story.title}</h3>
      <div>Story body</div>
    </div>
  );
};
