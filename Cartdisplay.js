import Cartdisplayitem from "./Cartdisplayitem";
import "./Cartt.css"
function Cartdisplay({ data ,deletecart}) {
//   console.log(data);
  return (
    <div className="cart-container">
     <center><h2>Cart</h2></center> 
     <br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col"><h1>Item</h1></div>
          <div class="col"><h1>Price</h1></div>
          <div class="col"><h1>Quantity</h1></div>
        </div>
        {data.map((item)=>(
            <Cartdisplayitem items={item}
            deletecart={deletecart}></Cartdisplayitem>
        ))}
      </div>
      <button type="button" class="btn btn-info" id="cartbutton">Purchase</button>
    </div>
  );
}
export default Cartdisplay;
