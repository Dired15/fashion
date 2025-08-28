

export default function NavSection(props)
{
    return (
        <div className=" flex flex-row justify-between items-center text-white bg-[hsl(0,0%,9%)] xl:px-[5%] lg:px-[3%] md:px-[3%] px-[5%] md:py-[2%] py-[4%]">
            <div className=" flex flex-row items-center">
                
                <h2 className="text-3xl ">FASHION</h2>
            </div>
            
            <ul className=" hidden lg:flex flex-row justify-between items-center xl:w-[30vw] lg:w-[47vw] font-medium  ">
                <li className="hover:text-[hsl(40,100%,50%)] ">Home</li>
                <li className="hover:text-[hsl(40,100%,50%)]">Shop</li>
                <li className="hover:text-[hsl(40,100%,50%)]">Categories</li>
                <li className="hover:text-[hsl(40,100%,50%)]">Products</li>
                <li className="hover:text-[hsl(40,100%,50%)]">Top deals</li>
                <li className="hover:text-[hsl(40,100%,50%)]">FAQs</li>                
            </ul>

            <form className=" p-1 outline-none bg-black flex flex-row justify-between items-center border border-solid  border-white rounded-lg">
                <input className="pl-2 outline-none "/>
                <button className="aspect-square w-[2vw]  bg-cover bg-norepeat bg-[url(/search.png)]"></button>
            </form>
            <ul className="flex flex-row justify-between ">
                <li className="aspect-square w-[2vw] mr-5 bg-cover bg-norepeat bg-[url(/person.png)]"></li>
                <li className="aspect-square w-[2vw] mr-5 bg-cover bg-norepeat bg-[url(/heart.png)]"></li>
                <li className="aspect-square w-[2vw]  bg-cover bg-norepeat bg-[url(/cart.png)]"></li>
            </ul>
            

            <div className="lg:hidden flex flex-row justify-between items-center  md:w-[5vw] md:h-[4vw] w-[8vw] h-[7vw] border-t-4 border-b-4">
                    <div className="border-t-4 w-full"></div>
            </div>
        </div>
    );
}