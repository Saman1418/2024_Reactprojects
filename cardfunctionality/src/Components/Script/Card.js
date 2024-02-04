import React from "react";
import DisplayCard from "./DisplayCard";
import "../style/Card.css";
const Card = () => {
  const product = [
    {
      id: 1,
      name: "Potato",
      measuringUnit: "Kg",
      minimumOrderQuantity: 0.5,
      availableQuantity: 10.5,
      isActive: true,
      imageUrl:
        "https://s3-ap-southeast-1.amazonaws.com/tudotest/humusvc/commodity_image/1579606388.766.png",
      price: 20.0,
      quantity:1,
    },

    {
      id: 2,
      name: "Onion",
      measuringUnit: "Kg",
      minimumOrderQuantity: 0.1,
      availableQuantity: 10.5,
      isActive: true,
      imageUrl:
        "https://s3-ap-southeast-1.amazonaws.com/tudotest/humusvc/humus_commodity_image/1623351743.476.png",
      price: 20.0,
      quantity:1,
    },

    {
      id: 3,
      name: "Carrot",
      measuringUnit: "Kg",
      minimumOrderQuantity: 1,
      availableQuantity: 10.5,
      isActive: true,
      imageUrl:
        "https://s3-ap-southeast-1.amazonaws.com/tudotest/humusvc/humus_commodity_image/1616009386.477.png",
      price: 20.0,
      quantity:1,
    },
    {
      id: 4,
      name: "Tomato",
      measuringUnit: "Kg",
      minimumOrderQuantity: 0.25,
      availableQuantity: 10.5,
      isActive: true,
      imageUrl:
        "https://s3-ap-southeast-1.amazonaws.com/tudotest/humusvc/commodity_image/1575132496.843.png",
      price: 20.0,
      quantity:1,
    },
  ];
  return (
    <div className="card">
      <h3>Card</h3>
      <div className="card__displayCard">
        {product.map((elem, index) => {
          return (
            <>
              <DisplayCard
                quantity={elem.quantity}
                key={index}
                elem={elem}
                image={elem.imageUrl}
                name={elem.name}
                measuringUnit={elem.measuringUnit}
                minimumOrderQuantity={elem.minimumOrderQuantity}
                availableQuantity={elem.availableQuantity}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
