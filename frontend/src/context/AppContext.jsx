import { createContext, useState } from 'react';

export const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [pageData, setPageData] = useState(null);
  const [dataLoading, setDataLoading] = useState(false);
  // Add more state here as needed

  return (
    <AppContext.Provider
      value={{ pageData, setPageData, dataLoading, setDataLoading }}
    >
      {children}
    </AppContext.Provider>
  );
}
