import Main from "./Main";
import About from "./Components/About/About";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
 import Contact from "./Components/Contact us/Contact";
import Home from "./Components/Home/Home";



function App() {
  return (
    <>
  
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/store">
          <Main/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
    </>
  );
}

export default App;
