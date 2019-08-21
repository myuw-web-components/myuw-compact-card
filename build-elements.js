const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const jsFiles = [
    './dist/element/runtime.js',
    './dist/element/polyfills-es5.js',
    './dist/element/polyfills.js',
    './dist/element/scripts.js',
    './dist/element/main.js',
    './dist/element/styles.js'
  ];

  await fs.ensureDir('element');
  await concat(jsFiles, 'element/element.js');
})();
