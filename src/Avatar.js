import React from 'react';
import avatar from "./gallery/images/image-avatar.png";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 50px;
  fill: #69707D;
`

const Avatar = () => {
    return (
        <div>
            <StyledImg src={avatar} alt="Avatar"/>
        </div>
    );
};

export default Avatar;
