import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FlagsmithProvider } from 'flagsmith/react';
import App from './App';
import { flagsmith } from './config';
import './styles/index.scss';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <FlagsmithProvider flagsmith={flagsmith}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </FlagsmithProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
