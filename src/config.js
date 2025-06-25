export const API_URL =
  typeof window !== 'undefined' && window.location.hostname.includes('replit')
    ? `https://${window.location.hostname}/tables`
    : import.meta.env.MODE === 'production'
    ? '/tables'
    : 'http://localhost:3131/tables';
