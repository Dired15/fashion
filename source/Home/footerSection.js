
export default function FooterSection(pros)
{
    return (
        <div className="flex flex-row justify-between bg-black text-white xl:px-[2%] py-20 lg:px-[3%] md:px-[3%] px-[5%]">
            <div className="w-[30vw]">
                <h3 className="text-2xl font-medium mb-6">Get Latest Updates</h3>
                <p>Enter your email below to be the first to know about new collections and product launches</p>
                <form>
                    <input/>
                </form>
            </div>
            <ul className="">
                <li className="text-2xl font-medium mb-6">Contact us</li>
                <li className="flex flex-row items-center  mb-3">
                    <div className=" aspect-square w-[2vw] bg-[url(/positionIcon.png)] bg-cover bg-norepeat mr-2"></div>
                    <p>99 New Theme St. XY, USA 12345, Beside
                the Sun point land.</p>
                </li>
                <li className="flex flex-row items-center mb-3">
                    <div className=" aspect-square w-[2vw] bg-[url(/phoneIcon.png)] bg-cover bg-norepeat mr-2"></div>
                    <p>+00 123-456-789</p>
                </li>
                <li className="flex flex-row items-center mb-3">
                    <div className="aspect-square w-[2vw] bg-[url(/mailIcon.png)] bg-cover bg-norepeat mr-2"></div>
                    <p>demo@example.com</p>
                </li>
            </ul>
            <ul className="">
                <li className="text-2xl font-medium mb-6">Get to know Us</li>
                <li className=" mb-3">About Us</li>
                <li className=" mb-3">Term & Policy</li>
                <li className=" mb-3">Careers</li>
                <li className=" mb-3">News & Blog</li>
            </ul>
            <ul className="">
                <li className="text-2xl font-medium mb-6">Information</li>
                <li className=" mb-3">Help Center</li>
                <li className=" mb-3">FAQs</li>
                <li className=" mb-3">Size Guide</li>
            </ul>

        </div>
    );
}