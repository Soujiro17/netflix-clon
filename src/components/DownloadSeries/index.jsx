import React from "react";
import images from "../../constants/images";
import HomeSectionLayout from "../../layouts/HomeSectionLayout";
import { PhoneImg } from "./style";

const DownloadSeries = () => {
  return (
    <HomeSectionLayout
      title="Descarga tus series para verlas offline"
      description="Guarda tu contenido favorito y tendrás siempre algo para ver."
      after
    >
      <PhoneImg src={images.home.downloadSeriesMobile} alt="phone-image" />
    </HomeSectionLayout>
  );
};

export default DownloadSeries;
