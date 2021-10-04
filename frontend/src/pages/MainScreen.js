import React, { useEffect } from "react";
import Profile from "../components/Profile";
import Loadinganimation from "../components/Loadinganimation";
import Errormessagebox from "../components/Errormessagebox";
import { useDispatch, useSelector } from "react-redux";
import { profilelist } from "../actions/profileActions";
import data from "../data";

export default function MainScreen() {
  // const dispatch = useDispatch();
  // const profileList = useSelector((state) => state.profileList);
  // const { loading, error, profile } = profileList;
  // useEffect(() => {

  // dispatch(profilelist());

  // }, [dispatch]);
  // console.log(data.profile);

  return (
    <div>
      {/* {loading ? (
        <Loadinganimation> </Loadinganimation>
      ) : error ? (
        <Errormessagebox variant="problem">{error}</Errormessagebox>
      ) : ( */}

        <div className="row center">
          {data.profile.map((prof) => (
            <Profile key={prof._id} profile={prof} />
          ))}

          

        </div>
      {/* )} */}
    </div>
  );
}
