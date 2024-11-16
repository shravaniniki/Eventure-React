import React from "react";
import "./Home.css"; 
import ListEvents from "../components/events/ListEvents";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Events: React.FC = () => {
  return (
    <>
      <div>
        <HelmetProvider>
          <Helmet>
            <title>Events</title>
          </Helmet>
        </HelmetProvider>
        <ListEvents />
      </div>
    </>
  );
};

export default Events;
