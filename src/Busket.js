import React from 'react';
import styled from "styled-components"
import ModalBasket from "./ModalBasket";
import Avatar from "./Avatar";



const StyledDiv = styled.div`
  display: flex;
  width: 150px;;
  justify-content: space-between;
  align-items: center;
`


const Busket = () => {
    return (
        <StyledDiv>
            <ModalBasket/>
            <Avatar/>
        </StyledDiv>
    );
};

export default Busket;
