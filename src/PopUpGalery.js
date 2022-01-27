import React from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import Images from "./Images";

const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: black;
  }
  &-content {
    ...;
  }
`;

const PopUpGalery = () => (
    <StyledPopup
        trigger={<button className="button"> Open Modal </button>}
        modal
        closeOnDocumentClick
    >

        <span><Images/> </span>
    </StyledPopup>
);

export default PopUpGalery;
