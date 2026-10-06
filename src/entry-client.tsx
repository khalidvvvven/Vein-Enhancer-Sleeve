import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

document.documentElement.classList.add('js');

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Production HTML is prerendered (scripts/prerender.mjs) and hydrated; dev renders fresh.
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
