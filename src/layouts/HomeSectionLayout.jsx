import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../constants/colors";

const Section = styled.section`
  height: 60vh;
  border-top: 0.6rem solid ${colors.gray};
  background-color: ${colors.black[100]};
  padding: 2rem;
`;

const SectionContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const TextWrapper = styled.div`
  color: ${colors.white[100]};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  width: 700px;
`;

export const TextContainer = styled.div`
  width: 100%;
  padding-right: 1rem;
`;

export const Title = styled.h2`
  font-size: calc(1.2rem + 1.8vw);
  margin-bottom: 0;
`;
export const Description = styled.p`
  font-size: calc(1rem + 0.4vw);
`;

const HomeSectionLayout = ({ title, description, after, children }) => {
  return (
    <Section>
      <SectionContainer>
        {after ? children : null}
        <TextWrapper>
          <TextContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </TextContainer>
        </TextWrapper>
        {!after ? children : null}
      </SectionContainer>
    </Section>
  );
};

HomeSectionLayout.defaultProps = {
  after: false,
};

HomeSectionLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  after: PropTypes.bool,
};

export default HomeSectionLayout;
