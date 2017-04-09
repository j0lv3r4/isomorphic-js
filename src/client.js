import React from 'react';
import { render  } from 'react-dom';
import App from './client/app';

// We place here react router, redux provider, etc.

render(
  <App {...window.__APP_INITIAL_STATE__} />,
  document.getElementById('root')
);
