import { useState } from "react";
export default function Footer() {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const [dropdownOpen2, setdropdownOpen2] = useState(false);
  return (
    <div className="px-[5vh] text-white bg-slate-900 p-20">
      <div className="flex flex-col [&>h1]:font-bold mx-10">
        <img src="gojek.svg" alt="Logo Gojek" className="w-[10vw]" />
        <div className="flex flex-row justify-between [&>div]:mt-10 [&>div>ul>li]:text-lg [&>div>ul>li]:mt-5 [&>div>h1]:text-xl [&>div>h1]:font-bold">
          <div>
            <h1>Perusahaan</h1>
            <ul>
              <li>Tentang</li>
              <li>Blog</li>
              <li>Produk</li>
            </ul>
          </div>
          <div>
            <h1>Gabung</h1>
            <ul>
              <li>Mitra Usaha</li>
              <li>Mitra Driver</li>
            </ul>
          </div>
          <div>
            <h1>Karir</h1>
            <ul>
              <li>Pelajar</li>
              <li>Profesional</li>
            </ul>
          </div>
          <div>
            <h1>Hubungi Kami</h1>
            <ul>
              <li>Bantuan</li>
              <li>Lokasi Kami</li>
            </ul>
          </div>
          <div className="font-bold text-xl">
            <div>
              <h1>Cari tahu berita terbaru</h1>
              <div className="flex flex-row gap-10 mt-5">
                <img src="appstore.svg" alt="appstore" className="w-[30px]" />
                <img src="playstore.svg" alt="playstore" className="w-[30px]" />
                <img src="appstore.svg" alt="appstore" className="w-[30px]" />
                <img src="playstore.svg" alt="playstore" className="w-[30px]" />
              </div>
            </div>

            <div className="mt-10">
              <h1>Unduh Aplikasi</h1>
              <div className="flex flex-row gap-10 mt-5">
                <img src="appstore.svg" alt="appstore" className="w-[30px]" />
                <img src="playstore.svg" alt="playstore" className="w-[30px]" />
              </div>
            </div>
          </div>
        </div>
        <hr className="my-20" />
        <div className="flex flex-row gap-20 mb-20 [&>div>p]:text-lg [&>div>p]:mt-10">
          <div className=" underline ">
            <p>Pemberitahuan Privasi</p>
            <p>Atribusi Data</p>
          </div>
          <div className="underline">
            <p>Syarat dan Ketentuan</p>
            <p>Pengaturan Cookie</p>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-row gap-5 items-end">
              <img src="playstore.svg" alt="playstore" className="w-[30px]" />
              <div
                onClick={() => {setdropdownOpen(!dropdownOpen); setdropdownOpen2(false)}}
                className="overflow-hidden rounded-full px-4 py-1 border border-opacity-30 flex gap-10 justify-between items-center hover:cursor-pointer"
              >
                <p>Indonesia</p>

                <div className={`w-[0.7vw] h-[0.7vw] border-r-2 border-solid border-b-2 transition-all duration-500 ${dropdownOpen?"rotate-[225deg] translate-y-1/2":"rotate-45"}`}></div>
              </div>
              <div
            className={`lg:w-[14vw] lg:py-[2vw]  transform transition-all duration-1000 ${
              dropdownOpen
                ? "opacity-100 translate-y-0 "
                : "opacity-0 -translate-y-full "
            }  flex flex-col top-[4.5vw] text-left bg-slate-800 rounded-[2vw]`}
          >
            <p>Indonesia</p>
            <p>Singapore</p>
            <p>Thailand</p>
            <p>Vietnam</p>

          </div>
            </div>
            <div className="flex flex-row gap-5 items-end">
              <img src="playstore.svg" alt="playstore" className="w-[30px]" />
              <div
                onClick={() => {setdropdownOpen2(!dropdownOpen2); setdropdownOpen(false)}}
                className="overflow-hidden rounded-full px-4 py-1 border border-opacity-30 flex justify-between gap-10 items-center hover:cursor-pointer"
              >
                <p>Bahasa Indonesia</p>

                <div className={`w-[0.7vw] h-[0.7vw] border-r-2 border-solid border-b-2 transform transition-all duration-500 ${dropdownOpen2?"rotate-[225deg] translate-y-1/2":"rotate-45"}`}></div>
              </div>
            </div>
          </div>
        </div>
        <p>
          © 2023 Gojek | Gojek adalah merek milik PT GoTo Gojek Tokopedia Tbk.
          Terdaftar pada Direktorat Jendral Kekayaan Intelektual Republik
          Indonesia.
        </p>
      </div>
    </div>
  );
}
