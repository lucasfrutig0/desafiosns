import { Pagination } from "components/Table/Pagination";
import { useAppContext } from "context/AppContext";
import { ReactElement, useMemo, useState } from "react";
import { usePosts } from "services/posts/api";

import * as S from "./styles"

const Card = (): ReactElement => {
  const { title } = useAppContext();
  const [activePage, setActivePage] = useState(1)
  const rowsPerPage = 10
  // const calculatedRows = rows.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage)
  const { data: posts, isLoading } = usePosts(activePage, title);
  const totalPages = Math.ceil(100 / rowsPerPage)
  const rows = useMemo(() => posts, [posts])

  if (isLoading) {
    return <>...Loading</>
  }
  
  return (
   <>
    <S.CardContainer>
      {
      posts?.map((post) => (
        <S.Card key={post.id}>
          <S.CardTitle>{post.title}</S.CardTitle>
          <S.CardSubtitle>{post.author}</S.CardSubtitle>
          <S.CardBody>{post.body}</S.CardBody>
          <S.CardFooter>{post.created_at}</S.CardFooter>
        </S.Card>
      ))
    }
   </S.CardContainer>
   <S.FooterTable>
    <p>Total Results {100}</p>
    <Pagination
        activePage={activePage}
        count={posts?.length}
        rowsPerPage={rowsPerPage}
        totalPages={totalPages}
        setActivePage={setActivePage}
      />
    </S.FooterTable>
   </>
  )
}

export default Card;