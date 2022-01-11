import styled from "styled-components"

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  gap: 1rem;
`

export const Card = styled.div`
   box-shadow: 0 0 0 1px var(--clr-lightGray);
   border-radius: 4px;
   padding: 1rem;
`

export const CardTitle = styled.h3`
  color: var(--clr-black);
  line-height: 1;
  text-transform: capitalize;
`

export const CardSubtitle = styled.small`
  line-height: .5;
`

export const CardBody = styled.div`
  margin-top: .6rem;
  margin-bottom: .6rem;
  text-transform: capitalize;
`

export const CardFooter = styled.div``

export const FooterTable = styled.div`
  width: 100%;
  padding: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: bold;
  }
`