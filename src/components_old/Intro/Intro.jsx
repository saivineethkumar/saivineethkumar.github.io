import React from "react";
import "./intro.css";
import bg from "../../assets_old/image.png";
import { Link } from "react-scroll";
import btnImg from "../../assets_old/hireme.png";

export default function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Vineeth</span> <br /> Software
          Developer{" "}
        </span>
        <p className="introPara">
          I am an experienced Software Developer, intrested in developing <br />{" "}
          products that can change the world for better.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}
