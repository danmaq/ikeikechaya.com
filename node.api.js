/* eslint no-param-reassign: off */
import { ServerStyleSheets } from '@material-ui/core/styles';

/** @typedef {import('react-static').RouteFlags} RouteFlags */
/** @typedef {import('webpack').Configuration} Configuration */

export default () => ({
  /** @type {(App: React.ComponentType, context: { meta: { muiSheets?: ServerStyleSheets } }) => React.ComponentType} */
  beforeRenderToHtml: (App, { meta }) => {
    meta.muiSheets = new ServerStyleSheets();
    return meta.muiSheets.collect(App);
  },

  /** @type {(elements: React.ComponentType[], context: { meta: { muiSheets?: ServerStyleSheets } }) => React.ComponentType[]} */
  headElements: (elements, { meta }) => [
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
