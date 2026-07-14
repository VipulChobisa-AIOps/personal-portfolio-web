import { useState } from 'react';
import { 
  Globe, 
  Mail, 
  Award, 
  Code, 
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
    desc: 'The educational cornerstone of the AskforWrite network. Publishes long-form academic research, university guides, competitive exam updates, and strategic management articles to increase awareness.',
    color: '#35b7bd',
    accentClass: 'border-cyan-500/30 hover:border-cyan-400',
    btnBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20'
  },
  {
    title: 'AskforWrite Entertainment',
    domain: 'askforwrite.com',
    url: 'https://askforwrite.com/about-us/',
    niche: 'Entertainment & OTT',
    desc: 'India-focused trending entertainment portal. Covers celebrity updates, film reviews, Bollywood and Hollywood highlights, upcoming OTT releases, and major television award announcements.',
    color: '#a855f7',
    accentClass: 'border-purple-500/30 hover:border-purple-400',
    btnBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/20'
  },
  {
    title: 'AskforWrite Sports',
    domain: 'askforwrite.in',
    url: 'https://askforwrite.in/about-us-askforwrite-sports/',
    niche: 'Cricket & Tournaments',
    desc: 'A trending sports publication offering deep-dive cricket news, matches analysis, domestic selection alerts, IPL squads updates, and detailed profiles on professional cricketers.',
    color: '#f97316',
    accentClass: 'border-orange-500/30 hover:border-orange-400',
    btnBg: 'bg-orange-500/10 text-orange-400 border-orange-500/20 hover:bg-orange-500/20'
  },
  {
    title: 'AskforWrite Technology',
    domain: 'askforwrite.info',
    url: 'https://askforwrite.info/home-askforwrite-technology/about-us/',
    niche: 'AI, Blockchain & IoT',
    desc: 'Research-backed technical portal delivering expert articles on emerging fields: Artificial Intelligence, IoT architectures, cybersecurity frameworks, and next-gen semantic web structures.',
    color: '#3b82f6',
    accentClass: 'border-blue-500/30 hover:border-blue-400',
    btnBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20'
  }
];

