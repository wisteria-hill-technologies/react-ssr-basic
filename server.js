import express from "express";
import path from 'path';
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import App from "./src/App";
import Html from './Html';
import assets from './assets';

const app = express();

app.use(express.static(path.resolve(__dirname, '../build'), { index: false }));

app.get("/api/hello", (req, res) => {
  res.send({ greeting: "Hello!" });
});

app.use(async ( req, res ) => {
  const context = {};
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const reactContent = renderToString(jsx);

  const html = renderToString(<Html content={reactContent} assets={assets} />);

  res.status(200);
  res.send(`<!doctype html>${html}`);
  res.end();
} );

const port = 2048;
app.listen( port, ()=>{ console.log(`The server is up on port ${ port }!`); } );


