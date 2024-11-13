import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/shared/Header";
import Home from "./pages/Home";
import Footer from "./components/shared/Footer";
import DeleteEvent from "./components/events/DeleteEvent";
import EventDetails from "./components/events/EventDetails";
import ListEvents from "./components/events/ListEvents";
import AddEvent from "./components/events/AddEvent";
import UpdateEvent from "./components/events/UpdateEvent";



function App() {
  return (
    <>
      <BrowserRouter>
       
        <main className="container mt-5 pt-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events/add" element={<AddEvent />} />
            <Route path="/events/list" element={<ListEvents />} />
            <Route path="/events/:id" element={<EventDetails />} /> 
            <Route path="/events/:id"  element={<DeleteEvent/>} />
            <Route path="/events/update/:id" element={<UpdateEvent/>}/> 
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
 
}


export default App;
