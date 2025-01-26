import React from "react";
import EventForm from "../components/EventForm.tsx";

const NewEvent: React.FC = () => {
  return <EventForm method="POST" />;
};

export default NewEvent;
