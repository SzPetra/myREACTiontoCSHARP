import React from "react";
import "../assets/adminPage.css";
import Dropdown from "react-dropdown";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const testOptions = ["Chair-lamp test", "Work motivation test"];
const editTestsOptions = ["Edit chair-lamp test", "Edit work motivation test"];

const Header = () => {
  return (
    <>
      <div className="header-container">
        <Dropdown
          options={testOptions}
          arrowClosed={<FaAngleDown />}
          arrowOpen={<FaAngleUp />}
          placeholder={"Tests"}
        />

        <Dropdown
          options={editTestsOptions}
          arrowClosed={<FaAngleDown />}
          arrowOpen={<FaAngleUp />}
          placeholder={"Edit tests"}
        />
      </div>
    </>
  );
};

export default Header;
