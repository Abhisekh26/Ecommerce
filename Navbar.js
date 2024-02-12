import "./DEsignheader.css";
function Navbar() {
  return (
    // <div className="design">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active"  href="/"> Home </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/"> Store
              </a>
               
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/">
                About
              </a>
            </li>
          </ul>

          <button class="btn btn-outline-success" type="submit">
            Cart(0)
          </button>
        </div>
      </nav>
    // </div>
  );
}
export default Navbar;
