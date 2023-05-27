export default function Unduh(){
    return(
        <div className="bg-slate-800 h-screen relative overflow-hidden">
            <img src="tablet.png" alt="unduh" className="absolute object-cover top-0 h-full w-full" />
            <div className="z-20 px-24 flex flex-col lg:w-[50%] h-full  justify-center relative">
            <h1 className="font-bold text-white lg:text-5xl md:text-3xl max-sm:text-xl max-sm:mt-10">Belum punya <br/> aplikasi Gojek?<br/> Yuk unduh <br/> sekarang juga</h1>
            <div className="lg:mt-20 mt-10 flex lg:flex-row flex-col gap-10 [&>button]:py-2 sm:[&>button]:w-1/2 md:[&>button]:w-1/4 w-full [&>button]:bg-white">
            <button className=" flex flex-row rounded-full items-center justify-center font-bold gap-3">
                <img className="w-[2rem]" src="appstore.svg" alt="appstore"/>
                <p className="max-sm:hidden">App store</p>
            </button>
            <button className="flex flex-row rounded-full justify-center items-center font-bold gap-3">
                <img src="playstore.svg" alt="playstore"/>
                <p className="max-sm:hidden">Play store</p>
            </button>
            </div>
            </div>
        </div>
    )
}