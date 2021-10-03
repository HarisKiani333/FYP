import React, { useEffect } from 'react';
import Profile from '../components/Profile';
import Loadinganimation from '../components/Loadinganimation';
import Errormessagebox from '../components/Errormessagebox';
import { useDispatch, useSelector } from 'react-redux';
import { profilelist } from '../actions/profileActions';




export default function MainScreen() {
  const dispatch=useDispatch();
const profileList= useSelector((state)=>state.profileList);
const {loading,error,profile}=profileList;
  useEffect(() => {
   
      dispatch(profilelist());
   
  },[dispatch]);
  

  return (
    <div>
      {loading?(<Loadinganimation>     </Loadinganimation>
      ):error?(<Errormessagebox variant="problem">{error}</Errormessagebox>  
      ):(
      
      <div className="row center">
      {
      
      profile.map(profile =>(
      
      < Profile key={profile._id}  profile ={profile}></Profile>
      
      ))};
      
      
      </div>)}
    
    </div>
  );
}
