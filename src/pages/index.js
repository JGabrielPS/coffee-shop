import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import BackgroundSection from "../components/global/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Coffee Shop"
    />
    <Info />
    <Menu items={data.menu} />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            gatsbyImageData(layout: FIXED, height: 50, width: 50)
          }
        }
      }
    }
  }
`

export default IndexPage
