import React from 'react';

/** @typedef {import('react-static').DocumentProps<{}>} DocumentProps */
/** @typedef {import('react-static').ReactStaticConfig} ReactStaticConfig */
/** @typedef {import('react-static').RouteFlags} RouteFlags */
/** @typedef {import('react-static').Route} Route */

/** @typedef {Pick<DocumentProps, 'Body' | 'Head'>} DOMPropsBase */

/**
 * @typedef DOMPropsExtends
 * @property {string} [author]
 * @property {string} [baseUrl]
 * @property {string} [classification]
 * @property {Date} [date]
 * @property {string} [description]
 * @property {string} [descriptionShort]
 * @property {string} [keywords]
 * @property {string} lang
 * @property {boolean} [norobot]
 * @property {string} [path]
 * @property {string} title
 */

/** @typedef {DOMPropsBase & DOMPropsExtends} DOMProps */

/** @type {React.FC<DOMProps>} */
const DOM = ({
  author,
  baseUrl,
  Body,
  classification,
  date,
  children,
  description,
  descriptionShort,
  Head,
  keywords,
  lang,
  norobot,
  path,
  title
}) => (
  <html lang={lang} xmlns="http://www.w3.org/1999/xhtml">
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=Edge" />
      <meta name="author" content={author} />
      {date && <meta name="keywords" content={date.toISOString()} />}
      <meta name="classification" content={classification} />
      <meta name="code" scheme="081" />
      <meta name="color-scheme" content="only light" />
      {(description || descriptionShort) && (
        <meta name="description" content={description || descriptionShort} />
      )}
      <meta
        name="google-site-verification"
        content="EYCxByEbK1022IJuw0n02MKiiSNDOjLPHoAdmpO0mKM"
      />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="referrer" content="origin-when-crossorigin" />
      {norobot && (
        <meta
          name="robots"
          content="noindex,nofollow,noodp,noarchive,nosnippet,noimageindex"
        />
      )}
      <meta name="tel" scheme="0838217111" />
      <meta name="theme-color" content="#0C0C88" />
      <meta
        name="verify-v1"
        content="uFDAqcIHu44EC4Fnw5dfDQRx3UrbY+FtONeiafAkXeo="
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta name="y-key" content="9f28bd124221bcb5" />
      {(descriptionShort || description) && (
        <meta
          property="og:description"
          content={descriptionShort || description}
        />
      )}
      <meta
        property="og:image"
        content={`${baseUrl}/images/home/slideshow00.jpg`}
      />
      <meta property="og:locale" content={lang} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta name="og:url" content={`${baseUrl}/${path}`} />
      <meta name="twitter:card" content="summary_large_image" />
      {author && <meta name="twitter:creator" content={author} />}
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap"
      />
      <link href="/" rel="bookmark" />
    </Head>
    <Body>
      {children}
      <script
        crossOrigin="anonymous"
        src="https://polyfill.io/v3/polyfill.min.js"
      />
    </Body>
  </html>
);
DOM.defaultProps = {
  author: '',
  baseUrl: '',
  description: '',
  descriptionShort: '',
  keywords: '',
  path: ''
};
DOM.displayName = 'RootDOM';

/** @type {(...items: string[]) => string} */
const join = (...items) => items.join(',');

/** @typedef {Pick<DocumentProps['state'], 'siteData'> & RouteFlags & { config: ReactStaticConfig, route: Route }} State */

/** @typedef {Omit<DocumentProps, 'state'> & { state: State }} Props */

/** @type {React.FC<Props>} */
const Root = ({ Body, children, Head, state }) => (
  <DOM
    author="@danmaq"
    baseUrl={state.config.siteRoot}
    Body={Body}
    classification={join('restaurant', 'fishery')}
    date={new Date()}
    description="萩池々茶屋は、萩越ヶ浜の漁師 第五良栄丸が経営するレストランです。魚介類を産地から都心部に直送する前に、漁船より直接水揚げするため、鮮度の良い海産物が召し上がれます。萩池々茶屋は、明神池が眺望できるお店です。萩の地域活性化に貢献することを企業理念としております。"
    descriptionShort="萩池々茶屋は、萩越ヶ浜の漁師 第五良栄丸が経営するレストランです。明神池のほとりから、萩の地域活性化を応援しております。"
    Head={Head}
    keywords={join(
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
    )}
    lang="ja_JP"
    norobot={state.stage === 'prod' && !state.staging}
    path={state.route.path}
    title="萩池々茶屋"
  >
    {children}
  </DOM>
);
Root.displayName = 'Root';

export default Root;
