const fs = require('fs');

/**
 * Creates a `hot` file in `dist` folder.
 * This will work with `Webpackr`
 *
 * @see WebpackrTag() Statamic Tag Addon
 */
module.exports = function(mode, config) {
  const file = `${config.distPath}/hot`;

  if (!fs.existsSync(config.distPath)) {
    fs.mkdirSync(config.distPath);
  }

  // Run in production
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
  }

  // Run in development
  if (mode === 'development') {
    fs.writeFileSync(file, 'hot-reload-enabled');
  }
};
