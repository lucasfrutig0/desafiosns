import { ReactElement } from "react";
import { LayoutProps } from "types";

import { MainContainer } from "styles/globalStyles"

const Layout = ({ children }: LayoutProps): ReactElement => {
  return <MainContainer> { children } </MainContainer>
}

export { Layout }