export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");

  eleventyConfig.addFilter("isHttpUrl", (url = "") => /^https?:\/\//i.test(url));

  eleventyConfig.addFilter("socialLinks", (items = []) =>
    (items || []).filter((item) => item && String(item.label || "").trim() && String(item.url || "").trim())
  );

  eleventyConfig.addFilter("footerLines", (items = []) =>
    (Array.isArray(items) ? items : [items])
      .map((line) => {
        if (line == null) return null;
        if (typeof line === "string") {
          const text = line.trim();
          return text ? { text, url: "" } : null;
        }
        const text = String(line.text || line.label || "").trim();
        if (!text) return null;
        return { text, url: String(line.url || "").trim() };
      })
      .filter(Boolean)
      .slice(0, 2)
  );

  eleventyConfig.setServerOptions({
    port: 8080,
  });

  return {
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}
