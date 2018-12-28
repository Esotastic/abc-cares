import React from 'react'
import { Link } from 'gatsby'
import styled, {css} from "styled-components";
import DonateButton from '../components/donate-button';
import { FaHandHoldingHeart } from 'react-icons/fa';

const StyledHeader = styled.div`
  background: #003E7B;
  h1 {
    img {
      height: 100px;
    }
  }
`;

const HeaderContainer = styled.div`
  font-family: sans-serif;
  margin: 0 auto;
  maxWidth: 960px;
  padding: 1rem 1.0875rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h1 {
    margin: 0;
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  color: white;
`;

const StyledHand = styled(FaHandHoldingHeart)`
  margin-left: 0.5em;
`





const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderContainer>
      <h1>
        <StyledLink to="/">
          ABC Cares Foundation
        </StyledLink>
      </h1>
      <DonateButton>Donate Now!<StyledHand/></DonateButton>
    </HeaderContainer>
  </StyledHeader>
)



export default Header
