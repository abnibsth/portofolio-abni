const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'public/images/abni-jousting1.png');
const appFavicon = path.join(__dirname, 'app/favicon.ico');
const appIconPng = path.join(__dirname, 'app/icon.png');
const publicFavicon = path.join(__dirname, 'public/favicon.ico');

console.log('Source:', src);

if (fs.existsSync(src)) {
  const fileBuffer = fs.readFileSync(src);
  fs.writeFileSync(appFavicon, fileBuffer);
  fs.writeFileSync(appIconPng, fileBuffer);
  fs.writeFileSync(publicFavicon, fileBuffer);
  console.log('Successfully replaced all favicon.ico and icon.png files with abni-jousting1.png!');
} else {
  console.error('Source image does not exist:', src);
}
