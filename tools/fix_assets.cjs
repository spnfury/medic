const sharp = require('sharp');
const path = require('path');

const ROOT = path.join(__dirname, '..');

async function createFavicon() {
  console.log('Creating favicon from header logo...');
  const logoPath = path.join(ROOT, 'public/assets/header-logo.png');
  const meta = await sharp(logoPath).metadata();
  
  // The icon (cross) occupies roughly the left 30% of the header logo
  const iconWidth = Math.round(meta.width * 0.28);
  const iconHeight = meta.height;
  
  // Extract the icon portion, then resize to 64x64 for favicon
  await sharp(logoPath)
    .extract({ left: 0, top: 0, width: iconWidth, height: iconHeight })
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(ROOT, 'public/favicon.png'));
  
  console.log('Favicon created: public/favicon.png (64x64)');
  
  // Also create a 32x32 version
  await sharp(logoPath)
    .extract({ left: 0, top: 0, width: iconWidth, height: iconHeight })
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(ROOT, 'public/favicon-32.png'));
  
  console.log('Favicon 32x32 created');
}

async function cropGooglePlayBadge() {
  console.log('Cropping Google Play badge to remove internal padding...');
  const badgePath = path.join(ROOT, 'public/assets/google-play-badge.png');
  const outPath = path.join(ROOT, 'public/assets/google-play-badge-cropped.png');
  
  // Google Play official badge has ~18-20% padding on all sides
  // We need to trim the transparent/white space around it
  const trimmed = await sharp(badgePath)
    .trim()  // Auto-trim transparent/near-white borders
    .toFile(outPath);
  
  console.log(`Cropped Google Play badge: ${trimmed.width}x${trimmed.height}`);
  
  // Replace the original
  const fs = require('fs');
  fs.copyFileSync(outPath, badgePath);
  fs.unlinkSync(outPath);
  console.log('Replaced original google-play-badge.png with cropped version');
}

async function main() {
  await createFavicon();
  await cropGooglePlayBadge();
  console.log('Done!');
}

main().catch(console.error);
