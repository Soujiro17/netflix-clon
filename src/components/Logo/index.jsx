import React from "react";
import PropTypes from "prop-types";
import images from "../../constants/images";
import Img from "../../shared/Img";

const Logo = ({ height, width }) => {
  return <Img src={images.logo} height={height} width={width} />;
};

Logo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

export default Logo;
