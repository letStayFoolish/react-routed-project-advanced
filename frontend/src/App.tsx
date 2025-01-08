import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.tsx";
import Events from "./pages/Events.tsx";
import EventDetail from "./pages/EventDetail.tsx";
import NewEvent from "./pages/NewEvent.tsx";
import EditEvent from "./pages/EditEvent.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import EventsRoot from "./layouts/EventsRoot.tsx";
import { API_URL } from "./config.ts";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
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
              loader: async () => {
                const response = await fetch(`${API_URL}/events`);

                if (!response.ok) {
                  throw new Response("Failed to fetch events", { status: 500 });
                }

                const resData = await response.json();
                return resData?.events;
              },
            },
            {
              path: ":eventId",
              element: <EventDetail />,
            },
            {
              path: "new",
              element: <NewEvent />,
            },
            {
              path: ":eventId/edit",
              element: <EditEvent />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
