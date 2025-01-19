import React from "react";
import EventForm from "../components/EventForm.tsx";
import { useRouteLoaderData } from "react-router";

const EditEvent: React.FC = () => {
  const eventData = useRouteLoaderData("event-detail");
  const { event } = eventData;

  return <EventForm event={event} />;
};

export default EditEvent;
