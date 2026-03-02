import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Showcase from "@/components/sections/Showcase";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <Stats />
      <Testimonials />
      <Showcase />
      <Footer />
    </main>
  );
}
