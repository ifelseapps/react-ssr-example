import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { App } from './App';
import { getHtml } from './server/getHtml';
import { getAssets } from './server/getAssets';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchPersons } from './store/persons';

const app = express();

app.use(express.static('dist'));

app.use('/*', async (req, res) => {
  await store.dispatch(fetchPersons());

  const jsx = (
    <StaticRouter location={req.originalUrl}>
      <Provider store={store}>
        <App/>
      </Provider>
    </StaticRouter>
  );
  const html = getHtml(renderToString(jsx), getAssets(), JSON.stringify(store.getState()));
  res.status(200).send(html);
});

app.listen(3000, () => console.log('App is listening on port 3000'))
