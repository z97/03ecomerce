import React from 'react';
import Images from "./Images";
import styled from "styled-components";
import Text from "./Text";
import PopUpGalery from "./PopUpGalery";
import Gallery from "./gallery/index.js";



const StyledBody = styled.div`
  display: flex;
  margin-top: 6vh;
  flex-wrap: wrap;
  justify-content: space-around;
`


const Body = () => {
    return (
        <StyledBody>

            <Gallery/>
            <Text/>
        </StyledBody>
    );
};

export default Body;
