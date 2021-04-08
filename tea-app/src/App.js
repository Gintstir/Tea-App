//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";

// import { Provider } from 'react-redux';
// import store from './utils/store';

import Upload from "./components/Upload";
import Landing from "./components/Landing";
import Brew from "./components/Brew";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
  link: createUploadLink(),
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
