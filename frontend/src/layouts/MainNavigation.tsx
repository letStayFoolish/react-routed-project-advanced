import React from "react";
import { NavLink, Outlet } from "react-router";

const MainNavigation: React.FC = () => {
  return (
    <>
      <header>
        <h1>Navigation</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/events">Events</NavLink>
              <NavLink to="/events/1">Event Detail</NavLink>
              <NavLink to="/events/new">New Event</NavLink>
              <NavLink to="/events/1/edit">Edit Event</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default MainNavigation;
