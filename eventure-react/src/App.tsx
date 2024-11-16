import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DeleteEvent from "./components/events/DeleteEvent";
import EventDetails from "./components/events/EventDetails";
import ListEvents from "./components/events/ListEvents";
import AddEvent from "./components/events/AddEvent";
import EventDetailsUser from "./components/events/EventDetailsUser";
import Events from "./pages/Events";
import About from "./pages/About";
import UpdateEvent from "./components/events/UpdateEvent";

import Header from "./components/shared/Header";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./components/UserContext";
import UserRegistration from "./components/registration/UserRegistration";
import HomeUser from "./pages/HomeUser";
import Login from "./components/Login/login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <main className="container mt-5 pt-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/organizer" element={<HomeUser />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/add" element={<AddEvent />} />
            <Route path="/events/list" element={<ListEvents />} />
            <Route path="/events/:id/user" element={<EventDetailsUser />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/events/:id/delete" element={<DeleteEvent />} />
            <Route path="/events/:id/update" element={<UpdateEvent />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/events/:id/register" element={<UserRegistration />} />
          </Routes>
        </main>
        <ToastContainer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
