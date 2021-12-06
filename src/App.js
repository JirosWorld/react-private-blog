import React, {useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Blogposts from "./pages/Blogposts";
import BlogPost from "./pages/BlogPost";

// STAPPENPLAN PAGINA COMPONENT MAKEN
// [*] directory genaamd "pages"
// [*] JavaScript bestandje maken voor iedere pagina (met Hoofdletter!)
// [*] Supertip: typ in ieder bestand rsc (tab) om een boilerplate component te maken
// [*] Test je pagina componenten door ze allemaal in App.js te importeren en onder elkaar weer te geven
// STAPPENPLAN ROUTING IMPLEMENTEREN
// [*] npm install react-router-dom@5.1.2
// BrowserRouter as Router importeren uit react-router-dom (index.js)
// Switch, Route importeren uit react-router-dom (App.js)
// Implementeren:
// [*] 1. Routing "bedenken" door het Switch en Route component te gebruiken in App.js
// [*] 2. Maak een navigatiebalk met de links naar de paginas (netjes om ul te gebruiken!) Zorg dat deze op iedere pagina te zien is. Gebruik hiervoor het NavLink component en zoek op hoe het ookalweer werkte met die actieve CSS class
// [*] 3. Maak op de Login pagina een knop "Inloggen". Wanneer de gebruiker daarop klikt, gebruik je useHistory om de gebruiker door te sturen naar BlogOverzichtPagina
// BLOGPOST OVERZICHT PAGINA MAKEN:
// [ ] 1. Maak eerst met eigen-bedachte tekst een structuur voor de overzichtspagina (wat moet er allemaal op? Maak ook alvast een Link-component, etc. )
// [ ] 2. Importeer de "echte" posts zoals beschreven in het voorbeeld
// [ ] 3. CHECK YOURSELF BEFORE YOU WRECK YOURSELF! Console log de data en bekijk wat het is? Array? Object? Object met Arrays of andersom?
// [ ] 4. Is er een handige manier om al die data niet handmatig uit te hoeven schrijven?
// [ ] 5. Zorg ervoor dat er een link en titel voor iedere post wordt gegenereerd

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <div className="container">
            <Navigation isAuthenticated={isAuthenticated} toggleIsAuthenticated={toggleIsAuthenticated}/>
            <Switch>
                <Route exact path="/">
                    <HomePage isAuthenticated={isAuthenticated}/>
                </Route>
                <Route path="/login">
                    <Login isAuthenticated={isAuthenticated} toggleIsAuthenticated={toggleIsAuthenticated}/>
                </Route>
                <Route path="/blog">
                    {isAuthenticated ? <Blogposts/> : <Redirect to={"/login"}/>}
                </Route>
                <Route path="/post/:blogid">
                    {isAuthenticated ? <BlogPost/> : <Redirect to={"/login"}/>}
                </Route>
            </Switch>
        </div>
    );
}

export default App;
