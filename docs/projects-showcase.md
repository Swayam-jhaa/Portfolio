# Projects & Systems Showcase

Detailed catalogue of Swayam Jha's engineering projects, architectural patterns, tech stacks, and live deployments.

---

## 🌟 Flagship System

### 1. TechPulse Intelligence
- **Repository**: [https://github.com/Swayam-jhaa/TechPulse-Intelligence](https://github.com/Swayam-jhaa/TechPulse-Intelligence)
- **Live Platform**: [https://techpulse-intel.vercel.app](https://techpulse-intel.vercel.app)
- **Primary Domain**: AI Intelligence Pipelines & Real-time Automated Briefings
- **Core Tech Stack**: `TypeScript`, `Next.js 14/15`, `React`, `Tailwind CSS`, `AI Synthesis Engine`, `GitHub Actions`, `Vercel`
- **Architecture Overview**:
  An autonomous intelligence pipeline that continuously ingests security advisories, CVE databases, exploit likelihood signals (EPSS), top AI research publications, and trending developer ecosystem shifts. Ingested raw signals are filtered, deduplicated, and passed through an AI-assisted synthesis pipeline to produce structured, daily actionable intelligence briefings for technical decision makers.
- **Key Engineering Highlights**:
  - Automated continuous data extraction and normalization routines.
  - Multi-source intelligence synthesis using LLM evaluation and distillation.
  - Responsive production dashboard deployed on Vercel with zero-friction readability.
  - Native automated CI/CD pipeline and automated updates.

---

## ⚙️ Backend, Distributed Systems & Security Automation

### 2. SENTINEL-SCAN
- **Repository**: [https://github.com/Swayam-jhaa/SENTINEL-SCAN](https://github.com/Swayam-jhaa/SENTINEL-SCAN)
- **Primary Domain**: Attack Surface Management (ASM) & Continuous Reconnaissance
- **Core Tech Stack**: `Python`, `AsyncIO`, `FastAPI`, `Docker`, `Socket`, `Nmap Integration`
- **Architecture Overview**:
  An asynchronous, high-throughput attack-surface discovery and vulnerability reconnaissance framework. Built on a producer-consumer queue pattern to perform concurrent network discovery, banner grabbing, service fingerprinting, and port scanning without thread starvation or network socket exhaustion.
- **Key Engineering Highlights**:
  - Concurrency-first asynchronous network I/O with granular socket timeout controls.
  - Granular banner grabbing and service identification pipeline.
  - Modular scan stages allowing pluggable probes for HTTP, SSL/TLS, and custom protocols.
  - Containerized with Docker for deterministic execution across varied network topologies.

---

### 3. Agentic Pentest Reporting Engine (APRE)
- **Repository**: [https://github.com/Swayam-jhaa/Agentic-Pentest-Reporting-Engine](https://github.com/Swayam-jhaa/Agentic-Pentest-Reporting-Engine)
- **Primary Domain**: Autonomous AI Multi-Agent Workflows & Security Audit Automation
- **Core Tech Stack**: `Python`, `LLM Orchestration`, `Multi-Agent System`, `OWASP Standards`, `Markdown/PDF Generation`
- **Architecture Overview**:
  An autonomous multi-agent reporting engine designed to eliminate the bottleneck of manual pentest documentation. Ingests raw scanner outputs (from Nmap, Burp Suite, Zap, Nikto, etc.), decomposes findings into specialized agent personas (Parser Agent, Severity Evaluator, Remediation Architect, Executive Summarizer), and synthesizes enterprise-grade, audit-ready penetration testing reports.
- **Key Engineering Highlights**:
  - Role-based multi-agent cooperative workflow with state validation.
  - Automated CVSS score mapping and contextual remediation recommendation.
  - Removes hallucinations via schema enforcement and deterministic verification steps.

---

### 4. Predicta
- **Repository**: [https://github.com/Swayam-jhaa/Predicta](https://github.com/Swayam-jhaa/Predicta)
- **Primary Domain**: AI Anomaly Detection & Industrial Stress-Test Screening (SIH 2026 Finalist, PS170)
- **Core Tech Stack**: `FastAPI`, `Python`, `NumPy`, `SciPy`, `Next.js`, `Machine Learning`
- **Architecture Overview**:
  Developed for the Smart India Hackathon (SIH 2026, Problem Statement PS170). Designed for aerospace electronics and mission-critical hardware components undergoing high-stress burn-in testing. The system models parametric drift over time and flags subtle anomalous decay long before catastrophic physical failure occurs.
- **Key Engineering Highlights**:
  - High-precision time-series anomaly detection algorithms running on FastAPI backends.
  - Real-time parametric drift forecasting using statistical modeling.
  - Interactive operator frontend rendering telemetry curves and early warning thresholds.

---

### 5. DeCognito
- **Repository**: [https://github.com/Swayam-jhaa/DeCognito](https://github.com/Swayam-jhaa/DeCognito)
- **Primary Domain**: OSINT Aggregation & Digital Footprint Intelligence
- **Core Tech Stack**: `Python`, `FastAPI`, `Celery`, `Redis`, `Streamlit`
- **Architecture Overview**:
  A modular OSINT (Open Source Intelligence) aggregation engine designed for investigative footprint profiling. Coordinates multiple distributed data gathering tasks asynchronously via Celery workers backed by Redis, querying DNS records, WHOIS data, public certificates, leaked credentials, and network associations.
- **Key Engineering Highlights**:
  - Asynchronous background worker orchestration for multi-stage external queries.
  - Resilient rate-limiting and error-handling layer to navigate third-party API restrictions.
  - Graph-ready data structuring for identity unmasking and entity association.

---

### 6. Recon-Lite
- **Repository**: [https://github.com/Swayam-jhaa/Recon-Lite](https://github.com/Swayam-jhaa/Recon-Lite)
- **Primary Domain**: Fast Concurrent CLI Reconnaissance
- **Core Tech Stack**: `Python CLI`, `DNS Resolver`, `HTTP Client`, `Multi-Threading`
- **Architecture Overview**:
  A lightweight, concurrent CLI reconnaissance utility created for rapid footprinting during initial target assessment. Chains passive DNS queries and active HTTP probing to quickly build target asset maps without the overhead of massive monolithic scanning frameworks.

---

### 7. Password-Checker
- **Repository**: [https://github.com/Swayam-jhaa/Password-Checker](https://github.com/Swayam-jhaa/Password-Checker)
- **Primary Domain**: Cryptographic Entropy & Credential Robustness
- **Core Tech Stack**: `Python`, `Regex`, `Shannon Entropy`, `Cryptographic Algorithms`
- **Architecture Overview**:
  Algorithmic credential evaluator calculating Shannon entropy, character distribution variances, pattern repetitions (l33t speak, keyboard walks, dictionary substrings), and provides mathematical metrics on brute-force resilience.

---

## 💻 Full-Stack Platforms, Vision & Creative Engineering

### 8. CameraCanvas
- **Repository**: [https://github.com/Swayam-jhaa/CameraCanvas](https://github.com/Swayam-jhaa/CameraCanvas)
- **Primary Domain**: Real-Time Computer Vision & Interactive Canvas Drawing
- **Core Tech Stack**: `TypeScript`, `Next.js`, `React 19`, `MediaPipe`, `WebRTC`, `HTML5 Canvas API`
- **Architecture Overview**:
  A zero-latency interactive computer-vision whiteboard that turns webcam video feeds into a gesture-controlled drawing surface. Leverages Google MediaPipe hand landmark tracking inside requestAnimationFrame loops to track fingertips and recognize draw/erase/clear gestures in real time.
- **Key Engineering Highlights**:
  - Sub-16ms frame-processing budget ensuring continuous 60fps canvas interaction.
  - Smooth Bezier curve stroke interpolation based on fingertip coordinates.
  - Fully client-side processing ensuring camera privacy without server-side video transmission.

---

### 9. AayuSense
- **Repository**: [https://github.com/Swayam-jhaa/AayuSense](https://github.com/Swayam-jhaa/AayuSense)
- **Primary Domain**: Digital Healthcare & AI Diagnostic Intelligence
- **Core Tech Stack**: `TypeScript`, `Next.js`, `Clerk Authentication`, `Digital Health Diagnostics`, `Tailwind CSS`
- **Architecture Overview**:
  An AI-powered holistic healthcare and AYUSH wellness diagnostic assistant with electronic tongue (E-Tongue) pattern analysis, symptom correlation, and wellness roadmaps. Integrated with secure patient session management via Clerk.

---

### 10. StitchIT
- **Repository**: [https://github.com/Swayam-jhaa/StitchIT](https://github.com/Swayam-jhaa/StitchIT)
- **Primary Domain**: E-Commerce & Tailoring Workflow Management Platform
- **Core Tech Stack**: `TypeScript`, `Next.js`, `PostgreSQL`, `Prisma ORM`, `Clerk Auth`, `Tailwind CSS`
- **Architecture Overview**:
  Enterprise bespoke tailoring management system featuring complex relational database models, order state machines, measurement recording, and role-based access control (RBAC) separating customers, tailors, and workshop admins.

---

### 11. Dev-Lab
- **Repository**: [https://github.com/Swayam-jhaa/Dev-Lab](https://github.com/Swayam-jhaa/Dev-Lab)
- **Primary Domain**: Monorepo of Autonomous AI Tools & Mini-Applications
- **Core Tech Stack**: `TypeScript`, `Next.js`, `AI Agents`, `Vercel Deployments`
- **Architecture Overview**:
  Personal engineering sandbox and testbed for experimental micro-services, interactive prototypes, cutting-edge AI integrations, and developer utilities.
