import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import AboutPage from './components/About/AboutPage'
import JoinYoung from './components/JoinYoung'
import ChaptersPage from './components/Chapters/ChaptersPage'
import ContactPage from './components/Contact/ContactPage'
import FormPage from './components/Form/FormPage'
import VolunteerFormPage from './components/Form/VolunteerFormPage'
import CorporateFormPage from './components/Form/CorporateFormPage'
import AdvisorFormPage from './components/Form/AdvisorFormPage'
import PartnerFormPage from './components/Form/PartnerFormPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/joinyoung" element={<JoinYoung />} />
      <Route path="/chapters" element={<ChaptersPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/form/school" element={<FormPage />} />
      <Route path="/form/volunteer" element={<VolunteerFormPage />} />
      <Route path="/form/corporate" element={<CorporateFormPage />} />
      <Route path="/form/advisor" element={<AdvisorFormPage />} />
      <Route path="/form/partner" element={<PartnerFormPage />} />
    </Routes>
  )
}

export default App

