
import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';
import MainScreen from './pages/MainScreen';
import ProfileScreen from './pages/ProfileScreen';

function App() {
const userSignin=useSelector((state)=>userSignin);
const {userInfo}=userSignin;
  
return (
  <BrowserRouter>
<div className="grid-container">
<header className="row">
<div>
<Link className="brand" to="/">Judicial Diary</Link>
</div>

<div>{userInfo?(
<Link to="#" >{userInfo.name}</Link>):
(<div><Link href="/signin">Sign In</Link>
)}</div>






<a href="/booklawyer">Book Lawyer</a></div>

</header>
<main>
<Route path="/profile/:id"  component={ProfileScreen}></Route>
<Route path="/signin"  component={LoginScreen}></Route>
<Route path="/" component={MainScreen} exact></Route>


</main>

<footer className="row center">Copyright © 2018-2022 COMSATS. All Rights Reserved.</footer>
</div>
</BrowserRouter>
  );
}
export default App;
