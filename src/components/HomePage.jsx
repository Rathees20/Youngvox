import Header from './Header'
import Hero from './Hero'
import EmpoweringYouth from './EmpoweringYouth'
import OurApproach from './OurApproach'
import HowWeEmpower from './HowWeEmpower'
import ImpactSnapshot from './ImpactSnapshot'
import PartnerSchools from './PartnerSchools'
import NewsletterSection from './Newsletter'
import Footer from './Footer'

function HomePage() {
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

export default HomePage

