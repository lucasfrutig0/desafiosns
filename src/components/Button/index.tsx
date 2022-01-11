import { ReactElement } from "react";
import { FaSearch } from "react-icons/fa";
import { ButtonProps } from "types";

import * as S from "./styles"

const Button = ({ children, variant, withIcon, onClick}: ButtonProps): ReactElement => {
  return <S.Button variant={variant} pill onClick={onClick}>
    {withIcon ? (
     <div>
       <FaSearch /> { children }
     </div>
    ) : (
      <>
        { children }
      </>
    )}
  </S.Button>
}

export { Button }