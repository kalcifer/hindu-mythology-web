import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 250px;
  height: 150px;
`;

export default ({ title }) => {
  return <Wrapper>{title}</Wrapper>;
};
