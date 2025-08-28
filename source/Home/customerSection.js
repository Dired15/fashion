
export default function CustomerSection(props)
{
    return (
        <div className=" py-24 bg-black  text-white">
            <div className="flex flex-row justify-between  items-center mb-20  xl:px-[5%] lg:px-[3%] md:px-[3%] px-[5%]">
                <div className="flex flex-col justify-between w-[22%] h-fit ">
                    <h3 className="text-2xl font-medium mb-6">Trends of the Season</h3>
                    <p className="  mb-6">A never-ending rush, trendy combinations, cool steps. Check out the indispensable pieces of urban style.</p>
                    <button className="text-white font-medium text-normal px-8 py-3 bg-[hsl(210,9%,31%)] rounded-lg w-fit ">Discover</button>
                </div>
                <ul className="flex flex-row justify-between ">
                    <li className=" aspect-square w-[20vw] bg-[hsl(0,0%,9%)] mr-10 flex flex-col justify-center  rounded-lg p-5 ">
                        <ul className=" flex flex-row mb-2 ">
                            <li className="aspect-square w-[2vw] mb-2 bg-[url(/starIcon.png)] bg-cover bg-norepeat"></li>
                            <li className="aspect-square w-[2vw] mb-2 bg-[url(/starIcon.png)] bg-cover bg-norepeat"></li>
                            <li className="aspect-square w-[2vw] mb-2 bg-[url(/starIcon.png)] bg-cover bg-norepeat"></li>
                            <li className="aspect-square w-[2vw] mb-2 bg-[url(/starIcon.png)] bg-cover bg-norepeat"></li>
                            <li className="aspect-square w-[2vw] mb-2 bg-[url(/starIcon.png)] bg-cover bg-norepeat"></li>
                        </ul>
                        <p className="mb-5">
                            "Absolutely love this piece! Stylish, comfortable, and great quality. Definitely for fashionable essentials!"
                        </p>
                        <div className="flex flex-row  items-center ">
                            <div className="aspect-square  w-[5vw] rounded-full mr-4 bg-[url(/customerPP1.jpg)] bg-cover bg-norepeat bg-center "></div>
                            <div>
                                <h4 className="text-lg font-medium text-[hsl(40,100%,50%)]">Felicity Q.</h4>
                                <p>- Walk Kit</p>
                            </div>
                        </div>
                    </li>
                    <li className=" aspect-square w-[20vw] bg-[hsl(0,0%,9%)] mr-10 flex flex-col justify-center  rounded-lg p-5 ">
                        <ul className=" flex flex-row mb-2 ">
                            <li className="aspect-square w-[2vw] mb-2 bg-[url(/starIcon.png)] bg-cover bg-norepeat"></li>
                            <li className="aspect-square w-[2vw] mb-2 bg-[url(/starIcon.png)] bg-cover bg-norepeat"></li>
                            <li className="aspect-square w-[2vw] mb-2 bg-[url(/starIcon.png)] bg-cover bg-norepeat"></li>
                            <li className="aspect-square w-[2vw] mb-2 bg-[url(/starIcon.png)] bg-cover bg-norepeat"></li>
                            <li className="aspect-square w-[2vw] mb-2 bg-[url(/starIcon.png)] bg-cover bg-norepeat"></li>
                        </ul>
                        <p className="mb-5">
                            "Absolutely love this piece! Stylish, comfortable, and great quality. Definitely for fashionable essentials!"
                        </p>
                        <div className="flex flex-row  items-center ">
                            <div className="aspect-square  w-[5vw] rounded-full mr-4 bg-[url(/customerPP2.jpg)] bg-cover bg-norepeat bg-center "></div>
                            <div>
                                <h4 className="text-lg font-medium text-[hsl(40,100%,50%)]">Felicity Q.</h4>
                                <p>- Walk Kit</p>
                            </div>
                        </div>
                    </li>
                    <li className=" aspect-square w-[20vw] bg-[hsl(0,0%,9%)] mr-10 flex flex-col justify-center  rounded-lg p-5 ">
                        <ul className=" flex flex-row mb-2 ">
                            <li className="aspect-square w-[2vw] mb-2 bg-[url(/starIcon.png)] bg-cover bg-norepeat"></li>
                            <li className="aspect-square w-[2vw] mb-2 bg-[url(/starIcon.png)] bg-cover bg-norepeat"></li>
                            <li className="aspect-square w-[2vw] mb-2 bg-[url(/starIcon.png)] bg-cover bg-norepeat"></li>
                            <li className="aspect-square w-[2vw] mb-2 bg-[url(/starIcon.png)] bg-cover bg-norepeat"></li>
                            <li className="aspect-square w-[2vw] mb-2 bg-[url(/starIcon.png)] bg-cover bg-norepeat"></li>
                        </ul>
                        <p className="mb-5">
                            "Absolutely love this piece! Stylish, comfortable, and great quality. Definitely for fashionable essentials!"
                        </p>
                        <div className="flex flex-row  items-center ">
                            <div className="aspect-square  w-[5vw] rounded-full mr-4 bg-[url(/customerPP3.jpg)] bg-cover bg-norepeat bg-center "></div>
                            <div>
                                <h4 className="text-lg font-medium text-[hsl(40,100%,50%)]">Felicity Q.</h4>
                                <p>- Walk Kit</p>
                            </div>
                        </div>
                    </li>
                        
                    
                </ul>
            </div>
        </div>
    );
}