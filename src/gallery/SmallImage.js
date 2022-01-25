import React from 'react';
import styled from 'styled-components';

const StyledSmallImage = styled.img`
  width: 88px;
  border-radius: 10px;
  &:hover{
    -webkit-filter: brightness(50%);
  }
`

const SmallImage = ({image}) => {
    console.log(image)
    return (
        <StyledSmallImage src={image} alt="Small Image"/>
    );
};

export default SmallImage;
