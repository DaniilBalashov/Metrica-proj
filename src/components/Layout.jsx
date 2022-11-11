import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export default function Layout({ initState }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.initState=${JSON.stringify(initState)}`,
          }}
        />
        <script defer src="js/app.js" />
        <script defer src="js/vendor.js" />
        <link href="/js/styles/mainStyles.css" rel="stylesheet" type="text/css" />
        <link href="/js/styles/media.css" rel="stylesheet" type="text/css" />
        <link href="/js/styles/imports.css" rel="stylesheet" type="text/css" />
        <title>МЕТРИКА тестирование</title>
      </head>
      <body>
        <div id="root">
          <StaticRouter location={initState.path}>
            <App {...initState} />
          </StaticRouter>
        </div>
      </body>
    </html>
  );
}
