import React from "react";
import HomeSectionLayout from "../../layouts/HomeSectionLayout";
import HomeHeader from "../HomeHeader";
import {
  LandingWrapper,
  Container,
  Title,
  SubtTitle,
  Description,
  SuscribeContainer,
  SuscribeInput,
  SuscribeButton,
} from "./style";

const Landing = () => {
  return (
    <LandingWrapper>
      <HomeHeader />
      <HomeSectionLayout>
        <Container>
          <Title>
            Películas y series ilimitadas <br />y mucho más
          </Title>
          <SubtTitle>Disfruta donde quieras. Cancela cuando quieras.</SubtTitle>
          <Description>
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
            reiniciar tu membresía de Netflix.
          </Description>
          <SuscribeContainer>
            <SuscribeInput placeholder="Email" />
            <SuscribeButton className="primary">Comenzar {">"}</SuscribeButton>
          </SuscribeContainer>
        </Container>
      </HomeSectionLayout>
    </LandingWrapper>
  );
};

export default Landing;
