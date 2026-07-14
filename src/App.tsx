import { 
  Mail, 
  Award, 
  Layers, 
  TrendingUp, 
  Cpu, 
  ExternalLink,
  Database,
  FileText
} from 'lucide-react';

// Custom inline SVG icons for social logos to guarantee 100% build compatibility and exact sizing
const GithubIcon = ({ className = 'w-3 h-3' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = 'w-3 h-3' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = ({ className = 'w-3 h-3' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" fill="currentColor" />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#070a13] text-[#f1f5f9] flex flex-col font-sans">
      
      {/* ── HEADER ────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[#1e293b] bg-[#070a13]/95 backdrop-blur-sm">
        <div className="container-max h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xs tracking-tight text-white uppercase">Vipul Kumar Chobisa</span>
            <span className="text-[10px] text-slate-500 font-semibold uppercase">| IT Operations & AI-Ops</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">Summary</a>
            <a href="#competencies" className="hover:text-white transition-colors">Competencies</a>
            <a href="#cases" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#credentials" className="hover:text-white transition-colors">Credentials</a>
          </nav>

          <div className="flex items-center gap-2">
            <a 
              href="https://github.com/VipulChobisa-AIOps" 
              target="_blank" 
              rel="noreferrer"
              className="p-1 rounded-md border border-[#1e293b] hover:bg-slate-800 transition-colors text-slate-400 hover:text-white"
            >
              <GithubIcon className="w-3 h-3" />
            </a>
            <a 
              href="https://www.linkedin.com/feed/" 
              target="_blank" 
              rel="noreferrer"
              className="p-1 rounded-md border border-[#1e293b] hover:bg-slate-800 transition-colors text-slate-400 hover:text-white"
            >
              <LinkedinIcon className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      {/* ── SECTION 1: HERO / AT A GLANCE ────────────────────────────────── */}
      <section id="about" className="py-14 border-b border-[#1e293b]">
        <div className="container-max">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Elevator Pitch */}
            <div className="md:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[9px] font-bold text-blue-400 uppercase tracking-wider">
                Executive Profile
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                IT Operations & AI-Ops Specialist
              </h1>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                Specializing in bridging computer engineering with supply chain logistics. I automate physical logistics workflows by deploying Agentic AI models, real-time path tracking systems, and spatial layout planning frameworks. 
              </p>
              
              {/* Call to Actions */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <a 
                  href="https://www.linkedin.com/feed/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-3.5 h-8.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-[9px] uppercase tracking-wider flex items-center justify-center gap-1 transition-colors"
                >
                  <LinkedinIcon className="w-2.5 h-2.5" /> LinkedIn Profile
                </a>
                <a 
                  href="#credentials"
                  className="px-3.5 h-8.5 rounded-lg border border-[#1e293b] hover:bg-slate-800 text-slate-300 font-bold text-[9px] uppercase tracking-wider flex items-center justify-center gap-1 transition-colors"
                >
                  <FileText className="w-2.5 h-2.5" /> Download Dossier
                </a>
                <a 
                  href="mailto:vipulchobisa@gmail.com"
                  className="px-3.5 h-8.5 rounded-lg border border-[#1e293b] hover:bg-slate-800 text-slate-300 font-bold text-[9px] uppercase tracking-wider flex items-center justify-center gap-1 transition-colors"
                >
                  <Mail className="w-2.5 h-2.5" /> Contact Form
                </a>
              </div>
            </div>

            {/* Right: GitHub Avatar Profile Image */}
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden border border-[#1e293b] p-0.5 bg-slate-900 shadow-md">
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

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-[#1e293b]">
            {[
              { val: '35 Warehouses', label: 'Layouts Plotted', desc: 'Adani Wilmar operations' },
              { val: '22% Floor Space', label: 'Utilization Gain', desc: 'Throughput optimization' },
              { val: '8 GitHub Repos', label: 'Engineering Assets', desc: 'AI, Sync Systems & Mobile' },
              { val: '4 Live Portals', label: 'Ecosystem Blogs', desc: 'SGE & entity optimized' }
            ].map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-[#1e293b]/60">
                <span className="text-sm font-extrabold text-white block">{stat.val}</span>
                <span className="text-[9px] font-bold text-blue-400 block uppercase tracking-wider mt-1">{stat.label}</span>
                <span className="text-[8px] text-slate-500 block">{stat.desc}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 2: CORE COMPETENCIES & TOOL STACK ────────────────────── */}
      <section id="competencies" className="py-14 border-b border-[#1e293b] bg-slate-950/20">
        <div className="container-max">
          <div className="mb-8">
            <h2 className="section-title">
              <Cpu className="w-4 h-4 text-blue-500" /> Core Competencies & Tool Stack
            </h2>
            <p className="section-desc">Key framework methodologies and infrastructure tools deployed to drive business value.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Frameworks */}
            <div className="corp-card space-y-4">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-blue-500" /> Frameworks & Methodologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Agile/Scrum', 'EOQ Inventory Planning', 'ROP Reorder Points', 'SGE Optimization', 'E-E-A-T Content Audit', 'SDLC Frameworks'].map((f, i) => (
                  <span key={i} className="competency-tag">{f}</span>
                ))}
              </div>
            </div>

            {/* Infrastructure & Tools */}
            <div className="corp-card space-y-4">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-purple-500" /> Infrastructure & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js/Express', 'PostgreSQL', 'PostGIS Space Indexing', 'Firebase Auth/FCM', 'Git Version Control', 'Sketch Pro Flow modeling', 'Python/Pandas'].map((t, i) => (
                  <span key={i} className="competency-tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Business Skills */}
            <div className="corp-card space-y-4">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-500" /> Business Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Budget Forecasting', 'Operations Management', 'Logistics Optimization', 'Semantic Search Graphing', 'Vendor Coordination', 'Risk Mitigation'].map((s, i) => (
                  <span key={i} className="competency-tag">{s}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: PROJECT CASE STUDIES ──────────────────────────────── */}
      <section id="cases" className="py-14 border-b border-[#1e293b]">
        <div className="container-max">
          <div className="mb-8">
            <h2 className="section-title">
              <Layers className="w-4 h-4 text-purple-500" /> Project Case Studies
            </h2>
            <p className="section-desc">Practical governance, solution strategy, and performance metrics for core technical initiatives.</p>
          </div>

          <div className="space-y-6">
            
            {/* Case Study 1: Adani Wilmar Operations */}
            <div className="corp-card">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#1e293b] gap-2">
                <div>
                  <span className="text-[8px] font-bold text-purple-400 uppercase tracking-wider bg-purple-500/10 px-2 py-0.5 rounded">Operations Case Study</span>
                  <h3 className="text-sm font-bold text-white mt-1.5">Adani Wilmar Layout Planning & EOQ Simulation</h3>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href="https://github.com/VipulChobisa-AIOps/Smart-Warehouse-Automation-System" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-3 h-7 rounded border border-[#1e293b] hover:bg-slate-800 text-slate-300 font-bold text-[9px] uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    View Code <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-4 text-xs">
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-[9px] mb-1.5 text-slate-400">The Challenge</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Legacy warehouse layouts at 35 packaging facilities created spatial bottlenecks, delaying shipment throughput and causing safety-stock reorder inaccuracies.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-[9px] mb-1.5 text-slate-400">Strategy & Methodology</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Engineered 3D spatial models in Google Sketch Pro and integrated reorder Safety-Stock/EOQ thresholds. Managed inventory flow patterns to streamline replenishment queues.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-[9px] mb-1.5 text-slate-400">The Impact (Metrics)</h4>
                  <ul className="space-y-1.5 text-slate-300 font-semibold">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>22% Floor Space utilization gain</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>28% Throughput delay reduction</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>99% Stockout prevention threshold</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Case Study 2: Field Force Management */}
            <div className="corp-card">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#1e293b] gap-2">
                <div>
                  <span className="text-[8px] font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-2 py-0.5 rounded">Full-Stack Case Study</span>
                  <h3 className="text-sm font-bold text-white mt-1.5">Enterprise Field Force Management Sync</h3>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href="https://github.com/VipulChobisa-AIOps/field-force-management" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-3 h-7 rounded border border-[#1e293b] hover:bg-slate-800 text-slate-300 font-bold text-[9px] uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    View Code <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-4 text-xs">
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-[9px] mb-1.5 text-slate-400">The Challenge</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Managing and tracking field employees on-the-go suffered from geolocation packet loss during mobile connectivity drops, disrupting route audits.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-[9px] mb-1.5 text-slate-400">Strategy & Methodology</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Built React frontend + Node.js API with Postgres/PostGIS spatial mapping. Engineered local offline sync queue logic to store location packets locally until connectivity is restored.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-[9px] mb-1.5 text-slate-400">The Impact (Metrics)</h4>
                  <ul className="space-y-1.5 text-slate-300 font-semibold">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>Zero data loss during dropouts</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>Real-time geofence alerting</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>Role-based portal authorization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Case Study 3: AskforWrite SGE Schema */}
            <div className="corp-card">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#1e293b] gap-2">
                <div>
                  <span className="text-[8px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded">Metadata & SEO Case Study</span>
                  <h3 className="text-sm font-bold text-white mt-1.5">AskforWrite Blogs Network & SGE Schema Graph</h3>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href="https://github.com/VipulChobisa-AIOps/answer-engine-data" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-3 h-7 rounded border border-[#1e293b] hover:bg-slate-800 text-slate-300 font-bold text-[9px] uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    View Code <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-4 text-xs">
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-[9px] mb-1.5 text-slate-400">The Challenge</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Search engine updates and AI-driven Search Generative Experience (SGE) threatened traffic metrics for our 4 independent blogs.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-[9px] mb-1.5 text-slate-400">Strategy & Methodology</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Designed structured JSON-LD entity graph hierarchies and aligned metadata schemas across `ask4write.com`, `askforwrite.com`, `askforwrite.in`, and `askforwrite.info`.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-[9px] mb-1.5 text-slate-400">The Impact (Metrics)</h4>
                  <ul className="space-y-1.5 text-slate-300 font-semibold">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Optimized SGE entity indexing</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>E-E-A-T search guidelines compliance</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Structured RDF graphs deployed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 4: CERTIFICATIONS & ENDORSEMENTS ────────────────────── */}
      <section id="credentials" className="py-14 bg-slate-950/20">
        <div className="container-max">
          <div className="mb-8">
            <h2 className="section-title">
              <Award className="w-4 h-4 text-blue-500" /> Credentials & Core Focus
            </h2>
            <p className="section-desc">Academic background, focus statement, and professional endorsements.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Credentials */}
            <div className="corp-card space-y-4">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Academic Credentials</h3>
              
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-slate-900 border border-[#1e293b] flex items-start gap-3">
                  <div className="p-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mt-0.5">B</div>
                  <div>
                    <h4 className="text-xs font-bold text-white">B.Tech in Computer Engineering</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">Engineering systems core, networking algorithms, and data modeling.</p>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-slate-900 border border-[#1e293b] flex items-start gap-3">
                  <div className="p-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold mt-0.5">M</div>
                  <div>
                    <h4 className="text-xs font-bold text-white">MBA in Operations & Production Management</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">Industrial operations management, supply chain layout, and queue control.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials / Endorsement */}
            <div className="corp-card flex flex-col justify-between">
              <div>
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Professional Philosophy</h3>
                <blockquote className="text-xs text-slate-400 italic leading-relaxed border-l-2 border-blue-500/50 pl-3">
                  "I don't just study technology — I build it, deploy it, and use it to solve real physical operational problems at scale. Blending computer engineering with production management is about closing the operational gap."
                </blockquote>
              </div>
              <div className="text-[10px] font-bold text-white uppercase tracking-wider mt-4">
                Vipul Kumar Chobisa <span className="text-slate-500 block text-[9px] font-semibold mt-0.5">AI-Ops Architect</span>
              </div>
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

          <div className="flex justify-center gap-3 pt-2">
            <a 
              href="mailto:vipulchobisa@gmail.com"
              className="p-1.5 rounded-md border border-[#1e293b] bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://www.linkedin.com/feed/"
              target="_blank" 
              rel="noreferrer"
              className="p-1.5 rounded-md border border-[#1e293b] bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://github.com/VipulChobisa-AIOps"
              target="_blank" 
              rel="noreferrer"
              className="p-1.5 rounded-md border border-[#1e293b] bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://youtube.com/@vipulrockstar"
              target="_blank" 
              rel="noreferrer"
              className="p-1.5 rounded-md border border-[#1e293b] bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
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
