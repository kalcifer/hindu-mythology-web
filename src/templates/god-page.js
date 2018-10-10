import React from "react";

export default ({ pageContext: { god } }) => {
  return <div>{god.name}</div>;
};
