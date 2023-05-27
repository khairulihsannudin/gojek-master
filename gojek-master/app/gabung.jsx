export default function Gabung() {
  function Card(props) {
    return (
      <div className="text-white lg:basis-1/3 w-[70vw] lg:h-[30vw] sm:w-[50vw] lg:w-full sm:flex sm:flex-row max-lg:justify-evenly max-lg:items-center lg:block lg:relative bg-slate-800 rounded-[5vh] px-[5vw] py-[3vw]">
        <img className="lg:-top-1/4 lg:relative sm:mt-0 sm:-ml-[10vw] lg:ml-0 max-sm:-mt-[8vw] my-[1vw] max-lg:basis-1/12" src={props.src} alt={props.alt} />
        <div className="lg:relative max-lg:top-1/4 lg:-top-1/4 max-lg:basis-10/12 lg:flex lg:flex-col lg:justify-evenly lg:h-full max-lg:pr-[10vw]">
        <h1 className="text-[2vw] font-semibold">{props.title}</h1>
        <p className="text-[2.5vh] my-[2vh]">{props.desc}</p>
        
        <button className="rounded-full px-[2vh] w-1/2 py-[1vh] bg-greenNew">
          Selengkapnya
        </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-slate-900 pb-[20%]">
      <div className="">
      <img
        className="rounded-b-[10vw] brightness-50 relative max-lg:h-[50vh] w-screen bg-cover bg-center"
        src="bg.png"
        alt="background-image"
      />
      <h1 className="lg:text-[5rem] md:text-[3rem] text-[1rem] text-white relative top-0 -mt-[30vw] z-20 font-bold text-center">
        Bertumbuh Besar <br /> Bersama Gojek
      </h1>
      </div>
      <div className="flex flex-row mx-[6vw] max-lg:flex-wrap max-lg:justify-center gap-[3vw] max-lg:flex-col  relative mt-[10vw] max-lg:items-center ">
      
        <Card
          src="card1.svg"
          alt="Card 1"
          title="Gabung jadi GoTroops, yuk!"
          desc="Di belakang startup dengan pertumbuhan paling tinggi di Asia Tenggara, terdapat talenta yang memiliki ide-ide cemerlang"
        />
        <Card
          src="card2.svg"
          alt="Card 1"
          title="Gabung jadi Mitra Driver"
          desc="Kami adalah rumah bagi lebih dari 2 juta mitra driver di Asia Tenggara, yang mendapat jaminan finansial dan fasilitas kesehatan."
        />
        <Card
          src="card3.svg"
          alt="Card 1"
          title="Gabung jadi Mitra Usaha"
          desc="Kami membantu 500.000+ Mitra Usaha melipatgandakan penjualan, meluaskan jangkauan, dan berkembang dengan teknologi baru."
        />
      </div>
    </div>
  );
}
