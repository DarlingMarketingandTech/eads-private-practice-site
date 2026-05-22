import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generateOGImage() {
  try {
    const photoPath = path.join(__dirname, '..', 'public', 'images', 'home page', 'new-bio-photo.jpg');
    const outputPath = path.join(__dirname, '..', 'public', 'og.png');

    if (!fs.existsSync(photoPath)) {
      throw new Error(`Bio photo not found at ${photoPath}`);
    }

    const cardWidth = 1200;
    const cardHeight = 630;
    const colWidth = cardWidth / 2; // 600px each column

    // Left panel: headshot photo, cropped to half the card width
    const leftPanel = await sharp(photoPath)
      .resize(colWidth, cardHeight, {
        fit: 'cover',
        position: 'attention',
      })
      .png()
      .toBuffer();

    // Right panel: warm cream background with centered name/practice text
    const bgColor = '#F8F5EE';
    const primaryColor = '#1B3A2F';
    const accentColor = '#3D6B54';

    const rightPanelSvg = `<svg width="${colWidth}" height="${cardHeight}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${colWidth}" height="${cardHeight}" fill="${bgColor}"/>
  <text
    x="${colWidth / 2}"
    y="${cardHeight / 2 - 48}"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="52"
    font-weight="bold"
    fill="${primaryColor}"
    text-anchor="middle"
    dominant-baseline="middle"
  >Tucker Eads, LCSW</text>
  <rect
    x="${colWidth / 2 - 80}"
    y="${cardHeight / 2 - 4}"
    width="160"
    height="3"
    fill="${accentColor}"
    rx="1.5"
  />
  <text
    x="${colWidth / 2}"
    y="${cardHeight / 2 + 56}"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="36"
    fill="${accentColor}"
    text-anchor="middle"
    dominant-baseline="middle"
  >Blazing Star Therapy</text>
</svg>`;

    const rightPanel = Buffer.from(rightPanelSvg);

    // Compose left photo and right text panel side by side
    await sharp({
      create: {
        width: cardWidth,
        height: cardHeight,
        channels: 4,
        background: { r: 248, g: 245, b: 238, alpha: 1 },
      },
    })
      .composite([
        { input: leftPanel, left: 0, top: 0 },
        { input: rightPanel, left: colWidth, top: 0 },
      ])
      .png()
      .toFile(outputPath);

    console.log('✅ OG image generated successfully at:', outputPath);
    console.log('   Dimensions: 1200x630px');
    console.log('   Format: PNG');
    console.log('   Layout: Left = bio photo, Right = Tucker Eads, LCSW | Blazing Star Therapy');
  } catch (error) {
    console.error('❌ Error generating OG image:', error);
    process.exit(1);
  }
}

generateOGImage();

