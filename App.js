import Main from "./Main";
import About from "./Components/About/About";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";


const router=createBrowserRouter([{
  path:'/about',element:<About/>},
{path:"/",element:<Main/>}
])


function App() {
  return(
    <>
    <RouterProvider router={router}></RouterProvider>
    
    </>
    
  )

  
  
}

export default App;
