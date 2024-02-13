import { useState } from "react";
import Header from "./Components/Headerfolder/Header" ;
import Body from "./Components/BodyFolder/Body";
import Cartdisplay from "./Components/Cart/Cartdisplay";
function App() {
  const[displaycart,setDisplaycart]=useState(false)
  
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
    }
  ];

  var cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
    const[cart,setCart]= useState(cartElements)
   
    function showcart(){
      setDisplaycart(true)
    }
    function deletecart(ite){
      var newcart=cart.filter(cart=>cart.title!==ite.title)
      setCart(newcart)
      
    }

  return (
    <div>
      <Header data={cartElements}
       showcart={showcart}
       ></Header>
      <Body data={productsArr}></Body>
      {displaycart  &&
      <Cartdisplay data={cart}
        deletecart={deletecart}
      ></Cartdisplay>
}
    </div>
  );
}

export default App;
