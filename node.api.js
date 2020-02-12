/** @typedef {import('webpack').Configuration} Configuration */

export default () => ({
  /** @type {(config: Configuration) => Configuration} */
  webpack: (config = {}) => ({ ...config, devtool: 'source-map' })
});
