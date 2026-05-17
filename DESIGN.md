# design.md
# Swayam Jha Portfolio Design Reference

## 1) Purpose
This file is the design source of truth for the portfolio rebuild.
Use it to preserve the Stitch structure, define the visual system, and map each screen to its intended role.
The goal is to keep the site recognizably based on the Stitch export while making it feel more premium, more focused, and more animated.

## 2) Project Metadata
- Project title: Swayam Jha Portfolio
- Stitch project ID: 11024833864907380425
- Primary style: dark technical portfolio with neon-green cyber accents
- Primary voice: security-focused, direct, confident, polished
- Brand personality: precise, analytical, modern, slightly sharp around the edges

## 3) Source Inputs
Use these as the project references:
- Stitch export screens and assets
- GitHub profile: Swayam-jhaa
- Existing portfolio content and visuals
- Your own screenshots and downloaded images from Stitch
- Any logos or icons already present in the export

## 4) GitHub Profile Facts to Reflect
Use these facts as content anchors when improving the site:
- Name: Swayam Jha
- Role line: Security Researcher · Web Pentester · B.Tech CSE
- Tagline: Breaking applications to understand them better.
- About: focused on web security and offensive testing
- Skills: Burp Suite, Nmap, Wireshark, Metasploit, OWASP, Python, JavaScript, C++, Bash, Node.js, MySQL, MongoDB, Linux, Kali
- Projects: SENTINEL-SCAN, Recon-Lite, DeCognito, Password-Checker
- Pinned repos: CameraCanvas, DeCognito, Password-Checker, Recon-Lite, SENTINEL-SCAN

## 5) Visual Direction
### Overall mood
- Dark, controlled, high-contrast
- Security lab aesthetic, not gaming neon
- Minimal layout noise
- Feels like a tool used by someone who knows exactly what they are doing

### Surface treatment
- Deep charcoal backgrounds
- Subtle dotted grid or grain texture
- Soft borders with low-opacity green glow
- Glass-like panels only where needed
- No excessive blur
- No random gradients that look decorative instead of intentional

### Accent usage
- Use neon green as the primary accent
- Use white or near-white for key headings
- Use muted gray for secondary text
- Use red sparingly only for warnings, errors, or danger states

## 6) Suggested Color System
- Background base: #050607 or similar near-black
- Surface 1: #0B0F10
- Surface 2: #101617
- Border subtle: rgba(255,255,255,0.06)
- Primary accent: vivid green, used for CTA and active states
- Secondary accent: pale green or mint for hover glow
- Text primary: off-white
- Text secondary: muted gray
- Code/terminal highlight: green-on-dark with soft contrast

## 7) Typography Direction
- Headlines: bold, compact, modern sans-serif
- Body: highly readable sans-serif
- Technical labels: slightly condensed or monospaced feel
- Avoid overly playful typefaces
- Keep line lengths short on hero text and project cards
- Use clear hierarchy between name, role, section labels, and captions

## 8) Spacing and Layout Rules
- Prefer spacious sections with strong vertical rhythm
- Avoid cramped card grids
- Use consistent internal padding across panels
- Keep alignment strict to the grid
- Hero and section transitions should breathe
- Mobile layout must never feel like a shrunken desktop

## 9) Motion Philosophy
- Motion should feel deliberate, technical, and premium
- Prefer staggered reveals, parallax drift, cursor-reactive elements, border tracing, and subtle section entrance effects
- Use animation to reveal structure, not to distract from content
- No bouncy cartoon motion
- No overused “floaty blob” effects
- No excessive easing that makes the site feel sluggish

## 10) Stitch Screen Inventory
### 10.1 Home - Swayam Jha Portfolio
- Screen ID: f6bb5e0860ec4e05bbf7a2ccca305f33
- Role: primary landing page
- Visual priority: name, role, short intro, CTA, selected work
- Must feel like the most polished screen

### 10.2 Dynamic Home - Swayam Jha Portfolio
- Screen ID: c70d820493494005836635158ecd7e8f
- Role: alternate home state with more motion/variation
- Visual priority: dynamic hero treatment, stronger movement, higher energy
- Use this to derive animated behavior, not a separate unrelated concept

### 10.3 Skills & About
- Screen ID: 39e17937d3f04645ae22b50a90d1d2f2
- Role: skills and bio presentation
- Visual priority: about summary, skills grid, capability blocks
- Needs clean information architecture

