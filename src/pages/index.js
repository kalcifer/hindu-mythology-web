import React from "react";
import { graphql } from "gatsby";

const Index = ({ data }) => {
  if (data && data.info && data.info.godses) {
    return (
      <ul>
        {data.info.godses.map(god => {
          return <li>{god.name.name}</li>;
        })}
      </ul>
    );
  }
  return null;
};

export default Index;

export const query = graphql`
  query GodQuery {
    info {
      godses {
        gender
        name {
          name
        }
      }
    }
  }
`;
