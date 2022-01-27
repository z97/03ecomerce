import React from 'react';
import Popup from 'reactjs-popup';
import styled from "styled-components";
import {AiOutlineShoppingCart} from "react-icons/ai";
import ModalBasketBody from "./ModalBasketBody";

const StyledModal = styled.div`
  background-color: white;
  width: 360px;
  min-height: 256px;
  box-shadow: 3px 3px 3px 3px #dbdbdb;
  border-radius: 10px;
`

const StyledHeader = styled.div`
  padding: 27px;
  border-bottom: 1px solid black;
`

const ModalBasket = () => {
    return (
        <div>
            <Popup
                trigger={<div><AiOutlineShoppingCart/></div>}
                position="bottom center">
                <StyledModal>
                    <StyledHeader>
                        Cart
                    </StyledHeader>
                    <ModalBasketBody/>
                </StyledModal>
            </Popup>
        </div>
    );
};

export default ModalBasket;
