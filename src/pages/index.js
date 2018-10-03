import React from "react";
import { graphql, Link } from "gatsby";

const Index = ({ data }) => {
  if (data && data.info && data.info.godses) {
    return (
      <ul>
        {data.info.godses.map(god => {
          return (
            <li>
              <Link to={`/${god.name.name.toLowerCase()}_timeline`}>
                {god.name.name}
              </Link>
            </li>
          );
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
        photo {
          fileName
          url
        }
      }
    }
  }
`;
