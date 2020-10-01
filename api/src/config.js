const dev = {
    API_URL: 'http://localhost:9000/'
  };
  const prod = {
    API_URL: 'http://'
  };
  const config = process.env.REACT_APP_STAGE === 'production'
    ? prod
    : dev;
  export default config;