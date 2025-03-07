// External Imports
import { useContext } from 'react';

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
  // Get context data
  const { setPageData, setDataLoading } = useContext(AppContext);

  /**
   * fetchData: Function to fetch data from Payload api or from statically generated Payload data and set the data in the context
   * @returns {Promise<void>} Promise that resolves when the data is fetched
   */
  const fetchData = async () => {
    // Check if slug is provided
    if (!slug) return;

    // Go into loading state during fetch
    setDataLoading(true);

    try {
      let result;

      if (import.meta.env.DEV && window.__PAYLOAD_AVAILABLE) {
        // For development with Payload running
        let apiPath = '';

        if (type === 'global') {
          // Fetch Payload global data
          apiPath = `http://localhost:3000/api/globals/${slug}`;
        } else if (type === 'collection') {
          // Fetch Payload collection data
          if (!collection) return;
          apiPath = `http://localhost:3000/api/${collection}/${slug}`;
        }

        const response = await fetch(apiPath);
        result = await response.json();
      } else {
        // Static imports
        if (type === 'global') {
          // Fetch static global data
          const module = await import(`../data/globals/${slug}.json`);
          result = module.default;
        } else if (type === 'collection' && collection) {
          // Fetch static collection data
          const module = await import(
            `../data/collections/${collection}/${slug}.json`
          );
          result = module.default;
        }
      }

      setPageData(result);
    } catch (error) {
      console.error(`Error fetching ${type} data:`, error);
    } finally {
      setDataLoading(false);
    }
  };

  return {
    fetchData,
  };
}
