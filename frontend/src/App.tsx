import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import Events from "./pages/Events.tsx";
import EventDetail from "./pages/EventDetail.tsx";
import NewEvent from "./pages/NewEvent.tsx";
import EditEvent from "./pages/EditEvent.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import EventsRoot from "./layouts/EventsRoot.tsx";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index={true} element={<Home />} />
        <Route path="/events" element={<EventsRoot />}>
          <Route index element={<Events />} />
          <Route path=":eventId" element={<EventDetail />} />
          <Route path="new" element={<NewEvent />} />
          <Route path=":eventId/edit" element={<EditEvent />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
