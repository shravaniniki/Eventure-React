import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/shared/Header";
import Home from "./pages/Home";
import ListEvents from "./components/shared/events/ListEvents";
import EventDetails from "./components/shared/events/EventDetails";
import Footer from "./components/shared/Footer";



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="container mt-5 pt-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events/list" element={<ListEvents />} />
            <Route path="/events/:id" element={<EventDetails />} /> 
            
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}


export default App;