const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const screens = [
    'public/assets/app_screens/screen1.jpg',
    'public/assets/app_screens/screen2.jpg',
    'public/assets/app_screens/screen3.jpg',
    'public/assets/app_screens/screen4.jpg',
    'public/assets/app_screens/screen5.jpg'
];

const hero = 'public/assets/hero-image.png';

async function cropImages() {
    console.log('Starting crop process...');

    // Crop screens: Remove top 60px and bottom 60px
    for (const screen of screens) {
        const filePath = path.join(__dirname, '..', screen);
        const tempPath = filePath + '.tmp';

        try {
            if (!fs.existsSync(filePath)) {
                console.log(`File not found: ${screen}`);
                continue;
            }

            const image = sharp(filePath);
            const metadata = await image.metadata();

            // Safety check - avoid re-cropping if already small
            if (metadata.height > 950) { // Screen shots are 1024, cropped will be ~904
                console.log(`Processing ${screen} (${metadata.width}x${metadata.height})...`);

                const topCrop = 60;
                const bottomCrop = 60;
                const newHeight = metadata.height - topCrop - bottomCrop;

                // Write to a temporary file first
                await image
                    .extract({ left: 0, top: topCrop, width: metadata.width, height: newHeight })
                    .toFile(tempPath);

                console.log(`Saved temp file for ${screen}`);

                // Small delay to ensure file handle is released
                await new Promise(resolve => setTimeout(resolve, 500));

                // Copy temp back to original (overwrite)
                try {
                    fs.copyFileSync(tempPath, filePath);
                    console.log(`Overwrote original ${screen}`);
                } catch (copyErr) {
                    console.error(`Error copying back to ${screen}:`, copyErr.message);
                    // Attempt to rename if copy fails
                    try {
                        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
                        fs.renameSync(tempPath, filePath);
                        console.log(`Renamed temp to ${screen}`);
                    } catch (renameErr) {
                        console.error(`Error renaming to ${screen}:`, renameErr.message);
                    }
                }

                // Cleanup temp
                if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);

                console.log(`Successfully finished ${screen}`);
            } else {
                console.log(`Skipping ${screen} - already cropped (H: ${metadata.height})`);
            }
        } catch (error) {
            console.error(`Error processing ${screen}:`, error.message);
            // Try to clean up temp file if it exists
            if (fs.existsSync(tempPath)) {
                try { fs.unlinkSync(tempPath); } catch (e) { }
            }
        }
    }

    // Crop Hero
    try {
        const heroPath = path.join(__dirname, '..', hero);
        const tempHeroPath = heroPath + '.tmp';

        if (fs.existsSync(heroPath)) {
            const image = sharp(heroPath);
            const metadata = await image.metadata();

            if (metadata.height > 400) {
                console.log(`Processing hero (${metadata.width}x${metadata.height})...`);
                const topCrop = 25;
                const bottomCrop = 25;
                const newHeight = metadata.height - topCrop - bottomCrop;

                await image
                    .extract({ left: 0, top: topCrop, width: metadata.width, height: newHeight })
                    .toFile(tempHeroPath);

                await new Promise(resolve => setTimeout(resolve, 500));

                fs.copyFileSync(tempHeroPath, heroPath);
                fs.unlinkSync(tempHeroPath);

                console.log(`Successfully cropped hero`);
            } else {
                console.log(`Skipping hero - already cropped (H: ${metadata.height})`);
            }
        }
    } catch (error) {
        console.error(`Error processing hero:`, error.message);
    }
}

cropImages();
