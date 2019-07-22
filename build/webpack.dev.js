// Node Packages
const fs = require('fs');
const path = require('path');
const os = require('os');

// To import variables.json5 - https://github.com/Updater/node-sass-json-importer
const jsonImporter = require('node-sass-json-importer');

/**
 * Initialize locally signed SSL files.
 */

module.exports = (env, argv, config) => {
  return {
    mode: 'development',

    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'vue-style-loader'
              // loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                importer: jsonImporter(),
                data: `@import '@/src/styles/_settings.scss';`
              }
            }
          ]
        }
      ]
    },
    optimization: {
      splitChunks: {
        minChunks: Infinity // Disables Code Splitting in Development
      }
    },

    plugins: [],

    /**
     * HTTPS Setup
     * @see
     * https://github.com/dakshshah96/local-cert-generator
     * https://medium.freecodecamp.org/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec
     */
    devServer: {
      hot: true,
      host: config.host,
      port: config.port,
      https: getCertificates(config),
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      disableHostCheck: true // Temp fix some webpack regression bug - https://github.com/webpack/webpack-dev-server/issues/1604
    }
  };
};

/**
 * Function to get certificates from valet config in `~/.config/valet/Certificates`
 * @param {Object} config
 * @return {Object|Boolean}
 */
const getCertificates = function(config) {
  let key, cert;

  // prettier-ignore
  try {
    key = fs.readFileSync(path.join(os.homedir(), `/.config/valet/Certificates/${config.host}.key`));
  } catch (err) {
    key = false;
    console.log("Key not found. Assets will be served in HTTP. To use HTTPS, run 'valet secure'.");
  }

  // prettier-ignore
  try {
    cert = fs.readFileSync(path.join(os.homedir(), `/.config/valet/Certificates/${config.host}.crt`));
  } catch (err) {
    cert = false;
    console.log("Cert not found. Assets will be served in HTTP. To use HTTPS, run 'valet secure'.");
  }

  return key && cert ? { key: key, cert: cert } : true;
};
