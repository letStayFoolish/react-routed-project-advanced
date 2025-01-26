import classes from "./EventItem.module.css";
import { type Event } from "../types";
import React from "react";
import { Link, useSubmit } from "react-router";

type Props = {
  event: Event;
};

const EventItem: React.FC<Props> = ({ event }) => {
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm(
      "Are you sure you want to delete this event?",
    );

    if (proceed) {
      submit(null, { method: "delete" }).catch(console.error);
    }
  }

  return (
    <article className={classes.event}>
      <img src={event?.image} alt={event?.title} />
      <h1>{event?.title}</h1>
      <time>{event?.date}</time>
      <p>{event?.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
};

export default EventItem;
