// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.tsx';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );





import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const rootEl = document.getElementById('root')!;

if (rootEl.childElementCount > 0) {
  hydrateRoot(rootEl, <StrictMode><App /></StrictMode>);
} else {
  createRoot(rootEl).render(<StrictMode><App /></StrictMode>);
}
