 import "./Design.css";
import Displayitem from "./Displayitem";
function Display({ data }) {
  // console.log(data)

  return (
     <div class="card-deck">
      
        {data.map((item) => (
          <Displayitem items={item}></Displayitem>
        ))}
      
      
       </div> 
  );
}
export default Display;
