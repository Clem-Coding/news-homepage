import React from "react";
import HeroImage from "../grid-elements/HeroImage";
import MainArticle from "../grid-elements/MainArticle";
import NewSection from "../grid-elements/NewSection";
import Card from "../grid-elements/Card";

export default function MainGrid() {
  return (
    <>
      <main className="main">
        <div className="grid-container">
          <HeroImage />
          <MainArticle />
          <NewSection />

          <Card
            image="./images/image-retro-pcs.jpg"
            imageAlt="pc rétro dans les tons violet"
            number="01"
            title="Reviving Retro PCs"
            paragraph="What happens when old PCs are given modern upgrades?"
          />
          <Card
            image="./images/image-top-laptops.jpg"
            imageAlt="zoom sur clavier gamer"
            number="02"
            title="Top 10 Laptops of 2022"
            paragraph="Our best picks for various needs and budgets."
          />
          <Card
            image="./images/image-gaming-growth.jpg"
            imageAlt="manette de console receptionnée par une main"
            number="03"
            title="The Growth of Gaming"
            paragraph="How the pandemic has sparked fresh opportunities"
          />
        </div>
      </main>
    </>
  );
}
