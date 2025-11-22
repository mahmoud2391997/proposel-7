import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Briefcase, Building2, Trophy, Landmark, TrendingUp, Lock, Sprout, Globe, Activity, Zap, Shield } from 'lucide-react';
import { Segment, Pillar, Partner } from '../types';

// --- HERO SECTION ---
export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-bg bg-hero-gradient z-0"></div>
      <div className="absolute inset-0 bg-spiderweb opacity-20 z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-8">
          <div className="inline-block border border-gold/30 px-4 py-1 rounded-full bg-gold/5 backdrop-blur-sm">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">Global Wealth Management</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white text-glow">
            Where Global Wealth Meets <span className="text-gold italic">Regenerative Impact.</span>
          </h1>
          
          <p className="text-lg text-text-accent font-light max-w-xl leading-relaxed border-l-2 border-gold/30 pl-6">
            Serving families, institutions, athletes, and governments through multi-asset strategies executed with world-class partners.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/solutions" className="px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-black font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_20px_rgba(212,165,58,0.4)] transition-all rounded-sm">
              Explore Solutions
            </Link>
            <Link to="/partnerships" className="px-8 py-4 border border-gold text-gold font-bold text-sm uppercase tracking-widest hover:bg-gold/10 transition-all rounded-sm">
              Partner With Us
            </Link>
          </div>

          <div className="pt-8 text-[10px] text-white/40 uppercase tracking-[0.15em] font-mono">
            Powered by Victory Hill • ITS • Falcon • TG4
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center relative">
           {/* Abstract Globe/Shield Representation */}
           <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 border border-gold/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-gold/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-12 border-2 border-gold rounded-full opacity-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <Shield className="w-32 h-32 text-gold drop-shadow-[0_0_15px_rgba(212,165,58,0.5)]" strokeWidth={1} />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

// --- WHO WE SERVE ---
const segments: Segment[] = [
  { id: 'hnw', title: 'High-Net-Worth Families', description: 'Multi-generational wealth built on clarity, discipline, and a regenerative long-term vision.', icon: Users },
  { id: 'family-offices', title: 'Family Offices', description: 'Institutional-grade access, private markets, governance advisory, and co-investment.', icon: Building2 },
  { id: 'institutions', title: 'Institutions', description: 'Strategic investment solutions, transition frameworks, and risk-managed capital architectures.', icon: Landmark },
  { id: 'athletes', title: 'Athletes (TG4)', description: 'From performance to prosperity—elite advisory and long-term lifestyle sustainability.', icon: Trophy },
  { id: 'governments', title: 'Governments', description: 'Investment strategies supporting national development and community regeneration.', icon: Globe },
];

export const WhoWeServeSection: React.FC = () => {
  return (
    <section className="py-24 bg-bg-card relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Who We Serve</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {segments.map((item) => (
            <Link to={`/who-we-serve`} key={item.id} className="group relative bg-[#0F0F0F] border border-white/5 p-8 rounded-sm hover:border-gold/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <item.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
              <h3 className="text-white font-serif text-lg mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PARTNERSHIPS ---
const partners: Partner[] = [
  { name: 'Victory Hill Capital Corp', role: 'Execution Engine' },
  { name: 'NetZero Nexus', role: 'Climate Infra' },
  { name: 'ITS Investment', role: 'Tech Policy' },
  { name: 'Falcon GRAVATON', role: 'Logistics' },
  { name: 'TG4 Sports', role: 'Athlete Capital' },
];

export const PartnersSection: React.FC = () => {
  return (
    <section className="py-16 bg-black border-y border-gold/20">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-center text-gold/60 text-xs uppercase tracking-[0.3em] mb-10">Strategic Alliance Network</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((p, i) => (
            <div key={i} className="text-center group">
               <h4 className="text-xl md:text-2xl font-serif text-white group-hover:text-gold transition-colors">{p.name}</h4>
               <span className="text-[10px] uppercase tracking-widest text-white/40">{p.role}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
           <Link to="/partnerships" className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest border-b border-gold/30 pb-1 hover:border-gold hover:gap-4 transition-all">
             Explore Partnerships <ArrowRight size={14} />
           </Link>
        </div>
      </div>
    </section>
  );
};

// --- PILLARS ---
const pillars: Pillar[] = [
  { title: 'Public Markets', description: 'Systematic and discretionary strategies built for dynamic global cycles.', icon: TrendingUp },
  { title: 'Private Markets', description: 'Direct access to private equity, credit, and exclusive co-investments.', icon: Lock },
  { title: 'Climate & Infra', description: 'Energy transition, clean power, storage, and next-gen infrastructure.', icon: Zap },
  { title: 'Sports Capital', description: 'TG4-driven athlete capital and long-term wealth alignment.', icon: Activity },
  { title: 'Real Estate', description: 'Prime global corridors and institutional-grade real asset strategies.', icon: Building2 },
  { title: 'Regenerative', description: 'Capital aligned with long-term human, economic, and environmental prosperity.', icon: Sprout },
];

export const PillarsSection: React.FC = () => {
  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      {/* Faint bg decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Global Investment Pillars</h2>
              <p className="text-text-muted max-w-md">Multi-asset architectures designed for resilience.</p>
           </div>
           <Link to="/solutions" className="px-6 py-3 border border-white/20 text-white text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-all">
             View All Solutions
           </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/20 border border-gold/20">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-[#080808] p-10 hover:bg-[#0F0F0F] transition-colors group">
              <pillar.icon className="text-white/50 w-12 h-12 mb-6 group-hover:text-gold transition-colors" strokeWidth={1} />
              <h3 className="text-white font-serif text-xl mb-3">{pillar.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed group-hover:text-text-accent">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- NEWSLETTER ---
export const NewsletterSection: React.FC = () => {
  return (
    <section className="py-20 bg-gold/5 border-t border-gold/10">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">Join the BG Global Intelligence Briefing</h3>
        <p className="text-text-muted mb-8 max-w-2xl mx-auto">Exclusive perspectives for investors, leaders, and decision-makers on market outlooks, private opportunities, and regenerative frameworks.</p>
        
        <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 bg-black/50 border border-white/10 px-6 py-4 text-white text-sm outline-none focus:border-gold transition-colors"
          />
          <button type="submit" className="bg-gold hover:bg-gold-dark text-black px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors">
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-[10px] text-white/30 uppercase tracking-widest">We respect your privacy. No spam.</p>
      </div>
    </section>
  );
};