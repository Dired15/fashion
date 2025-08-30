
"use client"
export default function NavSection(props)
{
    return (
        <div className=" flex flex-row justify-between items-center text-white bg-[hsl(0,0%,9%)] xl:px-[5%] lg:px-[3%] md:px-[3%] px-[5%] md:py-[2%] py-[4%]">
            <div className="flex flex-row items-center">
                <div className="xl:hidden flex flex-row justify-between items-center mr-8 md:w-[3vw] md:h-[3vw] w-[8vw] h-[7vw] border-white border-t-4 border-b-4">
                        <div className="border-t-4 w-full"></div>
                </div>
                <div className=" flex flex-row items-center">
                    
                    <h2 className="text-3xl ">FASHION</h2>
                </div>    
            </div>
            
            
            <ul className=" xl:flex  flex-row justify-between items-center xl:w-[30vw] hidden font-medium  ">
                <li className="hover:text-[hsl(40,100%,50%)] cursor-pointer">Home</li>
                <li className="hover:text-[hsl(40,100%,50%)] cursor-pointer">Shop</li>
                <li className="hover:text-[hsl(40,100%,50%)] cursor-pointer">Categories</li>
                <li className="hover:text-[hsl(40,100%,50%)] cursor-pointer">Products</li>
                <li className="hover:text-[hsl(40,100%,50%)] cursor-pointer">Top deals</li>
                <li className="hover:text-[hsl(40,100%,50%)] cursor-pointer">FAQs</li>                
            </ul>

            <form className="md:flex hidden p-1 outline-none bg-black flex flex-row justify-between items-center  rounded-lg" onSubmit={(e)=>{e.preventDefault();}}>
                <input className="pl-2 outline-none "/>
                <button className="cursor-pointer aspect-square w-[2vw]  bg-cover bg-norepeat bg-[url(/search.png)]"></button>
            </form>
            <ul className="flex flex-row justify-between ">
                <li className="cursor-pointer aspect-square xl:w-[2vw] md:w-[3vw] w-[6vw] mr-5 bg-cover bg-norepeat bg-[url(/person.png)]"></li>
                <li className="cursor-pointer aspect-square xl:w-[2vw] md:w-[3vw] w-[6vw] mr-5 bg-cover bg-norepeat bg-[url(/heart.png)]"></li>
                <li className="cursor-pointer aspect-square xl:w-[2vw] md:w-[3vw] w-[6vw]  bg-cover bg-norepeat bg-[url(/cart.png)]"></li>
            </ul>
            

            
        </div>
    );
}