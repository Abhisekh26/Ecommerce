 import "./Design.css";
import Display from "./Display";
function Body({data}) {
    // console.log(data)
  return (<>
  <Display data={data}></Display>
  
  <button type="button" class="btn btn-secondary" id="raj">Show Cart</button>
  </>
  )
    
}
export default Body;
