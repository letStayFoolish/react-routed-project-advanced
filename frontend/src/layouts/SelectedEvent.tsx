import React from "react";
import { Outlet } from "react-router";
import { API_URL } from "../config.ts";

const SelectedEvent: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default SelectedEvent;

// An alternative to using useEffect
export async function eventItemLoader({
  request,
  params,
}: {
  request: Request;
  params: any;
}) {
  const eventId = params.eventId;

  console.log({ request, params });

  try {
    const response = await fetch(`${API_URL}/events/${eventId}`);

    if (!response.ok) {
      throw new Response(
        JSON.stringify({ message: "Could not fetch event details" }),
        {
          status: 500,
        },
      );
    }

    return response;
  } catch (error: any) {
    console.error(error);
  }
}
