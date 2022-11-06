import React from "react";
import Card from "./Card";
import CardData from "./CardData";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <>
      <div className="home-cards">
        {" "}
        <Navbar></Navbar>
        <Card details={CardData} />
      </div>
    </>
  );
};
export default Home;
