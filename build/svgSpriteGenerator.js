const svgstore = require('svgstore');
const path = require('path');
const fs = require('fs');

let svgDir = path.join(__dirname, '../src/images/svg');
let outputDir = path.join(__dirname, '../src/images');
let sprites = svgstore();

/**
 * Reads all SVG files in `src/images/svg/*.svg`
 * Outputs single SVG file as `src/images/sprites.svg`
 */
fs.readdir(svgDir, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    let fileExt = path.extname(file).substr(1);

    if (fileExt === 'svg') {
      sprites.add(
        path.basename(file, '.svg'),
        fs.readFileSync(`${svgDir}/${file}`, 'utf8')
      );
    }
  });

  fs.writeFileSync(`${outputDir}/sprites.svg`, sprites);
});
