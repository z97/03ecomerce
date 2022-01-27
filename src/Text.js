import React from 'react';
import styled from "styled-components";
import JSON from "./product.json";
import Counter from "./Counter";
import BigOrangeButton from "./BigOrangeButton";
import {useDispatch, useSelector} from "react-redux";
import {AiOutlineShoppingCart} from "react-icons/ai";

const StiledText = styled.div`
  display: flex;
  max-width: ${FlexMobile() ? "80%": "445px"};
  flex-wrap: wrap;
  align-content: space-between;
  max-height: 426px;
`

const StyledCompanyName = styled.p`
  color: #FF7E1B;
  font-family: 'Kumbh Sans', sans-serif;
  size: 13px;
  font-weight: bold;
`

const StyledName = styled.h1`
  font-family: 'Kumbh Sans', sans-serif;
  size: 44px;
  font-weight: bold;
`

const StyledDescription = styled.p`
  font-family: 'Kumbh Sans', sans-serif;
  size: 16px;
  font-weight: normal;
`

const StyledPrice = styled.h2`
  font-family: 'Kumbh Sans', sans-serif;
  size: 28px;
  font-weight: bold;
`

const StyledBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${FlexMobile() ? "space-around" : "space-between"};
  width: 445px;
`

export const StyledIcon = styled.svg`
  vertical-align: 0;
  fill: white;
`

function FlexMobile(){
    // eslint-disable-next-line no-restricted-globals
    let width = screen.width;
    return width <= 600;
}

const Text = (props) => {
    const dispatch = useDispatch();
    const quantityOfGoods = useSelector(state => state.pageAmount.quantityOfGoods);
    const addToBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: quantityOfGoods})
    }
    return (
        <StiledText>
            <StyledCompanyName>{JSON.companyName}</StyledCompanyName>
            <StyledName>{JSON.productName}</StyledName>
            <StyledDescription>{JSON.productDescription}</StyledDescription>
            <StyledPrice>${JSON.productPrice}</StyledPrice>
            <StyledBottom>
                <Counter/>
                <BigOrangeButton
                    text="  Add to cart"
                    callBack={addToBasket}
                    icon={<AiOutlineShoppingCart/>}
                />
            </StyledBottom>
        </StiledText>
    );
};

export default Text;
