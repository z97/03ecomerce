import React from 'react';
import styled from "styled-components";
import JSON from "./product.json"
import {useDispatch, useSelector} from "react-redux";
import smallImg from "./images/image-product-1-thumbnail.jpg"
import {AiOutlineDelete} from 'react-icons/ai';

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

const BasketItem = () => {
    const itemsInBasket = useSelector(state => state.basketAmount.itemsInBasket);
    const quantityOfGoods = useSelector(state => state.pageAmount.quantityOfGoods)
    const dispatch = useDispatch();
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
                    <AiOutlineDelete/>
                </div>
        </StyledBasketItem>
    );
};

export default BasketItem;
