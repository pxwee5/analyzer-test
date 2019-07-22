const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const jsonImporter = require('node-sass-json-importer');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = (env, argv, config) => {
  return {
    mode: 'production',

    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                // importer: jsonImporter(),
                // data: `@import '@/src/styles/_settings.scss';`
              }
            }
          ]
        }
      ]
    },

    optimization: {
      splitChunks: {
        chunks: 'all',
        // name: false, // Recommended by Webpack, but not friendly to implement.
        cacheGroups: {
          vendors: {
            // Test for module in node_modules & entry name is not "runtime"
            test: (module, chunk) => {
              return (
                new RegExp(/[\\/]node_modules[\\/]/).test(module.resource) &&
                chunk.map(c => c.name).indexOf('runtime') < 0
              );
            }
          }
        }
      },

      minimizer: [
        /**
         * @deprecated - Leave this here for a couple months before deleting this and its plugin package.
         */
        // new UglifyJSPlugin({
        //   sourceMap: true,
        //   uglifyOptions: {
        //     parallel: true,
        //     compress: {
        //       drop_console: true
        //     },
        //     output: {
        //       comments: false
        //     }
        //   }
        // }),
        /**
         * Webpack Plugin: https://github.com/webpack-contrib/terser-webpack-plugin
         * Terser: https://github.com/terser-js/terser
         */
        new TerserPlugin({
          // cache: true,
          parallel: true,
          sourceMap: true,
          terserOptions: {
            compress: {
              pure_funcs: ['console.log', 'console.dir']
            },
            output: {
              comments: false
            }
          }
        }),
        new OptimizeCSSAssetsPlugin()
      ],

      concatenateModules: true
    },

    plugins: [
      // Generate stats.json file so that we can run it using npm script
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: true,
        statsOptions: { source: false }
      })
    ]
  };
};
