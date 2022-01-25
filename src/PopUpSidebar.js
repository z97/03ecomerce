import React from 'react';
import Popup from 'reactjs-popup';
import {FaBars} from 'react-icons/fa';
import styled from "styled-components";
import Menu from "./Menu";
import Images from "./Images";

const StyledDiv = styled.div`
  div.barsButton {
    padding: 20px;
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
    margin: 0;
  }
`;

const StyledModalMenu = styled.div`

  background-color: white;
  width: 250px;
  min-height: 80vh;

  justify-self: flex-start;

`


const PopUpMenu = () => (
    <StyledPopupSidebar
        trigger={<div><FaBars/></div>}
        modal
        closeOnDocumentClick
    >
        <StyledModalMenu>
            <h1>hello</h1>
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
