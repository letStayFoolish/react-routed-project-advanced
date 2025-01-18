import React from "react";
import PageContent from "../components/PageContent.tsx";
import { useRouteError } from "react-router";
import MainNavigation from "../components/MainNavigation.tsx";

const ErrorPage: React.FC = () => {
  const error: { data: { message: string }; status: number } = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = JSON.parse(error.data).message as string;
  }

  if (error.status === 404) {
    title = "Page not found!";
    message = "The page you are looking for does not exist!";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
