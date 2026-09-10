import { renderToString } from 'react-dom/server';
import { StrictMode } from 'react';
import App from './App.tsx';

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <App serverUrl={url} />
    </StrictMode>
  );
}
