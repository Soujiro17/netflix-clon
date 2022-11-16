import React from "react";
import images from "../../constants/images";
import HomeSectionLayout from "../../layouts/HomeSectionLayout";
import Img from "../../shared/Img";
import {
  Container,
  EnjoyTitle,
  EnjoyDescription,
  EnjoyTextWrapper,
  EnjoyImgWrapper,
} from "./style";

const Enjoy = () => {
  return (
    <HomeSectionLayout>
      <Container>
        <EnjoyTextWrapper>
          <EnjoyTitle>Disfruta en tu TV</EnjoyTitle>
          <EnjoyDescription>
            Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV,
            reproductores de Blu-ray y más.
          </EnjoyDescription>
        </EnjoyTextWrapper>
        <EnjoyImgWrapper>
          <Img src={images.home.enjoyImg} alt="tv" width="100%" />
        </EnjoyImgWrapper>
      </Container>
    </HomeSectionLayout>
  );
};

export default Enjoy;
