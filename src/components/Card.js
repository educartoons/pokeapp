import React from "react";

const Card = ({ name, order, sprites, types }) => {
  const showTypes = () => types.map(({ type }) => type.name).join(" & ");
  const showImage = () => (
    <figure>
      <img src={sprites.front_default} />
    </figure>
  );
  return (
    <div className="Card">
      <h2 className="Card-name">{name}</h2>
      <h5 className="Card-number"># {order}</h5>
      {sprites && showImage()}
      <p>{types && showTypes()}</p>
    </div>
  );
};

// Card.defaultProps ={
//   name:
// }

export default Card;
