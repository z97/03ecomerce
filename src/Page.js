import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Body from "./Body";
import styled from "styled-components";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1110px;
  max-height: 740px;
  margin: 2vh auto 0 auto;
`

const Page = () => {
    return (
        <StyledPage>
            <Header/>
            <Body/>
        </StyledPage>
    );
};

export default Page;
