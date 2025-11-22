import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Globe, Linkedin, Instagram, Facebook, Twitter, Youtube, MessageSquare, ChevronRight } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Who We Serve', path: '/who-we-serve' },
  { label: 'Our Solutions', path: '/solutions' },
  { label: 'Partnerships', path: '/partnerships' },
  { label: 'Insights', path: '/insights' },
  { label: 'About', path: '/about' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-gold/20 py-3' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center border border-gold rounded-sm overflow-hidden group-hover:shadow-[0_0_15px_rgba(212,165,58,0.3)] transition-shadow">
            <Shield className="text-gold w-6 h-6" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl leading-none text-white tracking-wide">BENSON</span>
            <span className="text-[0.6rem] uppercase tracking-[0.25em] text-gold">Global Inc.</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`text-sm uppercase tracking-widest transition-colors hover:text-gold ${
                location.pathname === item.path ? 'text-gold font-semibold' : 'text-text-muted'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-6 py-2 border border-gold text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-bg z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            className="text-2xl font-serif text-white hover:text-gold transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <Link 
          to="/contact" 
          className="mt-4 px-8 py-3 border border-gold text-gold uppercase tracking-widest"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-gold w-8 h-8" strokeWidth={1} />
              <span className="font-serif text-2xl text-white">BENSON GLOBAL</span>
            </div>
            <p className="text-text-muted max-w-md mb-8 font-light leading-relaxed">
              Where global wealth meets regenerative impact. Serving families, institutions, athletes, and governments through multi-asset strategies executed with world-class partners.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><Link to="/who-we-serve" className="hover:text-gold transition-colors">Who We Serve</Link></li>
              <li><Link to="/solutions" className="hover:text-gold transition-colors">Our Solutions</Link></li>
              <li><Link to="/partnerships" className="hover:text-gold transition-colors">Strategic Partners</Link></li>
              <li><Link to="/insights" className="hover:text-gold transition-colors">Global Insights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li>client.relations@bensonglobal.com</li>
              <li>+1 (888) 555-0123</li>
              <li className="pt-4 text-gold">
                Canada • USA • UK • Qatar • South Africa • Ghana
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-wider">
          <p>&copy; 2025 Benson Global Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Use</Link>
            <Link to="#" className="hover:text-white">Compliance</Link>
          </div>
        </div>
        
        <div className="mt-8 text-[10px] text-white/20 leading-relaxed text-justify">
          Disclaimer: Benson Global Inc. provides strategic advisory and investment architecture services in partnership with regulated financial institutions. Investment products and services may only be offered through appropriate licensed partners in relevant jurisdictions. All information is for educational purposes and does not constitute investment advice.
        </div>
      </div>
    </footer>
  );
};

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end">
       {isOpen && (
        <div className="mb-4 w-80 bg-bg-card border border-gold/20 rounded-lg shadow-2xl overflow-hidden animate-fade-in-up">
          <div className="bg-gold/10 p-4 border-b border-gold/10 flex justify-between items-center">
            <span className="text-gold font-serif">BG Concierge</span>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white"><X size={16}/></button>
          </div>
          <div className="p-4 h-64 overflow-y-auto text-sm text-text-muted space-y-4">
            <div className="bg-white/5 p-3 rounded-br-lg rounded-bl-lg rounded-tr-lg">
              Hello. How may I assist you with your wealth architecture today?
            </div>
            <div className="flex gap-2 flex-wrap">
              <button className="text-xs border border-gold/30 text-gold px-3 py-1 rounded-full hover:bg-gold/10">Investment Inquiry</button>
              <button className="text-xs border border-gold/30 text-gold px-3 py-1 rounded-full hover:bg-gold/10">Partner Info</button>
            </div>
          </div>
          <div className="p-3 border-t border-white/5">
             <input type="text" placeholder="Type a message..." className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/20" />
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,165,58,0.4)] hover:scale-110 transition-transform text-black"
      >
        {isOpen ? <ChevronRight size={24} className="rotate-90"/> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};