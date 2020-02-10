import React from 'react';

/** @typedef {import('react-static').DocumentComponent} DocumentComponent */

/** @type {DocumentComponent} */
const Root = ({ Body, children, Head }) => (
  <html lang="ja">
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=Edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta
        content="EYCxByEbK1022IJuw0n02MKiiSNDOjLPHoAdmpO0mKM"
        name="google-site-verification"
      />
      <meta
        content="uFDAqcIHu44EC4Fnw5dfDQRx3UrbY+FtONeiafAkXeo="
        name="verify-v1"
      />
      <meta content="9f28bd124221bcb5" name="y-key" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Head>
    <Body>{children}</Body>
  </html>
);
Root.displayName = 'Root';

export default Root;
