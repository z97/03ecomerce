import React from 'react';
import Popup from 'reactjs-popup';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import BigOrangeButton from "./BigOrangeButton";
import BasketItem from "./BasketItem";
import {AiOutlineShoppingCart} from "react-icons/ai";

const StyledModal = styled.div`
  background-color: white;
  width: 360px;
  min-height: 256px;
  box-shadow: 5px 10px 8px 3px #e2e2e2
`

const StyledHeader = styled.div`
  padding: 27px;
  border-bottom: 1px solid black;
`

const StyledSvg = styled.svg`
  fill: #69707D;
  cursor: pointer;

  &:hover {
    fill: #1D2026;
  }
`

const StyledBody = styled.div`

`

const StyledYourCartIsEmpty = styled.p`
  text-align: center;
  size: 16px;
  padding-top: 87px;
`
const StyledCheckoutButton = styled.div`
  width: 360px;
  margin-left: 24px;
`

const ModalBasket = () => {
    const itemsInBasket = useSelector(state => state.basketAmount.itemsInBasket)

    return (
        <Popup trigger={<div><AiOutlineShoppingCart/></div>} position="bottom center">
            <StyledModal>
                <StyledHeader>
                    Cart
                </StyledHeader>
                <StyledBody>
                    <div>
                        {
                            itemsInBasket === 0
                                ? <StyledYourCartIsEmpty>Your cart is empty</StyledYourCartIsEmpty>
                                :
                                <div>
                                    <BasketItem/>
                                    <StyledCheckoutButton>
                                        <BigOrangeButton text="Checkout" width="312px" isIcon={false}/>
                                    </StyledCheckoutButton>
                                </div>
                        }
                    </div>
                </StyledBody>
            </StyledModal>
        </Popup>
    );
};

export default ModalBasket;
