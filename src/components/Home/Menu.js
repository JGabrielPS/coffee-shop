import React, { useState } from "react"
import Title from "../global/Title"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Menu = ({ items }) => {
  const getCategories = items => {
    const categories = [
      "all",
      ...Array.from(
        new Set(
          items.map(item => {
            return item.node.category
          })
        )
      ),
    ]

    return categories
  }

  const [drinks, setDrinks] = useState({
    coffeeItems: items.edges,
    categories: getCategories(items.edges),
  })

  const handleItems = category => {
    const tempItems = items.edges

    if (category === "all") {
      setDrinks({ ...drinks, coffeeItems: tempItems })
    } else {
      let newItems = tempItems.filter(({ node }) => node.category === category)
      setDrinks({ ...drinks, coffeeItems: newItems })
    }
  }

  return (
    <section className="menu py-5">
      <div className="container">
        <Title title="best of our menu" />
        <div className="row mb-5">
          <div className="col-10 mx-auto text-center">
            {drinks.categories.map((category, index) => {
              return (
                <button
                  key={index}
                  className="btn btn-yellow text-capitalize m-3"
                  type="button"
                  onClick={() => handleItems(category)}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>
        <div className="row">
          {drinks.coffeeItems.length > 0 ? (
            drinks.coffeeItems.map(({ node }) => {
              const {
                id,
                title,
                description: { description },
                price,
                image,
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
