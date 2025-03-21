// External Imports
import { useContext, useCallback, useRef, useEffect } from 'react';

// Internal Imports
// Context
import { AppContext } from '@/context/AppContext';
// Utils
import pollingManager from '@/utils/pollingManager';
import dataCache from '@/utils/dataCache';

// Static imports
const staticModules = import.meta.glob('../data/**/*.json', { eager: true });

/**
 * usePayloadData: Hook to fetch data from Payload api or from statically generated Payload data
 * @param {object} options - The options for the hook.
 * @param {string} options.type - The type of data to fetch. Can be 'global' or 'collection'.
 * @param {string} options.id - The id of the data to fetch.
 * @param {array} options.resources - An array of objects containing the type and slug of the data to fetch.
 * @returns {object} Object containing fetchData function
 */
export default function usePayloadData({ type = 'global', id, resources }) {
  const {
    pageData,
    setPageData,
    dataLoading,
    setDataLoading,
    setUseStaticData,
  } = useContext(AppContext);

  const latestDataRef = useRef(pageData);
  const componentKey = `${type}-${id}`;

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
    console.log(`Type: ${type}, Slug: ${id}`);
    try {
      // build api path
      let apiPath = '';
      let response = null;
      let result = { global: {}, collection: {} };
      if (type === 'batch') {
        apiPath = `http://localhost:3000/api/batch`;
        response = await fetch(apiPath, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ resources: resources }),
        });
        result = await response.json();
      } else {
        const slug = resources[0].slug;
        if (type === 'global') {
          apiPath = `http://localhost:3000/api/globals/${slug}?depth=2`;
        } else if (type === 'collection') {
          apiPath = `http://localhost:3000/api/${slug}`;
        }
        response = await fetch(apiPath);
        result[type][slug] = await response.json();
      }

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
  }, [type, id, setPageData, componentKey, resources]);

  /**
   * fetchFromStaticData: Function to fetch data from statically generated Payload data
   * @returns {Promise<void>}
   */
  const fetchFromStaticData = useCallback(async () => {
    // Create a cache key from type and id
    const cacheKey = dataCache.createKey(type, id);
    // Check cache first
    if (dataCache.has(cacheKey)) {
      console.log('Using cached static data');
      setPageData(dataCache.get(cacheKey));
      setUseStaticData(true);
      return true; // Skip loading process
    }

    console.log('Fetching from static data');

    try {
      const result = {
        global: {},
        collection: {},
      };
      for (const resource of resources) {
        // Get slug
        const folder = resource.type + 's'; // f.e. 'collections'
        const slug = resource.slug;
        const pathKey = `../data/${folder}/${slug}.json`;

        // Get static data from import f.e. global.homepage
        result[resource.type][slug] = staticModules[pathKey];
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
  }, [id, type, setPageData, setUseStaticData, resources]);

  /**
   * fetchData: Function to fetch data from the API or from statically generated Payload data
   * @returns {Promise<void>}
   */
  const fetchData = useCallback(async () => {
    // Exit if id is missing
    if (!id) return;

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
        pollingManager.startPolling(componentKey, fetchFromAPI, 3000);
      } else {
        fetchFromStaticData();
      }
    } catch (error) {
      console.error(`Error fetching data:`, error);
    } finally {
      setDataLoading(false);
    }
  }, [
    id,
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
