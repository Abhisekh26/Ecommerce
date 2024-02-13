import { useState } from "react";
import Header from "./Components/Headerfolder/Header";
import Body from "./Components/BodyFolder/Body";
import Cartdisplay from "./Components/Cart/Cartdisplay";
function App() {
  const [displaycart, setDisplaycart] = useState(false);
  const [cart, setCart] = useState([]);

  var productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  function showcart() {
    setDisplaycart(true);
  }

  function addcart(ite) {
    var newcart = cart.find((item) => item.title === ite.title);
      if (!newcart) {
      setCart([...cart, { ...ite, quantity: 1 }]);
    } else {
      setCart(
        cart.map((item) =>
          item.title === ite.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
  }
  // console.log(cart)
  function deletecart(ite) {
    var newcart = cart.filter((cart) => cart.title !== ite.title);
    setCart(newcart);
  }

  return (
    <div>
      <Header data={cart} showcart={showcart}></Header>

      <Body data={productsArr} addcart={addcart}></Body>

      {displaycart && (
        <Cartdisplay data={cart} deletecart={deletecart}></Cartdisplay>
      )}
    </div>
  );
}

export default App;
