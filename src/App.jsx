import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import EmpoweringYouth from './components/EmpoweringYouth'
import OurApproach from './components/OurApproach'
import HowWeEmpower from './components/HowWeEmpower'
import ImpactSnapshot from './components/ImpactSnapshot'
import PartnerSchools from './components/PartnerSchools'
import NewsletterSection from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <EmpoweringYouth />
      <OurApproach />
      <HowWeEmpower />
      <ImpactSnapshot />
      <PartnerSchools />
      <NewsletterSection />
      <Footer />
    </div>
  )
}

export default App

