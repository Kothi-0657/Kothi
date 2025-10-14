import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import BlogPostClient from "../BlogPostClient";

type BlogPageProps = {
  params: { slug: string };
};

/** Map of slugs to Markdown filenames */
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

export async function generateStaticParams() {
  return Object.keys(PAGE_TO_FILE).map((slug) => ({ slug }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const slug = params.slug.toLowerCase();
  const fileName = PAGE_TO_FILE[slug];

  console.log("🔍 Requested Slug:", slug);
  console.log("📄 Matched File:", fileName);

  const dataDir = path.join(process.cwd(), "src", "app", "blog", "data");
  const filePath = path.join(dataDir, fileName || "");

  let content = "";
  if (fileName && fs.existsSync(filePath)) {
    content = fs.readFileSync(filePath, "utf-8");
  } else {
    console.error("❌ File not found:", filePath);
    content = "# Content Not Found\nFile does not exist or slug mismatch.";
  }

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  const title = fileName
    ? fileName.replace(".md", "").replace(/([A-Z])/g, " $1").trim()
    : "Not Found";

  return <BlogPostClient post={{ title, content: contentHtml }} />;
}
