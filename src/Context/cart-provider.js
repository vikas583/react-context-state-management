import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_CART_ITEM") {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCardItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCardItem = state.items[existingCardItemIndex];
    let updatedItems;

    if (existingCardItem) {
      const updatedItem = {
        ...existingCardItem,
        amount: existingCardItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCardItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedAmount };
  } else if (action.type === "REMOVE_CART_ITEM") {
    const existingCardItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCardItem = state.items[existingCardItemIndex];
    let updatedItems;
    if (existingCardItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      let updatedItem = {
        ...existingCardItem,
        amount: existingCardItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCardItemIndex] = updatedItem;
    }

    const updatedTotalAmount = state.totalAmount - existingCardItem.price;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } else {
    return defaultCartState;
  }
};

const CartContextProvider = (props) => {
  const [cartItems, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToContextHandler = (item) => {
    dispatchCartAction({ type: "ADD_CART_ITEM", item });
  };

  const removeItemFromContextHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_CART_ITEM", id });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartItems.items,
        total: cartItems.totalAmount,
        addItem: addItemToContextHandler,
        removeItem: removeItemFromContextHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
