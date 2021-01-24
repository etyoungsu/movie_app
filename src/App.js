import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name : "Kimchi",
    image : "https://cdn.pixabay.com/photo/2019/03/09/15/12/kimchi-4044268_960_720.jpg",
    rating : 4.5
  },
  {
    id:2,
    name : "ramen",
    image : "https://cdn.pixabay.com/photo/2019/12/01/15/08/if-the-4665686_960_720.jpg",
    rating : 5.5
  }
]

function Food({fav,picture,rate}) {
  return(
  <div> 
    <h1>I like {fav}</h1>
    <img src={picture} alt={fav}/>
    <h4>{rate}/5.0</h4>
  </div>
    );
}

Food.propTypes = {
  fav: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired
};

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
      <Food key={dish.id} fav={dish.name} picture={dish.image} rate = {dish.rating}/>
      ))}
    </div>
  );
}

export default App;
