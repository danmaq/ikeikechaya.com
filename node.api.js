/* eslint no-param-reassign: off */
/* eslint react/jsx-filename-extension: warn */

import { ServerStyleSheets } from '@material-ui/core/styles';
import React from 'react';

/** @typedef {import('react-static').RouteFlags} RouteFlags */
/** @typedef {import('webpack').Configuration} Configuration */
/** @typedef {{ muiSheets?: ServerStyleSheets }} Meta */

export default () => ({
  /** @type {(App: React.ComponentType, context: { meta: Meta }) => React.ComponentType} */
  beforeRenderToHtml: (App, { meta }) => {
    meta.muiSheets = new ServerStyleSheets();
    return meta.muiSheets.collect(App);
  },

  /** @type {(elements: React.ComponentType[], context: { meta: Meta }) => React.ComponentType[]} */
  headElements: (elements, { meta }) => [
    <meta charSet="UTF-8" />,
    ...elements,
    meta.muiSheets && meta.muiSheets.getStyleElement()
  ],

  /** @type {(config: Configuration, options: RouteFlags) => Configuration} */
  webpack: ({ devServer, entry, ...config } = {}) => ({
    ...config,
    devServer: { ...devServer, disableHostCheck: true },
    devtool: 'source-map',
    entry: Array.isArray(entry)
      ? ['@babel/polyfill', ...entry]
      : ['@babel/polyfill', entry]
  })
});
