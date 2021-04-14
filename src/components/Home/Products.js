import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Product from "./Product"
import Title from "../global/Title"

const Products = () => {
  const getProducts = graphql`
    {
      products: allContentfulCoffeProduct {
        edges {
          node {
            id
            title
            price
            image {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                aspectRatio: 1.778
              )
            }
          }
        }
      }
    }
  `

  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="our products"></Title>
              <div className="row">
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}

export default Products
