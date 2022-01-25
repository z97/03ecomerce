import React from 'react';
import Popup from 'reactjs-popup';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import BigOrangeButton from "./BigOrangeButton";
import BasketItem from "./BasketItem";

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
    const iconBasket = <StyledSvg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fillRule="nonzero"/>
    </StyledSvg>
    console.log(itemsInBasket)
    return (
        <Popup trigger={iconBasket} position="bottom center">
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
