import React from "react";
import WomanImg from "../img/about/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
const About = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={WomanImg} alt="about" />
          </div>
          <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-max">
              t is a long established fact that a reader will be distracted by
              the readable content of a page when <b>looking</b> at its layout.
              <br />
              <br />
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>

            <Link className="btn" to="/portfolio">
              View my work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
