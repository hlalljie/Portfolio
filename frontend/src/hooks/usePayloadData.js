// External Imports
import { useContext } from 'react';

// Internal Imports
// Context
import { AppContext } from '@/context/AppContext';

export default function usePayloadData(options = {}) {
  const { type = 'global', slug, collection } = options;

  const { pageData, setPageData, dataLoading, setDataLoading } =
    useContext(AppContext);

  const fetchData = async () => {
    if (!slug) return { data: null, loading: false };

    setDataLoading(true);

    try {
      let result;

      if (import.meta.env.DEV && window.__PAYLOAD_AVAILABLE) {
        // For development with Payload running
        let apiPath = '';
        if (type === 'global') {
          apiPath = `http://localhost:3000/api/globals/${slug}`;
        } else if (type === 'collection') {
          if (!collection) return { data: null, loading: false };
          apiPath = `http://localhost:3000/api/${collection}/${slug}`;
        }

        const response = await fetch(apiPath);
        result = await response.json();
      } else {
        // Static imports
        if (type === 'global') {
          // You'll need to handle each global slug separately
          if (slug === 'homepage') {
            const module = await import('../data/globals/homepage.json');
            result = module.default;
          }
          // Add other globals as needed
        } else if (type === 'collection' && collection) {
          // Handle collections in a similar way
          // This gets verbose but is analyzable by Vite
        }
      }

      setPageData(result);
    } catch (error) {
      console.error(`Error fetching ${type} data:`, error);
    } finally {
      setDataLoading(false);
    }
  };

  // You'd need to call fetchData() in your component
  return {
    data: pageData,
    loading: dataLoading,
    fetchData,
  };
}
