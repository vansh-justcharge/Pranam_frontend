import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import heart from "../../assets/Icons/solar_heart-bold.svg";
import heart_bold from "../../assets/Icons/solar_heart-bold.png";
import button from "../../assets/Icons/Button.png";
import moment_one from "../../assets/Images/momets_one.jpg";
import moment_two from "../../assets/Images/moment_two.jpg";

// Fake text data sets (to simulate different testimonials)
const testimonials = [
  {
    heading: (
      <>
        SOME 'AHA' MOMENTS OF <br /> PRANAM BANDHUS –
      </>
    ),
    english: (
      <>
        Your association with Pranam, makes you a co-traveler or bandhu. <br />
        Share your revelations and experiences to inspire others on the <br />
        journey of self-discovery and self-love.
      </>
    ),
    hindi: (
      <>
        जब से सृष्टि बनी तब से सब याद रहना समझ लेना सारे रहस्य सारा सत्य ज्ञान यह <br />
        मनुस्मृति है। गीता में श्रीकृष्ण ने यह सत्य स्वीकारा है कि सारे तथ्य सत्य को सबसे <br />
        पहले मनु प्रथम मानव ने अपने पिता सूर्य से जाना- सत्य ऊर्जा स्रोत से। बाद में यह <br />
        ज्ञान-रहस्य ऋषियों ने जाना पर धीरे-धीरे यह ज्ञान लुप्त हो गया। अर्जुन को यह ज्ञान <br />
        श्रीकृष्ण ने गीता बता बताकर दिया। ना जाने
      </>
    ),
    author: "Sinha Kumari",
  },
  {
    heading: (
      <>
        BEAUTIFUL EXPERIENCES OF <br /> OUR PRANAM FAMILY –
      </>
    ),
    english: (
      <>
        Every journey with Pranam unfolds a new discovery of peace and <br />
        purpose. Let your story inspire someone to take their first step <br />
        towards self-realization.
      </>
    ),
    hindi: (
      <>
        हर क्षण जो प्राणम के साथ बिताया वो एक नयी खोज थी। <br />
        जीवन में शांति और आत्म-साक्षात्कार की दिशा में हर यात्रा अद्भुत अनुभव देती है। <br />
        अपनी कहानी साझा करें ताकि कोई और प्रेरित हो सके।
      </>
    ),
    author: "Rahul Sharma",
  },
];

const moments = [
  { id: 1, image: moment_one, platform: "Instagram", i: heart_bold },
  { id: 2, image: moment_two, platform: "Instagram", i: heart },
];

const Moments = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Text animation variants
  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -50, transition: { duration: 0.4 } },
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 py-12 px-4 md:px-6 font-bricolage">
      
      {/* Left - Reels Cards */}
      <div className="flex gap-6 md:gap-12 overflow-x-auto md:overflow-visible pb-4 md:pb-0 relative w-full md:w-auto">
        {moments.map((moment) => (
          <div
            key={moment.id}
            className="relative w-64 h-80 md:w-44 md:h-80 lg:w-56 lg:h-96 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between"
            style={{
              backgroundImage: `url(${moment.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                <FaPlay className="text-[#364468]" />
              </button>
            </div>

            {/* Footer bar */}
            <div className="absolute bottom-2 left-2 right-2 text-xs flex items-center justify-between gap-x-1">
              <div className="bg-[#FFFFFF66] text-white w-full rounded-[14px] px-4 py-2">
                <span>{moment.platform}</span>
              </div>
              <div className="rounded-[14px] bg-[#FFFFFF66] text-white px-3 py-2">
                <img
                  src={moment.i}
                  alt="like"
                  className="w-4 h-4 md:w-5 md:h-5"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Next button */}
        <button
          onClick={handleNext}
          className="hidden md:flex w-14 h-14 bg-black absolute right-[-25px] text-white rounded-full items-center justify-center self-center shadow-md"
        >
          <img src={button} width={28} height={28} alt="next" />
        </button>
      </div>

      {/* Right - Animated Text Section */}
      <div className="flex flex-col text-left md:ml-8 w-full md:w-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <h2
              className="text-lg md:text-[32px] font-semibold text-[#5B575F] mb-4 tracking-wide"
              style={{ letterSpacing: "0%", lineHeight: "100%" }}
            >
              {testimonials[index].heading}
            </h2>

            <p
              className="text-[#737373] mb-2 text-[16px] md:text-lg font-semibold"
              style={{ letterSpacing: "-4%", lineHeight: "100%" }}
            >
              {testimonials[index].english}
            </p>

            <p
              className="text-[#727EA7] mb-4 max-w-full md:max-w-lg leading-relaxed text-sm md:text-[15px] mt-6 md:mt-12"
              style={{ letterSpacing: "0%", lineHeight: "24px" }}
            >
              {testimonials[index].hindi}
            </p>

            <p className="font-semibold text-end text-[#6D758F] mt-2 md:mt-4">
              {testimonials[index].author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Moments;
