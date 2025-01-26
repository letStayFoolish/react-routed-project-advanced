import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.tsx";
import Events from "./pages/Events.tsx";
import EventDetail, { deleteItemAction } from "./pages/EventDetail.tsx";
import NewEvent from "./pages/NewEvent.tsx";
import EditEvent from "./pages/EditEvent.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import EventsRoot from "./layouts/EventsRoot.tsx";
import { eventsLoader } from "./pages/Events.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import SelectedEvent, { eventItemLoader } from "./layouts/SelectedEvent.tsx";
import { action as manipulateEventsAction } from "./components/EventForm.tsx";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "events",
          element: <EventsRoot />,
          children: [
            {
              index: true,
              element: <Events />,
              loader: eventsLoader,
            },
            {
              path: ":eventId",
              element: <SelectedEvent />,
              id: "event-detail",
              loader: eventItemLoader,

              children: [
                {
                  index: true,
                  element: <EventDetail />,
                  action: deleteItemAction,
                },
                {
                  path: "edit",
                  element: <EditEvent />,
                  action: manipulateEventsAction,
                },
              ],
            },
            {
              path: "new",
              element: <NewEvent />,
              action: manipulateEventsAction,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
