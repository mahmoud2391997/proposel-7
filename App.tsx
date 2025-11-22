import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, ChatbotWidget } from './components/Layout';
import { HeroSection, WhoWeServeSection, PartnersSection, PillarsSection, NewsletterSection } from './components/Sections';
import { AboutPage, SolutionsPage, PartnershipsPage, ContactPage, WhoWeServePage, InsightsPage } from './pages/Pages';

// Home Page Composition
const Home: React.FC = () => (
  <main>
    <HeroSection />
    <WhoWeServeSection />
    <PartnersSection />
    <PillarsSection />
    <div className="py-20 bg-bg-card border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl text-white mb-8">Global Presence</h2>
        <div className="aspect-[2/1] max-w-4xl mx-auto bg-[#111] border border-white/10 relative flex items-center justify-center">
          <span className="text-gold/30 font-serif text-xl">Interactive Global Map Visualization</span>
          {/* Visual dots for locations */}
          <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-gold rounded-full animate-ping"></div> {/* Canada */}
          <div className="absolute top-[35%] left-[25%] w-2 h-2 bg-gold rounded-full"></div> {/* USA */}
          <div className="absolute top-[25%] left-[48%] w-2 h-2 bg-gold rounded-full"></div> {/* UK */}
          <div className="absolute top-[65%] left-[52%] w-2 h-2 bg-gold rounded-full"></div> {/* Ghana */}
          <div className="absolute top-[80%] left-[55%] w-2 h-2 bg-gold rounded-full"></div> {/* South Africa */}
        </div>
      </div>
    </div>
    <NewsletterSection />
  </main>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-bg text-text-main font-sans selection:bg-gold selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/who-we-serve" element={<WhoWeServePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <ChatbotWidget />
      </div>
    </Router>
  );
}

export default App;