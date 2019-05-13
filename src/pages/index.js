import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Index"/>
    <p>Hello world!</p>
  </div>
)
