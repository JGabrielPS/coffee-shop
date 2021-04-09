import React, { useState } from "react"
import Title from "../global/Title"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Menu = ({ items }) => {
  const [drinks, setDrinks] = useState({
    coffeeItems: items.edges,
  })

  return (
    <section className="menu py-5">
      <div className="container">
        <Title title="best of our menu" />
        <div className="row">
          {drinks.coffeeItems.length > 0 ? (
            drinks.coffeeItems.map(node => {
              const {
                node: {
                  id,
                  title,
                  description: { description },
                  price,
                  image,
                },
              } = node
              const img = getImage(image)

              return (
                <div key={id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                  <div>
                    <GatsbyImage image={img} alt={title} />
                  </div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">
                        <small>{title}</small>
                      </h6>
                      <h6 className="mb-0 text-yellow">
                        <small>${price}</small>
                      </h6>
                    </div>
                    <p className="text-muted">
                      <small>{description}</small>
                    </p>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <h1>there are no items to display</h1>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Menu
