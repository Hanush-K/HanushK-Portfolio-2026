import { useRef } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Navbar from './components/Navbar'
import ProfileImage from './components/ProfileImage'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Profiles from './components/Profiles'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const trackRef = useRef(null)

  return (
    <div className="min-h-svh overflow-x-clip bg-black text-white">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-white focus:px-3 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <div ref={trackRef} className="relative">
          <ProfileImage trackRef={trackRef} />
          <Hero />
          <About />
        </div>
        <Skills />
        <Certificates />
        <Profiles />
        <Contact />
      </main>
      <Footer />
      <SpeedInsights />
    </div>
  )
}
