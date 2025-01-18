import React from "react";
import EventsList from "../components/EventsList.tsx";
import { Event } from "../types";
import { useLoaderData } from "react-router";
import { API_URL } from "../config.ts";

const Events: React.FC = () => {
  /**
   * We can use useLoaderData() in the element that's assigned to a route AND in all components that might be used inside that element(children).
   */

  const loaderData: { events: Event[] } = useLoaderData();
  const { events } = loaderData;

  return <EventsList events={events} />;
};

export default Events;

/**
 * Good practice is to keep the loader function inside (or at least near) the component where we use useLoaderData();
 *
 * Data fetching is initiated as soon as route got initiated. In this case loader function is called after we go to the route: "/events".
 * React router will wait for data to be fetched (loader to be finished) before it renders the page with that data.
 */
export async function loader() {
  const response = await fetch(`${API_URL}/events`);

  if (!response.ok) {
    /**
     * Errors bubble up until they reaches Error element (ifg there is such).
     */
    throw new Error("Failed to fetch events");
  }

  return response;
}
