import path from 'path';

/** @typedef {import('react-static').ReactStaticConfig} ReactStaticConfig */
/** @typedef {import('react-static').Route} Route */
/** @typedef {import('react-static').RouteFlags} RouteFlags */

/** @type {Pick<ReactStaticConfig, Exclude<keyof ReactStaticConfig, 'getRoutes'>> & { getRoutes?: (flags: RouteFlags) => (Route[] | Promise<Route[]>), [o: string]: unknown }} */
const config = {
  entry: path.resolve('src', 'index.tsx'),
  getRoutes: async () => [],
  plugins: [
    'react-static-plugin-typescript',
    [
      'react-static-plugin-source-filesystem',
      { location: path.resolve('src', 'pages') }
    ],
    'react-static-plugin-reach-router',
    'react-static-plugin-sitemap'
  ],
  siteRoot: 'http://ikeikechaya.com',
  stagingSiteRoot: 'http://ikeikechaya-staging.netlify.com'
};

export default config;
