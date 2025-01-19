import React from "react";
import EventForm from "../components/EventForm.tsx";
import { redirect } from "react-router";
import { API_URL } from "../config.ts";

const NewEvent: React.FC = () => {
  return <EventForm />;
};

export default NewEvent;

export async function newEventAction({
  request,
  params,
}: {
  request: Request;
  params: any;
}) {
  try {
    const data = await request.formData();

    const newEventData = {
      title: data.get("title"),
      image: data.get("image"),
      date: data.get("date"),
      description: data.get("description"),
    };

    const response = await fetch(`${API_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEventData),
    });

    if (!response.ok) {
      throw new Response(
        JSON.stringify({ message: "Could not create event" }),
        {
          status: 500,
        },
      );
    }

    return redirect("/events");
  } catch (error: any) {
    console.log(error);
  }
}
