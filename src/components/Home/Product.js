import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Product = ({ product: { title, price, image } }) => {
  const img = getImage(image)

  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <GatsbyImage image={img} alt={title} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{title}</h6>
          <h6>${price}</h6>
          <button className="btn btn-yellow mt-3 text-capitalize">
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
