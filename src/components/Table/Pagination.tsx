import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import * as S from "./styles"

const Pagination = ({ 
  activePage, 
  count, 
  rowsPerPage, 
  totalPages, 
  setActivePage 
}) => {
  const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1
  const end = activePage === totalPages ? count : beginning + rowsPerPage - 1
  const pages =Array.from({length: totalPages}, (v, k) => k + 1);

  return (
    <>
      <S.PaginationContainer>
        <S.ButtonArrow 
          disabled={activePage === 1} 
          onClick={() => setActivePage(activePage - 1)}
        >
          <FaChevronLeft />
        </S.ButtonArrow>
        {pages.map((page) => (
          <S.PageButton 
            key={page} 
            activePage={activePage} 
            page={page} 
            disabled={activePage === page} 
            onClick={() => setActivePage(page)}
          >
            <strong>{page}</strong>
          </S.PageButton>
        ))}
        <S.ButtonArrow 
          disabled={activePage === totalPages} 
          onClick={() => setActivePage(activePage + 1)}
        >
          <FaChevronRight />
        </S.ButtonArrow>
      </S.PaginationContainer>
    </>
  )
}

export { Pagination }