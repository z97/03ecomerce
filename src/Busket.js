import React from 'react';
import styled from "styled-components"
import ModalBasket from "./ModalBasket";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Busket = () => {
    return (
        <StyledDiv>
            <ModalBasket/>
        </StyledDiv>
    );
};

export default Busket;
