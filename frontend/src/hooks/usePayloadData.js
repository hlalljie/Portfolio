// External Imports
import { useContext, useCallback, useRef, useEffect } from 'react';

// Internal Imports
// Context
import { AppContext } from '@/context/AppContext';

/**
 * usePayloadData: Hook to fetch data from Payload api or from statically generated Payload data
 * @param {object} options - The options for the hook.
 * @param {string} options.type - The type of data to fetch. Can be 'global' or 'collection'.
 * @param {string} options.slug - The slug of the data to fetch.
 * @param {string} [options.collection] - The collection of the data to fetch.
 * @returns {object} Object containing fetchData function
 */
export default function usePayloadData({ type = 'global', slug, collection }) {
  const {
    pageData,
    setPageData,
    dataLoading,
    setDataLoading,
    setUseStaticData,
  } = useContext(AppContext);
  // polling vars
  const pollingRef = useRef(null);
  const latestDataRef = useRef(pageData);

  // Update latestDataRef when pageData changes
  useEffect(() => {
    latestDataRef.current = pageData;
  }, [pageData]);

  /**
   * fetchFromAPI: Function to fetch data from the API, used in polling
   * @returns {Promise<void>}
   */
  const fetchFromAPI = useCallback(async () => {
    console.log('Fetching from API');
    try {
      // build api path
      let apiPath = '';
      if (type === 'global') {
        apiPath = `http://localhost:3000/api/globals/${slug}?depth=2`;
      } else if (type === 'collection' && collection) {
        apiPath = `http://localhost:3000/api/${collection}/${slug}?depth=2`;
      }

      // fetch data
      const response = await fetch(apiPath);
      const result = await response.json();

      // get current data from reference outside of closure
      const currentData = latestDataRef.current;

      // Update state only if the data has changed
      if (!currentData || currentData.updatedAt !== result.updatedAt) {
        console.log('Data changed, updating state');
        setPageData(result);
      }
    } catch (error) {
      console.error(`Error fetching API data:`, error);
    }
  }, [type, slug, collection, setPageData]);

  /**
   * fetchData: Function to fetch data from the API or from statically generated Payload data
   * @returns {Promise<void>}
   */
  const fetchData = useCallback(async () => {
    // Exit if slug is missing
    if (!slug) return;

    // Clear any existing polling
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
    }

    setDataLoading(true);

    try {
      // Use API if in dev mode and API is running
      if (
        import.meta.env.DEV &&
        import.meta.env.VITE_PAYLOAD_AVAILABLE === 'true'
      ) {
        await fetchFromAPI();

        // Set static data flag
        setUseStaticData(false);

        // Set up polling only if using API
        pollingRef.current = setInterval(fetchFromAPI, 1000);
      } else {
        // Static data logic
        console.log('Fetching from static data');

        let result;
        if (type === 'global') {
          result = await import(
            /* @vite-ignore */ `../data/globals/${slug}.json`
          ).then((m) => m.default);
        } else if (type === 'collection' && collection) {
          result = await import(
            /* @vite-ignore */ `../data/${collection}/${slug}.json`
          ).then((m) => m.default);
        }
        setPageData(result);
        // Set static data flag
        setUseStaticData(true);
      }
    } catch (error) {
      console.error(`Error fetching data:`, error);
    } finally {
      setDataLoading(false);
    }
  }, [
    type,
    slug,
    collection,
    fetchFromAPI,
    setPageData,
    setDataLoading,
    setUseStaticData,
  ]);

  // Clean up polling on unmount
  useEffect(() => {
    return () => {
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
      }
    };
  }, []);

  return {
    loading: dataLoading,
    fetchData,
    pageData,
  };
}
