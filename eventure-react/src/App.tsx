import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/shared/Footer";
import DeleteEvent from "./components/events/DeleteEvent";
import EventDetails from "./components/events/EventDetails";
import ListEvents from "./components/events/ListEvents";
import AddEvent from "./components/events/AddEvent";
import EventDetailsUser from "./components/events/EventDetailsUser";
import ListEventUser from "./components/events/ListEventUser";
import Events from "./pages/Events";
import HomeUser from "./pages/HomeUser";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UpdateEvent from "./components/events/UpdateEvent";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/login";
import Header from "./components/shared/Header";



function App() {
  return (
    <>
      <BrowserRouter>
       <Header/>
        <main className="container mt-5 pt-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userHome" element={<HomeUser />}/>
            <Route path="/events" element={<Events/>}/>
            <Route path="/events/add" element={<AddEvent />} />
            <Route path="/events/list" element={<ListEvents />} />
            <Route path="/events/:id" element={<EventDetails />} /> 
            <Route path="/events/:id"  element={<DeleteEvent/>} />
            <Route path="/events/update/:id" element={<UpdateEvent/>}/> 
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </main>
   
      </BrowserRouter>
    </>
  );
 
}


export default App;
