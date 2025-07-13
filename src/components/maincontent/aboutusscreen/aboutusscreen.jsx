import React from 'react';
import './aboutusscreen.css';
import mwmaboutmeImg from '../../../assets/mwmaboutme.jpg';
import mwmsignatureImg from '../../../assets/millysignature.avif';

const AboutUsScreen = () => {

  return (
   <div className="about-us-screen bg-[#F6EDEE]" id="about-me">
      {/* Section 1 */}
      <h1
        className="text-5xl text-[#97B4EA] font-bold text-center py-8 cursor-pointer transition-colors"
      >
        About Me
      </h1>

      {/* Combined About Section */}
      <div className="py-10 px-8 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 w-full h-full">
            <img
              src={mwmaboutmeImg}
              alt="Melodies With Milly About Us Photo"
              className="w-full h-auto max-h-[500px] object-contain rounded-[24px]"
            />
          </div>
          {/* Text Column */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl font-bold mb-8 text-[#97B4EA] items-center">Hey, I'm Milly</h2>
            <p className="text-lg mb-4">
              I first created Melodies with Milly in June 2022. That first year I did over 100 parties!
            </p>
            <p className="text-lg mb-4">
              I always strive to be the best and ensure the parties I provide are EXACTLY what you want. I always add my personal touch to every party, ensuring no party is the same.
            </p>
            <p className="text-lg mb-4">
              Before starting my party business, I was a nanny and a singing teacher, and I worked overseas as an entertainer/vocalist. I have always been passionate about singing and teaching, so this business is a dream come true.
            </p>
            <p className="text-lg mb-6">
              Aside from my career I also love travelling, drinking coffee, spending time with my cats, and I'm a BIG foodie.
            </p>
                        <img
              src={mwmsignatureImg}
              alt="Melodies With Milly Signature"
            />
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <hr className="border-t-2 border-[#97B4EA] shadow-lg" />
    </div>
  );
};

export default AboutUsScreen;