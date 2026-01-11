"use client";

import Background3D from '@/components/Background3D';
import Navbar from '@/components/Navbar';
import Loader from '@/components/Loader';
import CursorTrail from '@/components/CursorTrail';
import ScrollToTop from '@/components/ScrollToTop';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Stats from '@/components/Stats';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Loader />
      <Background3D />
      <CursorTrail />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Stats />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
