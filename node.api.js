/** @typedef {import('react-static').RouteFlags} RouteFlags */
/** @typedef {import('webpack').Configuration} Configuration */

export default () => ({
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
