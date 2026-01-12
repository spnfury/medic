const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const files = [
    'public/assets/hero-image.png',
    'public/assets/app_screens/screen1.jpg',
    'public/assets/app_screens/screen2.jpg',
    'public/assets/app_screens/screen3.jpg',
    'public/assets/app_screens/screen4.jpg',
    'public/assets/app_screens/screen5.jpg'
];

async function checkDimensions() {
    for (const file of files) {
        const filePath = path.join(__dirname, '..', file);
        try {
            if (fs.existsSync(filePath)) {
                const metadata = await sharp(filePath).metadata();
                console.log(`${file}: ${metadata.width}x${metadata.height}`);
            } else {
                console.log(`${file}: NOT FOUND`);
            }
        } catch (error) {
            console.error(`Error processing ${file}:`, error.message);
        }
    }
}

checkDimensions();
