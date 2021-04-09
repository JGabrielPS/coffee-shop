import React from "react"
import { Link } from "gatsby"

import Title from "../global/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              tempora nam laudantium, perspiciatis consectetur libero? Hic,
              neque doloremque quibusdam facilis, fugit voluptas molestiae
              dolorem aliquam maxime, modi deserunt sint magnam.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                About Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
