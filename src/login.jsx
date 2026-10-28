import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import content from './content.js';
import LoginPage from './components/LoginPage.jsx';
import './login.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPage login={content.login} site={content.site} />
  </StrictMode>
);
