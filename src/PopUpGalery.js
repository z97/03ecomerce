import React from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import Images from "./Images";

const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    background-color: black;
  }
  // use your custom style for ".popup-content"
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
