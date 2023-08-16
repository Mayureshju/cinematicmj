import React from "react";
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative ">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <div className="flex flex-col lg:items-start">
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-max">
              t is a long established fact that a reader will be distracted by
              the readable content of a page when <b>looking</b> at its layout.
              <br />
              <br />
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <Link className="btn mb-[30px] mx-auto lg:mx-0" to="/contact">
              Hire me
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:gap-2">
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover hh-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image1}
                alt="portfolio"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover hh-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image2}
                alt="portfolio"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover hh-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image3}
                alt="portfolio"
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover hh-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image4}
                alt="portfolio"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
