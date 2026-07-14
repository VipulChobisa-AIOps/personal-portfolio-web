import { useState } from 'react';
import { 
  Globe,
  Mail, 
  Award, 
  Layers, 
  Code,
  TrendingUp, 
  Cpu, 
  Navigation, 
  ExternalLink,
  ChevronRight,
  Database,
  Smartphone,
  PieChart
} from 'lucide-react';

// Custom inline SVG icons for social logos to guarantee 100% build compatibility and exact sizing
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
    desc: 'Strategic management guides, university academic updates, and general knowledge updates.'
  },
  {
    title: 'AskforWrite Entertainment',
    domain: 'askforwrite.com',
    url: 'https://askforwrite.com/about-us/',
    niche: 'OTT, Films & Celebrity',
    desc: 'Trending streaming platform content releases, film reviews, Bollywood/Hollywood updates, and television awards.'
  },
  {
    title: 'AskforWrite Sports',
    domain: 'askforwrite.in',
    url: 'https://askforwrite.in/about-us-askforwrite-sports/',
    niche: 'Cricket & Match Analysis',
    desc: 'In-depth cricket updates, domestic selections analysis, IPL stats, and live match discussions.'
  },
  {
    title: 'AskforWrite Technology',
    domain: 'askforwrite.info',
    url: 'https://askforwrite.info/home-askforwrite-technology/about-us/',
    niche: 'AI, Blockchain & IoT',
    desc: 'Technical research articles covering blockchain architectures, AI models (DeepSeek, ChatGPT), and internet security.'
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
    <div className="min-h-screen bg-[#090d16] text-[#f8fafc] flex flex-col font-sans">
      
      {/* ── HEADER ────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[#1e293b] bg-[#090d16]/95 backdrop-blur-sm">
        <div className="container-max h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xs tracking-tight text-white uppercase">Vipul Kumar Chobisa</span>
            <span className="text-[10px] text-slate-500 font-semibold uppercase">| AI-Ops Specialist</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#blogs" className="hover:text-white transition-colors">Blogs</a>
            <a href="#repos" className="hover:text-white transition-colors">Repos</a>
            <a href="#operations" className="hover:text-white transition-colors">Operations</a>
          </nav>

          <div className="flex items-center gap-2">
            <a 
              href="https://github.com/VipulChobisa-AIOps" 
              target="_blank" 
              rel="noreferrer"
              className="p-1.5 rounded-md border border-[#1e293b] hover:bg-slate-800 transition-colors text-slate-400 hover:text-white"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://linkedin.com/in/vipul-chobisa" 
              target="_blank" 
              rel="noreferrer"
              className="p-1.5 rounded-md border border-[#1e293b] hover:bg-slate-800 transition-colors text-slate-400 hover:text-white"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO / BIO SECTION (EQUAL 2-COLUMNS) ─────────────────────────── */}
      <section id="about" className="py-14 border-b border-[#1e293b]">
        <div className="container-max">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Professional Summary */}
            <div className="md:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[9px] font-bold text-blue-400 uppercase tracking-wider">
                <Award className="w-3 h-3" /> Credentials
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Software Engineering & Supply Chain Operations
              </h1>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                B.Tech in Computer Engineering and MBA in Operations & Production Management. I automate logistics workflows utilizing Agentic AI models, real-time sync systems, and optimized warehouse planning. Creator of the AskforWrite digital ecosystem.
              </p>
              
              <div className="flex gap-3 pt-1">
                <a 
                  href="#blogs" 
                  className="px-4 h-9 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1 transition-colors"
                >
                  Blogs Ecosystem <ChevronRight className="w-3 h-3" />
                </a>
                <a 
                  href="mailto:vipulchobisa@gmail.com"
                  className="px-4 h-9 rounded-lg border border-[#1e293b] hover:bg-slate-800 text-slate-300 font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1 transition-colors"
                >
                  <Mail className="w-3 h-3" /> Contact Email
                </a>
              </div>
            </div>

            {/* Right: GitHub Avatar Profile Image */}
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="relative w-28 h-28 rounded-full overflow-hidden border border-[#1e293b] p-0.5 bg-slate-900 shadow-lg">
                <img 
                  src="https://github.com/VipulChobisa-AIOps.png" 
                  alt="Vipul Kumar Chobisa" 
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.currentTarget.src = 'https://avatars.githubusercontent.com/u/165218?v=4';
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BLOGS SECTION (4 EQUAL CARDS) ────────────────────────────────── */}
      <section id="blogs" className="py-14 border-b border-[#1e293b] bg-slate-950/20">
        <div className="container-max">
          <div className="mb-8">
            <h2 className="section-title">
              <Globe className="w-4 h-4 text-blue-500" /> Digital Publications Network
            </h2>
            <p className="section-desc">Four independent content networks managed under the AskforWrite brand.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BLOGS.map((blog, idx) => (
              <div key={idx} className="corp-card flex flex-col justify-between h-48">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[8px] font-extrabold text-blue-400 uppercase tracking-widest bg-blue-500/5 px-2 py-0.5 rounded border border-blue-500/10">
                      {blog.niche}
                    </span>
                    <span className="text-[9px] font-mono text-slate-500 font-semibold">{blog.domain}</span>
                  </div>
                  <h3 className="text-xs font-bold text-white mb-2">{blog.title}</h3>
                  <p className="text-slate-400 text-[10px] leading-relaxed line-clamp-3">{blog.desc}</p>
                </div>
                <a 
                  href={blog.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full h-7 rounded-md border border-[#1e293b] bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-[9px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  Visit Blog <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGINEERING SECTION (6 EQUAL CARDS) ──────────────────────────── */}
      <section id="repos" className="py-14 border-b border-[#1e293b]">
        <div className="container-max">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="section-title">
                <Code className="w-4 h-4 text-indigo-500" /> Open Source Repositories
              </h2>
              <p className="section-desc">Production codebases, layout planners, and data schema networks.</p>
            </div>

            {/* Filters */}
            <div className="flex bg-[#0f172a] border border-[#1e293b] p-0.5 rounded-lg">
              {[
                { id: 'all', label: 'All' },
                { id: 'fullstack', label: 'Apps & Mobile' },
                { id: 'ai', label: 'AI & Data' },
                { id: 'ops', label: 'Operations' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-blue-600 text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRepos.map((repo, idx) => {
              const Icon = repo.icon;
              return (
                <a 
                  key={idx}
                  href={repo.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="corp-card flex flex-col justify-between h-[210px] hover:border-blue-500/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-1.5 rounded-lg bg-slate-800 text-slate-300">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                        {repo.category}
                      </span>
                    </div>
                    <h3 className="text-xs font-bold text-white mb-2">{repo.name}</h3>
                    <p className="text-slate-400 text-[10px] line-clamp-3 leading-relaxed">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {repo.tech.map((t, i) => (
                      <span key={i} className="px-1.5 py-0.5 rounded bg-slate-800 text-[8px] font-semibold text-slate-400">
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

      {/* ── OPERATIONS CASE STUDY (2 EQUAL COLUMNS) ──────────────────────── */}
      <section id="operations" className="py-14 bg-slate-950/20">
        <div className="container-max">
          <div className="mb-8">
            <h2 className="section-title">
              <PieChart className="w-4 h-4 text-purple-500" /> Operations Case Study
            </h2>
            <p className="section-desc">Layout planning and throughput optimization details.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Left: Summary block */}
            <div className="corp-card flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-[8px] font-bold text-purple-400 uppercase tracking-wider mb-4">
                  Adani Wilmar Internship
                </span>
                <h3 className="text-sm font-bold text-white mb-3">35-Warehouse Layout Optimization</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Engineered layout planning models for 35 packaging warehouses during my management tenure at Adani Wilmar. Simulated 3D spatial models in Sketch Pro and integrated reorder Safety-Stock/EOQ thresholds to eliminate spatial bottlenecks and prevent inventory stockouts.
                </p>
              </div>

              <a 
                href="https://github.com/VipulChobisa-AIOps/Smart-Warehouse-Automation-System" 
                target="_blank" 
                rel="noreferrer"
                className="mt-6 w-full h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                View Operations Code <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Right: Metrics block */}
            <div className="corp-card space-y-4">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Simulated Performance Gains</h3>
              
              {[
                { label: 'Throughput Delay Reduction', percent: 28, color: 'bg-blue-600' },
                { label: 'Floor Space Utilization', percent: 88, color: 'bg-purple-600' },
                { label: 'Stockout Prevention Threshold', percent: 99, color: 'bg-emerald-600' }
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-slate-900 border border-[#1e293b]">
                  <div className="flex justify-between text-[10px] font-bold mb-1.5">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-white">{item.percent}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER & CONNECT ─────────────────────────────────────────────── */}
      <footer className="border-t border-[#1e293b] bg-slate-950 py-12 mt-auto">
        <div className="container-max text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center font-bold text-white text-[10px]">V</div>
            <span className="font-bold text-xs tracking-tight text-white uppercase">Vipul Kumar Chobisa</span>
          </div>
          
          <p className="text-slate-500 text-[10px] max-w-sm mx-auto">
            AI-Ops Specialist · B.Tech (Computer Engineering) & MBA (Operations & Production Management)
          </p>

          <div className="flex justify-center gap-3 pt-2">
            <a 
              href="mailto:vipulchobisa@gmail.com"
              className="p-2 rounded-lg border border-[#1e293b] bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://linkedin.com/in/vipul-chobisa"
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-lg border border-[#1e293b] bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://github.com/VipulChobisa-AIOps"
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-lg border border-[#1e293b] bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://youtube.com/@vipulrockstar"
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-lg border border-[#1e293b] bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="text-[9px] text-slate-600 font-semibold uppercase tracking-wider pt-4 border-t border-[#1e293b]">
            © {new Date().getFullYear()} Vipul Kumar Chobisa · All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
