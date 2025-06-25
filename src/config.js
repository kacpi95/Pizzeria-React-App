export const API_URL =
  import.meta.env.MODE === 'production'
    ? '/tables'
    : 'http://localhost:3131/tables';
