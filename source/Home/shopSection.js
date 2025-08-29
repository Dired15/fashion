
const productList=[
    {
        productName:"Casuel Sleeveless Striped Women Brown Top",
        price:"$300",
        imageUrl1:"/clothPicture/cloth1A.jpg",
        imageUrl2:"/clothPicture/cloth1B.jpg",
    },
    {
        productName:"Hand Knitted Women's Woolen shoks",
        price:"$30",
        imageUrl1:"/clothPicture/cloth2A.jpg",
        imageUrl2:"/clothPicture/cloth2B.jpg",
    },
    {
        productName:"Men's Solid Polo Neck 100% Cotton Blue",
        price:"$470",
        imageUrl1:"/clothPicture/cloth3A.jpg",
        imageUrl2:"/clothPicture/cloth3B.jpg",
    },
    {
        productName:"Katie Holmes shuffles her Ugg boots",
        price:"$360",
        imageUrl1:"/clothPicture/cloth4A.jpg",
        imageUrl2:"/clothPicture/cloth4B.jpg",
    },
    {
        productName:"Men Letter Label Decor woolen Beanie hat",
        price:"$149",
        imageUrl1:"/clothPicture/cloth5A.jpg",
        imageUrl2:"/clothPicture/cloth5B.jpg",
    },
];


export default function ShopSection(props)
{
    return (
        <div className=" py-24  bg-[hsl(0,0%,9%)] text-white">
            
            <ServiceAdvantageList/>
            <TrendOfTheSeason/>
            <HandPickedSection/>
            
        </div>
    );
}



function ServiceAdvantageList(props){

    return (
        <ul className="flex flex-row justify-between mb-25 xl:px-[5%] lg:px-[3%] md:px-[3%] px-[5%] ">
                <li className="flex flex-row advantageCard ">
                    <div className=" w-[4vw] bg-[url(/truck.png)] mr-4 bg-cover bg-norepeat aspect-square"></div>
                    <div className="flex flex-col justify-between py-2">
                        <h3 className="font-medium text-lg">Free Shipping</h3>
                        <p>On order over $100</p>
                    </div>
                </li>
                <li className="flex flex-row advantageCard ">
                    <div className=" w-[4vw] bg-[url(/box.png)] mr-4 bg-cover bg-norepeat aspect-square"></div>
                    <div className="flex flex-col justify-between py-2">
                        <h3 className="font-medium text-lg">Flexible & Easy Return</h3>
                        <p>Return within 14 days</p>
                    </div>
                </li>
                <li className="flex flex-row advantageCard ">
                    <div className=" w-[4vw] bg-[url(/phone.png)] mr-4 bg-cover bg-norepeat aspect-square"></div>
                    <div className="flex flex-col justify-between py-2">
                        <h3 className="font-medium text-lg">24/7 Support Services</h3>
                        <p>Any Time Customer Support</p>
                    </div>
                </li>
                <li className="flex flex-row advantageCard ">
                    <div className=" w-[4vw] bg-[url(/payment.png)] mr-4 bg-cover bg-norepeat aspect-square"></div>
                    <div className="flex flex-col justify-between py-2">
                        <h3 className="font-medium text-lg">Secure payment</h3>
                        <p>100% Fast & Secure Payment</p>
                    </div>
                </li>
            </ul>
    );
}


function TrendOfTheSeason(props){

    return (
            <div className="flex flex-row justify-between  items-center mb-20  xl:px-[5%] lg:px-[3%] md:px-[3%] px-[5%]">
                <div className="flex flex-col justify-between w-[22%] h-fit ">
                    <h3 className="text-2xl font-medium mb-6">Trends of the Season</h3>
                    <p className="  mb-6">A never-ending rush, trendy combinations, cool steps. Check out the indispensable pieces of urban style.</p>
                    <button className="cursor-pointer text-white font-medium text-normal px-8 py-3 bg-[hsl(210,9%,31%)] rounded-lg w-fit hover:bg-[hsl(40,100%,50%)] hover:text-black ">Discover</button>
                </div>
                <ul className="flex flex-row justify-between ">
                    <li className="cursor-pointer aspect-3/4 w-[20vw] mr-10 flex flex-row justify-center items-end rounded-lg bg-[url(/bgModel1.jpg)] bg-cover bg-norepeat">
                        <button className="cursor-pointer text-white font-medium text-normal px-8 py-3 bg-[hsl(210,9%,31%)] rounded-lg w-fit mb-10 hover:bg-[hsl(40,100%,50%)] hover:text-black ">Clothes</button>
                    </li>
                    <li className="cursor-pointer aspect-3/4 w-[20vw] mr-10 flex flex-row justify-center items-end rounded-lg bg-[url(/bgModel2.jpg)] bg-cover bg-norepeat">
                        <button className=" cursor-pointer text-white font-medium text-normal px-8 py-3 bg-[hsl(210,9%,31%)] rounded-lg w-fit mb-10 hover:bg-[hsl(40,100%,50%)] hover:text-black ">Dress</button>
                    </li>
                    <li className="cursor-pointer aspect-3/4 w-[20vw] flex flex-row justify-center items-end rounded-lg bg-[url(/bgModel3.jpg)] bg-cover bg-norepeat">
                        <button className=" cursor-pointer text-white font-medium text-normal px-8 py-3 bg-[hsl(210,9%,31%)] rounded-lg w-fit mb-10 hover:bg-[hsl(40,100%,50%)] hover:text-black ">Pants</button>
                    </li>
                </ul>
            </div>
           );
}

function HandPickedSection(props){

    const productElementList=productList.map((product)=>{

        return (<ProductElement key={product.productName} productName={product.productName} price={product.price} imageUrl1={product.imageUrl1} imageUrl2={product.imageUrl2}/>);
    });
    return (
            <div className=" flex flex-col items-center xl:px-[2%] lg:px-[3%] md:px-[3%] px-[5%]">
                <h2 className="text-3xl font-medium mb-10">Hand-Picked Daily</h2>
                <ul className="flex flex-row justify-between w-full">
                    {productElementList}
                </ul>
            </div>
           );
}

function ProductElement(props){

    const divStyle1=`w-full h-full absolute bg-[url(${props.imageUrl1})] hover:hidden bg-cover bg-norepeat rounded-lg bg-center z-10`;
    const divStyle2=`w-full h-full absolute bg-[url(${props.imageUrl2})] bg-cover bg-norepeat bg-center rounded-lg z-5`;
    const style1={backgroundImage:`url("${props.imageUrl1}")`};
    const style2={backgroundImage:`url("${props.imageUrl2}")`};
    
    return (
        <li className="flex flex-col justify-end w-[15vw] ">
            <div>
                <div className="aspect-5/7 w-full rounded-lg mb-2  relative">
                    <div className={divStyle1} style={style1}></div>
                    <div className={divStyle2} style={style2}></div>
                </div>
                <h3 className="cursor-pointer text-center font-medium text-lg mb-2 hover:text-[hsl(40,100%,50%)]">{props.productName}</h3>
                <p className="text-center text-lg">{props.price}</p>
            </div> 
        </li>
    );
}

