import React, { useEffect } from "react";
import { withRouter,useLocation  } from "react-router-dom";

function TopBar(props) {
  // let userSignin = useSelector((state) => userSignin);
  const { userInfo } = 1;
  const location = useLocation();
  useEffect(() => {
    if(localStorage.getItem('signedIn') !== 'true'){
      props.history.push('/signin');
    }
  }, [])

  const Logout =()=> {
    localStorage.setItem('signedIn', 'false');
    localStorage.setItem('userEmail','');
    localStorage.setItem('userRoom','');
    // <Redirect to="/main" />
    props.history.push('/signin');
  }

  return (
    <header className="row">
      <div>
        <a className="brand" href="/">
          Judicial Diary
        </a>
      </div>

      <div>
        {userInfo ? (
          // <Link to="#">{userInfo.name}</Link>
          <a href="#">{userInfo}</a>

        ) : (
          <div>
            {/* <Link href="/signin">Sign In</Link> */}
            {location.pathname==='/signin' ? <a href="/signin">Sign In</a> : null}
            {location.pathname!=='/signin' ?<button onClick={Logout}>Logout</button>:null}
          </div>
        )}

        <a href="/booklawyer">Book Layer</a>
      </div>
    </header>



  );
}
export default withRouter(TopBar);
