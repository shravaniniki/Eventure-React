import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEvent from "./components/events/AddEvent";
import { Header } from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { Home } from "./pages/Home";
import ListEvents from "./components/events/ListEvents";
import EventDetails from "./components/events/EventDetails";
import { UserRegistration } from "./components/registration/UserRegistration";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="container mt-5 pt-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events/add" element={<AddEvent />} />
            <Route path="/events/list" element={<ListEvents />} />
            <Route path="/events/:id" element={<EventDetails />} /> 
            <Route path="/users/registration" element={<UserRegistration />} /> 

            {/* 
            <Route path="/events" element={<Event />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            */}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
  );
}


export default App;
