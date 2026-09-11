/* ============================================
   DATA — Portfolio Content Model
   Update content here. UI renders from this.
   ============================================ */

const PORTFOLIO = {

  identity: {
    name: 'Swayam Jha',
    role: 'Security Researcher · Web Pentester · B.Tech EE VLSI',
    tagline: 'Breaking applications to understand them better.',
    email: 'swayamjhaofficial@gmail.com',
  },

  navigation: [
    { id: 'hero',     label: 'Home' },
    { id: 'about',    label: 'About' },
    { id: 'skills',   label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'connect',  label: 'Connect' },
  ],

  hero: {
    headline: 'Swayam Jha',
    subline: 'Security Researcher · Web Pentester',
    degree: 'B.Tech EE VLSI',
    supporting: 'Breaking applications to understand them better.',
    cta_primary: { text: 'View Projects', target: '#projects' },
    cta_secondary: { text: 'GitHub', target: 'https://github.com/Swayam-jhaa', external: true },
    stats: [
      { value: '15+', label: 'Projects' },
      { value: '11+',  label: 'Security Tools Built' },
      { value: '∞',  label: 'Bugs To Find' },
    ],
  },

  about: {
    headline: 'About',
    paragraphs: [
      'I focus on web security and offensive testing — finding vulnerabilities in applications, understanding how they break, and building tools that make the process sharper.',
      'My work sits at the intersection of security research and practical engineering. I write recon automation, build scanning pipelines, and document my findings through detailed writeups.',
      'Currently deepening my knowledge through hands-on practice on TryHackMe and PortSwigger Web Security Academy, with a focus on authentication attacks, API security, and server-side exploitation.',
    ],
    focus_areas: [
      'Web Application Security',
      'Offensive Testing',
      'Recon Automation',
      'Vulnerability Research',
    ],
  },

  skills: {
    headline: 'Skills & Tools',
    groups: [
      {
        category: 'Security',
        icon: '🛡️',
        items: ['Burp Suite', 'Nmap', 'Wireshark', 'Metasploit', 'OWASP', 'Nikto', 'SQLMap'],
      },
      {
        category: 'Languages',
        icon: '⟨/⟩',
        items: ['Python', 'JavaScript', 'C++', 'Bash', 'SQL'],
      },
      {
        category: 'Stack & Tools',
        icon: '⚙️',
        items: ['Node.js', 'MySQL', 'MongoDB', 'Git', 'Docker', 'VS Code'],
      },
      {
        category: 'Platforms',
        icon: '◈',
        items: ['Linux', 'Kali Linux', 'TryHackMe', 'PortSwigger Academy', 'GitHub'],
      },
    ],
  },

  projects: [
    {
      name: 'SENTINEL-SCAN',
      shortDesc: 'Multi-threaded port scanner with banner grabbing capabilities.',
      longDesc: 'Designed for rapid network reconnaissance and initial footprinting during engagements. Identifies open ports, grabs service banners, and outputs structured scan results for further analysis.',
      purpose: 'Network Reconnaissance',
      techStack: ['Python', 'Threading', 'Socket', 'Nmap Integration'],
      status: 'Active',
      category: 'Offensive Tooling',
      links: { github: 'https://github.com/Swayam-jhaa/SENTINEL-SCAN' },
      featured: true,
      displayOrder: 1,
      image: 'assets/images/sentinel-scan.webp',
    },
    {
      name: 'Recon-Lite',
      shortDesc: 'Automated subdomain enumeration and reconnaissance pipeline.',
      longDesc: 'Streamlines the discovery phase by chaining multiple passive and active techniques. Designed as a lightweight alternative to heavy recon frameworks, focused on speed and clarity.',
      purpose: 'Recon Automation',
      techStack: ['Python', 'DNS', 'HTTP', 'Threading'],
      status: 'Active',
      category: 'Reconnaissance',
      links: { github: 'https://github.com/Swayam-jhaa/Recon-Lite' },
      featured: true,
      displayOrder: 2,
      image: 'assets/images/recon-lite.webp',
    },
    {
      name: 'DeCognito',
      shortDesc: 'Security research tooling for obfuscation analysis.',
      longDesc: 'Focused on obfuscation analysis and identity unmasking. Built to aid in deep-dive investigative scenarios where understanding hidden patterns in data is critical.',
      purpose: 'Security Research',
      techStack: ['Python', 'Analysis', 'Pattern Matching'],
      status: 'Active',
      category: 'Research Tooling',
      links: { github: 'https://github.com/Swayam-jhaa/DeCognito' },
      featured: true,
      displayOrder: 3,
      image: 'assets/images/decognito.webp',
    },
    {
      name: 'Password-Checker',
      shortDesc: 'Password strength analysis and validation tool.',
      longDesc: 'Evaluates password strength through entropy calculation, common pattern detection, and dictionary-based checks. Provides actionable feedback for stronger credential selection.',
      purpose: 'Credential Security',
      techStack: ['Python', 'Regex', 'Cryptography'],
      status: 'Complete',
      category: 'Utility',
      links: { github: 'https://github.com/Swayam-jhaa/Password-Checker' },
      featured: true,
      displayOrder: 4,
      image: 'assets/images/password-checker.webp',
    },
    {
      name: 'CameraCanvas',
      shortDesc: 'TypeScript utility for camera stream manipulation.',
      longDesc: 'A lightweight utility for capturing and manipulating camera streams. Demonstrates proficiency in browser APIs and real-time media handling.',
      purpose: 'Media Processing',
      techStack: ['TypeScript', 'WebRTC', 'Canvas API'],
      status: 'Complete',
      category: 'Utility',
      links: { github: 'https://github.com/Swayam-jhaa/CameraCanvas' },
      featured: false,
      displayOrder: 5,
      image: 'assets/images/camera-canvas.webp',
    },
  ],

  social: [
    { platform: 'GitHub',   url: 'https://github.com/Swayam-jhaa',                    icon: 'github' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/swayam-jha-520ba9312/', icon: 'linkedin' },
    { platform: 'Email',    url: 'mailto:swayamjhaofficial@gmail.com',                 icon: 'email' },
  ],

  connect: {
    headline: "Let's Connect",
    subline: 'Interested in security research, collaboration, or just want to talk about breaking things responsibly?',
    cta_text: 'Get In Touch',
    cta_email: 'mailto:swayamjhaofficial@gmail.com',
    closing: 'Always open to discussing security, tooling, and new ideas.',
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Swayam Jha`,
    tagline: 'Built with precision.',
  },
};
