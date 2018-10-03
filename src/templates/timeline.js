import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: auto;
  border: 2px solid #f6546a;
  height: auto;
  margin: 20px 0;
  padding: 20px;
`;

// TODO must be responsive
const MiddlePath = styled.div`
  padding: 0 20%;
`;

export default props => {
  const { god } = props.pageContext;
  const { name, stories } = god;
  return (
    <div>
      <h1>{name.name}</h1>
      <MiddlePath>
        {stories.map(story => {
          return <StyledCard>{story.title}</StyledCard>;
        })}
      </MiddlePath>
    </div>
  );
};
