import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 250px;
  height: 150px;
`;

export default ({ level, name }) => {
  return level === "Top" && <Wrapper>{name}</Wrapper>;
};
