import Nav from './components/Nav'
import Hero from './components/Hero'
import LogoCloud from './components/LogoCloud'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import Platform from './components/Platform'
import Integrations from './components/Integrations'
import Technology from './components/Technology'
import Developers from './components/Developers'
import Security from './components/Security'
import UseCases from './components/UseCases'
import Compare from './components/Compare'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import BackedBy from './components/BackedBy'
import Team from './components/Team'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoCloud />
        <Stats />
        <HowItWorks />
        <Platform />
        <Integrations />
        <Technology />
        <Developers />
        <Security />
        <UseCases />
        <Compare />
        <Testimonials />
        <Pricing />
        <BackedBy />
        <Team />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
