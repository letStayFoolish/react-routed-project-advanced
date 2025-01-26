import React from "react";
import { redirect, useRouteLoaderData } from "react-router";
import EventItem from "../components/EventItem.tsx";
import { API_URL } from "../config.ts";

const EventDetail: React.FC = () => {
  const eventData = useRouteLoaderData("event-detail");

  const { event } = eventData;

  return <EventItem event={event} />;
};

export default EventDetail;

type DeleteActionParams = {
  eventId: string;
};

export async function deleteItemAction({
  request,
  params,
}: {
  request: Request;
  params: DeleteActionParams;
}) {
  const eventId = params.eventId;

  try {
    const response = await fetch(`${API_URL}/events/${eventId}`, {
      method: request.method, // DELETE
    });

    if (!response.ok) {
      throw new Response(
        JSON.stringify({ message: "Could not delete event" }),
        {
          status: 500,
        },
      );
    }

    console.log(`Deleted event with id: ${eventId}`);

    return redirect("/events");
  } catch (error: any) {
    console.error(error);
  }
}
