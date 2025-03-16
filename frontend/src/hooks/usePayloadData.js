// External Imports
import { useContext, useCallback, useRef, useEffect } from 'react';

// Internal Imports
// Context
import { AppContext } from '@/context/AppContext';
// Utils
import pollingManager from '@/utils/pollingManager';
import dataCache from '@/utils/dataCache';

/**
 * usePayloadData: Hook to fetch data from Payload api or from statically generated Payload data
 * @param {object} options - The options for the hook.
 * @param {string} options.type - The type of data to fetch. Can be 'global' or 'collection'.
 * @param {string} options.slug - The slug of the data to fetch.
 * @returns {object} Object containing fetchData function
 */
export default function usePayloadData({ type = 'global', slug }) {
  const {
    pageData,
    setPageData,
    dataLoading,
    setDataLoading,
    setUseStaticData,
  } = useContext(AppContext);

  const latestDataRef = useRef(pageData);
  const componentKey = `${type}-${slug}`;

  // Update latestDataRef when pageData changes
  useEffect(() => {
    latestDataRef.current = pageData;
  }, [pageData]);

  /**
   * fetchFromAPI: Function to fetch data from the API, used in polling
   * @returns {Promise<void>}
   */
  const fetchFromAPI = useCallback(async () => {
    // Only proceed if this is still the active polling component
    if (!pollingManager.isActiveFor(componentKey)) {
      return;
    }

    console.log('Fetching from API');
    console.log(`Type: ${type}, Slug: ${slug}`);
    try {
      // build api path
      let apiPath = '';
      if (type === 'global') {
        apiPath = `http://localhost:3000/api/globals/${slug}?depth=2`;
      } else if (type === 'collection') {
        apiPath = `http://localhost:3000/api/${slug}`;
      }

      // fetch data
      const response = await fetch(apiPath);
      const result = await response.json();

      // get current data from reference outside of closure
      const currentData = latestDataRef.current;

      // Update state only if the data has changed
      if (!currentData || currentData.updatedAt !== result.updatedAt) {
        console.log('Data changed, updating state');
        console.log('New Data:', result);
        setPageData(result);
      }
    } catch (error) {
      console.error(`Error fetching API data:`, error);
    }
  }, [type, slug, setPageData, componentKey]);

  /**
   * fetchFromStaticData: Function to fetch data from statically generated Payload data
   * @returns {Promise<void>}
   */
  const fetchFromStaticData = useCallback(async () => {
    // Create a cache key from type and slug
    const cacheKey = `${type}-${slug}`;
    // Check cache first
    if (dataCache.has(cacheKey)) {
      console.log('Using cached static data');
      setPageData(dataCache.get(cacheKey));
      setUseStaticData(true);
      return true; // Skip loading process
    }

    console.log('Fetching from static data');

    try {
      let result;
      if (type === 'global') {
        result = await import(
          /* @vite-ignore */ `../data/globals/${slug}.json`
        ).then((m) => m.default);
      } else if (type === 'collection') {
        result = await import(
          /* @vite-ignore */ `../data/collections/${slug}.json`
        ).then((m) => m.default);
      }
      // Set cache
      dataCache.set(cacheKey, result);

      // Update pageData state
      setPageData(result);
      // Set static data flag
      setUseStaticData(true);
    } catch (error) {
      console.error(`Error fetching static data:`, error);
    }
  }, [slug, type, setPageData, setUseStaticData]);

  /**
   * fetchData: Function to fetch data from the API or from statically generated Payload data
   * @returns {Promise<void>}
   */
  const fetchData = useCallback(async () => {
    // Exit if slug is missing
    if (!slug) return;

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

        // Start polling for this component
        pollingManager.startPolling(componentKey, fetchFromAPI, 1000);
      } else {
        fetchFromStaticData();
      }
    } catch (error) {
      console.error(`Error fetching data:`, error);
    } finally {
      setDataLoading(false);
    }
  }, [
    slug,
    fetchFromAPI,
    fetchFromStaticData,
    setDataLoading,
    setUseStaticData,
    componentKey,
  ]);

  // Clean up polling on unmount if this component is still the active one
  useEffect(() => {
    return () => {
      if (pollingManager.isActiveFor(componentKey)) {
        pollingManager.stopPolling();
      }
    };
  }, [componentKey]);

  return {
    loading: dataLoading,
    fetchData,
    pageData,
  };
}
