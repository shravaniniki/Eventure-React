import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from "./pages/Home";


function App() {
 

  return (
    
   <BrowserRouter>
   {/* <Header/> */}
    <Routes>
    <Route path="/" element={<Home />} />
    
    </Routes>
    {/* <Footer/> */}

   </BrowserRouter>
   
  )
}

export default App
