import React from "react";
import "./App.css";
import HomePage from "./Pages/homepage/HomePage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./Pages/shopPage/shop-page.component";
import Header from "./Components/header/header.component";
import SignIn from "./Components/sigin-component/sigin.component";
import SignInAndSignUpPage from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import {
  auth,
  createUserProfileDocument
} from "./Components/firebase/firebase.utils";

const HatsPage = () => {
  return (
    <div>
      <h1>PAGE HAI</h1>
    </div>
  );
};

class App extends React.Component {
  state = { currentUser: null };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/page" component={HatsPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
