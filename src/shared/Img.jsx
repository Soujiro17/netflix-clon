import styled from "styled-components";

const Img = styled.img`
  object-fit: cover;
  object-position: center;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

export default Img;
