import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollManager from './components/ScrollManager'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ToolsPage from './pages/ToolsPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
