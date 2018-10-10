import React from "react";
import styled from "styled-components";
import { Page } from "../styled";
import { graphql } from "gatsby";
import { Grid } from "../styled";
import { Header, Navigation, StoryCard } from "../components";

const StoryGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const Index = ({ data, location }) => {
  return (
    <Page>
      <Header />
      <Navigation location={location} />
      {data &&
        data.info &&
        data.info.storieses.length > 0 && (
          <StoryGrid>
            {data.info.storieses.map(story => (
              <StoryCard {...story} />
            ))}
          </StoryGrid>
        )}
    </Page>
  );
};
export default Index;

export const query = graphql`
  query StoryQuery {
    info {
      storieses {
        id
        title
      }
    }
  }
`;
