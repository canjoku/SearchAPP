import React from 'react';
import { Route, Switch} from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import NotFound from "./pages/404/NotFound"

function App() {
  return (
    <div className="container-fluid app">
      <Header />
      <Switch>
        <Route exact path= "/" component={HomePage}/>
        <Route path= "/about" component={AboutPage}/>
        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;