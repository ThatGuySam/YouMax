// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'YouMAX',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      purgeConfig: {
        content: [
          './src/**/*.vue',
          './src/**/*.js',
          './src/**/*.html',
        ],
        whitelist: [
          'body',
          'html',
          'img',
          'a',
          'g-image',
          'g-image--lazy',
          'g-image--loaded',
        ],
        extractors: [
          {
              extractor: content => content.match(/[A-z0-9-:\\/]+/g),
              extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug'],
          },
        ],
      },
    }
  ]
}
