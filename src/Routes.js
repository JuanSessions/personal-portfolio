import React from 'react'
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import NotFound from "./components/NotFound"



function Routes() {
    return (

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
        </Switch>

    )
}

export default Routes

