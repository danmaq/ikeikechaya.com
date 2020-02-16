import React from 'react';

/** @typedef {import('react-static').DocumentProps<{}>} DocumentProps */
/** @typedef {import('react-static').ReactStaticConfig} ReactStaticConfig */
/** @typedef {import('react-static').RouteFlags} RouteFlags */
/** @typedef {import('react-static').Route} Route */

/** @typedef {Pick<DocumentProps, 'Body' | 'Head' | 'Html'>} DOMPropsBase */

/**
 * @typedef DOMPropsExtends
 * @property {string} [baseUrl]
 * @property {string} [description]
 * @property {string} [descriptionShort]
 * @property {string} [icon]
 * @property {string} lang
 * @property {number} [latitude]
 * @property {string} [locale]
 * @property {number} [longitude]
 * @property {boolean} [norobot]
 * @property {string} [path]
 * @property {string} title
 */

/** @typedef {DOMPropsBase & DOMPropsExtends} DOMProps */

/** @type {React.FC<DOMProps>} */
const DOM = ({
  baseUrl,
  Body,
  children,
  description,
  descriptionShort,
  Head,
  Html,
  icon,
  lang,
  locale,
  latitude,
  longitude,
  norobot,
  path,
  title
}) => {
  const color = '#0C0C88';
  const desc = !!(description || descriptionShort);
  const pos = !!(latitude && longitude);
  const url = `${baseUrl}/${path}`;
  const image = `${baseUrl}/images/home/slideshow00.jpg`;
  return (
    <Html
      lang={lang}
      itemScope
      itemType="https://schema.org/Article"
      style={{ backgroundColor: '#0C0C88' }}
    >
      <Head prefix="og: http://ogp.me/ns# website: http://ogp.me/ns/website#">
        <meta httpEquiv="cleartype" content="on" />
        <meta httpEquiv="x-ua-compatible" content="ie=Edge" />
        <title>{title}</title>
        {desc && (
          <meta
            itemProp="description"
            content={description || descriptionShort}
          />
        )}
        <meta itemProp="image" content={image} />
        <meta itemProp="name" content={title} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content={color} />
        <meta name="apple-mobile-web-app-title" content={title} />
        <meta name="application-name" content={title} />
        <meta name="color-scheme" content="only light" />
        {desc && (
          <meta name="description" content={description || descriptionShort} />
        )}
        <meta name="geo.placename" content={title} />
        {pos && (
          <meta name="geo.position" content={`${latitude};${longitude}`} />
        )}
        <meta name="geo.region" content="JP" />
        <meta
          name="google-site-verification"
          content="EYCxByEbK1022IJuw0n02MKiiSNDOjLPHoAdmpO0mKM"
        />
        {pos && <meta name="ICBM" content={`${latitude}, ${longitude}`} />}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="renderer" content="webkit" />
        {norobot && (
          <meta
            name="robots"
            content="noindex,nofollow,noodp,noarchive,nosnippet,noimageindex"
          />
        )}
        <meta name="theme-color" content={color} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@danmaq" />
        <meta
          name="verify-v1"
          content="uFDAqcIHu44EC4Fnw5dfDQRx3UrbY+FtONeiafAkXeo="
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="y-key" content="9f28bd124221bcb5" />
        {desc && (
          <meta
            property="og:description"
            content={descriptionShort || description}
          />
        )}
        <meta property="og:image" content={image} />
        <meta
          property="og:image:alt"
          content="丸い地球からの恵み: 船上から望む水平線からは、地球そのものを感じることができます。私たちは地球からいただく恩恵を大切にし、多くの方に最良の形でお届けしたいと考えています。 -- produced by 第五良栄丸"
        />
        {locale && <meta property="og:locale" content={locale} />}
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="op:markup_version" content="v1.0" />
        <link rel="apple-touch-icon" sizes="128x128" href={icon} />
        <link rel="author" href="https://twitter.com/danmaq" />
        <link rel="icon" sizes="128x128" href={icon} />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap"
        />
        <link rel="bookmark" href="/" />
        <link rel="canonical" href={url} />
        <link rel="first" href="/" />
      </Head>
      <Body style={{ backgroundColor: '#FDFDFB' }}>{children}</Body>
    </Html>
  );
};
DOM.defaultProps = {
  author: '',
  baseUrl: '',
  description: '',
  descriptionShort: '',
  path: ''
};
DOM.displayName = 'RootDOM';

/** @typedef {Pick<DocumentProps['state'], 'siteData'> & RouteFlags & { config: ReactStaticConfig, route?: Route }} State */

/** @typedef {Omit<DocumentProps, 'state'> & { state: State }} Props */

/** @type {React.FC<Props>} */
const Root = ({ Body, children, Head, Html, state }) => (
  <DOM
    baseUrl={state.config.siteRoot}
    Body={Body}
    description="萩池々茶屋は、萩越ヶ浜の漁師 第五良栄丸が経営するレストランです。魚介類を産地から都心部に直送する前に、漁船より直接水揚げするため、鮮度の良い海産物が召し上がれます。萩池々茶屋は、明神池が眺望できるお店です。萩の地域活性化に貢献することを企業理念としております。"
    descriptionShort="萩・越ヶ浜の漁師、第五良栄丸が経営するレストラン。明神池のほとりから、萩の地域活性化を応援しております。"
    Head={Head}
    Html={Html}
    icon="/images/header/conch_128.png"
    lang="ja"
    latitude={34.448272}
    locale="ja_JP"
    longitude={131.409517}
    norobot={state.stage !== 'prod' || state.staging}
    path={state.route && state.route.path}
    title="萩池々茶屋"
  >
    {children}
  </DOM>
);
Root.displayName = 'Root';

export default Root;
