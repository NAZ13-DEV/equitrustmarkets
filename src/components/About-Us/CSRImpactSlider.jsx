/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
import img4 from "../../img/img4.jpg";
import img5 from "../../img/img5.jpg";
import img6 from "../../img/img6.jpg";

const images = [img1, img2, img3, img4, img5, img6];


const settings = {
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
};

export default function CSRImpactSlider() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl px-4 mx-auto text-center">
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our size makes a big impact
        </motion.h2>
        <motion.p
          className="mt-2 text-sm text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Helping others is in our DNA. Through our global Corporate Social Responsibility (CSR)
          program, we invest in the communities around us.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className="px-2">
                <div className="overflow-hidden rounded-xl group">
                  <img
                    src={src}
                    alt={`CSR ${index}`}
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}
