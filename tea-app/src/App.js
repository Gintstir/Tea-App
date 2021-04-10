//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ApolloLink, ApolloProvider, concat } from "@apollo/react-hooks";
import ApolloClient from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";

// import { Provider } from 'react-redux';
// import store from './utils/store';

import Upload from "./components/Upload";
import Landing from "./components/Landing";
import Brew from "./components/Brew";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import Recipe from './components/Recipe';
import SignUp from './components/signUp';
import NewTea from "./components/NewTea";
import NewExtra from "./components/NewExtra";

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
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route exact path="/upload">
              <Upload />
            </Route>
            <Route exact path="/landing">
              <Landing />
            </Route>
            <Route exact path="/brew">
              <Brew />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/signIn">
              <SignIn />
            </Route>
            <Route exact path="/signUp">
              <SignUp />
            </Route>
            <Route exact path="/recipe">
              <Recipe />
            </Route>
            <Route exact path="/newtea">
              <NewTea />
            </Route>
            <Route exact path="/newextra">
              <NewExtra />
            </Route>
          </Switch>
          <div>hi gorge</div>
          {/* <div>
          adding StoreProvider in:
          <Provider store={store}>
            
          </Provider>
        </div> */}
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
