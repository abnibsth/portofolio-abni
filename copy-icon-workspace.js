const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'public/images/abni-jousting1.png');
const targetAppIcon = path.join(__dirname, 'app/icon.png');
const targetAppFavicon = path.join(__dirname, 'app/favicon.ico');
const targetPublicFavicon = path.join(__dirname, 'public/favicon.ico');

console.log('Source:', src);

if (fs.existsSync(src)) {
  fs.copyFileSync(src, targetAppIcon);
  fs.copyFileSync(src, targetAppFavicon);
  fs.copyFileSync(src, targetPublicFavicon);
  console.log('Successfully updated favicon and site icons with abni-jousting1.png!');
} else {
  console.error('Source image does not exist:', src);
}
