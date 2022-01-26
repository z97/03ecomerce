import React from 'react';
import styled from "styled-components";
import logo from "../src/images/logo.svg"

const StyledLogo = styled.img`
  display: flex;
  width: 138px;
`
const Logo = () => {
    return (
        <StyledLogo src={logo} alt="logo"/>
    );
};

export default Logo;
