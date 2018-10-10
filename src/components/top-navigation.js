import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const NavSection = styled.div`
  width: 33%;
  height: 30px;
`;

const NavItem = styled(Link)`
  margin: auto;
  padding: 5px;
  ${props => props.highlight && `border: 1px solid red;`};
`;

export default ({ location }) => {
  return (
    <NavWrapper>
      <NavSection>
        <NavItem highlight={location.pathname === "/gods"} to="/gods">
          Gods
        </NavItem>
      </NavSection>
      <NavSection>
        <NavItem
          highlight={location.pathname === "/scriptures"}
          to="/scriptures"
        >
          Scriptures
        </NavItem>
      </NavSection>
      <NavSection>
        <NavItem highlight={location.pathname === "/stories"} to="/stories">
          Stories
        </NavItem>
      </NavSection>
    </NavWrapper>
  );
};
