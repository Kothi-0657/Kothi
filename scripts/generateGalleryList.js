// scripts/generateGalleryList.js
import fs from "fs/promises";
import path from "path";

// Async function to generate gallery data
async function generateGalleryList() {
  try {
    // Define source and destination paths
    const galleryDir = path.join(process.cwd(), "public", "gallery");
    const outputFile = path.join(process.cwd(), "galleryData.json");

    // Read all files in gallery folder
    const allFiles = await fs.readdir(galleryDir);

    // Filter image files only
    const imageFiles = allFiles
      .filter((file) => /\.(png|jpe?g|gif|webp)$/i.test(file))
      .sort();

    // Write JSON file
    await fs.writeFile(outputFile, JSON.stringify(imageFiles, null, 2), "utf-8");

    console.log(
      `✅ Gallery data generated: ${imageFiles.length} files found in /public/gallery`
    );
  } catch (error) {
    console.error("❌ Failed to generate gallery data:", error);
    process.exit(1); // exit with error code
  }
}

// Run the function
generateGalleryList();
