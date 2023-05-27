import React, { useState, useEffect } from "react";
export const Navbar = (props) => {
  const list =
    "lg:text-[1.2vw] md:text-[1.5rem] sm:[1.3rem] flex flex-row lg:justify-center items-center gap-[1vw] hover:border-b-2 border-white";
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const [transparant, setTransparant] = useState(true);
  const [isHamOpen, setIsHamOpen] = useState(false);

  useEffect(() => {
    function Scroll() {
      const currentScroll = window.pageYOffset;
      setVisible(prevScroll > currentScroll);
      setTransparant(currentScroll < 500);
      setPrevScroll(currentScroll);
    }

    window.addEventListener("scroll", Scroll);
    return () => {
      window.removeEventListener("scroll", Scroll);
    };
  }, [prevScroll, visible]);

  function Rotation() {
    props.setRotate(!props.rotate);
    props.setRotate2(false);
    props.setRotate3(false);
  }
  function Rotation2() {
    props.setRotate2(!props.rotate2);
    props.setRotate(false);
    props.setRotate3(false);
  }

  function Rotation3(){
    props.setRotate3(!props.rotate3);
    props.setRotate2(false);
    props.setRotate(false);
  }

  function handleHamburger() {
    setIsHamOpen(!isHamOpen);
  }

  return (
    <nav
      className={`flex fixed z-50 lg:flex-row flex-col lg:justify-between items-center bg-slate-900 font-bold w-full  gap-[1.5vw]  lg:px-[3vw] lg:py-[2vw] px-[5vw] py-[4vw] ${
        isHamOpen ? "" : visible ? "" : "hidden"
      } ${
        transparant
          ? isHamOpen
            ? "bg-slate-900 h-full"
            : "bg-transparent"
          : isHamOpen
          ? "h-full"
          : ""
      }`}
    >
      <div className="flex flex-row justify-between max-lg:w-full  ">
        <img className="lg:w[10vw] fill-white" src="gojek.svg" alt="logo" />

        <div
          onClick={handleHamburger}
          className={`lg:hidden flex flex-col sm:[&>div]:w-[1.5rem] [&>div]:w-[1rem] sm:[&>div]:h-[0.15rem] [&>div]:h-[0.1rem] items-center ${
            isHamOpen ? "justify-center " : "justify-evenly"
          } text-white cursor-pointer`}
        >
          <div
            className={`bg-white transform duration-500 ${
              isHamOpen ? "rotate-45 translate-y-1/2" : ""
            }`}
          ></div>
          <div
            className={`bg-white transform duration-500 ${
              isHamOpen ? "hidden" : ""
            }`}
          ></div>
          <div
            className={`bg-white transform duration-500 ${
              isHamOpen ? "-rotate-45 -translate-y-1/2" : ""
            }`}
          ></div>
        </div>
      </div>
      <ul
        className={` lg:flex ${
          isHamOpen
            ? "flex flex-col bg-slate-900 w-full overflow-scroll mt-[2vh]"
            : "hidden"
        } lg:flex-row font-lato items-start h-full justify-between lg:items-center lg:justify-center lg:gap-[2.5vw] text-white`}
      >
        <li className={list}>
          <a href="/">Beranda</a>
        </li>
        <li>
          <div
            className={`cursor-pointer ${list}`}
            onClick={Rotation}
          >
            <p>Gabung Jadi Mitra</p>
            <div
              className={`w-[0.7vw] h-[0.7vw] border-r-2 mb-1 border-solid border-white transform border-b-2 ${
                props.rotate
                  ? "rotate-[225deg] translate-y-1/2 duration-500"
                  : "rotate-45  duration-500"
              } cursor-pointer`}
            ></div>
          </div>

          <div
            style={{ visibility: props.rotate ? "visible" : "hidden" }}
            className={`lg:w-[14vw] lg:py-[2vw] pb:[2vw] px-[2vw] lg:text-[1.2vw] md:text-[1.3rem]  transform transition-all duration-1000 ${
              props.rotate
                ? "opacity-100 lg:translate-y-0 -translate-y-0"
                : "opacity-0 lg:-translate-y-full translate-y-1/4 max-lg:h-0"
            }  flex flex-col lg:absolute lg:top-[4.5vw] text-left lg:bg-slate-800 rounded-[2vw]`}
          >
            <h1>Mitra Driver</h1>
            <h1>Mitra Usaha</h1>
          </div>
        </li>
        <li className={list}>
          <a href="/">Karir</a>
        </li>
        <li>
          <div className={`cursor-pointer ${list} `} onClick={Rotation2}>
            <p>Perusahaan</p>
            <div
              className={`border-white w-[0.7vw] h-[0.7vw] mb-1 transform border-r-2 border-solid border-b-2 ${
                props.rotate2
                  ? "rotate-[225deg] translate-y-1/2 duration-500"
                  : "rotate-45 duration-500"
              } `}
            ></div>
          </div>
          <div
            style={{ visibility: props.rotate2 ? "visible" : "hidden" }}
            className={`lg:w-[14vw] lg:py-[2vw] pb:[2vw] px-[2vw] lg:text-[1.2vw] md:text-[1.3rem]  transform transition-all duration-1000  ${
              props.rotate2
                ? "opacity-100 lg:translate-y-0 -translate-y-0"
                : "opacity-0  lg:-translate-y-full translate-y-1/4 max-lg:h-0"
            }  flex flex-col lg:absolute lg:top-[4.5vw] text-left lg:bg-slate-800 rounded-[2vw]`}
          >
            <h1>Tentang</h1>
            <h1>Blog</h1>
            <h1>Bantuan</h1>
            <h1>Hubungi Kami</h1>
          </div>
        </li>
        <li className={list}>
          <a href="/">Produk</a>
        </li>
        <li className={list}>
          <a href="/">Blog</a>
        </li>
        <li className={list}>
          <a href="/">Bantuan</a>
        </li>
        <li>
          <div className={`cursor-pointer ${list} `} onClick={Rotation3}>
            <div className="grid grid-flow-col">
          <img src="id.svg" className="w-auto" alt="Logo Bahasa" />
          <a href="/">ID</a>
          </div>
          <div
              className={`border-white w-[0.7vw] h-[0.7vw] mb-1 transform border-r-2 border-solid border-b-2 ${
                props.rotate3
                  ? "rotate-[225deg] translate-y-1/2 duration-500"
                  : "rotate-45 duration-500"
              } `}
            ></div>
        </div>
        <div
            style={{ visibility: props.rotate3 ? "visible" : "hidden" }}
            className={`lg:w-[14vw] lg:py-[2vw] pb:[2vw] px-[1.5vw] lg:text-[1.2vw] md:text-[1.3rem]  transform transition-all duration-1000  ${
              props.rotate3
                ? "opacity-100 lg:translate-y-0 -translate-y-0"
                : "opacity-0  lg:-translate-y-full translate-y-1/4 max-lg:h-0"
            }  flex flex-col lg:absolute lg:top-[4.5vw] text-left lg:right-[1.2vw] lg:bg-slate-800 rounded-[2vw]`}
          >
            <h1>Bahasa Indonesia</h1>
            <h1>English</h1>
          </div>
        </li>
      </ul>
    </nav>
  );
};
