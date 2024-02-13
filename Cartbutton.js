
function Cartbutton({data,showcart}){
    // console.log(data)
    return(
        <>
        <button class="btn btn-outline-success" type="submit"
            onClick={showcart}>
            Cart({data.reduce((total,item)=>
            total+item.quantity,0)})
          </button>
          </>
    )
}
export default Cartbutton;

