import React from "react";
import { Link } from "react-router-dom";
//import { ReactComponent as Logo } from "../../assets/crown.svg";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import "./header.style.scss";
import { auth } from "../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGNOUT
        </div>
      ) : (
        <Link className="option" to="/sigin">
          SIGNIN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