// Data structure for the 6 GitHub Repositories
const REPOSITORIES = [
  {
    name: 'field-force-management',
    description: 'Enterprise Field Force Management System featuring check-in/out logs, background path tracking, geofence trigger points, offline queueing, and an interactive admin monitoring panel.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Firebase Auth', 'Tailwind CSS'],
    category: 'Full Stack',
    icon: Navigation,
    github: 'https://github.com/VipulChobisa-AIOps/field-force-management'
  },
  {
    name: 'afwpixelai-marketing-suite',
    description: 'AI-powered grow marketing portal with 3 core workspaces: an enthusiastic Sales Assistant chatbot (afwpixelai boat), bulk custom Ad Generator (CSV/XLS/VCF parsing), and multi-niche Blog Generator.',
    tech: ['React', 'TypeScript', 'Gemini AI API', 'Vite', 'XLSX parser'],
    category: 'AI / LLM',
    icon: Cpu,
    github: 'https://github.com/VipulChobisa-AIOps/afwpixelai-marketing-suite'
  },
  {
    name: 'Smart-Warehouse-Automation-System',
    description: 'Layout planning algorithms and stock threshold modeling frameworks designed for 35 Adani Wilmar warehouses to reduce spatial bottlenecks and automate replenishment triggers.',
    tech: ['Python', 'Sketch Pro API', 'ROP/EOQ modeling', 'Data Analytics'],
    category: 'Operations',
    icon: Layers,
    github: 'https://github.com/VipulChobisa-AIOps/Smart-Warehouse-Automation-System'
  },
  {
    name: 'stockP',
    description: 'Financial trend metrics tracker and portfolio asset allocator executing live pipeline updates for key indicators (RSI, MACD) and transactions safety logging.',
    tech: ['Python', 'Pandas', 'NumPy', 'Firebase Firestore', 'Recharts'],
    category: 'Data Science',
    icon: TrendingUp,
    github: 'https://github.com/VipulChobisa-AIOps/stockP'
  },
  {
    name: 'askforwrite-digital',
    description: 'Offline-first mobile content management assistant allowing real-time publishing alerts, offline sync queues, and database logging directly from mobile viewports.',
    tech: ['React Native', 'TypeScript', 'AsyncStorage', 'FCM Push Notifications'],
    category: 'Mobile',
    icon: Smartphone,
    github: 'https://github.com/VipulChobisa-AIOps/askforwrite-digital'
  },
  {
    name: 'answer-engine-data',
    description: 'Semantic schemas, structured JSON-LD entity templates, and knowledge graphs compiled to optimize search results visibility for SGE indexers and E-E-A-T trust signals.',
    tech: ['JSON-LD', 'RDF', 'Schema.org standards', 'Semantic Web'],
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
    <div className="min-h-screen bg-[#050510] text-[#e2e8f0]">
      {/* ── HEADER NAVIGATION ────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050510]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-600/20">
              V
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight text-white block">Vipul Kumar Chobisa</span>
              <span className="text-[10px] text-indigo-400 font-semibold uppercase tracking-wider block">AI-Ops Specialist</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#blogs" className="hover:text-white transition-colors">Digital Ecosystem</a>
            <a href="#repos" className="hover:text-white transition-colors">Engineering</a>
            <a href="#operations" className="hover:text-white transition-colors">Operations</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/VipulChobisa-AIOps" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all"
            >
              <GithubIcon className="w-4 h-4 text-slate-300" />
            </a>
            <a 
              href="https://linkedin.com/in/vipul-chobisa" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-slate-300" />
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO BANNER ──────────────────────────────────────────────────────── */}
      <section id="about" className="relative pt-24 pb-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 h-7 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400 mb-6">
              <Award className="w-3.5 h-3.5" /> B.Tech + MBA (Operations) Hybrid Professional
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Bridging Software Engineering & <br className="hidden md:block"/>
              <span className="gradient-text">Physical Operations</span> with AI
            </h1>
            
            <p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed">
              I specialize in deploying Agentic AI, smart mobile networks, and mathematical models to automate industrial workflows. Author and publisher of the **AskforWrite** digital properties, managing robust web architectures and semantic data networks.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#blogs" 
                className="px-6 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/25 transition-all hover:-translate-y-0.5"
              >
                <Globe className="w-4 h-4" /> Explore Digital Assets
              </a>
              <a 
                href="#repos" 
                className="px-6 h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-sm flex items-center gap-2 transition-all hover:-translate-y-0.5"
              >
                <Code className="w-4 h-4" /> View GitHub Projects
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Radial Background */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      </section>

      {/* ── STATS COUNTER GRID ──────────────────────────────────────────────── */}
      <section className="py-8 border-y border-white/5 bg-[#090b1c]/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Live Blogs Network', val: '4 Portals', desc: 'SGE & Entity Structured' },
              { label: 'Operations Footprint', val: '35 Warehouses', desc: 'Adani Wilmar Layouts' },
              { label: 'Engineering Assets', val: '8 GitHub Repos', desc: 'AI, Sync Systems & Mobile' },
              { label: 'Experience Level', val: '10 Years', desc: 'Hybrid Technology & Ops' }
            ].map((s, idx) => (
              <div key={idx} className="border-l border-white/5 pl-6 first:border-none">
                <span className="text-2xl font-extrabold text-white block">{s.val}</span>
                <span className="text-xs font-bold text-slate-400 block mt-1 uppercase tracking-wider">{s.label}</span>
                <span className="text-[10px] text-slate-500 block">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ASKFORWRITE BLOG NETWORK ────────────────────────────────────────── */}
      <section id="blogs" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white mb-4">AskforWrite Digital Ecosystem</h2>
            <p className="text-slate-400 text-sm">
              A robust network of four independently branded publications targeting distinct niche audiences, optimized with structured schema markup for search engines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {BLOGS.map((blog, idx) => (
              <div key={idx} className={`glass-panel p-6 border ${blog.accentClass}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span 
                      className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-widest"
                      style={{ backgroundColor: `${blog.color}15`, color: blog.color }}
                    >
                      {blog.niche}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-3">{blog.title}</h3>
                  </div>
                  <span className="text-xs font-mono text-indigo-400/80">{blog.domain}</span>
                </div>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {blog.desc}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mt-1.5" />
                    <span className="text-xs text-slate-400 font-semibold">Live & Verified</span>
                  </div>
                  <a 
                    href={blog.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`px-4 h-9 rounded-lg border text-xs font-bold flex items-center gap-1.5 transition-all ${blog.btnBg}`}
                  >
                    View Portal <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGINEERING REPOSITORIES ────────────────────────────────────────── */}
      <section id="repos" className="py-20 border-t border-white/5 bg-[#07091a]/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-2">Featured Repositories</h2>
              <p className="text-slate-400 text-sm">
                Production-grade applications showcasing systems design, mobile sync, and AI pipelines.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex bg-white/5 border border-white/10 p-1 rounded-xl">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'fullstack', label: 'Apps & Sync' },
                { id: 'ai', label: 'AI & Data' },
                { id: 'ops', label: 'Industrial Ops' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
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

          <div className="grid md:grid-cols-3 gap-6">
            {filteredRepos.map((repo, idx) => {
              const IconComp = repo.icon;
              return (
                <div key={idx} className="glass-panel p-6 flex flex-col justify-between h-[310px]">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        {repo.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 hover:text-indigo-400 transition-colors">
                      <a href={repo.github} target="_blank" rel="noreferrer">
                        {repo.name}
                      </a>
                    </h3>
                    
                    <p className="text-slate-400 text-xs line-clamp-4 leading-relaxed">
                      {repo.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {repo.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-semibold text-slate-300">
                          {t}
                        </span>
                      ))}
                      {repo.tech.length > 3 && (
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-semibold text-slate-500">
                          +{repo.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    <a 
                      href={repo.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group"
                    >
                      Check GitHub <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ADANI WILMAR CASE STUDY ─────────────────────────────────────────── */}
      <section id="operations" className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-panel p-8 md:p-12 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 h-7 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold text-purple-400 mb-6">
                  <Award className="w-3.5 h-3.5" /> Operations Optimization Case Study
                </span>
                
                <h2 className="text-3xl font-extrabold text-white mb-6">
                  35-Warehouse Layout Planning & Inventory Control
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  During my management internship at **Adani Wilmar**, I designed layout optimization models for 35 packaging warehouses. Using Google Sketch Pro and advanced warehouse flow simulation, I plotted 3D spatial models that reduced throughput bottlenecks and streamlined replenishment queues.
                </p>

                <div className="space-y-4">
                  {[
                    { label: 'ROP/EOQ Automation', desc: 'Reorder points and economic order thresholds automated to eradicate inventory stockouts.' },
                    { label: 'Spatial Efficiency Gain', desc: 'Layout optimization model proved to increase spatial floor storage usage by 22%.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-[10px] text-indigo-400 font-bold mt-0.5">
                        ✓
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">{item.label}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#090b1d]/80 rounded-2xl border border-white/5 p-6 md:p-8">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-indigo-400" /> Operational Metrics Simulation
                </h3>

                <div className="space-y-6">
                  {[
                    { label: 'Throughput Delay Reduction', percent: 28, color: '#5369ff' },
                    { label: 'Floor Space Utilization', percent: 88, color: '#a855f7' },
                    { label: 'Stockout Prevention Threshold', percent: 99, color: '#10b981' }
                  ].map((metric, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span className="text-slate-400">{metric.label}</span>
                        <span className="text-white">{metric.percent}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ 
                            width: `${metric.percent}%`,
                            backgroundColor: metric.color,
                            boxShadow: `0 0 10px ${metric.color}50` 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                  <a 
                    href="https://github.com/VipulChobisa-AIOps/Smart-Warehouse-Automation-System" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 h-10 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors"
                  >
                    View Layout Planning Code <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER & CONNECT ────────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 bg-[#03030b] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white">
                  V
                </div>
                <span className="font-bold text-base text-white tracking-tight">Vipul Kumar Chobisa</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed max-w-sm mb-6">
                Bridging software engineering, real-time sync systems, and physical logistics operations using advanced computing and AI.
              </p>
              <div className="flex gap-3">
                <a 
                  href="mailto:vipulchobisa@gmail.com"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com/in/vipul-chobisa"
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://github.com/VipulChobisa-AIOps"
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://youtube.com/@vipulrockstar"
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">AskforWrite Blogs</h4>
              <ul className="space-y-2 text-xs font-semibold text-slate-500">
                <li><a href="https://ask4write.com/about-us/" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">ask4write.com (Education)</a></li>
                <li><a href="https://askforwrite.com/about-us/" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">askforwrite.com (Entertainment)</a></li>
                <li><a href="https://askforwrite.in/about-us-askforwrite-sports/" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">askforwrite.in (Sports)</a></li>
                <li><a href="https://askforwrite.info/home-askforwrite-technology/about-us/" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">askforwrite.info (Tech)</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Repositories</h4>
              <ul className="space-y-2 text-xs font-semibold text-slate-500">
                <li><a href="https://github.com/VipulChobisa-AIOps/field-force-management" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">field-force-management</a></li>
                <li><a href="https://github.com/VipulChobisa-AIOps/afwpixelai-marketing-suite" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">afwpixelai-marketing-suite</a></li>
                <li><a href="https://github.com/VipulChobisa-AIOps/Smart-Warehouse-Automation-System" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">Smart-Warehouse</a></li>
                <li><a href="https://github.com/VipulChobisa-AIOps/stockP" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">stockP Optimizer</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 font-semibold uppercase tracking-wider">
            <span>© {new Date().getFullYear()} Vipul Kumar Chobisa. All rights reserved.</span>
            <span>AI-Ops Specialist Portfolio</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
