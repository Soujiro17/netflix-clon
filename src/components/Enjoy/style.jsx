import styled from "styled-components";
import colors from "../../constants/colors";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1%;
  padding: 2rem;
  background-color: ${colors.black[100]};
`;

export const EnjoyTextWrapper = styled.div`
  color: ${colors.white[100]};
  width: 49%;
`;

export const EnjoyImgWrapper = styled.div`
  background-color: ${colors.black[100]};
  width: 49%;
`;

export const EnjoyTitle = styled.h2``;
export const EnjoyDescription = styled.h3``;
