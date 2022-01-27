import React from 'react';
import Menu from "./Menu";
import Busket from "./Busket";
import styled from "styled-components";
import Avatar from "./Avatar";
import Logo from "./Logo";
import PopUpSidebar from "./PopUpSidebar";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #333;
  @media screen and (min-width: 600px) {
    div.FaBarsClass {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    div.MenuClass {
      display: none;
    }

    div.LogoClass {
      display: none;
    }
  }

  div.MenuClass {
    width: 60%;
  }

`
const Header = () => {
    return (
        <StyledHeader>
            <div className="FaBarsClass">
                <PopUpSidebar/>
            </div>
            <div className="LogoClass">
                <Logo/>
            </div>

            <div className="MenuClass">
                <Menu flex-direction="row"/>
            </div>
            <Busket/>
            <Avatar/>
        </StyledHeader>
    );
};

export default Header;
