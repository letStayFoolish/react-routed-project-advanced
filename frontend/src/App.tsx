import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import EventsPage from "./pages/EventsPage.tsx";
import EventDetailPage from "./pages/EventDetailPage.tsx";
import NewEventPage from "./pages/NewEventPage.tsx";
import EditEventPage from "./pages/EditEventPage.tsx";
import MainNavigation from "./layouts/MainNavigation.tsx";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainNavigation />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:eventId" element={<EventDetailPage />} />
        <Route path="/events/new" element={<NewEventPage />} />
        <Route path="/events/:eventId/edit" element={<EditEventPage />} />
      </Route>
    </Routes>
  );
};

export default App;
