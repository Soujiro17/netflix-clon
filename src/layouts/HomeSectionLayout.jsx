import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Section = styled.section`
  height: 70vh;
`;

const HomeSectionLayout = ({ children }) => {
  return <Section>{children}</Section>;
};

HomeSectionLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeSectionLayout;
