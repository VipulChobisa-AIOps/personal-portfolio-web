import { useState } from 'react';
import { 
  Mail, 
  Award, 
  Layers, 
  TrendingUp, 
  Cpu, 
  Navigation, 
  ExternalLink,
  ChevronRight,
  Database,
  Smartphone,
  PieChart
} from 'lucide-react';

// Custom inline SVG icons for social logos to guarantee 100% build compatibility
const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" fill="currentColor" />
  </svg>
);

// Data structure for the 4 blogs
const BLOGS = [
  {
    title: 'AskforWrite Educational',
    domain: 'ask4write.com',
    url: 'https://ask4write.com/about-us/',
    niche: 'Education & Management',
    desc: 'Latest education updates, university guides, competitive exam updates, and strategic management articles.',
    gradClass: 'gradient-header-1'
  },
  {
    title: 'AskforWrite Entertainment',
    domain: 'askforwrite.com',
    url: 'https://askforwrite.com/about-us/',
    niche: 'OTT, Films & Celebrity',
    desc: 'Trending streaming platform content releases, film reviews, Bollywood/Hollywood updates, and television awards.',
    gradClass: 'gradient-header-2'
  },
  {
    title: 'AskforWrite Sports',
    domain: 'askforwrite.in',
    url: 'https://askforwrite.in/about-us-askforwrite-sports/',
    niche: 'Cricket & Tournaments',
    desc: 'Deep-dive cricket news, match analysis, domestic selection alerts, IPL squads updates, and cricketer discussions.',
    gradClass: 'gradient-header-3'
  },
  {
    title: 'AskforWrite Technology',
    domain: 'askforwrite.info',
    url: 'https://askforwrite.info/home-askforwrite-technology/about-us/',
    niche: 'AI, Blockchain & IoT',
    desc: 'Expert technical insights covering blockchain layers, AI models (DeepSeek, ChatGPT), and internet security research.',
    gradClass: 'gradient-header-4'
  }
];

