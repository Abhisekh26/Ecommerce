

function Displayitem({items}){
    //  console.log(items)
    return(
        // <div class="card-group">
        <div class="card"  style={{width:"18rem"}}  >
        <img src={items.imageUrl} class="card-img-top" alt="art" ></img> 
        <div class="card-body">
          <p class="card-text">{items.title}</p>
          {items.price}
          <button type="button" class="btn btn-info">Add To Cart</button>
        </div>
        </div>
    //   </div>
    )
}
export default Displayitem