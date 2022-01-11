import { MouseEvent, useState } from "react"
import { QueryClient, QueryClientProvider } from 'react-query'

import { Header } from "components/Header";
import { Input } from "components/FormInput";
import { Layout } from "components/Layout";
import { Table } from "components/Table"
import GlobalStyle, { WrapperFilters, WrapperInputs } from "styles/globalStyles";
import { FormSelect } from "components/FormSelect";
import { Button } from "components/Button";
import { ColumnProps } from "types";
import { useAppContext } from "context/AppContext";
import Card from "components/Card";
import { useSubmit } from "hooks/useSubmit";


const columns: ColumnProps[] = [
  { accessor: 'name', label: 'Name' },
  { accessor: 'age', label: 'Age' },
  { accessor: 'is_manager', label: 'Manager'},
  { accessor: 'start_date', label: 'Start Date' },
]

const mockOptions = [
  { value: "list", label: 'List View', icon: "list" },
  { value: 'grid', label: 'Grid View', icon: "grid" },
];

function App() {
  const { view, setTitle } = useAppContext()
  const queryClient = new QueryClient()

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();

  }

  const handleSubmit = useSubmit((values) => {        

    setTitle(values.search)
  });
  
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
      <Header />
      <Layout>
        <form onSubmit={handleSubmit}>
          <WrapperFilters>
            <WrapperInputs>
              <Input name="search" placeholder="Type for search ..." />
              <FormSelect />
              <Button
                variant="solid" 
                withIcon 
                type="submit"
              >
                Search
              </Button>
              <Button 
                variant="ghost" 
                withIcon={false}  
                onClick={handleClick}
              >
                Clear
              </Button>
            </WrapperInputs>
            
          </WrapperFilters>
        </form>
        {view === "table" && <Table />}
        {view === "grid" && <Card />}
      </Layout>
      </QueryClientProvider>
    </>
   
  );
}

export default App;
