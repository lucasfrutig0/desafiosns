import { createContext, FC, useContext, useMemo, useState } from "react";

type AppContext = {
  view: 'table' | 'grid';
  setView: (view: 'table' | 'grid') => void;
  title: string;
  setTitle: (title: string) => void;
}

const AppContext = createContext({} as AppContext)

const AppProvider: FC = ({ children }) => {
  const [view, setView] = useState<'table' | 'grid'>('table');
  const [title, setTitle] = useState("")
  const value = { view, setView, title, setTitle }
  return (
    <AppContext.Provider value={value}>
      { children }
    </AppContext.Provider>
  )
}

function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContext')
  }
  return context
}

export {AppProvider, useAppContext}