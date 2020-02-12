import React from 'react';

/** @typedef {import('react-static').DocumentProps<{}>} DocumentProps */
/** @typedef {import('react-static').RouteFlags} RouteFlags */
/** @typedef {Omit<DocumentProps, 'state'> & { state: Pick<DocumentProps['state'], 'siteData'> & RouteFlags }} Props */

/** @type {React.FC<Props>} */
const Root = ({ Body, children, Head, state }) => (
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
      {(state.stage === 'prod' && !state.staging) || (
        <meta name="robots" content="noindex,nofollow,noarchive" />
      )}
      <meta name="author" content="Shuhei Nomura (@danmaq)" />
      <meta
        name="description"
        content="萩池々茶屋は、萩越ヶ浜の漁師 第五良栄丸が経営するレストランです。 魚介類を産地から都心部に直送する前に、漁船より直接水揚げするため、鮮度の良い海産物が召し上がれます。 萩池々茶屋は、明神池が眺望できるお店です。萩の地域活性化に貢献することを企業理念としております。"
      />
      <meta
        name="keywords"
        content={[
          '萩池々茶屋',
          '池々茶屋',
          '幻の魚',
          '幻の貝',
          '萩の梅貝',
          '萩いけいけ',
          '萩のバイ貝',
          '萩',
          'ランチ',
          'ディナー',
          '食事',
          '梅貝',
          '明神池',
          '越ケ浜',
          '笠山'
        ].join(',')}
      />
      <title>萩池々茶屋</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Head>
    <Body>
      {children}
      <script
        crossOrigin="anonymous"
        src="https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.includes%2CPromise"
      />
    </Body>
  </html>
);
Root.displayName = 'Root';

export default Root;
