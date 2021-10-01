import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout.js'

 
export default function AboutPage() {
    return (
        <Layout title="About This Site" description="More information about this site.">
            <h1>About This Site.</h1>
            <Link to="/">Back to Home</Link>
        </Layout>
    )
}
