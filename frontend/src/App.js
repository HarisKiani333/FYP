import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route,Switch } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import MainScreen from "./pages/MainScreen";
import ProfileScreen from "./pages/ProfileScreen";

function App() {
  // let userSignin = useSelector((state) => userSignin);
  const { userInfo } = 1;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Judicial Diary
            </Link>
          </div>

          <div>
            {userInfo ? (
              // <Link to="#">{userInfo.name}</Link>
              <a href="#">{userInfo.name}</a>
              
            ) : (
              <div>
                {/* <Link href="/signin">Sign In</Link> */}
                <a href="/signin">Sign In</a>
              </div>
            )}

            <a href="/booklawyer">Book Layer</a>
          </div>
        </header>
        <main>
        
        <Switch>
          <Route path="/" component={MainScreen} exact></Route>
          <Route path="/signin" component={LoginScreen}></Route>
          <Route path="/profile/:id" component={ProfileScreen}></Route>
        </Switch>
          
        </main>

        <footer className="row center">
          Copyright © 2018-2022 COMSATS. All Rights Reserved.
        </footer>
      </div>
      </BrowserRouter>
    
  );
}
export default App;
