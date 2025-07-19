import React from "react";
import bgDesktop from "../../img/bglg.jpg";
import bgMobile from "../../img/bgsm.jpg";

const Contacts = () => {
  return (
    <section className="relative w-full h-[450px] lg:h-[500px] text-white">
      {/* Backgrounds */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: `url(${bgDesktop})` }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center lg:hidden"
        style={{ backgroundImage: `url(${bgMobile})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent lg:from-black/80 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-md text-center lg:text-left lg:ml-0 lg:mr-auto">
            <h2 className="text-3xl font-semibold mb-4 md:text-6xl">Contacts</h2>
            <p className="text-sm leading-relaxed md:text-lg">
              Our dedicated support specialists speak 14 languages. Support is
              available 24 hours a day, 7 days a week in{" "}
              <span className="text-[#07A658] font-medium">
                English, Chinese, Thai, Vietnamese, Arabic, Bengali, Hindi and Urdu.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
