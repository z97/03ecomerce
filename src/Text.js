import React from 'react';
import styled from "styled-components";
import JSON from "./product.json";
import Counter from "./Counter";
import BigOrangeButton from "./BigOrangeButton";
import {useDispatch, useSelector} from "react-redux";
import PopUpGalery from "./PopUpGalery";

const StiledText = styled.div`
  display: flex;
  max-width: 445px;
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
  justify-content: space-between;
  width: 445px;
`

export const StyledIcon = styled.svg`
  vertical-align: 0;
  fill: white;
`

const Text = (props) => {
    const dispatch = useDispatch();
    const quantityOfGoods = useSelector(state => state.pageAmount.quantityOfGoods);
    const addToBasket = () => {
        console.log("hkkhn")
        dispatch({type: "ADD_TO_BASKET", payload: quantityOfGoods})
    }
    const icon =
        <StyledIcon width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fillRule="nonzero"/>
        </StyledIcon>
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
                    icon={icon}
                />
            </StyledBottom>
            <PopUpGalery/>
        </StiledText>

    );
};

export default Text;
