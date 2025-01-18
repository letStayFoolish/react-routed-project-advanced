import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.tsx";
import Events from "./pages/Events.tsx";
import EventDetail from "./pages/EventDetail.tsx";
import NewEvent from "./pages/NewEvent.tsx";
import EditEvent from "./pages/EditEvent.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import EventsRoot from "./layouts/EventsRoot.tsx";
import { loader as eventsLoader } from "./pages/Events.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

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
