import React from "react";
import WomanImg from "../img/home/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
const Home = () => {
  return (
    <section className="section overflow-x-hidden">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center">
          <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">
              Photographer <br /> & Videographer
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Mumbai, Maharashtra
            </p>
            <Link to="/contact" className="btn mb-[30px]">
              hire me
            </Link>
          </div>
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <div className="relative lg:-right-40 overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={WomanImg}
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
