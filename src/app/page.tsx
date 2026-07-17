import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ProductImpact from '@/components/sections/ProductImpact'
import ProductPhilosophy from '@/components/sections/ProductPhilosophy'
import Experience from '@/components/sections/Experience'
import CaseStudies from '@/components/sections/CaseStudies'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import ChatWidget from '@/components/chat/ChatWidget'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CaseStudies />
        <Projects />
        <Experience />
        <ProductImpact />
        <ProductPhilosophy />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
