import React from 'react';
import BasketItem from "./BasketItem";
import BigOrangeButton from "./BigOrangeButton";
import styled from "styled-components";
import {useSelector} from "react-redux";

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

const ModalBasketBody = () => {
    const itemsInBasket = useSelector(state => state.basketAmount.itemsInBasket)

    return (
        <div>
            <StyledBody>
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
            </StyledBody>
        </div>
    );
};

export default ModalBasketBody;
