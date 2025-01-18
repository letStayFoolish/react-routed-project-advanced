import classes from "./PageContent.module.css";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};
const PageContent: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PageContent;
