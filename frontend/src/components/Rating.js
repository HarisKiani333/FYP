import React from 'react';

export default function Rating(props) {
  const{review,rating}=props;
  
    return (
    <div className="rating">
    <span>
        <i
          className={
            review >= 1
              ? 'fa fa-star'
              : review >= 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            review >= 2
              ? 'fa fa-star'
              : review >= 1.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            review >= 3
              ? 'fa fa-star'
              : review >= 2.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            review >= 4
              ? 'fa fa-star'
              : review >= 3.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            review >= 5
              ? 'fa fa-star'
              : review >= 4.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        ></i>
      </span>
     
        <span>{rating + ' Rating'}</span>
    
  </div>
  );
}
