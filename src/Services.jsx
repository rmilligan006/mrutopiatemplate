import React from "react";
import ge from "./assets/ge.png";
import bosch from "./assets/bosch.png";
import lg from "./assets/LG.png";
import whirlpool from "./assets/whirlpool.png";
import kenmore from "./assets/Kenmore-logo.png";
import maytag from "./assets/maytag.png";

const Services = () => {
  return (
    <div
      id="services"
      className=" w-full md:h-screen flex items-center bg-[#FAC213]"
    >
      <div className="max-w-[1240px] md:grid grid-cols-2 gap-10">
        <div className="p-8 shadow-xl shadow-gray-500 rounded-xl col-span-1 m-10 bg-[#000] text-white">
          <h1 className="uppercase text-3xl font-bold tracking-widest text-center">
            Service and repairs on:
          </h1>
          <div className="py-2 text-center">
            <p className="text-3xl uppercase tracking-widest">Washers</p>
            <p className="text-3xl uppercase tracking-widest">Dryers</p>
            <p className="text-3xl uppercase tracking-widest">Fridges</p>
            <p className="text-3xl uppercase tracking-widest">stoves</p>
            <p className="text-3xl uppercase tracking-widest">dishwashers</p>
            <p className="text-xl uppercase tracking-widest mt-5">
              and residental major appliances{" "}
            </p>
          </div>
        </div>

        <div className="w-full h-auto m-auto shadow-xl bg-white shadow-gray-400 rounded-xl grid grid-cols-1 sm:grid-cols-1 gap-2 text-center py-2 ">
          <div>
            <div>
              <p className="text-xl py-2">Appliance manufacturers we service</p>
              <br />
              <div className="grid grid-cols-3 px-6">
                <img src={lg} alt="" style={{ width: "115px" }} />
                <img src={ge} alt="" style={{ width: "115px" }} />
                <img src={bosch} alt="" style={{ width: "115px" }} />
                <img src={maytag} alt="" style={{ width: "115px" }} />
                <img
                  src={whirlpool}
                  alt=""
                  style={{ width: "170px", marginTop: "30px" }}
                />
                <img
                  src={kenmore}
                  alt=""
                  style={{ width: "110px" }}
                  className="m-2"
                />
              </div>
              <br />
              <p className="text-2xl">And many more!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
