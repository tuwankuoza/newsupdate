import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom";
import NavbarApp from "./components/NavbarApp";
import FooterApp from "./components/FooterApp";
import Home from './views/Home'
import SearchNews from "./views/SearchNews";

function App() {
  return (
    <div>
      <NavbarApp />
      <Switch>

        <Route path="/search">
          <SearchNews />
        </Route>

        <Route path="/"exact>
          <Home />
        </Route>   
        
      </Switch>
      <FooterApp />
    </div>
  );
}

export default App;
