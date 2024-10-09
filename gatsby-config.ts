import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `nguyenApp`,
    siteUrl: `https://nguyenpham.pro`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-open-graph-images',
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/bg.svg"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, 
  {
    resolve: 'gatsby-plugin-alias-imports',
    options: {
      alias: {
        "@": "./src",
        "@data": "./src/data",
        "@images": "./src/images",
        "@pages": "./src/pages",
        "@styles": "./src/styles",
        "@scripts": "./src/styles",
        "@webfonts": "./src/webfonts",
      }, 
      extensions: ["js", "jsx", "ts", "tsx"],
    }
  }
]
};

export default config;
