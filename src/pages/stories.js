import React from "react";
import { Page } from "../styled";
import { Header, Navigation } from "../components";

const Index = ({ data, location }) => {
  return (
    <Page>
      <Header />
      <Navigation location={location} />
    </Page>
  );
};
export default Index;
