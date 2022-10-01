import React from "react";
import Header from "./components/Header";

const AdminPage = () => {
  return (
    <>
      <Header />
      <img
        src="/together.jpg"
        id="together-img"
        aria-label="People collaborating as a team"
        alt="People collaborating as a team"
      />
    </>
  );
};

export default AdminPage;
