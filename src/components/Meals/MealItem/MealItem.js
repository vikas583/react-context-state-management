import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";
import CartContext from "../../../Context/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      amount: amount,
      name: props.name,
      price: props.price,
    });
  };

  const price = `$${props.price.toFixed(2)}`;
  return (
    <li key={props.id} className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
