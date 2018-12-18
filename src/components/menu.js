import React from 'react';
import { Link } from "gatsby";
import styled, {css} from "styled-components";

const MenuWrapper = styled.div`
  background: #f4f4f4;
  padding-top: 10px;
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 0;
`;

const StyledLink = styled(Link)`
  font-family: sans-serif;
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  &:hover {
    color: red;
  }
`;

const Menu = () => (
    <MenuWrapper>
      <MenuList>
        <li><StyledLink to="/">Home</StyledLink></li>
        <li><StyledLink to="/about">About the Foundation</StyledLink></li>
        <li><StyledLink to="/who-we-help">Who We've Helped</StyledLink></li>
        <li><StyledLink to="/donate">Donations</StyledLink></li>
      </MenuList>
    </MenuWrapper>
  );

export default Menu;
