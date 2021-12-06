import {
    BrowserRouter as BrowserRouter,
    Link, NavLink, Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import SockPage from "./Pages/SockPage";
import BlogPage from "./Pages/BlogPage";

// STAPPENPLAN PAGINA COMPONENT MAKEN
// - directory genaamd "pages"
// - JavaScript bestandje maken voor iedere pagina (met Hoofdletter!)
// - Supertip: typ in ieder bestand rsc (tab) om een boilerplate component te maken
// - Test je pagina componenten door ze allemaal in App.js te importeren en onder elkaar weer te geven
// STAPPENPLAN ROUTING IMPLEMENTEREN
// - npm install react-router-dom@5.1.2
// BrowserRouter as Router importeren uit react-router-dom (index.js)
// Switch, Route importeren uit react-router-dom (App.js)
// Implementeren:
// 1. Routing "bedenken" door het Switch en Route component te gebruiken in App.js
// 2. Maak een navigatiebalk met de links naar de paginas (netjes om ul te gebruiken!) Zorg dat deze op iedere pagina te zien is. Gebruik hiervoor het NavLink component en zoek op hoe het ookalweer werkte met die actieve CSS class
// 3. Maak op de Login pagina een knop "Inloggen". Wanneer de gebruiker daarop klikt, gebruik je useHistory om de gebruiker door te sturen naar BlogOverzichtPagina
// BLOGPOST OVERZICHT PAGINA MAKEN:
// 1. Maak eerst met eigen-bedachte tekst een structuur voor de overzichtspagina (wat moet er allemaal op? Maak ook alvast een Link-component, etc. )
// 2. Importeer de "echte" posts zoals beschreven in het voorbeeld
// 3. CHECK YOURSELF BEFORE YOU WRECK YOURSELF! Console log de data en bekijk wat het is? Array? Object? Object met Arrays of andersom?
// 4. Is er een handige manier om al die data niet handmatig uit te hoeven schrijven?
// 5. Zorg ervoor dat er een link en titel voor iedere post wordt gegenereerd

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  const isUserLoggedIn = false;

  return (

    <BrowserRouter>
        <nav>
            <ul>
                <li><NavLink exact activeClassName="active-link" to="/">Home</NavLink></li>
                <li><NavLink exact activeClassName="active-link" to="/producten">Producten</NavLink></li>
                <li><NavLink exact activeClassName="active-link"  to="/priveblog">PrivéBlog</NavLink></li>
                <li><a href="https://nos.nl/nieuws" target="_blank" rel="noreferrer">NOS nieuws</a></li>
            </ul>
        </nav>
            <Switch>
                {/*    hierin komen alle routes */}
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/producten">
                    <ProductsPage />
                </Route>
                <Route path="/producten/sok">
                    <SockPage />
                </Route>
                {/*//route beveiligen*/}
                <Route path="/priveblog">
                    { isUserLoggedIn ? <BlogPage /> : <Redirect to="/" />}
                </Route>
            </Switch>

    </BrowserRouter>
  );
}

export default App;
