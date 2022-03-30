import flagsmith from 'flagsmith';
import { FlagsmithProvider } from 'flagsmith/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const flagsmithUrl = process.env.REACT_APP_FLAGSMITH_API_URL;
const flagsmithEnvironmentId = process.env.REACT_APP_FLAGSMITH_ENVIRONMENT_ID || '';

ReactDOM.render(
  <React.StrictMode>
    <FlagsmithProvider
      flagsmith={flagsmith}
      options={{
        api: flagsmithUrl,
        environmentID: flagsmithEnvironmentId,
        cacheFlags: true
      }}
    >
      <App />
    </FlagsmithProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
