import styled from "styled-components";
import colors from "../../constants/colors";
import Img from "../../shared/Img";
import Video from "../../shared/Video";

export const EnjoyImgWrapper = styled.div`
  background-color: ${colors.black[100]};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 500px;
  position: relative;
`;

export const EnjoyVideo = styled(Video)`
  position: absolute;
  top: 20%;
  width: 94%;
`;

export const EnjoyImg = styled(Img)`
  position: relative;
  z-index: 1;
`;
