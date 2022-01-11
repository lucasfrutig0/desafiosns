
import { useAppContext } from "context/AppContext";
import { useMemo, useState } from "react";
import { usePosts } from "services/posts/api"
import { ColumnProps } from "types";
import { Pagination } from "./Pagination";
import * as S from "./styles"

const columns: ColumnProps[] = [
  { accessor: 'id', label: 'POSTID' },
  { accessor: 'title', label: 'TITLE' },
  { accessor: 'author', label: 'AUTHOR' },
  { accessor: 'body', label: 'BODY' },
  { accessor: 'created_at', label: 'CREATION DATE' },
]

const Table = () => {
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
      <S.Table>
      <thead>
        <tr className="thead_row">
          {columns.map(column => {
            return <th key={column.accessor}>{column.label}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => {
          return (
            <tr key={row.id} className="tbody_row">
              {columns.map(column => {
                return <td key={column.accessor}>{row[column.accessor]}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </S.Table>
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

export  { Table }