
import React from 'react';
import styled, {css} from "styled-components";
import {HandHoldingHeart} from "styled-icons/fa-solid/HandHoldingHeart";

const StyledButton = styled.button`
    border-radius: 4px;
    background-color: #f4511e;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 1.5em;
    padding: .5em;
    width: auto;
    transition: all 0.5s;
    cursor: pointer;
    transition-duration: 0.5s;
 
    &:hover {
      background-color: white;
      color: black;
    }
`;

const HandHeart = styled(HandHoldingHeart)`
    color: black;
`

const DonateButton = () => {
  return (
    <div>
      <StyledButton>Donate Now!</StyledButton>
    </div>
  )
};

export default DonateButton; 
