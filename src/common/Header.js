import React from 'react';
import { Link, IndexLink } from 'react-router';
import Styled from "styled-components";

const StyledNav = Styled.nav`
  background-color: #F8F8F8;
  align-items: center;
  justify-content: center;
  text-align: right;
  font: 200 15px/1.5 Helvetica, Verdana, sans-serif;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  margin: 0;
  padding-bottom: 15px;
  padding-top: 15px;

  padding-right: 17px;
  background: #5C688B;
  position: relative;
`;

const StyledLink = Styled(Link)`
  padding: 8px 10px;
  text-decoration: none;
  color:white;
  &:hover{
    background-color: #94A1C6;
    color: white;
  }
`;

const StyledIndexLink = Styled(IndexLink)`
  padding: 8px 10px;
  text-decoration: none;
  color:white;
  &:hover{
    background-color: #94A1C6;
    color: white;
  }
`;
const LinkSeperator = Styled.div`
  margin-right: 10px;
  margin-left: 10px;

`;

const Header = () => {
  return (
    <StyledNav>
      <LinkSeperator><StyledIndexLink to="/#"
        activeStyle={{ backgroundColor: '#94A1C6' }}  >Home</StyledIndexLink></LinkSeperator>

      <LinkSeperator><StyledLink to="#/AboutContainer" activeStyle={{ backgroundColor: '#94A1C6' }}  >About</StyledLink></LinkSeperator>

      <LinkSeperator><StyledLink to="#/ContactContainer" activeStyle={{ backgroundColor: '#94A1C6' }} >Contact</StyledLink></LinkSeperator>

      <LinkSeperator><StyledLink to="#/HelpContainer" activeStyle={{ backgroundColor: '#94A1C6' }} >Help</StyledLink></LinkSeperator>
    </StyledNav>
  );
};

export default Header;
