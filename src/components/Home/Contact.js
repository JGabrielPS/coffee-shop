import React from "react"
import Title from "../global/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="contact us"></Title>
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="submit">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="John Smith"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                email="email"
                id="email"
                placeholder="john-smith@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="5"
                className="form-control"
                placeholder="your description here ..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize mt-5"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