// Data structure for the 6 GitHub Repositories
const REPOSITORIES = [
  {
    name: 'field-force-management',
    description: 'Enterprise Field Force Management System featuring GPS check-in/out, background location stream, geofence rules, local offline queueing, and live admin dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Firebase Auth'],
    category: 'Full Stack',
    icon: Navigation,
    github: 'https://github.com/VipulChobisa-AIOps/field-force-management'
  },
  {
    name: 'afwpixelai-marketing-suite',
    description: 'AI grow marketing suite featuring a sales chatbot (afwpixelai boat), bulk personalized ad copy compiler, and multi-niche blog content writer.',
    tech: ['React', 'TypeScript', 'Gemini AI API', 'Vite'],
    category: 'AI / LLM',
    icon: Cpu,
    github: 'https://github.com/VipulChobisa-AIOps/afwpixelai-marketing-suite'
  },
  {
    name: 'Smart-Warehouse-Automation-System',
    description: 'Automated layout models and inventory reorder threshold simulations engineered for 35 Adani Wilmar warehouses using EOQ algorithms.',
    tech: ['Python', 'Sketch Pro API', 'ROP/EOQ modeling'],
    category: 'Operations',
    icon: Layers,
    github: 'https://github.com/VipulChobisa-AIOps/Smart-Warehouse-Automation-System'
  },
  {
    name: 'stockP',
    description: 'Trend index tracker and asset allocation model executing live pipelines for indicators (RSI, MACD) and secure transactions logging.',
    tech: ['Python', 'Pandas', 'NumPy', 'Firebase Firestore'],
    category: 'Data Science',
    icon: TrendingUp,
    github: 'https://github.com/VipulChobisa-AIOps/stockP'
  },
  {
    name: 'askforwrite-digital',
    description: 'Offline-first publishing sync tool supporting real-time publishing alerts, offline sync queues, and database logging.',
    tech: ['React Native', 'TypeScript', 'AsyncStorage', 'FCM Push'],
    category: 'Mobile',
    icon: Smartphone,
    github: 'https://github.com/VipulChobisa-AIOps/askforwrite-digital'
  },
  {
    name: 'answer-engine-data',
    description: 'JSON-LD schema blueprints and semantic knowledge graphs compiled to optimize content authority for SGE overviews.',
    tech: ['JSON-LD', 'Schema.org', 'E-E-A-T standards'],
    category: 'SEO Architecture',
    icon: Database,
    github: 'https://github.com/VipulChobisa-AIOps/answer-engine-data'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'fullstack' | 'ai' | 'ops'>('all');

  const filteredRepos = REPOSITORIES.filter(repo => {
    if (activeTab === 'all') return true;
    if (activeTab === 'fullstack') return repo.category === 'Full Stack' || repo.category === 'Mobile';
    if (activeTab === 'ai') return repo.category === 'AI / LLM' || repo.category === 'Data Science' || repo.category === 'SEO Architecture';
    if (activeTab === 'ops') return repo.category === 'Operations';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#030308] text-[#f8fafc] flex flex-col">
      {/* ── HEADER ────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#030308]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-600/20">
              V
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight text-white block">Vipul Kumar Chobisa</span>
              <span className="text-[10px] text-indigo-400 font-semibold uppercase tracking-wider block">AI-Ops Specialist</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#blogs" className="hover:text-white transition-colors">Blogs Network</a>
            <a href="#repos" className="hover:text-white transition-colors">Engineering</a>
            <a href="#operations" className="hover:text-white transition-colors">Operations</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/VipulChobisa-AIOps" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all text-slate-400 hover:text-white"
            >
              <GithubIcon className="w-4.5 h-4.5" />
            </a>
            <a 
              href="https://linkedin.com/in/vipul-chobisa" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all text-slate-400 hover:text-white"
            >
              <LinkedinIcon className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Left: Info Details */}
            <div className="md:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400">
                <Award className="w-3.5 h-3.5" /> B.Tech (Computer Eng) & MBA (Operations) Hybrid
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Bridging Software Engineering & <br/>
                <span className="text-indigo-400">Industrial Logistics Operations</span>
              </h1>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                I specialize in automating physical workflows through Agentic AI models, real-time path tracking networks, and custom mobile systems. Also managing and authoring the **AskforWrite** digital brand ecosystem.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#blogs" 
                  className="px-6 h-12 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/25 transition-all"
                >
                  Browse Blogs Network <ChevronRight className="w-4 h-4" />
                </a>
                <a 
                  href="mailto:vipulchobisa@gmail.com"
                  className="px-6 h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <Mail className="w-4 h-4" /> Contact Email
                </a>
              </div>
            </div>

            {/* Right: GitHub Photograph Container */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border border-white/10 p-1 bg-white/5 shadow-2xl">
                <img 
                  src="https://github.com/VipulChobisa-AIOps.png" 
                  alt="Vipul Kumar Chobisa" 
                  className="w-full h-full object-cover rounded-[2.2rem]"
                  onError={(e) => {
                    e.currentTarget.src = 'https://avatars.githubusercontent.com/u/165218?v=4';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BLOGS SECTION (POSTCARD GRID VIEW) ───────────────────────────── */}
      <section id="blogs" className="py-20 border-t border-white/5 bg-[#070714]/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">AskforWrite Blogs Network</h2>
            <p className="text-xs text-slate-500 mt-1">Structured digital publications serving distinct educational, sports, and technical niches.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BLOGS.map((blog, idx) => (
              <div key={idx} className="blog-postcard">
                <div className={`h-28 ${blog.gradClass} p-4 flex flex-col justify-between`}>
                  <span className="px-2 py-0.5 rounded bg-black/35 backdrop-blur-sm text-[8px] font-bold text-white uppercase tracking-widest self-start">
                    {blog.niche}
                  </span>
                  <span className="text-[10px] font-mono text-white/70 self-end font-semibold">{blog.domain}</span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-white">{blog.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{blog.desc}</p>
                  </div>
                  <a 
                    href={blog.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="mt-6 w-full h-9 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 text-white font-bold text-xs flex items-center justify-center gap-1 transition-colors"
                  >
                    Visit Page <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REPOSITORIES SECTION (3-COLUMN GRID) ─────────────────────────── */}
      <section id="repos" className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">Open Source Engineering</h2>
              <p className="text-xs text-slate-500 mt-1">Structured tools, real-time trackers, and AI integration codes.</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex bg-white/5 border border-white/5 p-1 rounded-xl self-start">
              {[
                { id: 'all', label: 'All Repos' },
                { id: 'fullstack', label: 'Apps & Mobile' },
                { id: 'ai', label: 'AI & Data' },
                { id: 'ops', label: 'Operations' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                    activeTab === tab.id 
                      ? 'bg-indigo-600 text-white shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo, idx) => {
              const Icon = repo.icon;
              return (
                <a 
                  key={idx}
                  href={repo.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="portfolio-card flex flex-col justify-between h-[230px] group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-slate-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                        {repo.category}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors mb-2">
                      {repo.name}
                    </h3>
                    <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {repo.tech.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-semibold text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── OPERATIONS SECTION ───────────────────────────────────────────── */}
      <section id="operations" className="py-20 border-t border-white/5 bg-[#070714]/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="portfolio-card p-8 md:p-12">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              
              <div className="md:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold text-purple-400">
                  <PieChart className="w-3.5 h-3.5" /> Adani Wilmar Operations
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white">35-Warehouse Layout Planning & EOQ Simulations</h2>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  plotted 3D spatial models to eliminate spatial bottlenecks for 35 packaging warehouses during my management tenure at **Adani Wilmar**. Designed reorder safety-stock algorithms to eradicate inventory stockouts and optimized warehouse workflow efficiencies.
                </p>
                <div className="pt-2">
                  <a 
                    href="https://github.com/VipulChobisa-AIOps/Smart-Warehouse-Automation-System" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors"
                  >
                    View Layout Planning Code <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="md:col-span-5 bg-[#030308]/60 p-6 rounded-2xl border border-white/5 space-y-5">
                <h3 className="text-xs font-bold text-white uppercase tracking-widest">Simulated Optimization Metrics</h3>
                {[
                  { label: 'Throughput Delay Reduction', percent: 28, color: 'bg-indigo-500' },
                  { label: 'Floor Space Utilization', percent: 88, color: 'bg-purple-500' },
                  { label: 'Stockout Prevention Threshold', percent: 99, color: 'bg-emerald-500' }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-[9px] font-bold mb-1.5">
                      <span className="text-slate-400">{item.label}</span>
                      <span className="text-white">{item.percent}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER & CONNECT ─────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 bg-[#020206] py-16 mt-auto">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-xs">V</div>
            <span className="font-bold text-sm tracking-tight text-white">Vipul Kumar Chobisa</span>
          </div>
          
          <p className="text-slate-500 text-xs max-w-md mx-auto leading-relaxed">
            AI-Ops Specialist combining B.Tech Computer Engineering & MBA Operations foundations.
          </p>

          <div className="flex justify-center gap-4 pt-2">
            <a 
              href="mailto:vipulchobisa@gmail.com"
              className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/35 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
            <a 
              href="https://linkedin.com/in/vipul-chobisa"
              target="_blank" 
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/35 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
            >
              <LinkedinIcon className="w-4.5 h-4.5" />
            </a>
            <a 
              href="https://github.com/VipulChobisa-AIOps"
              target="_blank" 
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/35 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
            >
              <GithubIcon className="w-4.5 h-4.5" />
            </a>
            <a 
              href="https://youtube.com/@vipulrockstar"
              target="_blank" 
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/35 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
            >
              <YoutubeIcon className="w-4.5 h-4.5" />
            </a>
          </div>

          <div className="text-[10px] text-slate-600 font-semibold uppercase tracking-wider pt-6 border-t border-white/5">
            © {new Date().getFullYear()} Vipul Kumar Chobisa · All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
