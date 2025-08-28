
export default function TrendSection(props)
{
    return (
        <div className=" bg-[hsl(0,0%,9%)] text-white pb-[5%]">
            

            <div className="flex flex-row justify-between  items-center mb-20  xl:px-[2%] lg:px-[3%] md:px-[3%] px-[5%]">
                
                <ul className="flex flex-row justify-between   ">
                    <li className="flex flex-col  mr-10 items-center">
                        <div className="aspect-square  w-[30vw] mb-5 bg-[url(/trendBg1.jpg)] bg-cover bg-norepeat rounded-lg"></div>
                        <h3 className="text-center text-2xl font-medium mb-2">Perfect Match for Elegant Fashion</h3>
                        <p className="underline">Shop Collection</p>
                    </li>
                    
                    <li className="flex flex-col  mr-10 items-center">
                        <div className="aspect-square  w-[30vw] mb-5 bg-[url(/trendBg2.jpg)] bg-cover bg-center bg-norepeat rounded-lg"></div>
                        <h3  className="text-center text-2xl font-medium mb-2">Trendy Lifestyle Collection</h3>
                        <p className="underline">Shop Collection</p>
                    </li>
                </ul>
                <div className="flex flex-col justify-center items-center  flex-1 ">
                    <div className="flex flex-col justify-between w-[24vw] h-fit   ">
                        <h3 className="text-3xl font-medium mb-6">Shop the Latest Trends</h3>
                        <p className="  mb-6">Stay ahead of the curve with our curated collection of the latest fashion trends. Shop now for fresh styles and must-have pieces!</p>
                        <button className="text-white font-medium text-normal px-8 py-3 bg-[hsl(210,9%,31%)] rounded-lg w-fit ">Shop Now</button>
                    </div>    
                </div>
                
            </div>

            <div className=" flex flex-col items-center xl:px-[2%] lg:px-[3%] md:px-[3%] px-[5%]">
                <h2 className="text-3xl font-medium mb-10">Top Rated Products</h2>
                <ul className="flex flex-row justify-between w-full">

                    <li className="flex flex-col justify-end w-[15vw] ">
                        <div>
                            <div className="aspect-5/7 w-full rounded-lg mb-2  relative">
                                <div className="w-full h-full absolute bg-[url(/handPickedBg1.jpg)] hover:hidden bg-cover bg-norepeat bg-center z-10"></div>
                                <div className="w-full h-full absolute bg-[url(/handPickedBg2.jpg)] bg-cover bg-norepeat bg-center z-5"></div>
                            </div>
                            <h3 className="text-center font-medium text-lg mb-2">Beltinger Denim Belt Made Leather</h3>
                            <p className="text-center text-lg">$50</p>
                        </div> 
                    </li>

                    <li className="flex flex-col justify-end w-[15vw] ">
                        <div>
                            <div className="aspect-5/7 w-full rounded-lg mb-2  relative">
                                <div className="w-full h-full absolute bg-[url(/handPickedBg1.jpg)] hover:hidden bg-cover bg-norepeat bg-center z-10"></div>
                                <div className="w-full h-full absolute bg-[url(/handPickedBg2.jpg)] bg-cover bg-norepeat bg-center z-5"></div>
                            </div>
                            <h3 className="text-center font-medium text-lg mb-2">Mahza Woman Sweater Autumn And Winter</h3>
                            <p className="text-center text-lg">$250</p>
                        </div> 
                    </li>

                    <li className="flex flex-col justify-end w-[15vw]">
                        <div>
                            <div className="aspect-5/7 w-full rounded-lg mb-2  relative">
                                <div className="w-full h-full absolute bg-[url(/handPickedBg1.jpg)] hover:hidden bg-cover bg-norepeat bg-center z-10"></div>
                                <div className="w-full h-full absolute bg-[url(/handPickedBg2.jpg)] bg-cover bg-norepeat bg-center z-5"></div>
                            </div>
                            <h3 className="text-center font-medium text-lg mb-2">Maidenform Pure Comfort Lace Bralette</h3>
                            <p className="text-center text-lg">$400</p>
                        </div> 
                    </li>

                    <li className="flex flex-col justify-end w-[15vw]">
                        <div>
                            <div className="aspect-5/7 w-full rounded-lg mb-2  relative">
                                <div className="w-full h-full absolute bg-[url(/handPickedBg1.jpg)] hover:hidden bg-cover bg-norepeat bg-center z-10"></div>
                                <div className="w-full h-full absolute bg-[url(/handPickedBg2.jpg)] bg-cover bg-norepeat bg-center z-5"></div>
                            </div>
                            <h3 className="text-center font-medium text-lg mb-2">Gildan mens Heavy Cotton Adult T-Shirt</h3>
                            <p className="text-center text-lg">$189</p>
                        </div> 
                    </li>

                    <li className="flex flex-col justify-end w-[15vw]">
                        <div>
                            <div className="aspect-5/7 w-full rounded-lg mb-2  relative">
                                <div className="w-full h-full absolute bg-[url(/handPickedBg1.jpg)] hover:hidden bg-cover bg-norepeat bg-center z-10"></div>
                                <div className="w-full h-full absolute bg-[url(/handPickedBg2.jpg)] bg-cover bg-norepeat bg-center z-5"></div>
                            </div>
                            <h3 className="text-center font-medium text-lg mb-2">Happy Cherry Kids Down Cotton Vest Winter</h3>
                            <p className="text-center text-lg">$25</p>
                        </div> 
                    </li>

                </ul>
            </div>
        </div>
    );
}