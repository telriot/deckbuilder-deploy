import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Landing from "./components/Landing"
import AuthContextProvider from "./contexts/AuthContext"
import WindowSizeContextProvider from "./contexts/WindowSizeContext"

ReactDOM.render(
  <Router>
    <WindowSizeContextProvider>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
        <App />
      </AuthContextProvider>
    </WindowSizeContextProvider>
  </Router>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
