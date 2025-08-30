import Image from "next/image";
import NavSection from "../source/Home/navSection.js";
import HeroSection from "../source/Home/heroSection.js";
import TrendSection from "../source/Home/trendSection.js";
import ShopSection from "../source/Home/shopSection.js";
import CustomerSection from "../source/Home/customerSection.js";
import ProductSection from "../source/Home/productSection.js";
import BlogSection from "../source/Home/blogSection.js";
import FooterSection from "../source/Home/footerSection.js";

export default function Home() {
  return (
    <main className="">
      <NavSection/>
      <HeroSection/>
      <ShopSection/>
      <TrendSection/>
      <CustomerSection/>
      <ProductSection/>
      <BlogSection/>
      <FooterSection/>

    </main>
  );
}
