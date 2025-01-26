import classes from "./EventForm.module.css";
import {
  Form,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router";
import React from "react";
import { type Event } from "../types";
import { API_URL } from "../config.ts";

type Props = {
  method?: "PATCH" | "POST" | "DELETE";
  event?: Event;
};

const EventForm: React.FC<Props> = ({ method, event }) => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();

  function cancelHandler() {
    navigate("..");
  }

  const isSubmitting = navigation.state === "submitting";

  /**
   * using built-in Form element will automatically triger the action function for the selected route.
   * But, if we use action from another rout path, we just add attribute "action = /any-other-path"
   */
  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          defaultValue={event ? event.title : ""}
          required
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          defaultValue={event ? event.image : ""}
          required
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          defaultValue={event ? event.date : ""}
          required
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          defaultValue={event ? event.description : ""}
          required
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          {isSubmitting ? "Canceling..." : "Cancel"}
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
};

export default EventForm;

export async function action({
  request,
  params,
}: {
  request: Request;
  params: any;
}) {
  const method = request.method;
  const eventId = params.eventId;

  let url = `${API_URL}/events`;

  if (method === "PATCH") {
    url = `${API_URL}/events/${eventId}`;
  }

  try {
    const data = await request.formData();

    const newEventData = {
      title: data.get("title"),
      image: data.get("image"),
      date: data.get("date"),
      description: data.get("description"),
    };

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEventData),
    });

    if (response.status === 422) {
      // BE case 422: Adding the event failed due to validation errors.
      return response;
    }

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
