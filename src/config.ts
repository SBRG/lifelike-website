import flagsmith from 'flagsmith';

const flagsmithUrl = process.env.REACT_APP_FLAGSMITH_API_URL;
const flagsmithEnvironmentId =
  process.env.REACT_APP_FLAGSMITH_ENVIRONMENT_ID || '';

flagsmith.init({
  environmentID: flagsmithEnvironmentId,
  api: flagsmithUrl,
  cacheFlags: true,
});

const getConfigValue = (key: string, defaultValue?: any) => {
  const config = flagsmith.getValue(key);
  console.log('fgottt', config);
  return config ?? defaultValue;
};

export { flagsmith, getConfigValue };
