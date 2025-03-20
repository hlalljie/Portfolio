import { createContext, useState } from 'react';

export const AppContext = createContext(null);

/**
 *
 * @param {*} props
 * @param {JSX.Element} props.children - The children of the component
 * @returns {JSX.Element}
 */
export function AppProvider({ children }) {
  const [pageData, setPageData] = useState(null);
  const [dataLoading, setDataLoading] = useState(false);
  const [useStaticData, setUseStaticData] = useState(true);
  const [pollingSessionId, setPollingSessionId] = useState(null);
  // Add more state here as needed

  return (
    <AppContext.Provider
      value={{
        pageData,
        setPageData,
        dataLoading,
        setDataLoading,
        useStaticData,
        setUseStaticData,
        pollingSessionId,
        setPollingSessionId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
