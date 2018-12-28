import React from 'react'

import Layout from '../components/layout'
import styled, {css} from "styled-components";

const HelpWrapper = styled.div`
padding-top: 2%;
padding-bottom: 5%;
text-align:center;
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
`
const TextImage = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`

const HelpedTile = styled.div`
  width: 30%;
  display: inline-block;
  margin: auto;
  padding: .5%;
  

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
      <Overlay>
        <TextImage>Test</TextImage>
      </Overlay>
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