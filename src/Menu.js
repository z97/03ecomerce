import React, {useState} from 'react';
import styled from "styled-components";
import logo from "../src/images/logo.svg"
import Popup from "reactjs-popup";



const StyledLogo = styled.img`
  display: flex;
  width: 138px;
`

const StyledMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  justify-content: space-around;
  @media(min-width: 500px){
    
  }
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

const Menu = () => {


    return (
        <StyledMenu>
            <StyledLogo src={logo}/>
            <MenuList items={menuItems}/>
        </StyledMenu>
    );
};

export default Menu;
