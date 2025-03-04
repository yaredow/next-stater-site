import { defineCollections, defineDocs } from "fumadocs-mdx/config";

export const test = defineCollections({
  type: "doc",
  dir: "content/docs",
});

export const docs = defineDocs({
  dir: "content/docs",
  docs: {},
  meta: {},
});
