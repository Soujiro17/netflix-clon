import React from "react";
import Button from "../../shared/Button";
import Logo from "../Logo";
import HeaderContainer from "./style";

const HomeHeader = () => {
  return (
    <HeaderContainer>
      <Logo width="130px" />
      <Button className="primary">Iniciar sesión</Button>
    </HeaderContainer>
  );
};

export default HomeHeader;
