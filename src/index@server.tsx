import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { App } from './App';
import { getHtml } from './server/getHtml';
import { getAssets } from './server/getAssets';

const app = express();

app.use(express.static('dist'));

app.use('/*', (req, res) => {
  const jsx = <App/>;
  const html = getHtml(renderToString(jsx), getAssets());
  res.status(200).send(html);
});

app.listen(3000, () => console.log('App is listening on port 3000'))
