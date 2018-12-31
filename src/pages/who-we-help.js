import React from 'react'

import Layout from '../components/layout'
import styled, {css} from "styled-components";

const HelpWrapper = styled.div`
  padding-top: 2%;
  padding-bottom: 5%;
  text-align:center;
`

const HelpedTile = styled.div`
  width: 30%;
  display: inline-block;
  margin: auto;
  padding: .5%;
  transition: all 0.5s;
  transition-duration: 0.5s;
  &:hover {
      background-color: blue;
      opacity: 0;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`

const HelpedPage = () => (
  <Layout>
    <HelpWrapper>
    <h1>Who We've Helped</h1>
    <HelpedTile>
     <img src="https://i.imgur.com/xJWrkOC.jpg"></img>
    </HelpedTile>
    <HelpedTile>
      <img src="https://i.imgur.com/xJWrkOC.jpg"></img>
    </HelpedTile>
    <HelpedTile>
      <img src="https://i.imgur.com/xJWrkOC.jpg"></img>
    </HelpedTile>
    </HelpWrapper>
  </Layout>
);

export default HelpedPage;