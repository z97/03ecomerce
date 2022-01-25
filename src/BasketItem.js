import React from 'react';
import styled from "styled-components";
import JSON from "./product.json"
import {useDispatch, useSelector} from "react-redux";
import smallImg from "./images/image-product-1-thumbnail.jpg"
import icondelete from "./images/icon-delete.svg"
import { AiOutlineDelete } from 'react-icons/ai';
import { IconContext } from "react-icons";

const StyledBasketItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const StyledText = styled.div`
  width: 231px;
  padding-top: 24px;
`

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin: 24px;
`

const StyledSvg = styled.svg`
  fill: #69707D;
  cursor: pointer;

  &:hover {
    fill: #1D2026;
  }
`

const BasketItem = () => {
    const itemsInBasket = useSelector(state => state.basketAmount.itemsInBasket);
    const quantityOfGoods = useSelector(state => state.pageAmount.quantityOfGoods)
    const dispatch = useDispatch();
    const iconDelete =
        <StyledSvg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                fillRule="nonzero"/>
        </StyledSvg>
    function handleRemoveItemFromCart() {
        dispatch({type: "REMOVE_FROM_BASKET"})
        dispatch({type: "REMOVE", payload: quantityOfGoods})
    }

    return (
        <StyledBasketItem>
                <StyledImage src={smallImg} alt="smallImage"/>
            <StyledText>
                <p>{JSON.productName} ${JSON.productPrice}x{itemsInBasket} ${itemsInBasket * JSON.productPrice}</p>
            </StyledText>
                <div onClick={handleRemoveItemFromCart}>
                    <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
                    <AiOutlineDelete/>
                    </IconContext.Provider>
                </div>
        </StyledBasketItem>
    );
};

export default BasketItem;
