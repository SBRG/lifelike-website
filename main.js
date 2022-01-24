import flagsmith from 'flagsmith';

// Feature flags and remote config
const environmentID = import.meta.env.VITE_FLAGSMITH_ENVIRONMENT_ID;
const api = import.meta.env.VITE_FLAGSMITH_API_URL;
const cacheFlags = !!(import.meta.env.VITE_FLAGSMITH_CACHE_FLAGS ?? 'true');

if (api && environmentID) {
  flagsmith.init({
    environmentID,
    api,
    cacheFlags,
    onChange: () => {
      configureLogin();
      configureDemoRequest();
      configureOpenSource();
    },
  });
}

/**
 * Configure login access to Lifelike app, if enabled
 */
const configureLogin = () => {
  const loginUrl = flagsmith.getValue('login_url'),
    loginNavItem = document.getElementById('login-nav-item');
  loginNavItem.classList.toggle('d-none', !loginUrl);
  loginUrl && (loginNavItem.querySelector('a').href = loginUrl);
};

/**
 * Configure Open Source release info, if enabled
 */
const configureOpenSource = () => {
  const openSourceReleased = flagsmith.hasFeature('opensource_released'),
    githubUrl = flagsmith.getValue('github_url'),
    githubNavItem = document.getElementById('github-nav-item');
  githubNavItem.classList.toggle('d-none', !openSourceReleased || !githubUrl);
  githubUrl && (githubNavItem.querySelector('a').href = githubUrl);
};

/**
 * Sow/hide the Demo Request button, if enabled
 */
const configureDemoRequest = () => {
  const contactEmail = flagsmith.getValue('contact_email'),
    demoRequestLinkElem = document.getElementById('demo-request-link');
  demoRequestLinkElem.classList.toggle('d-none', !contactEmail);
  contactEmail &&
    (demoRequestLinkElem.href = `mailto:${contactEmail}?body=${encodeURIComponent(
      'I am interested in demoing Lifelike.'
    )}`);
};
