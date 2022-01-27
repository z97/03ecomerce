import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from "styled-components";
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai";

const StyledCounter = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${CounterWidth};
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

  &:hover {
    color: #FFAB6A;
  }
`

function CounterWidth() {
    // eslint-disable-next-line no-restricted-globals
    let width = screen.width;
    if (width > 600) {
        return "157px";
    } else {
        return "357px";
    }
}

const Counter = () => {
    const dispatch = useDispatch();
    const quantityOfGoods = useSelector(state => state.pageAmount.quantityOfGoods);
    const add = () => {
        dispatch({type: "ADD", payload: 1})
    }

    function remove() {
        dispatch({type: "REMOVE", payload: 1})
    }

    return (<div>
            <StyledCounter>
                <StyledButton onClick={() => remove()}>
                    <AiOutlineMinus/>
                </StyledButton>
                <h5>{quantityOfGoods}</h5>
                <StyledButton onClick={() => add()}>
                    <AiOutlinePlus/>
                </StyledButton>
            </StyledCounter>
        </div>
    );
};

export default Counter;
