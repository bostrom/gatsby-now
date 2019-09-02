import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function IndexPage() {
  const [data, setData] = useState()

  useEffect(() => {
    async function getData() {
      const req = await fetch("/api/test")
      const payload = await req.text()
      setData(payload)
    }
    getData()
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Check out this data:</p>
      {data}

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
