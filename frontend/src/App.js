import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route,Switch } from "react-router-dom";
import TopBar from "./components/topbar";
import ChatScreen from "./pages/ChatScreen";
import LoginScreen from "./pages/LoginScreen";
import MainScreen from "./pages/MainScreen";
import ProfileScreen from "./pages/ProfileScreen";
import io from "socket.io-client";


const socket = io.connect('/');
function App(props) {
  // let userSignin = useSelector((state) => userSignin);
  // const { userInfo } = 1;

  return (
      <div className="grid-container">
        <TopBar />
        <Switch>
          <Route path="/" component={MainScreen} exact></Route>
          <Route path="/signin" component={LoginScreen}></Route>
          <Route path="/profile/:id" render={(props) => <ProfileScreen socket={socket} {...props} /> } />
          {/* <ProfileScreen socket={socket} /> */}
          
          {/* </Route> */}
          <Route path="/chat/:roomname/:username" render={(props) => <ChatScreen socket={socket} {...props} /> } />
          {/* <ChatScreen socket={socket} /> */}
          {/* </Route> */}

        </Switch>
        <footer className="row center">
          Copyright © 2018-2022 COMSATS. All Rights Reserved.
        </footer>
      </div>
    
  );
}
export default App;
