import React, { useEffect } from 'react';
import { Shield, CheckCircle, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="pt-32 pb-16 bg-gradient-to-b from-[#101010] to-bg border-b border-white/5">
    <div className="container mx-auto px-6 md:px-12">
      <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">{title}</h1>
      <p className="text-gold text-lg font-light max-w-2xl border-l border-gold pl-4">{subtitle}</p>
    </div>
  </div>
);

// --- ABOUT PAGE ---
export const AboutPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  
  const leaders = [
    { name: 'Dr. Anthony K. Benson', title: 'President & CEO' },
    { name: 'Dr. Tiaan Oosthuizen', title: 'Managing Partner' },
    { name: 'Kavis Reed', title: 'Managing Partner' },
    { name: 'Dr. Tobias De Corning', title: 'Managing Partner' },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <PageHeader 
        title="Mission & Mandate" 
        subtitle="Empowering global families, institutions, athletes, and nations through regenerative wealth and strategic investment partnerships."
      />
      
      <div className="container mx-auto px-6 md:px-12 py-20 space-y-20">
        <section className="grid md:grid-cols-2 gap-12 items-center">
           <div>
             <h2 className="font-serif text-3xl text-white mb-6">The BG Philosophy</h2>
             <p className="text-text-muted mb-6 leading-relaxed">
               A regenerative approach to global wealth creation anchored on four principles. We believe that true prosperity connects capital with long-term human, economic, and environmental health.
             </p>
             <ul className="space-y-4">
               {['Client Relationship Obsession (CRO)', 'Long-Term Thinking & Investing', 'Eagerness to Invent & Reimagine', 'Professional Pride & Excellence'].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-white">
                   <Shield size={16} className="text-gold" /> {item}
                 </li>
               ))}
             </ul>
           </div>
           <div className="bg-bg-card p-8 border border-white/5 rounded-sm">
              <div className="aspect-video bg-gradient-to-br from-gold/20 to-black flex items-center justify-center text-gold font-serif text-2xl italic text-center p-6">
                "Legacy is not just what you leave behind, but what you grow while you are here."
              </div>
           </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-white mb-10 text-center">Leadership</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((l, i) => (
              <div key={i} className="bg-[#0A0A0A] p-6 border-t-2 border-gold/50 hover:bg-[#111] transition-colors">
                <div className="w-20 h-20 bg-white/5 rounded-full mb-4 mx-auto"></div> {/* Placeholder for headshot */}
                <h3 className="text-white font-serif text-lg text-center">{l.name}</h3>
                <p className="text-gold text-xs uppercase tracking-widest text-center mt-1">{l.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// --- SOLUTIONS PAGE ---
export const SolutionsPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const solutions = [
    { 
      area: 'Public Markets', 
      detail: 'A disciplined framework integrating macro research, systematic insights, and global cycle alignment to help clients navigate volatility and sustain long-term returns.' 
    },
    { 
      area: 'Private Markets', 
      detail: 'Access to private equity, private credit, venture growth, infrastructure, and exclusive co-investment opportunities with leading institutional partners.' 
    },
    { 
      area: 'Climate & Infrastructure', 
      detail: 'Clean energy, grid modernization, energy storage, and climate transition solutions through our alliance with Victory Hill and ITS.' 
    },
    { 
      area: 'Sports & Performance', 
      detail: 'Uniquely positioned through TG4: Athlete-centric capital design, sports academies, and post-career wealth architecture.' 
    },
    { 
      area: 'Real Estate', 
      detail: 'Institutional-grade real estate corridors including prime global markets and development-ready zones.' 
    },
    { 
      area: 'Regenerative Investing', 
      detail: 'Capital aligned with long-term human, economic, and environmental prosperity. Moving beyond ESG to true regeneration.' 
    }
  ];

  return (
    <div className="min-h-screen bg-bg">
      <PageHeader 
        title="Our Solutions" 
        subtitle="Multi-asset architectures designed for resilience in a complex global environment."
      />
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {solutions.map((s, i) => (
            <div key={i} className="group">
              <div className="flex items-baseline gap-4 mb-3 border-b border-white/10 pb-3 group-hover:border-gold transition-colors">
                <span className="text-gold font-mono text-sm">0{i+1}</span>
                <h3 className="text-2xl font-serif text-white">{s.area}</h3>
              </div>
              <p className="text-text-muted leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- PARTNERSHIPS PAGE ---
export const PartnershipsPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen bg-bg">
       <PageHeader 
        title="Strategic Partnerships" 
        subtitle="Benson Global operates through alliances with world-class institutions to deliver performance, protection, and impact."
      />
      <div className="container mx-auto px-6 md:px-12 py-20 space-y-16">
        {[
          { name: 'Victory Hill Capital Corp', desc: 'Primary execution engines for public and private markets, climate infrastructure, and risk-managed investment programs.' },
          { name: 'Institute for Technology & Society (ITS)', desc: 'A global research and innovation partner enabling advanced technology, policy, and transformation strategies.' },
          { name: 'Falcon Ireland', desc: 'A global partner specializing in aviation solutions, strategic asset procurement, and high-end international logistics.' },
          { name: 'TG4 Sports Development Inc.', desc: 'A global athlete development and performance ecosystem.' }
        ].map((p, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-8 items-start bg-bg-card p-8 border border-white/5">
            <div className="w-full md:w-1/3 h-32 bg-white/5 flex items-center justify-center">
              <h3 className="font-serif text-xl text-white text-center px-4">{p.name}</h3>
            </div>
            <div className="md:w-2/3">
              <h4 className="text-gold text-sm uppercase tracking-widest mb-2">Strategic Partner</h4>
              <p className="text-text-muted leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- WHO WE SERVE PAGE ---
export const WhoWeServePage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const segments = [
    {
      id: 'hnw',
      title: 'High-Net-Worth Families',
      desc: 'Preserving legacies. Expanding possibilities. Protecting tomorrow. We build multi-generational wealth platforms anchored in institutional discipline.',
      features: ['Multi-asset portfolio architecture', 'Trust & estate planning', 'Philanthropy frameworks']
    },
    {
      id: 'family-offices',
      title: 'Family Offices',
      desc: 'Institutional thinking, executive precision. Direct investments, governance advisory, and co-investment pathways alongside global partners.',
      features: ['Private market access', 'Governance frameworks', 'Consolidated reporting']
    },
    {
      id: 'institutions',
      title: 'Institutions & Corporations',
      desc: 'Capital resilience for complex global environments. Structuring capital programs for pension funds, foundations, and sovereign entities.',
      features: ['Risk-managed architectures', 'Climate transition pathways', 'Strategic partnerships']
    },
    {
      id: 'athletes',
      title: 'Athletes & Sports Ecosystems',
      desc: 'Performance is temporary. Legacy is forever. Through TG4, we provide athlete wealth advisory and long-term lifestyle sustainability.',
      features: ['Brand & licensing strategy', 'Post-career wealth architecture', 'Performance data integration']
    },
    {
      id: 'governments',
      title: 'Governments & Development',
      desc: 'Investment strategies shaping future-ready nations. Infrastructure investment pathways and regenerative economic systems.',
      features: ['Public-private investment structures', 'Infrastructure planning', 'Regenerative systems']
    }
  ];

  return (
    <div className="min-h-screen bg-bg">
      <PageHeader
        title="Who We Serve"
        subtitle="Benson Global serves a diverse, elite clientele requiring sophisticated, multi-asset investment strategies."
      />
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid gap-16">
          {segments.map((seg, i) => (
            <div key={seg.id} id={seg.id} className="grid md:grid-cols-[1fr_2fr] gap-8 border-b border-white/5 pb-16 last:border-0 last:pb-0">
              <div>
                 <span className="text-gold font-mono text-sm mb-2 block">0{i + 1}</span>
                 <h2 className="font-serif text-2xl text-white">{seg.title}</h2>
              </div>
              <div>
                <p className="text-text-muted mb-6 text-lg font-light">{seg.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {seg.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-white/70">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0"></div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- INSIGHTS PAGE ---
export const InsightsPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const insights = [
    {
      title: 'Global Market Outlook: Q3 2025',
      category: 'Market Strategy',
      date: 'Oct 12, 2025',
      snippet: 'Navigating interest rate divergence and the resurgence of emerging market debt.'
    },
    {
      title: 'The Rise of Regenerative Capital',
      category: 'Philosophy',
      date: 'Sep 28, 2025',
      snippet: 'Moving beyond ESG: How regenerative investment models create resilient systems.'
    },
    {
      title: 'Africa Growth Corridors: Infrastructure & Energy',
      category: 'Region Focus',
      date: 'Sep 15, 2025',
      snippet: 'Key opportunities in the grid modernization of Ghana and South Africa.'
    },
    {
      title: 'Athlete Wealth: The TG4 Framework',
      category: 'Sports & Performance',
      date: 'Aug 30, 2025',
      snippet: 'Structuring long-term capital for elite performers during peak earnings years.'
    },
    {
      title: 'Private Credit in a Volatile World',
      category: 'Private Markets',
      date: 'Aug 12, 2025',
      snippet: 'Why institutional investors are increasing allocation to direct lending strategies.'
    },
    {
      title: 'Leadership Note: The Audacity of Long-Termism',
      category: 'Leadership',
      date: 'Aug 01, 2025',
      snippet: 'Dr. Anthony K. Benson discusses the cultural shift required for generational wealth.'
    }
  ];

  return (
    <div className="min-h-screen bg-bg">
      <PageHeader
        title="Global Intelligence"
        subtitle="Strategic perspectives for investors, leaders, and decision-makers."
      />
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-wrap gap-4 mb-12">
           {['All', 'Market Strategy', 'Private Markets', 'Regenerative', 'Leadership'].map(filter => (
             <button key={filter} className="px-4 py-2 border border-white/10 text-xs uppercase tracking-widest text-white hover:border-gold hover:text-gold transition-colors">
               {filter}
             </button>
           ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, i) => (
            <article key={i} className="group bg-bg-card border border-white/5 hover:border-gold/30 transition-all duration-300 flex flex-col">
              <div className="aspect-[16/9] bg-[#111] relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-colors"></div>
                <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 text-[10px] text-gold uppercase tracking-widest">
                  {insight.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-[10px] text-white/40 mb-3">{insight.date}</div>
                <h3 className="font-serif text-xl text-white mb-3 group-hover:text-gold transition-colors">{insight.title}</h3>
                <p className="text-sm text-text-muted mb-6 flex-1">{insight.snippet}</p>
                <button className="self-start text-xs text-gold uppercase tracking-widest border-b border-transparent group-hover:border-gold pb-1 transition-all flex items-center gap-2">
                  Read Brief <ArrowRight size={10} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination / View All */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white/5 transition-colors">
            Load More Insights
          </button>
        </div>
      </div>
    </div>
  );
};

// --- CONTACT PAGE ---
export const ContactPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen bg-bg">
       <PageHeader 
        title="Connect With Benson Global" 
        subtitle="For confidential inquiries and strategic conversations."
      />
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-2xl text-white mb-6">Global Presence</h2>
            <div className="space-y-6 text-text-muted">
              <div className="flex gap-4">
                <MapPin className="text-gold shrink-0" />
                <p>Canada • USA • United Kingdom • Qatar • South Africa • Namibia • Ghana</p>
              </div>
              <div className="flex gap-4">
                <Mail className="text-gold shrink-0" />
                <p>client.relations@bensonglobal.com</p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-gold shrink-0" />
                <p>+1 (888) 555-0123</p>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-gold/5 border border-gold/20">
              <h3 className="text-gold font-serif mb-2">Investor Portal</h3>
              <p className="text-xs text-white/60 mb-4">Secure access for existing limited partners and institutional clients.</p>
              <button className="text-xs bg-transparent border border-white/20 text-white px-4 py-2 hover:border-gold hover:text-gold transition-colors">Login to Portal</button>
            </div>
          </div>

          <form className="space-y-6 bg-bg-card p-8 border border-white/5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-gold uppercase tracking-widest">First Name</label>
                <input type="text" className="w-full bg-black border border-white/10 p-3 text-white focus:border-gold outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-gold uppercase tracking-widest">Last Name</label>
                <input type="text" className="w-full bg-black border border-white/10 p-3 text-white focus:border-gold outline-none" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs text-gold uppercase tracking-widest">Email</label>
              <input type="email" className="w-full bg-black border border-white/10 p-3 text-white focus:border-gold outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-gold uppercase tracking-widest">Inquiry Type</label>
              <select className="w-full bg-black border border-white/10 p-3 text-white focus:border-gold outline-none">
                <option>High-Net-Worth Individual</option>
                <option>Family Office</option>
                <option>Institution / Corporation</option>
                <option>Athlete (TG4)</option>
                <option>Government Partner</option>
              </select>
            </div>
            <div className="space-y-2">
               <label className="text-xs text-gold uppercase tracking-widest">Message</label>
               <textarea rows={4} className="w-full bg-black border border-white/10 p-3 text-white focus:border-gold outline-none"></textarea>
            </div>
            <button className="w-full bg-gold hover:bg-gold-dark text-black font-bold py-4 uppercase tracking-widest transition-colors">
              Submit Confidential Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
