import { NavLink } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink to="./" className="nav-link ">
                {" "}
                Home{" "}
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/store" className="nav-link ">
                {" "}
                Store
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/about" className="nav-link ">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="genericss">
        <center>
          <h1 className="gadha">The Generics</h1>
          <button class="latest-album">Get our Latest Album</button>
          <button class="play-btn">►</button>
        </center>
      </div>

      
      <div className="xy">
        <div className="xyz">
          <span>
            <h5>JUL25</h5>
          </span>
          <span>
            <h5>DETROIT,MI</h5>
          </span>
          <span>
            <h5>DTE ENERGY MUSIC THEATRE</h5>
          </span>
          <button>Buy Tickets</button>
        </div>
        <div className="xyz">
          <span>
            <h5>JUL28</h5>
          </span>
          <span>
            <h5>TORONTO,ON</h5>
          </span>
          <span>
            <h5>BUDWEISER STAGE</h5>
          </span>
          <button>Buy Tickets</button>
        </div>
        <div className="xyz">
          <span>
            <h5>JUL29</h5>
          </span>
          <span>
            <h5>BRISTOW,VA</h5>
          </span>
          <span>
            <h5>JIGGY LUBE LIVE</h5>
          </span>
          <button>Buy Tickets</button>
        </div>
        <div className="xyz">
          <span>
            <h5>JUL30</h5>
          </span>
          <span>
            <h5>PHONEIX,AZ</h5>
          </span>
          <span>
            <h5>AK-CHIN PAVILION</h5>
          </span>
          <button>Buy Tickets</button>
        </div>

        <div className="xyz">
          <span>
            <h5>JUL31</h5>
          </span>
          <span>
            <h5>LAS VEGAS,NV</h5>
          </span>
          <span>
            <h5>T MOBILE ARENA</h5>
          </span>
          <button>Buy Tickets</button>
        </div>
      </div>
    </>
  );
}
export default Home;
