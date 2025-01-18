import React from "react";
import PageContent from "../components/PageContent.tsx";

const ErrorPage: React.FC = () => {
  return (
    <PageContent title="An error occured!">
      <p>Something went wrong</p>
    </PageContent>
  );
};

export default ErrorPage;
