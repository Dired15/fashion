
const productList=[
    {
        productName:"Beltinger Denim Belt Made Leather",
        price:"$50",
        imageUrl1:"/clothPicture/cloth6A.jpg",
        imageUrl2:"/clothPicture/cloth6B.jpg",
    },
    {
        productName:"Mahza Woman Sweater Autumn And Winter",
        price:"$250",
        imageUrl1:"/clothPicture/cloth7A.jpg",
        imageUrl2:"/clothPicture/cloth7B.jpg",
    },
    {
        productName:"Maidenform Pure Comfort Lace Bralette",
        price:"$400",
        imageUrl1:"/clothPicture/cloth8A.jpg",
        imageUrl2:"/clothPicture/cloth8B.jpg",
    },
    {
        productName:"Gildan mens Heavy Cotton Adult T-Shirt",
        price:"$189",
        imageUrl1:"/clothPicture/cloth9A.jpg",
        imageUrl2:"/clothPicture/cloth9B.jpg",
    },
    {
        productName:"Happy Cherry Kids Down Cotton Vest Winter",
        price:"$25",
        imageUrl1:"/clothPicture/cloth10A.jpg",
        imageUrl2:"/clothPicture/cloth10B.jpg",
    },
];






export default function TrendSection(props)
{
    return (
        <div className=" bg-[hsl(0,0%,9%)] text-white pb-[5%]">
            

            <TrendParagraph/>
            <TopProductSection/>
            
        </div>
    );
}


export function TrendParagraph(props){

    return (
        <div className="flex flex-row justify-between  items-center mb-20  xl:px-[2%] lg:px-[3%] md:px-[3%] px-[5%]">
                
                <ul className="flex flex-row justify-between   ">
                    <li className="flex flex-col  mr-10 items-center">
                        <div className="cursor-pointer aspect-square  w-[30vw] mb-5 bg-[url(/trendBg1.jpg)] bg-cover bg-norepeat rounded-lg"></div>
                        <h3 className="text-center text-2xl font-medium mb-2">Perfect Match for Elegant Fashion</h3>
                        <p className="cursor-pointer underline hover:text-[hsl(40,100%,50%)]">Shop Collection</p>
                    </li>
                    
                    <li className="flex flex-col  mr-10 items-center">
                        <div className="cursor-pointer aspect-square  w-[30vw] mb-5 bg-[url(/trendBg2.jpg)] bg-cover bg-center bg-norepeat rounded-lg"></div>
                        <h3  className="text-center text-2xl font-medium mb-2">Trendy Lifestyle Collection</h3>
                        <p className="cursor-pointer underline hover:text-[hsl(40,100%,50%)]">Shop Collection</p>
                    </li>
                </ul>
                <div className="flex flex-col justify-center items-center  flex-1 ">
                    <div className="flex flex-col justify-between w-[24vw] h-fit   ">
                        <h3 className="text-3xl font-medium mb-6">Shop the Latest Trends</h3>
                        <p className="  mb-6">Stay ahead of the curve with our curated collection of the latest fashion trends. Shop now for fresh styles and must-have pieces!</p>
                        <button className="text-white font-medium text-normal px-8 py-3 bg-[hsl(210,9%,31%)] rounded-lg w-fit hover:bg-[hsl(40,100%,50%)] hover:text-black ">Shop Now</button>
                    </div>    
                </div>
                
            </div>
    );
}


export function TopProductSection(props)
{
    const productListElement=productList.map((product)=>{
            
        return (<ProductElement key={product.productName} title={product.productName} price={product.price} imageUrl1={product.imageUrl1} imageUrl2={product.imageUrl2}/>);
    });

    return (
        <div className=" flex flex-col items-center xl:px-[2%] lg:px-[3%] md:px-[3%] px-[5%]">
                <h2 className="text-3xl font-medium mb-10">Top Rated Products</h2>
                <ul className="flex flex-row justify-between w-full">
                    {productListElement}
                </ul>
        </div>
    );
}


export function ProductElement(props){

    const style1={backgroundImage:`url("${props.imageUrl1}")`};
    const style2={backgroundImage:`url("${props.imageUrl2}")`};


    return (
        <li className="flex flex-col justify-end w-[15vw]">
            <div>
                <div className=" aspect-5/7 w-full rounded-lg mb-2  relative">
                    <div className="w-full h-full absolute bg-[url(/handPickedBg1.jpg)] hover:hidden bg-cover bg-norepeat bg-center z-10" style={style1}></div>
                    <div className="w-full h-full absolute bg-[url(/handPickedBg2.jpg)] bg-cover bg-norepeat bg-center z-5" style={style2}></div>
                </div>
                <h3 className=" cursor-pointer text-center font-medium text-lg mb-2 hover:text-[hsl(40,100%,50%)]">{props.title}</h3>
                <p className="text-center text-lg">{props.price}</p>
            </div> 
        </li>
    );
}