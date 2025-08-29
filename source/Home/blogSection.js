
const blogList=[
    {
        title:"How to Write a Blog Post Your Readers  Will Lovein 5 Steps",
        content:"Why the world would end without travel coupons. The 16 worst songs about spa deals....",
        imageUrl:"/blogImage1.jpg",
    },
    {
        title:"9 Content Marketing Trends and Ideas to Increase Traffic",
        content:"Why do people think wholesale accessories are a good idea? Unbelievable cool tech gadget success…....",
        imageUrl:"/blogImage2.jpg",
    },
    {
        title:"The Ultimate Guide to Marketing Strategies to Improve Sales",
        content:"Many things about electronic devices your kids don't want you to know How storage devices…....",
        imageUrl:"/blogImage3.jpg",
    },
];


export default function BlogSection(props)
{
    const blogListElement=blogList.map((blog)=>{
        
        return (<BlogCard  key={blog.title} title={blog.title} content={blog.content} imageUrl={blog.imageUrl}/>);
    });
    return (
        <div className="bg-[hsl(0,0%,9%)] text-white flex flex-col items-center xl:px-[2%] py-20 lg:px-[3%] md:px-[3%] px-[5%]">
            <h2 className="text-3xl font-medium mb-15">From The Blog</h2>
            <ul className="flex flex-row  justify-between w-full overflow-x-auto">
                {blogListElement}
            </ul>
        </div>
    );

}


export function BlogCard(props){

    const style={backgroundImage:`url("${props.imageUrl}")`}
    return (
        <li className=" flex-none xl:w-[27vw] lg:w-[45vw] md:w-[45vw] w-full xl:mr-0 lg:mr-10 md:mr-10 mr-10  ">
            <div className="aspect-5/4 w-full mb-3  bg-cover bg-norepeat rounded-lg cursor-pointer" style={style}></div>
            <h3 className="text-lg font-medium mb-3 hover:text-[hsl(40,100%,50%)] cursor-pointer">How to Write a Blog Post Your Readers  Will Lovein 5 Steps</h3>
            <p className="mb-3">Why the world would end without travel coupons. The 16 worst songs about spa deals....</p>
            <p className="underline hover:text-[hsl(40,100%,50%)] cursor-pointer">Read More</p>
        </li>
    );
}