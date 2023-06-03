export default function Layanan(){
    function Card(props){
        <div className= {`relative lg:w-[20vw] sm:w-[20vw] w-[100vw] max-sm:mx-5 sm:h-[30vw] lg:h-[20vw] rounded-2xl lg:p-10 sm:p-5 max-sm:pr-[20vw] max-sm:pl-10 py-5  [&>h1]:mt-3 [&>h1]:font-bold ${props.bg}`}>
                <img className=" absolute bottom-0 w-[12vw]" alt={props.alt} src={props.rc}/>
                <h1>gofood</h1>
                <h1>gofood</h1>
                <h1>gofood</h1>
                <h1>gofood</h1>
            </div>
    }
    return(
        <div className="px-[5vh] text-white bg-slate-900">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-center max-lg:text-[5vh] lg:text-[8vh] pt-[15vh]">Kami membangun layanan <br/> untuk membantumu melewati halangan</h1>
                <button className="py-2 px-3 bg-greenNew mt-10 rounded-full font-bold">Lihat semua layanan</button>
            </div>
            <div className="relative overflow-hidden h-screen">
            <div
            className="flex flex-row justify-center h-[75vh] my-20 items-center lg:gap-20 sm:gap-10 pt-[10vh] -rotate-[15deg]">
            <div className= "relative lg:w-[20vw] sm:w-[20vw] w-[100vw] max-sm:mx-5 sm:h-[30vw] lg:h-[20vw] rounded-2xl lg:p-10 sm:p-5 max-sm:pr-[20vw] max-sm:pl-10 py-5  [&>h1]:mt-3 [&>h1]:font-bold bg-greenBG ">
                <img className=" absolute bottom-0 w-[10vw]" alt="bg" src="https://lelogama.go-jek.com/prime/upload/image/product-intro-card-bg-transport.svg"/>
                <h1>gofood</h1>
                <h1>gofood</h1>
                <h1>gofood</h1>
                <h1>gofood</h1>
            </div>
            <div className= "relative lg:w-[20vw] sm:w-[20vw] w-[100vw] max-sm:mx-5 sm:h-[30vw] lg:h-[20vw] rounded-2xl lg:p-10 sm:p-5 max-sm:pr-[20vw] max-sm:pl-10 py-5  [&>h1]:mt-3 [&>h1]:font-bold bg-blueBG ">
                <img className=" absolute bottom-0 w-[10vw]" alt="bg" src="bg-card.svg"/>
                <h1>gofood</h1>
                <h1>gofood</h1>
                <h1>gofood</h1>
                <h1>gofood</h1>
            </div>
            <div className= "relative lg:w-[20vw] sm:w-[20vw] w-[100vw] max-sm:mx-5 sm:h-[30vw] lg:h-[20vw] rounded-2xl lg:p-10 sm:p-5 max-sm:pr-[20vw] max-sm:pl-10 py-5  [&>h1]:mt-3 [&>h1]:font-bold bg-redBG ">
                <img className=" absolute bottom-0 w-[10vw]" alt="bg" src="https://lelogama.go-jek.com/prime/upload/image/product-intro-card-bg-food.svg"/>
                <h1>gofood</h1>
                <h1>gofood</h1>
                <h1>gofood</h1>
                <h1>gofood</h1>
            </div>
            <div className= "relative lg:w-[20vw] sm:w-[20vw] w-[100vw] max-sm:mx-5 sm:h-[30vw] lg:h-[20vw] rounded-2xl lg:p-10 sm:p-5 max-sm:pr-[20vw] max-sm:pl-10 py-5  [&>h1]:mt-3 [&>h1]:font-bold bg-purpleBG ">
                <img className=" absolute bottom-0 w-[10vw]" alt="bg" src="https://lelogama.go-jek.com/prime/upload/image/product-intro-card-bg-business.svg"/>
                <h1>gofood</h1>
                <h1>gofood</h1>
                <h1>gofood</h1>
                <h1>gofood</h1>
            </div>
            <div className= "relative lg:w-[20vw] sm:w-[20vw] w-[100vw] max-sm:mx-5 sm:h-[30vw] lg:h-[20vw] rounded-2xl lg:p-10 sm:p-5 max-sm:pr-[20vw] max-sm:pl-10 py-5  [&>h1]:mt-3 [&>h1]:font-bold bg-pinkBG ">
                <img className=" absolute bottom-0 w-[10vw]" alt="bg" src="https://lelogama.go-jek.com/prime/upload/image/product-intro-card-bg-entertainment.svg"/>
                <h1>gofood</h1>
                <h1>gofood</h1>
                <h1>gofood</h1>
                <h1>gofood</h1>
            </div>
            </div>
            </div>
            <div className={`flex flex-row gap-20 text-white font-bold text-lg mt-10 justify-center max-md:hidden`}>
                <h2 className="hover:border-b-2 hover:border-greenBG hover:border-solid">Transportasi dan Logistik</h2>
                <h2 className="hover:border-b-2 hover:border-blueBG hover:border-solid">Pembayaran</h2>
                <h2 className="hover:border-b-2 hover:border-redBG hover:border-solid">Pesan makan dan belanja</h2>
                <h2 className="hover:border-b-2 hover:border-purpleBG hover:border-solid">Bisnis</h2>
                <h2 className="hover:border-b-2 hover:border-pinkBG hover:border-solid">Hiburan</h2>
            </div>
            <div className="flex justify-center">
                <button className="py-2 px-3 bg-greenNew mt-10 rounded-full font-bold">Lihat semua layanan</button>
            </div>
            <div className="flex sm:flex-row max-lg:items-center flex-col-reverse items-start max-lg:mt-[10vw]  lg:px-10 lg:py-20 gap-5 lg:gap-20">
                <img className="lg:basis-1/2 sm:w-1/2 " src="loyalti.svg"/>
                <div className=" gap-3 lg:gap-10 flex flex-col items-start ">
                    <h1 className=" font-extrabold text-xl lg:text-7xl">Program Loyalti Gojek</h1>
                    <p className="text-lg lg:text-xl">Banyakin transaksi, dapetin banyak hadiahnya</p>
                    <button className="bg-greenNew lg:py-3 py-1 lg:px-4 px-2 lg:text-xl font-semibold rounded-full">Cek Benefit</button>
                </div>
            </div>
        </div>
    )
}