import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";

const StyledCounter = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 157px;
  height: 56px;
  justify-content: space-around;
  background-color: #F6F8FD;
  align-content: center;
`

const StyledButton = styled.button`
  color: #FF7E1B;
  background-color: #F6F8FD;
  border: #F6F8FD;
  width: 52px;
  &:hover{
    color: #FFAB6A;
  }
`

const StyledSvg = styled.svg`
  fill: #FF7E1B;
  &:hover{
    fill: #FFAB6A;
  }
`

const Counter = () => {
    const dispatch = useDispatch();
    const quantityOfGoods = useSelector(state => state.pageAmount.quantityOfGoods);
    const add = () =>{
        dispatch({type: "ADD", payload:1})
    }

    function remove() {
        dispatch({type: "REMOVE", payload: 1})
    }

    return (<div>
            <StyledCounter>
                <StyledButton onClick={() => remove()}>
                    <StyledSvg width="12" height="4" xmlns="http://www.w3.org/2000/svg"><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" fillRule="nonzero"/></StyledSvg>
                </StyledButton>
                <h5>{quantityOfGoods}</h5>
                <StyledButton onClick={() => add()}>
                    <StyledSvg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" fillRule="nonzero" /></StyledSvg>
                </StyledButton>
            </StyledCounter>
        </div>
    );
};

export default Counter;
