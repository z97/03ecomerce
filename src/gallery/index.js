import React from 'react';
import styled from 'styled-components';
import photoBig from "./images/image-product-1.jpg";
import smallImage1 from "./images/image-product-1-thumbnail.jpg";
import smallImage2 from "./images/image-product-2-thumbnail.jpg";
import smallImage3 from "./images/image-product-3-thumbnail.jpg";
import smallImage4 from "./images/image-product-4-thumbnail.jpg";
import BigImage from "./BigImage";
import SmallImage from "./SmallImage";

const StyledGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 445px;
  max-height: 565px;
  @media screen and (max-width: 600px){
    div.SmallImagesClass{
      display: none;
    }
  }
`

const StyledBigImage = styled.div`
  
`

const StyledSmallImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 445px
`
const smallImages = [smallImage1, smallImage2, smallImage3, smallImage4]

function ImagesList(props) {
    const images = props.images;
    const listImages = images.map((image) =>
        <SmallImage key={image.toString()} image={image}/>
    );
    return (
        listImages
    );
}


const Index = () => {
    return (
        <StyledGallery>
            <StyledBigImage>
                <BigImage image={photoBig}/>
            </StyledBigImage>
            <StyledSmallImages className="SmallImagesClass">
                <ImagesList images={smallImages} />
            </StyledSmallImages>
        </StyledGallery>
    );
};

export default Index;
