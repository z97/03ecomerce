import React from 'react';
import styled from "styled-components";
import logo from "./gallery/images/logo.svg"

const StyledLogo = styled.img`
  display: flex;
`
const Logo = () => {
    return (
        <StyledLogo src={logo} alt="logo"/>
    );
};

export default Logo;
