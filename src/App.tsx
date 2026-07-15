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
const GithubIcon = ({ size = 14, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', maxWidth: '100%' }}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 14, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', maxWidth: '100%' }}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = ({ size = 14, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', maxWidth: '100%' }}>
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

export default function App() {
  return (
    <div className="min-h-screen bg-[#070a13] text-[#f1f5f9] flex flex-col font-sans">
      
      {/* ── HEADER NAVIGATION ────────────────────────────────────────────────── */}
      <header className="main-header">
        <div className="container-max header-inner">
          <div className="header-brand">
            <div className="header-logo">V</div>
            <span className="header-title-text">Vipul Kumar Chobisa</span>
            <span className="header-subtitle-text">| IT Operations & AI-Ops</span>
          </div>

          <nav className="nav-links">
            <a href="#about" className="nav-item">Summary</a>
            <a href="#competencies" className="nav-item">Competencies</a>
            <a href="#cases" className="nav-item">Case Studies</a>
            <a href="#credentials" className="nav-item">Credentials</a>
          </nav>

          <div className="header-socials">
            <a 
              href="https://github.com/VipulChobisa-AIOps" 
              target="_blank" 
              rel="noreferrer"
              className="social-icon-link"
            >
              <GithubIcon size={14} />
            </a>
            <a 
              href="https://www.linkedin.com/feed/" 
              target="_blank" 
              rel="noreferrer"
              className="social-icon-link"
            >
              <LinkedinIcon size={14} />
            </a>
          </div>
        </div>
      </header>

      {/* ── SECTION 1: HERO / AT A GLANCE (EQUAL STRUCTURE) ────────────────── */}
      <section id="about" className="hero-section">
        <div className="container-max">
          <div className="hero-grid">
            
            {/* Left Column: Elevator Pitch */}
            <div className="hero-content">
              <span className="badge-tag">Executive Profile</span>
              <h1 className="hero-title">
                IT Operations & AI-Ops Specialist
              </h1>
              <p className="hero-desc">
                Specializing in bridging computer engineering with supply chain logistics. I automate physical logistics workflows by deploying Agentic AI models, real-time path tracking systems, and spatial layout planning frameworks. 
              </p>
              
              <div className="cta-group">
                <a 
                  href="https://www.linkedin.com/feed/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <LinkedinIcon size={12} /> LinkedIn Profile
                </a>
                <a 
                  href="#credentials"
                  className="btn-secondary"
                >
                  <FileText size={12} /> Download Dossier
                </a>
                <a 
                  href="mailto:vipulchobisa@gmail.com"
                  className="btn-secondary"
                >
                  <Mail size={12} /> Contact Form
                </a>
              </div>
            </div>

            {/* Right Column: GitHub Avatar Profile Image (Strictly sized rounded) */}
            <div className="hero-avatar-area">
              <div className="profile-avatar-frame">
                <img 
                  src="https://github.com/VipulChobisa-AIOps.png" 
                  alt="Vipul Kumar Chobisa" 
                  className="profile-avatar-img"
                  onError={(e) => {
                    e.currentTarget.src = 'https://avatars.githubusercontent.com/u/165218?v=4';
                  }}
                />
              </div>
            </div>

          </div>

          {/* Quick Stats Grid */}
          <div className="stats-grid">
            {[
              { val: '35 Warehouses', label: 'Layouts Plotted', desc: 'Adani Wilmar operations' },
              { val: '22% Floor Space', label: 'Utilization Gain', desc: 'Throughput optimization' },
              { val: '10 GitHub Repos', label: 'Engineering Assets', desc: 'AI, Sync Systems & Mobile' },
              { val: '4 Live Portals', label: 'Ecosystem Blogs', desc: 'SGE & entity optimized' }
            ].map((stat, idx) => (
              <div key={idx} className="stat-item-box">
                <span className="stat-value">{stat.val}</span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-desc">{stat.desc}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 2: CORE COMPETENCIES & TOOL STACK ────────────────────── */}
      <section id="competencies" className="section-wrapper section-wrapper-bg">
        <div className="container-max">
          <div className="section-header">
            <h2 className="section-title">
              <Cpu size={16} /> Core Competencies & Tool Stack
            </h2>
            <p className="section-desc">Key framework methodologies and infrastructure tools deployed to drive business value.</p>
          </div>

          <div className="competency-row">
            
            {/* Frameworks */}
            <div className="competency-card">
              <h3 className="competency-card-title">
                <Award size={14} /> Frameworks & Methodologies
              </h3>
              <div className="competency-tag-container">
                {['Agile/Scrum', 'EOQ Inventory Planning', 'ROP Reorder Points', 'SGE Optimization', 'E-E-A-T Content Audit', 'SDLC Frameworks'].map((f, i) => (
                  <span key={i} className="competency-tag-item">{f}</span>
                ))}
              </div>
            </div>

            {/* Infrastructure & Tools */}
            <div className="competency-card">
              <h3 className="competency-card-title">
                <Database size={14} /> Infrastructure & Tools
              </h3>
              <div className="competency-tag-container">
                {['React', 'Node.js/Express', 'PostgreSQL', 'PostGIS Space Indexing', 'Firebase Auth/FCM', 'Git Version Control', 'Sketch Pro Flow modeling', 'Python/Pandas'].map((t, i) => (
                  <span key={i} className="competency-tag-item">{t}</span>
                ))}
              </div>
            </div>

            {/* Business Skills */}
            <div className="competency-card">
              <h3 className="competency-card-title">
                <TrendingUp size={14} /> Business Skills
              </h3>
              <div className="competency-tag-container">
                {['Budget Forecasting', 'Operations Management', 'Logistics Optimization', 'Semantic Search Graphing', 'Vendor Coordination', 'Risk Mitigation'].map((s, i) => (
                  <span key={i} className="competency-tag-item">{s}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: PROJECT CASE STUDIES (4 BLOG ASSETS INTEGRATED) ───── */}
      <section id="cases" className="section-wrapper">
        <div className="container-max">
          <div className="section-header">
            <h2 className="section-title">
              <Layers size={16} /> Project Case Studies & Assets
            </h2>
            <p className="section-desc">Practical governance, solution strategy, and performance metrics for core technical initiatives.</p>
          </div>

          <div className="cases-container">
            
            {/* Case Study 1: Adani Wilmar Operations */}
            <div className="case-card">
              <div className="case-card-header">
                <div>
                  <span className="case-meta-tag">Operations Case Study</span>
                  <h3 className="case-card-title">Adani Wilmar Layout Planning & EOQ Simulation</h3>
                </div>
                <a 
                  href="https://github.com/VipulChobisa-AIOps/Smart-Warehouse-Automation-System" 
                  target="_blank" 
                  rel="noreferrer"
                  className="case-btn-link"
                >
                  View Code <ExternalLink size={12} />
                </a>
              </div>

              <div className="case-content-grid">
                <div>
                  <h4 className="case-content-col-title">The Challenge</h4>
                  <p className="case-content-col-desc">
                    Legacy warehouse layouts at 35 packaging facilities created spatial bottlenecks, delaying shipment throughput and causing safety-stock reorder inaccuracies.
                  </p>
                </div>
                <div>
                  <h4 className="case-content-col-title">Strategy & Methodology</h4>
                  <p className="case-content-col-desc">
                    Engineered 3D spatial models in Google Sketch Pro and integrated reorder Safety-Stock/EOQ thresholds. Managed inventory flow patterns to streamline replenishment queues.
                  </p>
                </div>
                <div>
                  <h4 className="case-content-col-title">The Impact (Metrics)</h4>
                  <ul className="case-metrics-list">
                    <li className="case-metric-item">
                      <span className="metric-bullet" />
                      <span>22% Floor Space utilization gain</span>
                    </li>
                    <li className="case-metric-item">
                      <span className="metric-bullet" />
                      <span>28% Throughput delay reduction</span>
                    </li>
                    <li className="case-metric-item">
                      <span className="metric-bullet" />
                      <span>99% Stockout prevention threshold</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Case Study 2: Field Force Management */}
            <div className="case-card">
              <div className="case-card-header">
                <div>
                  <span className="case-meta-tag">Full-Stack Case Study</span>
                  <h3 className="case-card-title">Enterprise Field Force Management Sync</h3>
                </div>
                <a 
                  href="https://github.com/VipulChobisa-AIOps/field-force-management" 
                  target="_blank" 
                  rel="noreferrer"
                  className="case-btn-link"
                >
                  View Code <ExternalLink size={12} />
                </a>
              </div>

              <div className="case-content-grid">
                <div>
                  <h4 className="case-content-col-title">The Challenge</h4>
                  <p className="case-content-col-desc">
                    Managing and tracking field employees on-the-go suffered from geolocation packet loss during mobile connectivity drops, disrupting route audits.
                  </p>
                </div>
                <div>
                  <h4 className="case-content-col-title">Strategy & Methodology</h4>
                  <p className="case-content-col-desc">
                    Built React frontend + Node.js API with Postgres/PostGIS spatial mapping. Engineered local offline sync queue logic to store location packets locally until connectivity is restored.
                  </p>
                </div>
                <div>
                  <h4 className="case-content-col-title">The Impact (Metrics)</h4>
                  <ul className="case-metrics-list">
                    <li className="case-metric-item">
                      <span className="metric-bullet" />
                      <span>Zero data loss during dropouts</span>
                    </li>
                    <li className="case-metric-item">
                      <span className="metric-bullet" />
                      <span>Real-time geofence alerting</span>
                    </li>
                    <li className="case-metric-item">
                      <span className="metric-bullet" />
                      <span>Role-based portal authorization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Case Study 3: AskforWrite Blogs & SGE Schema */}
            <div className="case-card">
              <div className="case-card-header">
                <div>
                  <span className="case-meta-tag">Metadata & SEO Case Study</span>
                  <h3 className="case-card-title">AskforWrite Blogs Network & SGE Schema Graph</h3>
                </div>
                <a 
                  href="https://github.com/VipulChobisa-AIOps/answer-engine-data" 
                  target="_blank" 
                  rel="noreferrer"
                  className="case-btn-link"
                >
                  View Code <ExternalLink size={12} />
                </a>
              </div>

              <div className="case-content-grid">
                <div>
                  <h4 className="case-content-col-title">The Challenge</h4>
                  <p className="case-content-col-desc">
                    Search engine updates and AI-driven Search Generative Experience (SGE) threatened traffic metrics for our 4 independent blogs.
                  </p>
                </div>
                <div>
                  <h4 className="case-content-col-title">Strategy & Methodology</h4>
                  <p className="case-content-col-desc">
                    Designed structured JSON-LD entity graph hierarchies and aligned metadata schemas across `ask4write.com`, `askforwrite.com`, `askforwrite.in`, and `askforwrite.info`.
                  </p>
                </div>
                <div>
                  <h4 className="case-content-col-title">The Impact (Metrics)</h4>
                  <ul className="case-metrics-list">
                    <li className="case-metric-item">
                      <span className="metric-bullet" />
                      <span>Optimized SGE entity indexing</span>
                    </li>
                    <li className="case-metric-item">
                      <span className="metric-bullet" />
                      <span>E-E-A-T search guidelines compliance</span>
                    </li>
                    <li className="case-metric-item">
                      <span className="metric-bullet" />
                      <span>Structured RDF graphs deployed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Case Study 4: afwPixelAi - AI Image Studio & Capacitor Mobile App */}
            <div className="case-card">
              <div className="case-card-header">
                <div>
                  <span className="case-meta-tag">Capacitor & AI Mobile App</span>
                  <h3 className="case-card-title">afwPixelAi – AI Image Studio & Mobile Client</h3>
                </div>
                <a 
                  href="https://github.com/VipulChobisa-AIOps/afwpixelai" 
                  target="_blank" 
                  rel="noreferrer"
                  className="case-btn-link"
                >
                  View Code <ExternalLink size={12} />
                </a>
              </div>

              <div className="case-content-grid">
                <div>
                  <h4 className="case-content-col-title">The Challenge</h4>
                  <p className="case-content-col-desc">
                    Converting complex Gemini AI image generation models into a latency-optimized, secure mobile application with local caching, custom billing thresholds, and offline resilience.
                  </p>
                </div>
                <div>
                  <h4 className="case-content-col-title">Strategy & Methodology</h4>
                  <p className="case-content-col-desc">
                    Engineered a React + Vite + Capacitor mobile architecture with a structured model fallback cascade (Gemini 2.0/2.5/1.5). Configured offline asset storage, local filesystem persistence, and native sharing protocols.
                  </p>
                </div>
                <div>
                  <h4 className="case-content-col-title">The Impact (Metrics)</h4>
                  <ul className="case-metrics-list">
                    <li className="case-metric-item">
                      <span className="metric-bullet" />
                      <span>99.9% Android system uptime verified</span>
                    </li>
                    <li className="case-metric-item">
                      <span className="metric-bullet" />
                      <span>3x Image synthesis speedups via caching</span>
                    </li>
                    <li className="case-metric-item">
                      <span className="metric-bullet" />
                      <span>Local asset persistence implemented</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Case Study 5: ReelScript – Viral Shorts & Reels Script Engine */}
            <div className="case-card">
              <div className="case-card-header">
                <div>
                  <span className="case-meta-tag">AI Content Studio Case Study</span>
                  <h3 className="case-card-title">ReelScript – Viral Shorts & Reels Script Engine</h3>
                </div>
                <a 
                  href="https://github.com/VipulChobisa-AIOps/reelscript" 
                  target="_blank" 
                  rel="noreferrer"
                  className="case-btn-link"
                >
                  View Code <ExternalLink size={12} />
                </a>
              </div>

              <div className="case-content-grid">
                <div>
                  <h4 className="case-content-col-title">The Challenge</h4>
                  <p className="case-content-col-desc">
                    Converting multiple social video links and raw transcript inputs into structured, high-retention bilingual scripts (Hindi & English) for Reels/Shorts with zero API key dependencies.
                  </p>
                </div>
                <div>
                  <h4 className="case-content-col-title">Strategy & Methodology</h4>
                  <p className="case-content-col-desc">
                    Built an offline-first React dashboard using a deterministic keyword-hashing content parser. Configured structural output schemas, copy-to-clipboard actions, and batch text exporter hooks.
                  </p>
                </div>
                <div>
                  <h4 className="case-content-col-title">The Impact (Metrics)</h4>
                  <ul className="case-metrics-list">
                    <li className="case-metric-item">
                      <span className="metric-bullet" />
                      <span>100% Offline execution on client PWA</span>
                    </li>
                    <li className="case-metric-item">
                      <span className="metric-bullet" />
                      <span>3 distinct viral templates generated</span>
                    </li>
                    <li className="case-metric-item">
                      <span className="metric-bullet" />
                      <span>One-click .txt file batch downloading</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Blogs Grid (Postcard grid view - cleanly styled equal cards) */}
          <div className="section-header" style={{ marginTop: '56px', marginBottom: '24px' }}>
            <h3 className="section-title">Ecosystem Blog Properties</h3>
          </div>
          <div className="blogs-grid">
            {BLOGS.map((blog, idx) => (
              <div key={idx} className="blog-card">
                <div>
                  <div className="blog-card-top">
                    <span className="blog-niche-pill">{blog.niche}</span>
                    <span className="blog-domain-text">{blog.domain}</span>
                  </div>
                  <h4 className="blog-title-text">{blog.title}</h4>
                  <p className="blog-desc-text">{blog.desc}</p>
                </div>
                <a 
                  href={blog.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="blog-btn-link"
                >
                  Visit Blog <ExternalLink size={10} />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 4: CERTIFICATIONS & ENDORSEMENTS ────────────────────── */}
      <section id="credentials" className="section-wrapper section-wrapper-bg">
        <div className="container-max">
          <div className="section-header">
            <h2 className="section-title">
              <Award size={16} /> Credentials & Core Focus
            </h2>
            <p className="section-desc">Academic background, focus statement, and professional endorsements.</p>
          </div>

          <div className="credentials-row">
            
            {/* Left: Credentials list */}
            <div className="credentials-column">
              <span className="cred-title-section">Academic Credentials</span>
              <div className="cred-list">
                
                <div className="cred-item-box">
                  <div className="cred-icon-box">B</div>
                  <div>
                    <h4 className="cred-item-title">B.Tech in Computer Engineering</h4>
                    <p className="cred-item-desc">Engineering systems core, networking algorithms, and data modeling.</p>
                  </div>
                </div>
                
                <div className="cred-item-box">
                  <div className="cred-icon-box">M</div>
                  <div>
                    <h4 className="cred-item-title">MBA in Operations & Production Management</h4>
                    <p className="cred-item-desc">Industrial operations management, supply chain layout, and queue control.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Testimonial Quote */}
            <div className="credentials-column">
              <div>
                <span className="cred-title-section">Professional Philosophy</span>
                <blockquote className="philosophy-blockquote">
                  "I don't just study technology — I build it, deploy it, and use it to solve real physical operational problems at scale. Blending computer engineering with production management is about closing the operational gap."
                </blockquote>
              </div>
              <div>
                <span className="philosophy-author">Vipul Kumar Chobisa</span>
                <span className="philosophy-sub">AI-Ops Architect</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="main-footer">
        <div className="container-max footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">V</div>
            <span className="footer-brand-name">Vipul Kumar Chobisa</span>
          </div>
          
          <p className="footer-desc">
            AI-Ops Specialist · B.Tech (Computer Engineering) & MBA (Operations & Production Management)
          </p>

          <div className="social-links-row">
            <a 
              href="mailto:vipulchobisa@gmail.com"
              className="social-icon-link"
            >
              <Mail size={14} />
            </a>
            <a 
              href="https://www.linkedin.com/feed/"
              target="_blank" 
              rel="noreferrer"
              className="social-icon-link"
            >
              <LinkedinIcon size={14} />
            </a>
            <a 
              href="https://github.com/VipulChobisa-AIOps"
              target="_blank" 
              rel="noreferrer"
              className="social-icon-link"
            >
              <GithubIcon size={14} />
            </a>
            <a 
              href="https://youtube.com/@vipulrockstar"
              target="_blank" 
              rel="noreferrer"
              className="social-icon-link"
            >
              <YoutubeIcon size={14} />
            </a>
          </div>

          <div className="copyright-text">
            © {new Date().getFullYear()} Vipul Kumar Chobisa · All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
