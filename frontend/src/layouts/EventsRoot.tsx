import React from "react";
import EventsNavigation from "../components/EventsNavigation.tsx";
import { Outlet } from "react-router";

const EventsRoot: React.FC = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default EventsRoot;
