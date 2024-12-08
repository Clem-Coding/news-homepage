import React from "react";
import HeroImage from "../grid-elements/HeroImage";
import MainArticle from "../grid-elements/MainArticle";

export default function MainGrid() {
  return (
    <>
      <main className="main">
        <div className="grid-container">
          <HeroImage />
          <MainArticle />
          <div className="box3">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius qui
              omnis repellendus minima accusantium consequatur dolore illo esse
              accusamus delectus sequi unde natus nisi, eos autem, harum,
              recusandae sit magnam?
            </p>
          </div>
          <div className="box4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ad
              quaerat, expedita accusantium rerum illo praesentium mollitia,
            </p>
          </div>
          <div className="box5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ad
              quaerat, expedita accusantium rerum illo praesentium mollitia,
            </p>
          </div>
          <div className="box6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ad
              quaerat, expedita accusantium rerum illo praesentium mollitia,
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
