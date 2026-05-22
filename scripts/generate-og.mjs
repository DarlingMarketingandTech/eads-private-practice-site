import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generateOGImage() {
  try {
    const photoPath = path.join(__dirname, '..', 'public', 'images', 'home page', 'tucker_headshot (1).jpg');
    const outputPath = path.join(__dirname, '..', 'public', 'og.png');

    if (!fs.existsSync(photoPath)) {
      throw new Error(`Headshot not found at ${photoPath}`);
    }

    const cardWidth = 1200;
    const cardHeight = 630;

    await sharp(photoPath)
      .resize(cardWidth, cardHeight, {
        fit: 'cover',
        position: 'attention',
      })
      .modulate({ brightness: 1.02, saturation: 1.02 })
      .png()
      .toFile(outputPath);

    console.log('✅ OG image generated successfully at:', outputPath);
    console.log('   Dimensions: 1200x630px');
    console.log('   Format: PNG');
    console.log('   Photo: Headshot-only');
  } catch (error) {
    console.error('❌ Error generating OG image:', error);
    process.exit(1);
  }
}

generateOGImage();

