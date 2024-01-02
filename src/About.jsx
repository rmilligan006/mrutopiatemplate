import React from "react";
import mrutopia from "./assets/mr.utopia.png";

const About = () => {
  return (
    <>
      <div id="about" className=" w-full flex items-center py-16 bg-[#FAC213]">
        <div className="max-w-[1240px] w-full h-full m-auto grid-span-2">
          <div className="w-full h-full m-auto shadow-xl shadow-gray-500 rounded-xl col-span-2 p-10 bg-[#000] text-white">
            <div className="flex justify-center items-center bg-red-600 my-10"></div>
            <div>
              <h1 className="uppercase text-4xl font-bold tracking-widest text-center">
                Mr.Utopia
              </h1>
              <p className="uppercase text-lg font-bold tracking-widest text-center mt-7">
                est. 1995
              </p>
            </div>
            <div className="max-w-screen-lg mx-auto pb-10 flex justify-center">
              <img src={mrutopia} alt="company logo" className="" />
            </div>
            <br />
            <div className="pb-4">
              <p className="uppercase text-xl font-bold tracking-widest text-center">
                We fix it like we own it!
              </p>
            </div>
          </div>

          <div className="max-w-[1240px] w-full flex justify-center items-center">
            <p className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 mx-4 my-10 bg-white text-xl">
              Mr. Utopia Appliance Repair is a highly reputable business that
              has been established since 1995. Our certified technician is
              trained to diagnose and repair all major appliances. We are known
              for our professional and efficient service. When we are invited
              into your home we take the time and dedication to apply our
              knowledge to effectively perform in-home repairs to your
              appliances as if they were our own. We are not satisfied until our
              customers are happy. "WE FIX IT LIKE WE OWN IT".
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
