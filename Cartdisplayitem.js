function Cartdisplayitem({items,deletecart}){
    console.log(items)
    return(
    <>
        <div class="container text-center">
        <div class="row">
          <div class="col">{items.title}</div>
          <div class="col">{items.price}</div>
          <div class="col">{items.quantity}</div>
        
        </div>
        {/* <button type="button" class="btn btn-danger">Remove</button> */}
        </div>
          <button type="button" class="btn btn-danger" 
          onClick={()=>deletecart(items)}>Remove</button>
          </>
    )
}
export default Cartdisplayitem