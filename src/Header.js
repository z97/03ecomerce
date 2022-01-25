import React from 'react';
import logo from "./images/logo.svg";
import Menu from "./Menu";
import {Button} from "react-bootstrap";
import Busket from "./Busket";
import styled from "styled-components";
import Navbar from "./Navbar";
import PopUpSidebar from "./PopUpSidebar";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #333;
`
const Header = () => {
    return (
        <StyledHeader>
            <PopUpSidebar/>
            <Busket/>
        </StyledHeader>

    );
};

export default Header;
