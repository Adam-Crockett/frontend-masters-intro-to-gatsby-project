import * as React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'
import Layout from '../components/layout.js'

export default function IndexPage() {

    const data = useStaticQuery(graphql`
    query GetBlogPosts {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      slug
      frontmatter {
        title
        date(fromNow: true)
        description
      }
    }
  }
}`)

const posts = data.allMdx.nodes;


    return (
        <Layout>
            <h1>Hello Frontend Masters!</h1>
            <Link to="/about">About page</Link>

            <h2>Check out recent blog posts.</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={post.slug}>{post.frontmatter.title}</Link>
                        <small> posted {post.frontmatter.date}</small>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}
