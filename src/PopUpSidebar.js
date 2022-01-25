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
    ...;
  }
`;

const PopUpMenu = () => (
    <StyledPopupSidebar
        trigger={<button>ggg</button>}
        modal
        closeOnDocumentClick
    >
        <span><Images/> </span>
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
