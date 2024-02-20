import "./Itemdesign.css";
import Headerdisplay from "../Headerfolder/Headerdisplay";
function Itempages1() {
  return (
    <>
      <Headerdisplay></Headerdisplay>
      <div className="designitem">
        <ul>
          <li>
            <img src="photo1.webp"></img>
          </li>
          <li>
            <img src="photo2.jpg"></img>
          </li>
          <li>
            <img src="photo3.webp"></img>
          </li>
          <li>
            <img src="photo4.webp"></img>
          </li>
        </ul>
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
          style={{height:"100px"}}
          ></textarea>
          <label for="floatingTextarea2">Reviews</label>
        </div>
      </div>
    </>
  );
}
export default Itempages1;
