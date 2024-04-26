import { Hero } from "@/components/Hero";
import { Info } from "@/components/Info";
import { GiftList } from "@/components/GiftList";

export default function Home() {
  return (
    <main>
      <Hero />
      <Info />
      <GiftList />
    </main>
  );
}
