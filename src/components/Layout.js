import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {Seo} from './seo.js'

export default function Layout({ children, title = false, description = false, image = false, path = false }) {
    const data = useStaticQuery(graphql`
    query getSiteTitle {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    const meta = data?.site?.siteMetadata ?? {};

    return (
        <>
        <Seo title={title} description={description} imag={image} path={path}/>
        <header>
            <Link to="/">{meta.title}</Link>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </header>
            <main>{children}</main>
        </>
    )

}