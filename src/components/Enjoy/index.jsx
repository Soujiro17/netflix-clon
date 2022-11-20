import React from "react";
import images from "../../constants/images";
import HomeSectionLayout from "../../layouts/HomeSectionLayout";
import Source from "../../shared/Source";
import { EnjoyImgWrapper, EnjoyVideo, EnjoyImg } from "./style";

const Enjoy = () => {
  return (
    <HomeSectionLayout
      title="Disfruta en tu TV"
      description="Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más."
    >
      <EnjoyImgWrapper>
        <EnjoyImg src={images.home.enjoyImg} alt="tv" />
        <EnjoyVideo autoPlay>
          <Source src={images.home.enjoyVideo} type="video/mp4" />
        </EnjoyVideo>
      </EnjoyImgWrapper>
    </HomeSectionLayout>
  );
};

export default Enjoy;
