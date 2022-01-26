import React from 'react';
import Popup from 'reactjs-popup';
import {FaBars} from 'react-icons/fa';
import styled from "styled-components";
import Menu from "./Menu";
import Images from "./Images";

const StyledDiv = styled.div`
  div.barsButton {
  }
  
  @media screen and (min-width: 600px) {
    div.barsButton {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    div.menuClass {
      display: none
    }
  }
`

const StyledPopupSidebar = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    background-color: black;
  }
  // use your custom style for ".popup-content"
  &-content {

  }
`;

const StyledModalMenu = styled.div`
  padding: 29px;
  background-color: white;
  width: 250px;
  min-height: 80vh;
`


const PopUpMenu = () => (
    <StyledPopupSidebar
        trigger={<div><FaBars/></div>}
        modal
        closeOnDocumentClick
    >
        <StyledModalMenu>
            <Menu direction="column" />
        </StyledModalMenu>
    </StyledPopupSidebar>
);

const PopUpSidebar = () => {
    return (
        <StyledDiv>
            <div className="barsButton">
                <PopUpMenu/>
            </div>
            <div className="menuClass">
                <Menu/>
            </div>
        </StyledDiv>
    );
};

export default PopUpSidebar;
