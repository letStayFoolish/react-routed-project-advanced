import React from "react";
import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation.tsx";

const RootLayout: React.FC = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
