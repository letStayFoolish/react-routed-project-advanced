import React from "react";
import { Outlet, useNavigation } from "react-router";
import MainNavigation from "../components/MainNavigation.tsx";

const RootLayout: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
