import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Brand colors
const colors = {
  primary: '#334948',      // Deep Teal
  accent: '#D4A574',       // Gold
  background: '#FEFEFE',   // Near white
  text: '#334948',         // Deep Teal
  muted: '#5E7472',
};

async function generateOGImage() {
  try {
    const photoPath = path.join(__dirname, '..', 'public', 'images', 'home page', 'new-bio-photo.jpg');
    const outputPath = path.join(__dirname, '..', 'public', 'og.png');

    if (!fs.existsSync(photoPath)) {
      throw new Error(`Bio photo not found at ${photoPath}`);
    }

    const cardWidth = 1200;
    const cardHeight = 630;
    const photoWidth = 480;

    const photoBuffer = await sharp(photoPath)
      .resize(photoWidth, cardHeight, {
        fit: 'cover',
        position: 'attention',
      })
      .modulate({ brightness: 1.03, saturation: 1.02 })
      .toBuffer();

    const svg = `
<svg width="${cardWidth}" height="${cardHeight}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .serif { font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif; }
      .sans { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
    </style>
    <linearGradient id="panelGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.98"/>
      <stop offset="100%" stop-color="#F6F1E8" stop-opacity="1"/>
    </linearGradient>
    <linearGradient id="fadeRight" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FEFEFE" stop-opacity="0"/>
      <stop offset="100%" stop-color="#FEFEFE" stop-opacity="1"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="760" height="${cardHeight}" fill="url(#panelGlow)"/>
  <circle cx="120" cy="98" r="86" fill="${colors.accent}" fill-opacity="0.12"/>
  <circle cx="684" cy="544" r="168" fill="${colors.primary}" fill-opacity="0.05"/>
  <rect x="690" y="0" width="30" height="${cardHeight}" fill="url(#fadeRight)"/>

  <g transform="translate(88, 98)">
    <text x="0" y="0" class="sans" font-size="22" font-weight="600" letter-spacing="2.8" fill="${colors.accent}">
      BLOOMINGTON TELEHEALTH
    </text>
    <line x1="0" y1="30" x2="96" y2="30" stroke="${colors.accent}" stroke-width="4"/>

    <text x="0" y="118" class="serif" font-size="66" font-weight="700" fill="${colors.text}">
      Blazing Star Therapy
    </text>

    <text x="0" y="188" class="sans" font-size="28" font-weight="500" fill="${colors.muted}">
      Psychotherapy in Illinois and Indiana
    </text>

    <text x="0" y="302" class="sans" font-size="42" font-weight="700" fill="${colors.text}">
      Tucker Eads, LCSW
    </text>

    <text x="0" y="356" class="sans" font-size="26" font-weight="400" fill="${colors.muted}">
      Evidence-informed therapy for anxiety, stress,
    </text>
    <text x="0" y="394" class="sans" font-size="26" font-weight="400" fill="${colors.muted}">
      chronic pain, and life transitions.
    </text>

    <rect x="0" y="448" width="344" height="60" rx="30" fill="${colors.primary}"/>
    <text x="34" y="487" class="sans" font-size="24" font-weight="600" fill="#FFFFFF">
      blazingstartherapy.com
    </text>
  </g>
</svg>
`;

    const panelBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

    await sharp({
      create: {
        width: cardWidth,
        height: cardHeight,
        channels: 4,
        background: colors.background,
      },
    })
      .composite([
        { input: photoBuffer, left: cardWidth - photoWidth, top: 0 },
        { input: panelBuffer, left: 0, top: 0 },
      ])
      .png()
      .toFile(outputPath);

    console.log('✅ OG image generated successfully at:', outputPath);
    console.log('   Dimensions: 1200x630px');
    console.log('   Format: PNG');
    console.log('   Photo: Included');
  } catch (error) {
    console.error('❌ Error generating OG image:', error);
    process.exit(1);
  }
}

generateOGImage();

