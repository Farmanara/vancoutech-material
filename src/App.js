import { Route, Switch } from "react-router-dom"

// We will create these two pages in a moment

import HomePage from "./pages/HomePage"

import UserPage from "./pages/UserPage"
import Services from "./pages/Services"
import About from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"

export default function App2() {

  return (

    <Switch>

      <Route exact path="/" component={HomePage} />

      <Route path="/user" component={UserPage} />

      <Route path="/services" component={Services} />
      <Route path="/about-us" component={About} />
      <Route path="/contact-us" component={ContactUs} />




    </Switch>

  )

}

