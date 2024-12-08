import React from "react";
import Header from "../components/layout/Header";
import MainGrid from "../components/layout/MainGrid";

export default function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <MainGrid />
      </div>
    </>
  );
}
