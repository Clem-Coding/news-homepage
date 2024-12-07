import React from "react";
import Header from "../components/layout/Header";
import HeroImage from "../components/elements/HeroImage";

export default function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <HeroImage />
      </div>
    </>
  );
}
