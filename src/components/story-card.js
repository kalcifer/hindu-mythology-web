import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.div`
  width: 250px;
  height: 150px;
`;

export default ({ title, id }) => {
  return (
    <Link to={`/stories/${id}`}>
      <Wrapper>{title}</Wrapper>
    </Link>
  );
};
