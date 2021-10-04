import React from 'react';
import { withRouter } from 'react-router';
import Rating from './Rating';

 function Profile(props) {

    const { profile } = props;
    // console.log(profile);
    const showProfile = () =>{
        props.history.push(`/profile/${profile._id}`);
    }
    return (

        <div key={profile._id} className="card" onClick={showProfile}>
            <a>
                <img className="medium" src={profile.image} alt={profile.name} />
            </a>

            <div className="card-body">
                <a>
                    <h2>{profile.name}</h2>


                </a>

                <Rating review={profile.review} rating={profile.rating}></Rating>

                <div className="Fee">
                    {"Fee Starting From  = " + profile.fee}
                </div>
            </div>
        </div>

    )
}




export default withRouter(Profile)





















