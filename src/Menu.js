import React, {useState} from 'react';
import styled from "styled-components";
import Popup from "reactjs-popup";

const StyledMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  justify-content: space-around;
  flex-direction: ${props => props.direction ? props.direction : "row"};
`

const menuItems = ["Collection", "Men", "Woman", "About", "Contact"]

function MenuList (props) {
    const items = props.items;
    const listItems = items.map((item) =>
    <div key={item.toString()}><h6>{item}</h6></div>
    );
    return(
        listItems
    )
}

const Menu = ({direction}) => {
    return (
        <StyledMenu direction={direction}>
            <MenuList items={menuItems}/>
        </StyledMenu>
    );
};

export default Menu;
