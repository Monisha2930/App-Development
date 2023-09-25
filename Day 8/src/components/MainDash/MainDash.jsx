import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Tables";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <p>Dashboard</p>
      <Cards />
      <Table />
    </div>
  );
};    
 
export default MainDash;