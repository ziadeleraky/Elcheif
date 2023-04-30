import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartModal = () => {
    setCartIsShown(true);
  };

  const hideCartModal = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartModal} />}
      <Header onShowCart={showCartModal} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
