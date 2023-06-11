import React from "react";
import Nav from "../components/Nav";
import "../components/styles/PageNotFound.css";
const PageNotFound = () => {
  return (
    <div>
      <Nav />
      <h1 className="notFound">404 Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;
