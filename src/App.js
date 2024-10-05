import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [carIsShown, setCarIsShown] = useState(false);

  const showCartHandler = () => {
    setCarIsShown(true);
  };

  const hideCartHandler = () => {
    setCarIsShown(false);
  };

  return (
    <CartProvider>
      {carIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
