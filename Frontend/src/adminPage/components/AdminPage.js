import React from "react";
import Navbar from "../../layout/components/Navbar";
import "../assets/adminPage.css";

const AdminPage = () => {
  return (
    <>
      <Navbar />
      <img
        src="/together.jpg"
        id="together-img"
        role="img"
        aria-label="People collaborating as a team"
        alt="People collaborating as a team"
      />
    </>
  );
};

export default AdminPage;
