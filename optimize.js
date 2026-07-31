import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = 'public/assets/assets';

async function optimize() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
      const inputPath = path.join(dir, file);
      const ext = path.extname(file);
      const webpPath = inputPath.replace(ext, '.webp');
      
      const stats = fs.statSync(inputPath);
      // Only convert files larger than 100KB to save space
      if (stats.size > 100 * 1024) {
        console.log(`Optimizing: ${file} (${(stats.size/1024/1024).toFixed(2)} MB)`);
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(webpPath);
        
        // Remove original file after successful conversion to enforce usage of webp
        fs.unlinkSync(inputPath);
        console.log(`  -> Converted to ${path.basename(webpPath)} and original removed.`);
      }
    }
  }
}

optimize().catch(console.error);
