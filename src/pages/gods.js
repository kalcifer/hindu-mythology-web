import React from "react";
import { graphql } from "gatsby";
import { Grid, Page } from "../styled";
import { Header, GodCard, Navigation } from "../components";

const Index = ({ data, location }) => {
  return (
    <Page>
      <Header />
      <Navigation location={location} />
      {data &&
        data.info &&
        data.info.godses.length > 0 && (
          <Grid>
            {data.info.godses.map(god => {
              return <GodCard {...god} />;
            })}
          </Grid>
        )}
    </Page>
  );
};

export default Index;

export const query = graphql`
  query GodQuery {
    info {
      godses {
        gender
        name
        photo {
          url
        }
        stories {
          title
        }
        devotion
        popularity
        vehicle
      }
    }
  }
`;
