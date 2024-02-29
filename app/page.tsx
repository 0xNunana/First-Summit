
import Herodivider from "@/components/herodivider";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Courses from "@/sections/Courses";
import Hero from "@/sections/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen ">

<Hero/>

<Herodivider/>
<About/>
<Courses/>


   
    </main>
  );
}
