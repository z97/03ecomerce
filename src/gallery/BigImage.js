import React from 'react';
import styled from 'styled-components';

const StyledBigImage = styled.img`
  width: 445px;
  padding-bottom: 32px;
  border-radius: 10px;
  &:hover{
    -webkit-filter: brightness(50%);
  }
`
const BigImage = ({image}) => {
    return (
        <StyledBigImage src={image} alt="BigImage"/>
    );
};

export default BigImage;
