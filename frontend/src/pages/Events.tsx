import React, { Suspense } from "react";
import EventsList from "../components/EventsList.tsx";
import { Event } from "../types";
import { Await, useLoaderData } from "react-router";
import { API_URL } from "../config.ts";

const Events: React.FC = () => {
  /**
   * We can use useLoaderData() in the element that's assigned to a route AND in all components that might be used inside that element(children).
   */

  const { events }: { events: Event[] } = useLoaderData();

  console.log({ events });

  return (
    <Suspense
      fallback={<div style={{ textAlign: "center" }}>Loading Events...</div>}
    >
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
};

export default Events;

/**
 * Good practice is to keep the loader function inside (or at least near) the component where we use useLoaderData();
 *
 * Data fetching is initiated as soon as route got initiated. In this case loader function is called after we go to the route: "/events".
 * React router will wait for data to be fetched (loader to be finished) before it renders the page with that data.
 */

export async function loadEvents() {
  const response = await fetch(`${API_URL}/events`);

  if (!response.ok) {
    /**
     * Errors bubble up until they reaches Error element (ifg there is such).
     */
    // return json({ message: "", status: 400}) // if you are using react router v6, for v7+ next line of code.
    throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
      status: 500,
    });
  }
  const responseData = await response.json();

  return responseData.events;
}

export async function loader() {
  return {
    events: loadEvents(),
  };
}
