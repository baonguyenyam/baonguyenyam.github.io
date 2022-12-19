// import { MDXRenderer } from 'gatsby-plugin-mdx'
// import {MDXProvider} from '@mdx-js/react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs/monokai'
import { graphql } from 'gatsby'
import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"

export const query = graphql
    `
    query PostsByID($id: String!) {
        mdx(
            id: { eq: $id }
        ){
            body
            frontmatter {
                title
                date(formatString: "YYYY MMMM Do")
            }
        }
    }
`

const Blog: React.FC<PageProps> = ({ data }) => {
    const { frontmatter, body } = data?.mdx;
    
    return (

        <main>
            <div className="container mx-auto p-5">
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
                <ReactMarkdown children={body}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, '')}
                                    style={dark}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                />
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                />
                {/* <MDXProvider>{body}</MDXProvider> */}
                {/* <MDXRenderer>{body}</MDXRenderer> */}
            </div>
        </main>

    )
}

export default Blog

export const Head: HeadFC = () => <title>Blog - Nguyen Pham - Creative Guy</title>
