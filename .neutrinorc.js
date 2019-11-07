const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  use: [
    ['@neutrinojs/airbnb-base', {
      eslint: {
        rules: {
          "linebreak-style": ["error", "windows"],
          "indent": ["error", 4, { "SwitchCase": 1 }],
          "no-console": "off",
          "max-len": 0,
          "prefer-destructuring": ["error", {"object": false, "array": true}],
        }
      }
    }],
    ['@neutrinojs/vue',
      {
        html: {
          title: 'Posts'
        },
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
        ],
        plugins: [
          new VueLoaderPlugin(),
        ]
      }
    ],
  ]
};
