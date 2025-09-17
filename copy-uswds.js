const fs = require('fs-extra');
const path = require('path');

async function copyUSWDS() {
  const uswdsDist = path.resolve(__dirname, 'node_modules/@uswds/uswds/dist');
  const uswdsSass = path.resolve(__dirname, 'node_modules/@uswds/uswds/src/stylesheets');
  const assetsDir = path.resolve(__dirname, 'assets/uswds');
  const sassDir = path.resolve(__dirname, '_sass/uswds/src');

  try {
    console.log('Copying USWDS fonts, images, and scripts...');
    fs.copySync(uswdsDist, assetsDir, {
      filter: (src, dest) => {
        if (src.endsWith('.md') || src.endsWith('.zip') || src.includes('css') || src.includes('scss')) {
          return false;
        }
        return true;
      },
      overwrite: true,
    });
    console.log('USWDS install complete.');
  } catch (error) {
    console.error('Error copying USWDS:', error);
  }
}

copyUSWDS();