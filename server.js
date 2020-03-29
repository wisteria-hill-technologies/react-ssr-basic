require('dotenv').config();
import express from "express";
import path from 'path';
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import App from "./src/App";
import Html from './Html';
import assets from './assets';
import fetch from 'node-fetch';

const app = express();

app.use(express.static(path.resolve(__dirname, '../build'), { index: false }));

app.get("/api/hello", (req, res) => {
  res.send({ greeting: "Hello!" });
});

app.use(async ( req, res ) => {
  const context = {};
  const store = "Hello, my friends!";
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const jsonObj = await response.json();
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App store={jsonObj.title} />
    </StaticRouter>
  );
  const reactContent = renderToString(jsx);

  const html = renderToString(<Html content={reactContent} assets={assets} />);
  // below if you want to pass data to window object in ui only.  But, will not appear in initial server rendering.
  const htmlWithStore = html.split("{store}").join(`
      <script>
        window.store = "Hello, folks!"
      </script>
  `);

  res.status(200);
  res.send(`<!doctype html>${htmlWithStore}`);
  res.end();
} );

const port = process.env.PORT || 2048;
app.listen( port, ()=>{ console.log(`The server is up on port ${ port }!`); } );


