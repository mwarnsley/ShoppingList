import React from 'react';

const Rating = (props) => {
  const starCount = (Number(props.rating)).toPrecision(1);
  const starArr = [];
  const filledStars = Array.from(Array(+starCount)).map((star, index) => (<span><i className="fa fa-star star-icon" aria-hidden="true"></i></span>));
  const emptyStars = Array.from(Array(5 - (+starCount))).map((star, index) => (<span><i className="fa fa-star-o star-icon" aria-hidden="true"></i></span>));
  if (+starCount < 5) {
    starArr.push(...filledStars);
    starArr.push(...emptyStars);
  } else if (+starCount === 5) {
    starArr.push(...filledStars);
  }
  const stars = Array.from(Array(starArr)).map((star, index) => star);
  return (
    <div className="item-rating">
      {stars}
    </div>
  );
}

export default Rating;
