import React from "react";
import { useRouteLoaderData } from "react-router";
import EventItem from "../components/EventItem.tsx";

const EventDetail: React.FC = () => {
  const eventData = useRouteLoaderData("event-detail");
  const { event } = eventData;

  return <EventItem event={event} />;
};

export default EventDetail;
