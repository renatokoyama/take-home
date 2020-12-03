module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        lib: path.resolve(__dirname, '../lib'),
        utils: path.resolve(__dirname, '../utils'),
        components: path.resolve(__dirname, '../components'),
      },
    }
    return config
  },
}
