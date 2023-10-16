import React from "react";
import "./works.css";
import Portfolio1 from "../../assets_old/portfolio-1.png";
import Portfolio2 from "../../assets_old/portfolio-2.png";
import Portfolio3 from "../../assets_old/portfolio-3.png";
import Portfolio4 from "../../assets_old/portfolio-4.png";
import Portfolio5 from "../../assets_old/portfolio-5.png";
import Portfolio6 from "../../assets_old/portfolio-6.png";

export default function Works() {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        Hi, I am Vineeth. I am a software engineer looking for fulltime role.
        Currently I am pursuing a Masters in computer science at UMass Amherst.
        I worked as a software engineer at Samsung for 2 years.
      </span>
      <div className="worksImgs">
        <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
        <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
        <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
        <img src={Portfolio4} alt="Portfolio4" className="worksImg" />
        <img src={Portfolio5} alt="Portfolio5" className="worksImg" />
        <img src={Portfolio6} alt="Portfolio6" className="worksImg" />
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
}
