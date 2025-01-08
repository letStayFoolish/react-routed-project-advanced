import React from "react";
import { useParams } from "react-router";

const EventDetail: React.FC = () => {
  const { eventId } = useParams();

  return (
    <>
      <h1>Event Detail Page</h1>
      <h3>EVENT ID: {eventId}</h3>
    </>
  );
};

export default EventDetail;
