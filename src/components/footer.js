import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components";

const FooterWrapper = styled.div`
  color: grey;
  display: inline-block;
  margin-top: 2%;
`;

const Footer = () => (
  <FooterWrapper>
    Copyright 2019 | ABC Cares Foundation | Social Media Goes Here
  </FooterWrapper>
);

export default Footer;