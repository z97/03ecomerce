import React from 'react';
import photoBig from "./images/image-product-1.jpg";
import smallImage1 from "./images/image-product-1-thumbnail.jpg";
import smallImage2 from "./images/image-product-2-thumbnail.jpg";
import smallImage3 from "./images/image-product-3-thumbnail.jpg";
import smallImage4 from "./images/image-product-4-thumbnail.jpg";

import styled from "styled-components";

const StyledImages = styled.div`
  width: 445px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  justify-content: space-between;
`

const StyledImage = styled.img`
  width: 88px;
  border-radius: 10px;
  &:first-child {
    width: 445px;
    padding-bottom: 32px;
    border-radius: 10px;
  }
  &:hover{
    -webkit-filter: brightness(50%);
  }
`
const Images = () => {
    return (
            <StyledImages>
                <StyledImage src={photoBig} alt="smallImage1"/>
                <StyledImage src={smallImage1} alt="smallImage1"/>
                <StyledImage src={smallImage2} alt="smallImage2"/>
                <StyledImage src={smallImage3} alt="smallImage3"/>
                <StyledImage src={smallImage4} alt="smallImage4"/>
            </StyledImages>

    );
};

export default Images;
