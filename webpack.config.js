// Node Packages
const path = require('path');
const url = require('url');

// Webpack Packages
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

// Build Files
const setHotReload = require('./build/utils/setHotReload.js');
// const configDev = require('./build/webpack.dev.js');
const configProd = require('./build/webpack.prod.js');

// Configuration
const config = {
  host: 'rakenwebsite.test',
  port: 8080, // Only used in devServer
  themePath: path.resolve(__dirname),
  sourcePath: path.resolve(__dirname, './src'),
  distPath: path.resolve(__dirname, './dist'),
  themePublicPath: '/site/themes/raken-2.0/',
  distPublicPath: '/site/themes/raken-2.0/dist/'
};

/**
 * This is the base configuration
 */
module.exports = (env, argv) => {
  setHotReload(argv.mode, config);

  const baseConfig = {
    entry: {
      runtime: ['promise-polyfill/src/polyfill'],
      main: './src/script/index.js',
      style: './src/styles/main.scss'
    },

    // prettier-ignore
    output: {
      path: config.distPath,
      publicPath: argv.mode === 'production' 
        ? config.distPublicPath 
        : `//${config.host}:${config.port}` + config.distPublicPath, // Supports HMR
      filename: argv.mode === 'production' ? '[name].[contenthash:8].js' : '[name].js',
      chunkFilename: argv.mode === 'production' ? '[name].[contenthash:8].bundle.js' : '[name].bundle.js'
    },

    resolve: {
      modules: ['node_modules', config.themePath, `${config.sourcePath}/vue`],
      alias: {
        '@': config.themePath,
        vue$: 'vue/dist/vue.esm.js'
      },
      extensions: ['.js', '.vue']
    },

    externals: {},

    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules\/(?![vue\-disqus])/
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.svg$/,
          include: [`${config.sourcePath}/images/svg`],
          loader: 'svg-sprite-loader'
        },
        {
          test: /\.(jpe?g|png|gif|svg|woff|woff2)$/,
          loader: 'file-loader',
          include: [`${config.themePath}/img`, `${config.themePath}/src/fonts`],
          options: {
            name: '[path][name].[ext]',
            publicPath: config.themePublicPath,
            emitFile: false
          }
        }
      ]
    },

    optimization: {
      runtimeChunk: {
        name: 'runtime'
      }
    },

    plugins: [
      // prettier-ignore
      new MiniCssExtractPlugin({
        filename: argv.mode === 'production' ? '[name].[contenthash:8].css' : '[name].css',
        chunkFilename: argv.mode === 'production' ? '[name].[contenthash:8].css' : '[name].css'
      }),

      /**
       * Generates a manifest that contains all the initial (CSS & JS) files after code-splitting.
       *
       * @see WebpackrTags.php on implementation
       */
      new ManifestPlugin({
        fileName: 'webpackManifest.json',
        writeToFileEmit: true,
        filter: file => {
          // Only initial files and non-sourcemap files are needed.
          return file.isInitial && file.name.indexOf('map') < 0;
        },
        sort: (a, b) => {
          // Sort runtime and vendor related files at the top
          return new RegExp('runtime|vendor').test(a.name) ? -1 : 1;
        }
      }),

      new VueLoaderPlugin()
    ],

    devtool: argv.mode === 'production' ? 'source-map' : 'inline-source-map'
  };

  // console.dir(merge(baseConfig, configDev(env, argv, config)));
  // console.dir(merge(baseConfig, configProd(env, argv, config)));

  /**
   * This depending on mode, webpack-merge is used to merge this base
   * configuration with either config.dev.js or config.prod.js
   */
  return argv.mode === 'production'
    ? merge(baseConfig, configProd(env, argv, config))
    : merge(baseConfig, configDev(env, argv, config));
};
