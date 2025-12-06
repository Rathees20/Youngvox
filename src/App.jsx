import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import AboutPage from './components/About/AboutPage'
import JoinYoung from './components/JoinYoung'
import ChaptersPage from './components/Chapters/ChaptersPage'
import ContactPage from './components/Contact/ContactPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/joinyoung" element={<JoinYoung />} />
      <Route path="/chapters" element={<ChaptersPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App

