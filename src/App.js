import { useState } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals/Meals";
import Cart from "./components/Cart/Cart";

import CartContextProvider from "./Context/cart-provider";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCartHandler = (value) => {
    setIsCartVisible(value);
  };

  return (
    <CartContextProvider>
      {isCartVisible && <Cart showCartHandler={showCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
