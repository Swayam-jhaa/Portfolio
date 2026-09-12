/* ==========================================================================
   PORTFOLIO DATA MODEL — 100% Authentic Swayam Jha Systems Data
   ========================================================================== */

const PORTFOLIO_DATA = {
  profile: {
    name: 'Swayam Jha',
    title: 'Backend & AI Systems Engineer',
    eyebrow: 'SYSTEMS ARCHITECT & AI ENGINEER',
    email: 'swayamjhaofficial@gmail.com',
    github: 'https://github.com/Swayam-jhaa',
    linkedin: 'https://www.linkedin.com/in/swayam-jha-520ba9312/',
    location: 'India',
    education: 'B.Tech in Electrical Engineering (EE - VLSI)',
    flagshipLive: 'https://techpulse-intel.vercel.app',
    status: 'Available for Backend & AI Systems Engineering Roles',
    pitch: 'Engineering high-throughput APIs, asynchronous worker architectures, and production retrieval pipelines — built from the inside out with offensive security discipline.'
  },

  heroWords: ['PORTFOLIO', 'SWAYAM', 'SYSTEMS', 'BACKEND'],

  nav: [
    { num: '01', label: 'SYSTEMS', href: '#systems' },
    { num: '02', label: 'ARCHITECTURE', href: '#architecture' },
    { num: '03', label: 'STACK', href: '#stack' },
    { num: '04', label: 'SIH & RESEARCH', href: '#research' },
    { num: '05', label: 'CONTACT', href: '#contact' }
  ],

  systems: [
    {
      id: 'techpulse-intelligence',
      name: 'TechPulse Intelligence',
      badge: 'Flagship Production System',
      badgeType: 'flagship',
      tagline: 'Autonomous Cybersecurity & AI Intelligence Pipeline',
      description: 'An automated end-to-end intelligence pipeline that ingests raw CVE disclosures, EPSS exploit likelihood signals, AI research papers, and developer ecosystem shifts into daily, synthesized briefings for technical decision makers.',
      highlights: [
        'Multi-source ingestion pipeline with automated deduplication & scoring',
        'AI distillation & LLM evaluation engine generating structured briefings',
        'Production Next.js deployment on Vercel with automated GitHub Actions CI/CD'
      ],
      stack: ['TypeScript', 'Next.js', 'AI Synthesis', 'GitHub Actions', 'Vercel'],
      github: 'https://github.com/Swayam-jhaa/TechPulse-Intelligence',
      live: 'https://techpulse-intel.vercel.app',
      featured: true
    },
    {
      id: 'sentinel-scan',
      name: 'SENTINEL-SCAN',
      badge: 'Distributed Systems',
      badgeType: 'standard',
      tagline: 'Asynchronous Attack Surface Management Framework',
      description: 'Continuous attack-surface reconnaissance engine built on an asynchronous producer-consumer queue pattern. Performs non-blocking socket probing, service banner grabbing, and port discovery without thread starvation or socket exhaustion.',
      highlights: [
        'AsyncIO concurrency pipeline with millisecond socket timeout throttling',
        'Producer-consumer worker pool for continuous asset discovery',
        'Containerized with Docker for predictable execution across varied networks'
      ],
      stack: ['Python', 'AsyncIO', 'FastAPI', 'Docker', 'Socket Probing'],
      github: 'https://github.com/Swayam-jhaa/SENTINEL-SCAN',
      featured: true
    },
    {
      id: 'apre',
      name: 'APRE (Agentic Pentest Reporting)',
      badge: 'Multi-Agent AI',
      badgeType: 'standard',
      tagline: 'Autonomous Multi-Agent Security Audit Engine',
      description: 'An autonomous multi-agent reporting workflow that ingests raw vulnerability scanner outputs (Nmap, Burp Suite, Zap) and decomposes findings across specialized agents (Parser, Severity Evaluator, Remediation Architect) to generate audit-ready reports.',
      highlights: [
        'Cooperative multi-agent architecture with strict schema adherence',
        'Automated CVSS mapping and contextual mitigation drafting',
        'Deterministic verification loops preventing LLM hallucinations'
      ],
      stack: ['Python', 'LLM Agents', 'Multi-Agent Workflows', 'OWASP Standards'],
      github: 'https://github.com/Swayam-jhaa/Agentic-Pentest-Reporting-Engine',
      featured: true
    },
    {
      id: 'predicta',
      name: 'Predicta',
      badge: 'SIH 2026 Finalist (PS170)',
      badgeType: 'gold',
      tagline: 'Aerospace Hardware Anomaly Detection & Drift Forecast',
      description: 'High-reliability screening pipeline for aerospace electronic components undergoing burn-in stress testing. Built for the Smart India Hackathon 2026 (Problem Statement PS170), modeling parametric drift curves to detect anomalous decay before failure.',
      highlights: [
        'High-precision time-series drift forecasting and anomaly detection',
        'FastAPI mathematical backend utilizing NumPy and SciPy statistical models',
        'Interactive telemetry visualization dashboard for hardware operators'
      ],
      stack: ['FastAPI', 'Python', 'NumPy', 'SciPy', 'Next.js'],
      github: 'https://github.com/Swayam-jhaa/Predicta',
      featured: true
    },
    {
      id: 'cameracanvas',
      name: 'CameraCanvas',
      badge: 'Computer Vision',
      badgeType: 'standard',
      tagline: 'Gesture-Controlled Real-Time 60fps Whiteboard',
      description: 'An interactive computer-vision whiteboard enabling gesture-based real-time canvas drawing via camera tracking. Runs MediaPipe hand-landmark models purely client-side inside requestAnimationFrame loops with zero server video transmission.',
      highlights: [
        'Sub-16ms frame-processing budget ensuring continuous 60fps interaction',
        'Bézier stroke curve interpolation based on fingertip tracking',
        'Privacy-preserving local browser architecture'
      ],
      stack: ['TypeScript', 'React 19', 'Next.js', 'MediaPipe', 'Canvas API'],
      github: 'https://github.com/Swayam-jhaa/CameraCanvas',
      featured: false
    },
    {
      id: 'decognito',
      name: 'DeCognito',
      badge: 'Threat Intelligence',
      badgeType: 'standard',
      tagline: 'Modular OSINT Aggregation & Footprint Platform',
      description: 'Distributed OSINT engine coordinating parallel external reconnaissance tasks via Celery and Redis to profile external target infrastructure, certificate history, and network associations.',
      highlights: [
        'Asynchronous background worker orchestration using Celery and Redis',
        'Resilient rate-limiting and error-handling layer for third-party APIs',
        'Graph-ready footprint data structuring'
      ],
      stack: ['Python', 'FastAPI', 'Celery', 'Redis', 'Streamlit'],
      github: 'https://github.com/Swayam-jhaa/DeCognito',
      featured: false
    }
  ],

  stackCategories: [
    {
      title: 'Systems & Languages',
      icon: 'code',
      items: [
        { name: 'Python', desc: 'AsyncIO, FastAPI, backend microservices, AI & concurrency' },
        { name: 'TypeScript', desc: 'Next.js 14/15, strict type contracts, typed API layers' },
        { name: 'C++', desc: 'Systems programming, memory safety & low-level performance' },
        { name: 'Bash / POSIX', desc: 'OS automation, container scripting, CI/CD runners' },
        { name: 'SQL', desc: 'Complex relational queries, indexing & schema migrations' }
      ]
    },
    {
      title: 'Distributed Backends',
      icon: 'cpu',
      items: [
        { name: 'FastAPI', desc: 'Asynchronous REST APIs, Pydantic validation, OpenAPI specs' },
        { name: 'PostgreSQL & SQLAlchemy', desc: 'ACID transactional persistence, migrations, pooling' },
        { name: 'Redis & Celery', desc: 'Distributed task queues, caching, rate limiting, pub/sub' },
        { name: 'Producer-Consumer Queues', desc: 'Worker pools, backpressure control, zero socket stalls' },
        { name: 'WebSockets & WebRTC', desc: 'Real-time bidirectional streams and frame ingestion' }
      ]
    },
    {
      title: 'AI & Retrieval Systems',
      icon: 'sparkles',
      items: [
        { name: 'Production RAG', desc: 'Semantic chunking, vector indexing, contextual retrieval' },
        { name: 'Vector Search & Embeddings', desc: 'High-dimensional embeddings, similarity metrics' },
        { name: 'Cross-Encoder Reranking', desc: 'Reciprocal Rank Fusion, precision relevance tuning' },
        { name: 'Multi-Agent Workflows', desc: 'Role decomposition, execution graphs, verification loops' },
        { name: 'LLM Evaluation', desc: 'Structured outputs, hallucination filters, benchmark metrics' }
      ]
    },
    {
      title: 'Security Foundation (Moat)',
      icon: 'shield',
      items: [
        { name: 'Attack Surface Management', desc: 'Recon automation, banner grabbing, port discovery' },
        { name: 'Application Security (OWASP)', desc: 'Mitigating injection, broken auth, IDOR, SSRF' },
        { name: 'Zero-Trust Architecture', desc: 'Cryptographic token validation, least-privilege scoping' },
        { name: 'Assessment Tooling', desc: 'Burp Suite, Nmap, Wireshark, Metasploit, Linux OS' }
      ]
    }
  ]
};
