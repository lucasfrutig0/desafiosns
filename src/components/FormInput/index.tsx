import { ReactElement,  } from "react";
import type { InputProps } from "types";

import * as S from "./styles"

const Input = ({ name, label, ...rest }: InputProps): ReactElement => {

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <S.Input 
        type="text"
        name={name} 
        id={name}
        {...rest} 
      />
    </div>
  )
}

export { Input }