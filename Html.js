import React from 'react';

const Html = ({ content, assets }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {assets.css &&
          assets.css.map((c, idx) => (
            <link key={idx} href={`${process.env.PUBLIC_PATH}${c}`} rel="stylesheet" />
          ))}
      </head>

      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        {assets.js &&
          assets.js.map((j, idx) => (
            <script key={idx} src={`${process.env.PUBLIC_PATH}${j}`} />
          ))}
      </body>
    </html>
  );
};

export default Html;
