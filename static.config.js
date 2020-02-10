import path from 'path';
import Root from './src/components/template/Root';

/** @typedef {import('react-static').ReactStaticConfig} ReactStaticConfig */
/** @typedef {import('react-static').Route} Route */
/** @typedef {import('react-static').RouteFlags} RouteFlags */

/** @type {Pick<ReactStaticConfig, Exclude<keyof ReactStaticConfig, 'getRoutes'>> & { getRoutes?: (flags: RouteFlags) => (Route[] | Promise<Route[]>), [o: string]: unknown }} */
const config = {
  Document: Root,
  entry: path.resolve('src', 'index.tsx'),
  getRoutes: async () => [],
  getSiteData: routeFlags => ({ routeFlags }),
  plugins: [
    'react-static-plugin-typescript',
    [
      'react-static-plugin-source-filesystem',
      { location: path.resolve('src', 'pages') }
    ],
    'react-static-plugin-react-router',
    'react-static-plugin-sitemap'
  ],
  siteRoot: 'http://ikeikechaya.com',
  stagingSiteRoot: 'https://ikeikechaya-staging.netlify.com'
};

export default config;
