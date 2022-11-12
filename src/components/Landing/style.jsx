import styled from "styled-components";
import Input from "../../shared/Input";
import colors from "../../constants/colors";
import images from "../../constants/images";
import Button from "../../shared/Button";

export const LandingWrapper = styled.section`
  z-index: 1;
  position: relative;
  background-image: url(${images.home.landing});
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    position: absolute;
    height: 100%;
    width: 100%;
    content: "";
    z-index: -1;
    background-image: linear-gradient(
      0deg,
      ${colors.black[80]} 0,
      transparent 60%,
      ${colors.black[80]}
    );
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${colors.white[100]};
  font-size: calc(1rem + 3vw);
  text-align: center;
  margin-bottom: 0%;
`;

export const SubtTitle = styled.h2`
  color: ${colors.white[100]};
  font-size: calc(1rem + 1vw);
  margin-top: 0;
  font-weight: normal;
`;

export const Description = styled.p`
  color: ${colors.white[100]};
  margin-top: 0;
  font-size: calc(0.8rem + 0.5vw);
`;

export const SuscribeContainer = styled.div`
  display: flex;
  height: 3.5rem;
`;

export const SuscribeInput = styled(Input)`
  height: 100%;
  width: 400px;
  position: relative;

  &:focus {
    transition: 0.2s all;
    &::placeholder {
      transition: 0.2s all;
      font-size: 10px;
      position: absolute;
      top: 5px;
      left: 1rem;
    }
  }
`;

export const SuscribeButton = styled(Button)`
  height: 100%;
  border: none;
  outline: none;
  border-radius: unset;
`;
