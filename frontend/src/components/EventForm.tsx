import classes from "./EventForm.module.css";
import { Form, useNavigate, useNavigation } from "react-router";
import React from "react";
import { type Event } from "../types";

type Props = {
  method?: string;
  event: Event;
};

const EventForm: React.FC<Props> = ({ method, event }) => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  function cancelHandler() {
    navigate("..");
  }

  const isSubmitting = navigation.state === "submitting";

  /**
   * using built-in Form element will automatically triger the action function for the selected route.
   * But, if we use action from another rout path, we just add attribute "action = /any-other-path"
   */
  return (
    <Form method="post" className={classes.form}>
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
