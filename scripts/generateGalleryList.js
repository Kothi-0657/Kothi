// scripts/generateGalleryList.js
import fs from "fs";
import path from "path";

// Define source and destination
const galleryDir = path.join(process.cwd(), "public/gallery");
const outputFile = path.join(process.cwd(), "galleryData.json");

// Get all image filenames
const files = fs
  .readdirSync(galleryDir)
  .filter((file) => /\.(png|jpe?g|gif|webp)$/i.test(file))
  .sort();

// Write to JSON
fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));

console.log(`✅ Gallery data generated: ${files.length} files found in /public/gallery`);
