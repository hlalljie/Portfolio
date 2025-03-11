// check-payload.js
import fetch from 'node-fetch';
import fs from 'fs';

/**
 * checkPayload: Function to check if Payload CMS is available
 */
const checkPayload = async () => {
  try {
    console.log('Checking for Payload CMS...');

    // Try fetching from admin endpoint which should always be up if payload is
    const response = await fetch('http://localhost:3000/admin', {
      method: 'HEAD',
      signal: AbortSignal.timeout(1000),
    });

    // If response is ok, payload is available
    if (response.ok) {
      console.log('✅ Payload CMS detected - using live data');
      fs.writeFileSync('./.env', 'VITE_PAYLOAD_AVAILABLE=true');
    } else {
      throw new Error('Payload responded but with an error');
    }
  } catch (error) {
    console.log('❌ No Payload CMS detected - using static data');
    fs.writeFileSync('./.env', 'VITE_PAYLOAD_AVAILABLE=false');
  }
};

checkPayload().catch(console.error);
