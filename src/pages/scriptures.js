import React from "react";
import styled from "styled-components";
import { Page, Grid } from "../styled";
import { Header, Navigation, ScriptureTopCard } from "../components";

const SciptureGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

const Wrapper = styled.div`
  margin: 20%;
`;

const Index = ({ data, location }) => {
  return (
    <Page>
      <Header />
      <Navigation location={location} />
      <Wrapper>
        {data &&
          data.info &&
          data.info.scriptureses.length > 0 && (
            <SciptureGrid>
              {data.info.scriptureses.map(scripture => (
                <ScriptureTopCard {...scripture} />
              ))}
            </SciptureGrid>
          )}
      </Wrapper>
    </Page>
  );
};
export default Index;

export const query = graphql`
  query ScriptureQuery {
    info {
      scriptureses {
        name
        description
        level
      }
    }
  }
`;
