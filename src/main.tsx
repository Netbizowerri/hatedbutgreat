import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import { ProfileProvider } from './context/ProfileContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </HelmetProvider>
  </StrictMode>,
);
