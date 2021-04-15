//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import { ApolloLink, ApolloProvider, concat } from "@apollo/react-hooks";
import ApolloClient from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";

import Auth from './utils/auth'

import NavBar from "./components/NavBar";
import Foot from "./components/Footer"

import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Pantry from "./pages/Pantry";
import Global from './pages/Global'
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';

import SignIn from "./components/SignIn";
import Register from './components/Register';

const uploadLink = createUploadLink()

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("id_token");
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    }
  })

  return forward(operation)
})

const client = new ApolloClient({
  link: concat(authMiddleware, uploadLink),
  cache: new InMemoryCache(),
});

function App() {
  const isLoggedin = Auth.loggedIn()
  const profile = isLoggedin ? Auth.getProfile() : null

  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <NavBar isLoggedin={isLoggedin} />
          <Switch>
            <Route exact path="/">
              {isLoggedin ? <Profile profile={profile} /> : <Landing /> }
            </Route>
            <Route exact path="/pantry">
              {isLoggedin ? <Pantry /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/signup">
              {isLoggedin ? <Redirect to="/" /> : <Register />}
            </Route>
            <Route exact path="/signin">
              {isLoggedin ? <Redirect to="/" /> : <SignIn />}
            </Route>   
            <Route exact path="/global">
              {isLoggedin ? <Global /> : <Redirect to="/" />}
            </Route>           
            <Route exact path="/about">
              <AboutUs />
            </Route>
            <Route exact path="/faq">
              <FAQ />
            </Route>
          </Switch>
          <Foot />
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;