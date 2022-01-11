import { ReactElement } from "react";
import * as S from "./styles"

import logo from "assets/img/logo.svg"
import { MainContainer } from "styles/globalStyles";

const Header = (): ReactElement => {
  return (
    <S.Header>
      <MainContainer>
      <img src={logo} alt="logo sensedia" width="128px" height="37px" />
      </MainContainer>
    </S.Header>
  )
}

export { Header }