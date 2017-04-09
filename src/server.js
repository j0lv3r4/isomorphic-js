import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/app';

function template({ body, title, initialState }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
      <meta charset="UTF-8">
      <title>${title}</title>
      <link rel="stylesheet" href="/assets/index.css" />
    </head>
    <body>
      <div id="root">${body}</div>  
    </body>
    <script src="/assets/bundle.js"></script>
    </html>
  `
}

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const foo = 'bar';
  const initialState = { foo };
  const appString = renderToString(
    <App {...initialState} />
  );

  res.send(template({
    body: appString,
    title: 'Hello World from the server',
    initialState: JSON.stringify(initialState)
  }));
});

export default server
