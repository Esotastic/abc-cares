import React from 'react'

import Layout from '../components/layout'
import DonatePage from "./donate";
import HelpedPage from "./who-we-help";
import styled, {css} from "styled-components";
import { FaToolbox, FaBriefcaseMedical, FaGraduationCap } from 'react-icons/fa';

const AboutWrapper = styled.div`
  padding-top: .5%;
  padding-bottom: 5%;
  margin: auto;
  padding: .5em;
  text-align:center;
  @media (max-width: 700px) {
    padding-bottom: 5%;
  }
  
`;

const StyledToolbox = styled(FaToolbox)`
  color: green;
  display: block;
  margin: auto;
  height: 5em;
  width: 50%;
`;
const StyledBriefcase = styled(FaBriefcaseMedical)`
  color: green;
  display: block;
  height: 5em;
  width: 50%;
  margin: auto;
`;
const StyledGradcap = styled(FaGraduationCap)`
  color: green;
  display: block;
  height: 5em;
  width: 50%;
  margin: auto;
`;

const AboutGeneral = styled.div`
  width: 33%;
  display: inline-block;
  height: auto;
  padding: 1em;
  text-align: center;
  @media (max-width: 700px) {
    width: 100%;
  }
`



const AboutPage = () => (
  <Layout>
    <AboutWrapper>
      <h1>About ABC Cares</h1>
      <AboutGeneral>
        <StyledToolbox/>
        ABC Cares is an IRS 501c3 created to give back to the members of the construction industry when they need
        it most. 
      </AboutGeneral>
      <AboutGeneral>
        <StyledBriefcase/>
        It provides rapid financial assistance to construction workers affected by tragedies including injuries, 
        death, illness and other unfortunate circumstances.
      </AboutGeneral>
      <AboutGeneral>
        <StyledGradcap/>
        It also provides scholarships and educational stipends for exceptional individuals. 
      </AboutGeneral>
    </AboutWrapper>
  </Layout>
);

export default AboutPage;