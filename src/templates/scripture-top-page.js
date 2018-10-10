import React from "react";

export default ({ pageContext: { scripture } }) => {
  return <div>{scripture.name}</div>;
};
