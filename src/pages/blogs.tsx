import * as React from "react"
import Helmet from "react-helmet"
import type { HeadFC, PageProps } from "gatsby"
import { graphql, Link } from 'gatsby'
import opengraph from "../images/nguyen.png";
const url = "https://nguyenpham.pro/";

export const query = graphql
    `
    query SITE_INDEX_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
        allMdx(
          sort: {frontmatter: {date: DESC}}
          filter: {frontmatter: {published: {eq: true}}}
        ) {
          nodes {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
`

const BlogPage: React.FC<PageProps> = ({ data }) => {

    return (

        <main>

            <Helmet>
                <meta property="og:image" content={url + opengraph} />
                <meta property="og:title" content="Nguyen Pham" />
                <meta property="og:description" content="As a creative and professional web developer, I live and work in the United States. Having a passion for beauty, I strive to create products that are elegant, beautiful, and full of detail." />
            </Helmet>

            <div className="container mx-auto p-5">
                <h1>{data.site.siteMetadata.title}</h1>

                {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
                    <Link to={fields.slug} key={frontmatter.title}>
                        <h1>{frontmatter.title}</h1>
                        <p>{frontmatter.date}</p>
                        <p>{excerpt}</p>
                    </Link>
                ))}

            </div>

        </main>

    )
}

export default BlogPage

export const Head: HeadFC = () => <title>Blog - Nguyen Pham - Creative Guy</title>
