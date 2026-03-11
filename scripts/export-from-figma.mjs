#!/usr/bin/env node

/**
 * Simple helper script to export master screenshots from Figma.
 *
 * Usage:
 * 1) Set a Figma personal access token in your shell:
 *    export FIGMA_PAT="your-token-here"
 *
 * 2) Run the script from the project root:
 *    node scripts/export-from-figma.mjs \
 *      pAJO3QVobISWBIYtiEobL7 \
 *      41:55916,123:456 \
 *      masters
 *
 *    - First arg:  fileKey (from the Figma URL)
 *    - Second arg: comma separated nodeIds (e.g. "41:55916,123:456")
 *    - Third arg:  output folder (relative to project root), e.g. "public/masters"
 *
 * The script will save PNG files named "<nodeId>.png" in the given folder.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import https from "node:https";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const token = process.env.FIGMA_PAT;
  if (!token) {
    console.error("FIGMA_PAT environment variable is not set.");
    console.error("Create a Figma personal access token and run:");
    console.error('  export FIGMA_PAT="your-token-here"');
    process.exit(1);
  }

  const [fileKey, nodeIdsArg, outDirArg] = process.argv.slice(2);
  if (!fileKey || !nodeIdsArg || !outDirArg) {
    console.error("Usage: node scripts/export-from-figma.mjs <fileKey> <nodeId1,nodeId2,...> <outputDir>");
    process.exit(1);
  }

  const nodeIds = nodeIdsArg.split(",").map((id) => id.trim()).filter(Boolean);
  const outputDir = path.resolve(__dirname, "..", outDirArg);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`Exporting ${nodeIds.length} Figma frames from file ${fileKey} to ${outputDir}`);

  for (const rawId of nodeIds) {
    // API expects id with dashes (41-55916) while URL uses either format;
    // allow both "41:55916" and "41-55916".
    const apiId = rawId.replace(":", "-");

    const imagesUrl = new URL(`https://api.figma.com/v1/images/${fileKey}`);
    imagesUrl.searchParams.set("ids", apiId);
    imagesUrl.searchParams.set("format", "png");
    imagesUrl.searchParams.set("scale", "1");

    const headers = {
      "X-Figma-Token": token,
    };

    const imageUrl = await new Promise((resolve, reject) => {
      https.get(imagesUrl, { headers }, (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
          try {
            const data = JSON.parse(body);
            const url = data.images?.[rawId] ?? data.images?.[apiId];
            if (!url) {
              reject(new Error(`No image URL returned for node ${apiId}`));
            } else {
              resolve(url);
            }
          } catch (err) {
            reject(err);
          }
        });
      }).on("error", reject);
    });

    console.log(`Downloading node ${rawId} from ${imageUrl}`);

    const outPath = path.join(outputDir, `${rawId.replace(":", "-")}.png`);
    await new Promise((resolve, reject) => {
      const file = fs.createWriteStream(outPath);
      https.get(imageUrl, (res) => {
        res.pipe(file);
        file.on("finish", () => file.close(resolve));
      }).on("error", (err) => {
        fs.unlink(outPath, () => reject(err));
      });
    });

    console.log(`Saved ${outPath}`);
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error("Export failed:", err);
  process.exit(1);
});

