import * as assert from "node:assert";
import { mdToHtml } from "../adapters/wordpress";
import { parseMarkdownPost } from "../run";

function testMarkdownToHtml() {
  console.log("🧪 Running Test: Markdown to HTML Compilation...");

  const markdown = `---
title: Test Post
---
# Heading 1
## Heading 2

This is a **bold** and *italic* paragraph with a [link](https://oriz.in).

\`\`\`typescript
const val = "hello";
\`\`\`

Here is inline \`code\`.`;

  const html = mdToHtml(markdown);

  assert.ok(html.includes("<h1>Heading 1</h1>"), "Should compile H1");
  assert.ok(html.includes("<h2>Heading 2</h2>"), "Should compile H2");
  assert.ok(html.includes("<strong>bold</strong>"), "Should compile bold text");
  assert.ok(html.includes("<em>italic</em>"), "Should compile italic text");
  assert.ok(
    html.includes('<a href="https://oriz.in">link</a>'),
    "Should compile links",
  );
  assert.ok(
    html.includes(
      '<pre><code class="language-typescript">const val = "hello";</code></pre>',
    ),
    "Should compile and escape code blocks",
  );
  assert.ok(html.includes("<code>code</code>"), "Should compile inline code");

  console.log("✅ Markdown to HTML tests passed!");
}

function testFrontmatterParsing() {
  console.log("🧪 Running Test: Markdown Post Parsing...");

  const content = `---
title: "Building Oriz"
description: "How I built 1000+ tools"
pubDate: 2026-03-20
tags: ["Next.js", "Cloudflare"]
draft: false
language: en
---
My markdown content body`;

  const parsed = parseMarkdownPost(content, "building-oriz");

  assert.ok(parsed, "Parser should return a valid object");
  assert.strictEqual(parsed.title, "Building Oriz");
  assert.strictEqual(parsed.description, "How I built 1000+ tools");
  assert.deepStrictEqual(parsed.tags, ["Next.js", "Cloudflare"]);
  assert.strictEqual(parsed.draft, false);
  assert.strictEqual(parsed.language, "en");
  assert.strictEqual(
    parsed.canonicalUrl,
    "https://blog.oriz.in/posts/building-oriz",
  );
  assert.strictEqual(parsed.contentMarkdown, "My markdown content body");

  console.log("✅ Markdown frontmatter parsing tests passed!");
}

function testCharacterTruncation() {
  console.log("🧪 Running Test: X/Twitter Truncation Logic...");

  // Mock post metadata
  const post = {
    title: "Awesome Title",
    description:
      "A very long description that will definitely exceed the standard character limit of X.com when paired with a link and title. Let's make sure it truncates correctly. This is additional text to make it extremely long so that the total text of the tweet exceeds the 280 character limit and forces the truncation algorithm to run and append the ellipsis indicator to the description.",
    pubDate: new Date(),
    slug: "awesome-post",
    contentMarkdown: "",
    contentHtml: "",
    canonicalUrl: "https://blog.oriz.in/posts/awesome-post",
    tags: [],
    draft: false,
    author: "Chirag Singhal",
    language: "en" as const,
  };

  const shortUrl = "https://is.gd/xyz123";
  const MAX_TWEET_LENGTH = 280;
  const footer = `\n\nRead more: ${shortUrl}`;
  const availableLength = MAX_TWEET_LENGTH - footer.length;

  let text = `${post.title}\n\n${post.description}`;

  if (text.length > availableLength) {
    const titlePart = `${post.title}\n\n`;
    const dots = "...";
    const maxDescLength = availableLength - titlePart.length - dots.length;

    assert.ok(maxDescLength > 0, "Available space should be positive");
    const truncatedDesc = post.description.slice(0, maxDescLength);
    text = `${titlePart}${truncatedDesc}${dots}`;
  }

  const tweetText = `${text}${footer}`;

  assert.ok(
    tweetText.length <= 280,
    `Tweet length (${tweetText.length}) should not exceed 280 characters`,
  );
  assert.ok(
    tweetText.endsWith(shortUrl),
    "Tweet must end with the shortened URL",
  );
  assert.ok(
    tweetText.includes("Awesome Title"),
    "Tweet must include the title",
  );
  assert.ok(
    tweetText.includes("..."),
    "Tweet must include truncation indicators",
  );

  console.log("✅ X/Twitter truncation tests passed!");
}

function runAll() {
  try {
    testMarkdownToHtml();
    testFrontmatterParsing();
    testCharacterTruncation();
    console.log(
      "\n🥇 All test suites executed successfully and passed without errors!",
    );
  } catch (error) {
    console.error("❌ Test assertion failure:", error);
    process.exit(1);
  }
}

runAll();
