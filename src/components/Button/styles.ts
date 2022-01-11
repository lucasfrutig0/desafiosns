import styled, { css } from 'styled-components'

type ButtonPropsStyled = {
  variant: string;
  pill: boolean;
}

export const Button = styled.button<ButtonPropsStyled>`
  appearance: unset;
  border: none;
  padding: .5rem .7rem;

  :hover {
    cursor: pointer;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  ${({ variant }) =>
    variant === "solid" &&
    css`
      background-color: var(--clr-primary);
      color: var(--clr-white);
    `}

  ${({ variant }) =>
  variant === "ghost" &&
  css`
    background-color: transparent;
    color: var(--clr-primary);
  `}

  ${({ pill }) => 
  pill && 
  css`
    border-radius: 99999px;
  `
}
`