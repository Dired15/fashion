
export default function FooterSection(pros)
{
    return (
        <div className="flex md:flex-row md:flex-wrap md:justify-between flex-col bg-black text-white xl:px-[2%] py-20 lg:px-[3%] md:px-[3%] px-[5%]">
            <div className="flex-none xl:w-[30vw] lg:w-[40vw] md:w-[40vw] md:mb-0 mb-15 ">
                <h3 className="text-2xl font-medium mb-6">Get Latest Updates</h3>
                <p>Enter your email below to be the first to know about new collections and product launches</p>
                <form>
                    <input/>
                </form>
            </div>
            <ul className="flex-none lg:w-[40vw] md:w-[40vw] md:mb-0 mb-15 ">
                <li className="text-2xl font-medium mb-6">Contact us</li>
                <li className="flex flex-row items-center  mb-3">
                    <div className=" aspect-square md:w-[2vw] w-[8vw] bg-[url(/positionIcon.png)] bg-cover bg-norepeat mr-2"></div>
                    <p className="hover:text-[hsl(40,100%,50%)]">99 New Theme St. XY, USA 12345, Beside
                the Sun point land.</p>
                </li>
                <li className="flex flex-row items-center mb-3">
                    <div className=" aspect-square md:w-[2vw] w-[8vw] bg-[url(/phoneIcon.png)] bg-cover bg-norepeat mr-2"></div>
                    <p className="hover:text-[hsl(40,100%,50%)]">+00 123-456-789</p>
                </li>
                <li className="flex flex-row items-center mb-3">
                    <div className="aspect-square md:w-[2vw] w-[8vw] bg-[url(/mailIcon.png)] bg-cover bg-norepeat mr-2"></div>
                    <p className="hover:text-[hsl(40,100%,50%)]">demo@example.com</p>
                </li>
            </ul>
            <ul className="flex-none lg:w-[40vw] md:w-[40vw]  xl:mt-0 lg:mt-15 md:mt-15 md:mb-0 mb-15">
                <li className="text-2xl font-medium mb-6">Get to know Us</li>
                <li className=" mb-3 hover:text-[hsl(40,100%,50%)] cursor-pointer">About Us</li>
                <li className=" mb-3 hover:text-[hsl(40,100%,50%)] cursor-pointer">Term & Policy</li>
                <li className=" mb-3 hover:text-[hsl(40,100%,50%)] cursor-pointer">Careers</li>
                <li className=" mb-3 hover:text-[hsl(40,100%,50%)] cursor-pointer">News & Blog</li>
            </ul>
            <ul className="flex-none lg:w-[40vw] md:w-[40vw]  xl:mt-0 lg:mt-15 md:mt-15 md:mb-0 mb-15">
                <li className="text-2xl font-medium mb-6">Information</li>
                <li className=" mb-3 hover:text-[hsl(40,100%,50%)] cursor-pointer">Help Center</li>
                <li className=" mb-3 hover:text-[hsl(40,100%,50%)] cursor-pointer">FAQs</li>
                <li className=" mb-3 hover:text-[hsl(40,100%,50%)] cursor-pointer">Size Guide</li>
            </ul>

        </div>
    );
}