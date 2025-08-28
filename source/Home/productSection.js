

const productList=[
    {
        productName:"Hand Knitted Women's Woolen shoks",
        price:"$30",
        imageUrl:"/productImages/productImage1.jpg",
    },
    {
        productName:"Chalier Warm Winter Headband for women",
        price:"$180",
        imageUrl:"/productImages/productImage2.jpg",
    },
    {
        productName:"Maidenform Pure Comfort Lace Bralette",
        price:"$180",
        imageUrl:"/productImages/productImage3.jpg",
    },
    {
        productName:"Gildan mens Heavy Cotton Adult T-Shirt",
        price:"$215",
        imageUrl:"/productImages/productImage4.jpg",
    },
    {
        productName:"Men's Solid Polo Neck 100% Cotton Blue",
        price:"$375",
        imageUrl:"productImages/productImage5.jpg",
    },
    {
        productName:"Mahza Woman Sweater Autumn And Winter",
        price:"$137",
        imageUrl:"productImages/productImage6.jpg",
    },
    {
        productName:"Passegiata Women's Polyamide t-shirt",
        price:"$300",
        imageUrl:"productImages/productImage7.jpg",
    },
    {
        productName:"Beltinger Denim Belt Made Leather",
        price:"$50",
        imageUrl:"productImages/productImage8.jpg",
    },
]

export default function ProductSection(props)
{

    const productListElement=productList.map((product)=>{
            
        return (<ProductElement key={product.productName}  title={product.productName} price={product.price} imageUrl={product.imageUrl} />);
    });
    
    return (
        <div className=" bg-[hsl(0,0%,9%)] text-white flex flex-col items-center xl:px-[2%] py-10 lg:px-[3%] md:px-[3%] px-[5%]">
            <h2 className="text-3xl font-medium mb-15">Featured Products</h2>
            <ul className="flex flex-row flex-wrap">
              {productListElement}  
            </ul>
        </div>
    );
}


export  function ProductElement(props){

    
    const styleImage=` aspect-4/6 w-[10vw]  bg-cover bg-norepeat mr-4`;
    const style={backgroundImage:`url("${props.imageUrl}")`}

    return (
        <li className="flex flex-row  w-[22vw] mb-10 mr-5">
           <div className={styleImage} style={style}></div>
           <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-medium text-lg mb-2">{props.title}</h3>
                <StarList/>
                <p className=" mt-2 text-lg">{props.price}</p>
            </div> 
        </li>
    );
}

export function StarList(props){

    return (
        <ul className=" flex flex-row  ">
            <li className="aspect-square w-[1vw] mb-2 bg-[url(/starIconWhite.png)] bg-cover bg-norepeat"></li>
            <li className="aspect-square w-[1vw] mb-2 bg-[url(/starIconWhite.png)] bg-cover bg-norepeat"></li>
            <li className="aspect-square w-[1vw] mb-2 bg-[url(/starIconWhite.png)] bg-cover bg-norepeat"></li>
            <li className="aspect-square w-[1vw] mb-2 bg-[url(/starIconWhite.png)] bg-cover bg-norepeat"></li>
            <li className="aspect-square w-[1vw] mb-2 bg-[url(/starIconWhite.png)] bg-cover bg-norepeat"></li>
        </ul>
    );
}