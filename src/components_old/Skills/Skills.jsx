import React from "react";
import "./skills.css";
import UIDesign from "../../assets_old/ui-design.png";
import WebDesign from "../../assets_old/website-design.png";
import AppDesign from "../../assets_old/app-design.png";

export default function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Hi, I am Vineeth. I am a software engineer looking for fulltime role.
        Currently I am pursuing a Masters in computer science at UMass Amherst.
        I worked as a software engineer at Samsung for 2 years.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX design</h2>
            <p>change the skill and write something else</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>change the skill and write something else</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>change the skill and write something else</p>
          </div>
        </div>
      </div>
    </section>
  );
}
