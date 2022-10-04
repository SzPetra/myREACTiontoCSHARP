import React from "react";
import Navbar from "../../layout/components/Navbar";
import "../assets/adminPage.css";
import Sidebar from "../../layout/components/Sidebar";

const AdminPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
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
