import React from 'react'

import Layout from '../components/layout'
import styled, {css} from "styled-components";
import DonateButton from '../components/donate-button';

const DonateWrapper = styled.div`
  text-align: center;
`

const DonatePage = () => (
  <Layout>
    <DonateWrapper>
      <h1>Donate Now!</h1>
      <p>
        Here’s where you can help. 
        <br></br>
        Please spread the word about the ABC Cares Foundation and think of the Foundation 
        when you hear of a story of an industry professional and/or their family in need. 
        And would you please consider including the ABC Cares Foundation, a 100% tax deductible, 
        IRS 501c(3) organization, in your corporate giving program and fundraising efforts (golf tournaments, etc...).
      </p>
      <DonateButton>Donate Now!</DonateButton>
    </DonateWrapper>
  </Layout>
);

export default DonatePage;