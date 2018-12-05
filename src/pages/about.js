import React from 'react'

import Layout from '../components/layout'
import DonatePage from "./donate";
import HelpedPage from "./who-we-help";
import styled, {css} from "styled-components";
import { FaToolbox, FaBriefcaseMedical, FaGraduationCap } from 'react-icons/fa';

const AboutWrapper = styled.div`
  padding-top: 2%;
  padding-bottom: 10%;
  @media (max-width: 700px) {
    padding-bottom: 5%;
  }
  
`;

const StyledToolbox = styled(FaToolbox)`
  color: green;
`;

const AboutGeneral = styled.div`
  width: 33%;
  display: inline-block;
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
        <FaBriefcaseMedical/>
        It provides rapid financial assistance to construction workers affected by tragedies including injuries, 
        death, illness and other unfortunate circumstances.
      </AboutGeneral>
      <AboutGeneral>
        <FaGraduationCap/>
        It also provides scholarships and educational stipends for exceptional individuals. 
      </AboutGeneral>
    </AboutWrapper>
  </Layout>
);

export default AboutPage;