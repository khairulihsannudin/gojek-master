export default function Join() {
  const text = "md:text-[3rem] sm:text-[2rem] lg:text-[4rem] font-bold";
  function Card(props) {
    return (
      <div
        className={`relative lg:h-[28rem] lg:w-[40rem]  max-sm:h-[10rem] flex flex-col justify-center  max-lg:basis-1/3 max-sm:w-3/4 px-5 rounded-[3vw] text-left shadow-2xl ${props.color} ${props.shadowColor} `}
      >
        <img
          className="-top-1/4 max-sm:-top-[45%] w-auto max-sm:w-1/2 left-0 absolute"
          src={props.src}
          alt={props.alt}
        />
        <div className="absolute top-[45%] px-5">
        <h1 className="text-left font-bold text-5xl">
          {props.title}
        </h1>
        <p className="text-xl mt-3 font-semibold pr-10">{props.desc}</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="text-white bg-slate-900 text-center py-[10%] h-screen">
        <h1 className={text}>Kenalin, Gojek.</h1>
        <h1 className={text}>Si pembawa perubahan</h1>
        <button className="bg-greenNew mt-[2vh] text-[3vh] font-bold rounded-full py-[2vh] px-[3vh]">
          Gabung
        </button>
      </div>
      <div className=" -mt-[10vh] bg-white rounded-t-[10vh] ">
        <div className="flex flex-col md:flex-row flex-wrap justify-between px-[5%] [&>div]:text-center items-start [&>div]:flex [&>div]:flex-col [&>div]:justify-center [&>div]:items-center gap-[2vh] [&>div>h2]:font-bold lg:[&>div]:-mt-[20vh] lg:[&>div]:basis-1/5 md:[&>div]:basis-1/3  [&>div>p]:text-[2.5vh] [&>div>h2]:text-[4vh]">
          <div className="">
            <img className="" src="gerak1.svg" alt="gif" />
            <h2>Fortune Top 20</h2>
            <p>
              Satu-satunya perusahaan di Asia Tenggara yang dua kali berada di
              daftar Perusahaan Pengubah Dunia versi majalah Fortune
            </p>
          </div>
          <div className="">
            <img className="" src="gerak2.svg" alt="gif" />
            <h2>Berkontribusi lebih dari $7.1 triliun</h2>
            <p>Penggerak roda perekonomian Indonesia</p>
          </div>
          <div className="">
            <img className="" src="gerak3.svg" alt="gif" />
            <h2>Jaket hijau, pergerakan juga hijau</h2>
            <p>
              Gojek mengurangi pemakaian plastik hingga 11.3 ton sejak Oktober
              2020
            </p>
          </div>
          <div className="">
            <img className="" src="gerak4.svg" alt="gif" />
            <h2>Tumbuh 80% sejak pandemi</h2>
            <p>
              Mitra Food merchants naik 80% sejak pandemi berkat solusi
              digitalisasi Gojek untuk UMKM.
            </p>
          </div>
        </div>
        <div className="text-center mt-[10%]">
          <h1 className={text}>Skala kami</h1>
          <button className="text-white bg-greenNew mt-[2vh] text-[3vh] font-bold rounded-full py-[2vh] px-[3vh]">
            Gabung
          </button>
          <div className="flex flex-col sm:flex-row max-lg:justify-center lg:w-full h-screen items-center gap-[5vh] mt-[2vw] px-[3%] ">
            <Card
              src="skala_green.png"
              alt="Gambar biru"
              title="190 juta+"
              desc="jumlah install aplikasi kami."
              color="bg-greenSkala"
              shadowColor="shadow-greenSkala"
            />
            <Card
              src="skala_purple.png"
              alt="Gambar biru"
              title="2 juta+"
              desc="mitra Driver yang sudah bergabung dengan kami."
              color="bg-purpleSkala"
              shadowColor="shadow-purpleSkala"
            />
            <Card
              src="skala_orange.png"
              alt="Gambar biru"
              title="900.000x"
              desc="jumlah mitra GoFood"
              color="bg-orangeSkala"
              shadowColor="shadow-orangeSkala"
            />
            <Card
              src="skala_blue.png"
              alt="Gambar biru"
              title="2.448x"
              desc="lipat kenaikan pengunduhan aplikasi Gojek dari 2015 sampai 2020"
              color="bg-blueSkala"
              shadowColor="shadow-blueSkala"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
