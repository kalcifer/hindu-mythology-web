import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.div`
  width: 250px;
  height: 150px;
`;

export default ({ level, name, id }) => {
  return (
    level === "Top" && (
      <Link to={`/scriptures/${id}`}>
        <Wrapper>{name}</Wrapper>
      </Link>
    )
  );
};