### 10.4 Skills & About
- Screen ID: 2d9b29f120ce442cadfe516e43f96633
- Role: alternate layout variant
- Visual priority: same content, different composition
- Use this to compare structure and keep the strongest hierarchy

### 10.5 Projects & Research
- Screen ID: 079ebafd505e43678787a930ecd104c6
- Role: project showcase variant one
- Visual priority: research emphasis, technical credibility, project cards

### 10.6 Projects & Research
- Screen ID: a84c67318e224d439ed879b9343de256
- Role: project showcase variant two
- Visual priority: slightly different project arrangement and emphasis

### 10.7 Connect - Swayam Jha Portfolio
- Screen ID: d0571cdc7a32428581957ec976f398c0
- Role: contact / connection screen
- Visual priority: email, social links, CTA, invitation to connect

### 10.8 Connect - Swayam Jha Portfolio
- Screen ID: 1c4ca3bfbe1b4a46a62dbce1eb97abe1
- Role: alternate contact state
- Visual priority: alternate layout or more dynamic form presentation

## 11) Recommended Page Structure
### Home
1. Top nav
2. Hero heading
3. Role line and microcopy
4. Primary CTA and secondary CTA
5. Selected work preview
6. Short about strip
7. Quick stats or signature capabilities

### Skills & About
1. About intro
2. Skill clusters
3. Tool stack
4. Interest areas
5. Learning focus or current exploration
6. Short credibility footer

### Projects & Research
1. Featured project cards
2. Research/work methodology
3. Tooling or security focus
4. Project outcomes
5. Linkable project entries

### Connect
1. Contact heading
2. Short invitation copy
3. Social links
4. Email CTA
5. Optional form or message area

## 12) Component Inventory
Build the UI with reusable pieces:
- Navbar
- Hero section
- Animated text line
- CTA button
- Project card
- Skill chip
- Tool badge
- Timeline or stat card
- Social icon row
- Footer
- Section label
- Divider / line accent
- Scroll indicator
- Modal or hover preview if needed

## 13) Card Design Rules
- Cards should have strong edge definition
- Use hover lift very lightly
- Keep card content concise
- Include role, outcome, and tech stack where appropriate
- Use icons only when they add clarity
- Maintain visual consistency across all sections

## 14) Portfolio Copy Tone
- Confident, not loud
- Technical, not jargon-heavy
- Specific, not vague
- No generic “passionate developer” fluff
- Emphasize security research, problem solving, and tool building

## 15) Hero Copy Direction
Use copy that communicates:
- who you are
- what you do
- what makes your portfolio different
- why the visitor should care

Suggested idea:
- primary line: Swayam Jha
- subline: Security Researcher · Web Pentester · B.Tech CSE
- supporting line: Breaking applications to understand them better.

## 16) Content Priorities
The strongest content themes for the site:
- offensive security
- web application analysis
- recon automation
- tooling and scripting
- writeups and learning by practice
- technical rigor

## 17) Image and Asset Rules
- Use Stitch-exported images first
- Optimize large screenshots before using them in the app
- Prefer SVG for icons and logos
- Compress heavy textures
- Keep decorative assets subtle
- Never let assets overpower the content

## 18) Responsiveness
- Mobile must preserve readability first
- Stack cards vertically on small screens
- Reduce motion intensity on mobile if needed
- Keep CTA buttons reachable without scrolling too far
- Avoid horizontal overflow
- Maintain consistent spacing across breakpoints

## 19) Accessibility
- Maintain strong contrast
- Use semantic headings and landmarks
- Ensure focus states are visible
- Make buttons and links large enough for touch
- Do not encode meaning by color alone
- Reduce motion for users who prefer reduced animation

## 20) Motion References
Use the Stitch export as the base direction and pull motion language from the same family of modern high-end animated portfolios.
Motion should suggest:
- scanned lines
- data reveal
- terminal activation
- subtle tracking
- responsive hover feedback
- section load sequencing

## 21) Visual Do Not List
- No generic SaaS look
- No bright pastel theme
- No clashing neon colors
- No decorative motion without purpose
- No crowded hero section
- No inconsistent border radii
- No random shadows everywhere
- No comic or playful icon style

## 22) Success Criteria
The design is successful when:
- it still feels like Swayam Jha’s portfolio
- the dark technical identity is preserved
- the site looks more premium than the raw export
- the content reads like a serious security portfolio
- the layout works cleanly on desktop and mobile

## 23) Final Design Note
Treat this as a precise rebuild, not a reimagining.
The best result is a polished version of the Stitch design with stronger composition, stronger copy, and stronger motion discipline.
