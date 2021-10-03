import React from 'react';
import Rating from './Rating';

export default function Profile(props) {

    const {profile}=props;
    return (
  
<div key={profile._id} className="card">
<a href={`/profile/${profile._id}`}>
<img className="medium" src={profile.image} alt={profile.name}/>
</a>

<div className="card-body">
<a href={`/profile/${profile._id}`}>
<h2>{profile.name}</h2>


</a>

<Rating rating = {profile.rating} ratingnumbers={profile.ratingnumbers}></Rating>

<div className="Fee">
{"Fee Starting From  =    "+profile.fee}
</div>
</div>
</div>
  
    )
  }
  
  
  























