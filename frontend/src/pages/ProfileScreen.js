import React, { useEffect } from 'react';
import Rating from'../components/Rating';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loadinganimation from '../components/Loadinganimation';
import Errormessagebox from '../components/Errormessagebox';
import {detailsProfile} from '../actions/profileActions';

export default function ProfileScreen(props) {


  const dispatch=useDispatch();
  const profileId=props.match.params.id;
  const profileDetails=useSelector((state) => state.profileDetails);
  const {loading,error,profile}=profileDetails;


useEffect(() => {
dispatch(detailsProfile(profileId));
}, [dispatch,profileId]);


  return (
    <div>
    {loading?(<Loadinganimation>     </Loadinganimation>
    ):error?(<Errormessagebox variant="problem">{error}</Errormessagebox>  
    ):(
      <div>
      <Link to="/">Go Back</Link>
      <div className="row top">
        <div className="col-2">
  
          <img className="large" src={profile.image} alt={profile.name}></img>
        </div>
  
        <div className="col-1">
  <ul>
  <li>
  
  <h1>{profile.name}</h1>
  </li>
  <li>
  <Rating rating={profile.review}
  ratingnumber={profile.ratingnumbers}></Rating>
  
  </li>
  <li>Fee Starting From: ${profile.fee}</li>
  
  <li>
  Description :
  <p>{profile.description}</p>
  
  </li>
  </ul>
  
  
        </div>
        <div className="col-1">
          <div className="card card-body">
  <ul>
  <li>
  <div className="row">
  <div> Fee  </div>
  <div className="fee">${profile.fee}</div>
  
  </div>
  </li>
  <li>
  <div className ="row">
  <div>Availability Status </div>
  <div>
  {profile.casestaken<=2 ?
  (<span className="avail">Available</span>):(
  <span className="defer">Not Available</span>)
  }
  </div>
  </div>
  </li>
  
  <li><button className="primary block">Book Lawyer</button>
  </li>
  
  
  
  
  
  
  
  </ul>
  
          </div>
  
  
        </div>
      </div>
  
  
      </div>  
)}
  
  </div>


   
  );
}
