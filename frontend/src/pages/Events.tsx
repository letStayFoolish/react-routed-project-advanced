import React from "react";
import { Link } from "react-router";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Event 1",
    description: "Event 1 description",
  },
  {
    id: 2,
    title: "Event 2",
    description: "Event 2 description",
  },
];

const Events: React.FC = () => {
  return (
    <>
      <h1>EVENTS: </h1>
      <ul>
        {DUMMY_DATA.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
            {/* or: */}
            {/*<Link to={event.id}>{event.title}</Link>*/}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Events;
