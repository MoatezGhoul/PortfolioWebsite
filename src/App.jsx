import "./App.scss";
import { profile } from "./data/profile";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar name={profile.name} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Projects />
        <Contact profile={profile} />
      </main>
      <Footer name={profile.name} />
    </>
  );
}