import styled from "styled-components";

type ButtonProps = {
  activePage: number;
  page: number;
}

export const Table = styled.table`
  padding: 1rem;
  width: 100%;
  border-collapse: collapse;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-style: hidden; /* hide standard table (collapsed) border */
  box-shadow: 0 0 0 1px var(--clr-lightGray); /* this draws the table border  */ 
  
  th {
    color: var(--clr-text);
    text-transform: uppercase;
    font-size: 12px;
  }

  td {
    text-transform: capitalize;
    text-align: left;
  }

  thead th, tbody td {
    text-align: left;
    padding: .6rem;
    border-bottom: 1px solid var(--clr-lightGray);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 300px;
  }

  th:first-child {
    width: 60px;
    text-align: center;
  }

  td:first-child {
    width: 60px;
    text-align: center;
  }

  td:nth-child(2) {
    font-weight: bold;
  }

  tfoot td:nth-child(1) {
    width: 200px;
    background-color: pink;
  }
`

export const FooterTable = styled.div`
  width: 100%;
  box-shadow: 0 0 0 1px var(--clr-lightGray);
  padding: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  p {
    font-weight: bold;
  }
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    :hover {
      cursor: pointer;
    }
  }
`

export const ButtonArrow = styled.button`
  appearance: unset;
  border: none;
  background-color: transparent;
`

export const PageButton = styled.button<ButtonProps>`
  appearance: unset;
  background: ${({activePage, page}) => activePage === page ? "var(--clr-primary)" : "transparent"};
  color: ${({activePage, page}) => activePage === page ? "var(--clr-white)" : "currentColor"};
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }

  :disabled {
    pointer-events: none;
  }
`

