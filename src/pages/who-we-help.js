import React from 'react'

import Layout from '../components/layout'
import styled, {css} from "styled-components";

const HelpWrapper = styled.div`
padding-top: 2%;
padding-bottom: 5%;
`
const HelpedTile = styled.div`
  width: 33%;
  display: inline-block;
  border: black solid 2px;
  margin: .5%;
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