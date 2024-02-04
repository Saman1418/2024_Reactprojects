import React,{useState} from "react";
import "../style/DisplayCard.css";
import { useCart } from "react-use-cart";

const DisplayCard = (props) => {
  const [count, setcount] = useState(0)
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    removeItem,
    emptyCart,
    updateItemQuantity,
    addItem,
  } = useCart();

  const plus =()=>{
    addItem(props.elem)
    setcount(count+1)
  }
  const minus = ()=>{
    removeItem(props.elem.key)
    setcount(count-1)
  }
  
  return (
    <div className="displayCard">
      <img className="displayCard__thubnail" src={props.image} alt="video" />

      <div className="displayCard__info">
        <div className="displayCard__text">
          <h4>{props.name}</h4>
          <p>{`MeasuringUnit in ${props.measuringUnit}`}</p>
          <p>{`Minimum Order Quantity ${props.minimumOrderQuantity}`}</p>
          <p>{`Available Quantity ${props.availableQuantity}`}</p>
        </div>
      </div>

      <div className="card-body">
        <div class="input-group" qa="qty">
          {/* <span class="input-group-addon">Qty</span> */}
          {/* <button onClick={()=>updateItemQuantity(props.id,props.quantity-1)}>-</button> */}
          <button
              qa="add"
              type="button"
              class="btn btn-add col-xs-9"
              onClick={() => minus()}
            >
              -
              {/* <span class="bskt-icon"></span> */}
            </button>
          <input
            type="text"
            class="form-control ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-maxlength"
            maxlength="5"
            placeholder={count}
          />
          {/* <button onClick={()=>updateItemQuantity(props.key,props.quantity+1)}>+</button> */}
          <div class="col-sm-5 col-xs-5 pad-0">
            <button
              qa="add"
              type="button"
              class="btn btn-add col-xs-9"
              onClick={() => plus()}
            >
              +
              {/* <span class="bskt-icon"></span> */}
            </button>
            <button
              qa="add"
              type="button"
              class="btn btn-add col-xs-9"
              onClick={() => addItem(props.elem)}
            >
              Add
              {/* <span class="bskt-icon"></span> */}
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div className="displayCard">
    //   <div className="card" style={{ width: "18rem" }}>
    //     <img src={props.image} class="card-img-top" alt="..." />
    //     <div className="card-body">
    //       <h5 className="card-title">{props.name}</h5>
    //       <p className="card-text">
    //         {`MeasuringUnit in ${props.measuringUnit}`}
    //       </p>
    //       <p className="card-text">
    //         {`Minimum Order Quantity ${props.minimumOrderQuantity}`}
    //       </p>
    //       <p className="card-text">
    //         {`Available Quantity ${props.availableQuantity}`}
    //       </p>
    //     </div>

    //     <div className="card-body">
    //       <div class="input-group" qa="qty">
    //         <span class="input-group-addon">Qty</span>
    //         <input
    //           type="text"
    //           class="form-control ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-maxlength"
    //           maxlength="5"
    //         />
    //         <div class="col-sm-5 col-xs-5 pad-0">
    //           <button
    //             qa="add"
    //             type="button"
    //             class="btn btn-add col-xs-9"
    //             onClick={()=>addItem(props.elem)}

    //           >
    //             Add <span class="bskt-icon"></span>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default DisplayCard;
