
export default function HeroSection(props)
{
    return (
        <div className="  xl:aspect-16/6 md:aspect-16/7 aspect-4/5 flex flex-col justify-center  bg-[url(/heroBg3.jpg)]  bg-center bg-cover bg-no-repeat   bg-black">
            <div className="w-full h-full flex flex-col justify-center bg-[hsla(0,0%,0%,0.3)] xl:px-[5%] lg:px-[3%] md:px-[3%] px-[5%]">

                <div className=" xl:w-1/2 lg:w-[80%] md:w-[80%] w-full ">
                    <h2 className="text-white lg:text-5xl md:text-4xl text-4xl font-bold md:w-[80%] w-[95%] mb-8">Found:Your Favorite Fall Outfit</h2>
                    <p className="text-white text-normal text-lg mb-8 w-[70%]">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                    <button className="cursor-pointer text-white font-bold text-normal px-8 py-3 bg-[hsl(210,9%,31%)] rounded-lg hover:bg-[hsl(40,100%,50%)] hover:text-black ">Shop Now</button>
                </div>

            </div>
        </div>
    );
}