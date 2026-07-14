import { useState } from 'react';
import { 
  Globe, 
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
    desc: 'Articles on the latest education updates, strategic management methodologies, and general knowledge updates.',
    gradClass: 'gradient-bg-1',
    accentColor: '#35b7bd'
  },
  {
    title: 'AskforWrite Entertainment',
    domain: 'askforwrite.com',
    url: 'https://askforwrite.com/about-us/',
    niche: 'OTT, Films & Celebrity',
    desc: 'Trending streaming platform content releases, major television updates, film awards, and celebrity reviews.',
    gradClass: 'gradient-bg-2',
    accentColor: '#a855f7'
  },
  {
    title: 'AskforWrite Sports',
    domain: 'askforwrite.in',
    url: 'https://askforwrite.in/about-us-askforwrite-sports/',
    niche: 'Cricket & Match Analysis',
    desc: 'Hot cricket news domestic selections, IPL updates, live scorecard breakdowns, and international matches analysis.',
    gradClass: 'gradient-bg-3',
    accentColor: '#f97316'
  },
  {
    title: 'AskforWrite Technology',
    domain: 'askforwrite.info',
    url: 'https://askforwrite.info/home-askforwrite-technology/about-us/',
    niche: 'AI, Blockchain & IoT',
    desc: 'Expert technical insights covering blockchain layers, AI models (DeepSeek, ChatGPT), and internet security research.',
    gradClass: 'gradient-bg-4',
    accentColor: '#3b82f6'
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
    <div className="min-h-screen bg-[#030308] text-[#f1f5f9] flex items-center justify-center p-4 md:p-8">
      {/* ── CENTRAL BENTO CONTAINER (WEB VIEW LAYOUT) ────────────────────────── */}
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Main Grid Layout */}
        <div className="bento-grid">
          
          {/* 👤 LEFT COLUMN: PROFILE CARD (Spans 4 columns) */}
          <div className="bento-card col-span-4 flex flex-col justify-between min-h-[500px]">
            <div>
              {/* Header profile image fetched from GitHub */}
              <div className="relative w-28 h-28 rounded-3xl overflow-hidden mb-6 border border-white/10 p-1 bg-white/5 shadow-xl">
                <img 
                  src="https://github.com/VipulChobisa-AIOps.png" 
                  alt="Vipul Kumar Chobisa" 
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    // Fallback avatar in case of request limits
                    e.currentTarget.src = 'https://avatars.githubusercontent.com/u/165218?v=4';
                  }}
                />
                <span className="absolute bottom-2 right-2 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#050510] rounded-full" />
              </div>

              {/* Identity & Credentials */}
              <h1 className="text-2xl font-extrabold tracking-tight text-white mb-1">Vipul Kumar Chobisa</h1>
              <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">AI-Ops Specialist & Developer</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Award className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span>B.Tech in Computer Engineering</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Layers className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>MBA in Operations & Production Management</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                I sit at the intersection of software development and physical supply chain operations, deploying agentic workflows, custom mobile applications, and SGE-optimized search schema architectures.
              </p>
            </div>

            {/* Social Connection Rows */}
            <div className="space-y-3 pt-6 border-t border-white/5">
              <a 
                href="mailto:vipulchobisa@gmail.com"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/35 hover:bg-white/10 transition-all text-xs font-semibold text-slate-300"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400" /> vipulchobisa@gmail.com
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <div className="grid grid-cols-3 gap-2">
                <a 
                  href="https://linkedin.com/in/vipul-chobisa"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/35 hover:bg-white/10 transition-all text-slate-400 hover:text-white"
                >
                  <LinkedinIcon className="w-4.5 h-4.5 mb-1" />
                  <span className="text-[9px] font-bold uppercase tracking-wider">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/VipulChobisa-AIOps"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/35 hover:bg-white/10 transition-all text-slate-400 hover:text-white"
                >
                  <GithubIcon className="w-4.5 h-4.5 mb-1" />
                  <span className="text-[9px] font-bold uppercase tracking-wider">GitHub</span>
                </a>
                <a 
                  href="https://youtube.com/@vipulrockstar"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/35 hover:bg-white/10 transition-all text-slate-400 hover:text-white"
                >
                  <YoutubeIcon className="w-4.5 h-4.5 mb-1" />
                  <span className="text-[9px] font-bold uppercase tracking-wider">YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* 🌐 RIGHT COLUMN: BLOG ASSETS CARD (Spans 8 columns) */}
          <div className="bento-card col-span-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-extrabold text-white">AskforWrite Digital Blogs</h2>
                  <p className="text-xs text-slate-500 mt-1">Four verified content portals, each targeting a precise niche domain.</p>
                </div>
                <div className="px-3 h-7 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <Globe className="w-3.5 h-3.5" /> 4 Verified Portals
                </div>
              </div>

              {/* The Postcard Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {BLOGS.map((blog, idx) => (
                  <div key={idx} className="postcard">
                    {/* Visual Card Header */}
                    <div className={`h-24 ${blog.gradClass} p-4 flex flex-col justify-between`}>
                      <span className="px-2 py-0.5 rounded bg-black/30 backdrop-blur-sm text-[8px] font-bold text-white uppercase tracking-widest self-start">
                        {blog.niche}
                      </span>
                      <span className="text-[10px] font-mono text-white/70 self-end font-semibold">{blog.domain}</span>
                    </div>
                    {/* Content Body */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white mb-2">{blog.title}</h4>
                        <p className="text-slate-400 text-[11px] leading-relaxed mb-4">{blog.desc}</p>
                      </div>
                      <a 
                        href={blog.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="h-8 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 text-white font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1 transition-all"
                      >
                        Visit Blog <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 💻 SECOND ROW: ENGINEERING REPOSITORIES (Spans 8 columns) */}
          <div className="bento-card col-span-8 flex flex-col justify-between min-h-[480px]">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <div>
                  <h2 className="text-xl font-extrabold text-white">Engineering Repositories</h2>
                  <p className="text-xs text-slate-500 mt-1">Open-source applications, tools, and semantic schemas.</p>
                </div>

                {/* Filters */}
                <div className="flex bg-white/5 border border-white/5 p-1 rounded-xl">
                  {[
                    { id: 'all', label: 'All' },
                    { id: 'fullstack', label: 'Apps & Mobile' },
                    { id: 'ai', label: 'AI & Data' },
                    { id: 'ops', label: 'Operations' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
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

              {/* Repos Card Deck */}
              <div className="grid sm:grid-cols-3 gap-4">
                {filteredRepos.map((repo, idx) => {
                  const IconComp = repo.icon;
                  return (
                    <a 
                      key={idx}
                      href={repo.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="group flex flex-col justify-between p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-indigo-500/35 hover:bg-white/[0.03] transition-all h-48"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-slate-300">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                            {repo.category}
                          </span>
                        </div>

                        <h4 className="text-xs font-bold text-white group-hover:text-indigo-400 transition-colors mb-2">
                          {repo.name}
                        </h4>
                        
                        <p className="text-slate-400 text-[10px] line-clamp-3 leading-relaxed">
                          {repo.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-3">
                        {repo.tech.slice(0, 2).map((t, i) => (
                          <span key={i} className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-[8px] font-semibold text-slate-400">
                            {t}
                          </span>
                        ))}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 📊 SECOND ROW: OPERATIONS CASE STUDY (Spans 4 columns) */}
          <div className="bento-card col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <PieChart className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-white">Operations Case Study</h3>
                  <p className="text-[10px] text-slate-500">Adani Wilmar Layouts</p>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Engineered layout planning models for **35 warehouses** using Google Sketch Pro, automating safety-stock reorder thresholds.
              </p>

              {/* Progress bars */}
              <div className="space-y-4 mb-6">
                {[
                  { label: 'Throughput Delay Reduction', percent: 28, color: 'bg-indigo-500' },
                  { label: 'Floor Space Utilization', percent: 88, color: 'bg-purple-500' },
                  { label: 'Stockout Prevention Threshold', percent: 99, color: 'bg-emerald-500' }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-[9px] font-bold mb-1">
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

            <a 
              href="https://github.com/VipulChobisa-AIOps/Smart-Warehouse-Automation-System" 
              target="_blank" 
              rel="noreferrer"
              className="w-full h-10 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
            >
              View Warehouse Code <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
