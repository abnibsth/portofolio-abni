const { execSync } = require('child_process');
console.log('Installing react-icons...');
try {
  execSync('npm install react-icons', { stdio: 'inherit' });
  console.log('Successfully installed react-icons!');
} catch (err) {
  console.error('Failed to install:', err);
}
