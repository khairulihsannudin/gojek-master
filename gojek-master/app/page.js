"use client";
import { useState } from "react";
import {Navbar} from "./navbar";
import Join from "./join";
import Slide from "./slide";
import Gabung from "./gabung";
import Beda from "./beda";
import Layanan from "./layanan";
import Bumi from "./bumi";
import Unduh from "./unduh";
import Test from "./test";
import Footer from "./footer";

export default function Page() {
  const [rotate, setRotate] = useState(false);
  const [rotate2, setRotate2] = useState(false);
  const [rotate3, setRotate3] = useState(false);
  function unRotate(){
    setRotate(false);
    setRotate2(false);
    setRotate3(false);
  }
  return (
    <div className="overflow-hidden ">
      <div className="h-screen">
      <Navbar rotate={rotate} setRotate={setRotate} rotate2={rotate2} rotate3={rotate3} setRotate2={setRotate2} setRotate3={setRotate3}/>
        <video
          className="absolute object-cover opacity-90 h-screen  w-screen -z-10"
          autoPlay
          loop
          muted
        >
          <source src="/gojekvid.mp4" type="video/mp4" />
        </video>
        <h1 onClick={unRotate} className="text-white flex items-center tracking-normal  h-screen font-bold text-[10vw] lg:text-[5rem] md:text-[7.5vw] p-[4vw]">
          3 negara. <br /> 20+ layanan. <br /> on-demand
          <br /> terkemuka
          <br />
        </h1>
      </div>
      <div onClick={unRotate}>
      <Join />
      <Slide />

      <Gabung />
      <Beda />
      <Layanan />
      <Bumi />
      <Unduh />
      <Footer />
      </div>
    </div>
  );
}
