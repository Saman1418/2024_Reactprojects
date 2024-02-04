import React from "react";
import { useCart } from "react-use-cart";
const ShowCard = () => {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    removeItem,
    emptyCart,
    updateItemQuantity,
  } = useCart();

  return (
    <div className="showCard">
      <table>
        <tbody>
          {items.map((elem, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={elem.imageUrl}
                    style={{
                      width: "18rem",
                      height: "6rem",
                      objectFit: "contain",
                    }}
                  />
                </td>
                <td>{elem.name}</td>
                <td>{elem.price}</td>
                <td>
                    
                    <button 
                    className="btn btn-info"
                    onClick={()=>updateItemQuantity(elem.id,elem.quantity-1)}>-</button>
                    <button
                    className="btn btn-info"
                    onClick={()=>updateItemQuantity(elem.id,elem.quantity+1)}>+</button>
                    <button
                    className="btn danger"
                    onClick={()=>removeItem(elem.id)}>Remove items</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
          <h2>Total Price: ${cartTotal}</h2>
          <button className="btn" onClick={()=>{emptyCart()}}>clear card</button>
      </div>
    </div>
  );
};

export default ShowCard;
