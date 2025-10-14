// src/app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import BlogPostClient from "../BlogPostClient";

// ✅ Correct typing — no need to extend or create custom PageProps
export async function generateStaticParams() {
  return Object.keys(PAGE_TO_FILE).map((slug) => ({ slug }));
}

// ✅ Map slugs to markdown filenames
const PAGE_TO_FILE: Record<string, string> = {
  homerenovationsservice: "HomeRenovationsService.md",
  homeconstructionservice: "HomeConstructionService.md",
  homeinteriorpainting: "HomeInteriorPainting.md",
  homeexteriorpainting: "HomeExteriorPainting.md",
  homeplumbingservices: "HomePlumbingServices.md",
  homeelectricalservices: "HomeElectricalServices.md",
  homecivilservices: "HomeCivilServices.md",
  homehandymanservices: "HomeHandymanServices.md",
  homeinteriorservices: "HomeInteriorServices.md",
  intercitypackersandmovers: "InterCityPackersAndMovers.md",
  intracitypackersandmovers: "IntraCityPackersAndMovers.md",
  homeinspectionservices: "HomeInspectionsServices.md",
};

// ✅ Main Page Component (async + inline typed params)
export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug.toLowerCase();
  const fileName = PAGE_TO_FILE[slug];

  // ✅ Define markdown data directory
  const dataDir = path.join(process.cwd(), "src", "app", "blog", "data");
  const filePath = path.join(dataDir, fileName || "");

  let content = "";

  // ✅ Safely read markdown file
  if (fileName && fs.existsSync(filePath)) {
    content = fs.readFileSync(filePath, "utf-8");
  } else {
    content = "# Content Not Found\nFile does not exist or slug mismatch.";
  }

  // ✅ Convert markdown to HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  // ✅ Generate title from filename
  const title = fileName
    ? fileName.replace(".md", "").replace(/([A-Z])/g, " $1").trim()
    : "Not Found";

  // ✅ Render the client component
  return <BlogPostClient post={{ title, content: contentHtml }} />;
}
