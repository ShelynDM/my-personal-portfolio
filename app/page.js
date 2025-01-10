'use client';
import Navbar from "./components/navbar";
import HomePage from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}
