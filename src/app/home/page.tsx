import { Header } from "@/components/layouts/Header";
import { Hero } from "@/components/layouts/Hero";
import { Promotion } from "@/components/layouts/Promotion";
import { WhyChoose } from "@/components/layouts/WhyChoose";
import { TopSale } from "@/components/layouts/TopSale";
import { HotDealFurniture } from "@/components/layouts/HotDealFurniture";
import { ReadBlog } from "@/components/layouts/ReadBlog";

export default function Home() {
  return (
    <>
      <Header />
      {/* <Hero />
      <WhyChoose />
      <Promotion />
      <TopSale />

      <HotDealFurniture /> */}

      <ReadBlog />
    </>
  );
}
