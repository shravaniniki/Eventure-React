import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/shared/Footer";
import DeleteEvent from "./components/events/DeleteEvent";
import EventDetails from "./components/events/EventDetails";
import ListEvents from "./components/events/ListEvents";
import AddEvent from "./components/events/AddEvent";
<<<<<<< HEAD
import EventDetailsUser from "./components/events/EventDetailsUser";
import ListEventUser from "./components/events/ListEventUser";
import Events from "./pages/Events";
import HomeUser from "./pages/HomeUser";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UpdateEvent from "./components/events/UpdateEvent";
=======
import UpdateEvent from "./components/events/UpdateEvent";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/login";
>>>>>>> 59dd46e1f91c87de50950d1ee5909282968dd0df



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
<<<<<<< HEAD
            <Route path="/events/delete/:id"  element={<DeleteEvent/>} />
            <Route path="/eventsuser/list" element={<ListEventUser/>}/>
            <Route path="/eventsuser/:id" element={<EventDetailsUser/>}/>
            <Route path="/events/update/:id" element={<UpdateEvent/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>

=======
            <Route path="/events/:id"  element={<DeleteEvent/>} />
            <Route path="/events/update/:id" element={<UpdateEvent/>}/> 
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
>>>>>>> 59dd46e1f91c87de50950d1ee5909282968dd0df
          </Routes>
        </main>
   
      </BrowserRouter>
    </>
  );
 
}


export default App;
