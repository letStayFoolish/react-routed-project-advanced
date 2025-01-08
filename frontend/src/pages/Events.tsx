import React from "react";
import EventsList from "../components/EventsList.tsx";
import { useLoaderData } from "react-router";

const Events: React.FC = () => {
  const events = useLoaderData();

  return <EventsList events={events} />;
};

export default Events;
