import React from 'react';
import styled from "styled-components";

export const OrangeButton = styled.button`
  width: ${props => props.width ? props.width : "250px"};
  height: 56px;
  border-radius: 10px;

  background-color: #FF7E1B;
  color: white;
  border: none;

  &:hover {
    background-color: #FFAB6A;
    transition: background-color 0.2s ease-in-out;
  }
`

const BigOrangeButton = ({text, icon, callBack, width}) => {
    return (
        <OrangeButton width={width} onClick={callBack}>
            {icon}{text}
        </OrangeButton>
    );
};

export default BigOrangeButton;
