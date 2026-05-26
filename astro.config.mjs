import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import astroExpressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

// Custom remark plugin to bypass Expressive Code for Mermaid diagrams
function remarkMermaidBypass() {
  return (tree) => {
    function walk(node) {
      if (node.type === "code" && node.lang === "mermaid") {
        node.type = "html";
        const escapedCode = node.value
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
        node.value = `<pre class="language-mermaid"><code>${escapedCode}</code></pre>`;
        return;
      }
      if (node.children) {
        for (const child of node.children) {
          walk(child);
        }
      }
    }
    walk(tree);
  };
}

export default defineConfig({
  site: "https://blog.oriz.in",
  output: "static",
  integrations: [
    // Expressive Code MUST come before mdx()
    astroExpressiveCode({
      themes: ["github-dark"],
      styleOverrides: {
        borderRadius: "0.75rem",
        codePaddingBlock: "1rem",
        codePaddingInline: "1.25rem",
      },
    }),
    mdx(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkMermaidBypass, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "hi"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
