# prompt.md
# Portfolio Build Prompt for the Agent

## 1) Mission
Build a high-end portfolio website for Swayam Jha using the Stitch export as the structural reference, then elevate it into a polished, animation-rich portfolio.
The finished site should feel like a premium security researcher portfolio, not a generic template.

## 2) Core Objectives
- Preserve the overall structure and identity of the Stitch design
- Upgrade motion quality using Anime.js
- Improve the writing so the portfolio sounds sharper, more credible, and more memorable
- Keep the site responsive, fast, and accessible
- Make every screen feel intentional, not merely assembled

## 3) Source Material to Use
Use these as source inputs:
- Stitch screens and images
- The exported design instructions from Stitch
- GitHub profile content from Swayam-jhaa
- Existing project names and repository context
- Your own judgment for polishing UX and copy

## 4) Required Style Direction
### Visual tone
- Dark, technical, premium
- Cybersecurity lab aesthetic
- Controlled neon-green accents
- Minimal but high contrast
- Clean geometry and precise alignment

### Motion tone
- Smooth, elegant, deliberate
- Modern Awwwards-inspired feeling
- Not flashy for the sake of being flashy
- Animations should reveal hierarchy and guide attention
- Use motion to make the site feel alive, not busy

## 5) Animation Requirements
Use Anime.js for the motion system and add animation across the site in a disciplined way.

### Motion patterns to include
- Hero text stagger reveal
- Subtle parallax drift on background elements
- Hover glow or border tracing on cards
- Staggered section entry on scroll
- Animated underline or line sweep on titles
- Button micro-interactions
- Card tilt or translate on hover, kept subtle
- Progress or scanline effect where appropriate
- Optional looping ambient motion only if it stays quiet

### Motion rules
- Every animation must have a reason
- Use consistent easing and timing
- Keep motion fast enough to feel responsive
- Never make the page feel like a demo reel
- Avoid overusing blur, shake, bounce, or springy motion
- Respect reduced-motion preferences

### Motion quality bar
The animations should feel like:
- a premium product launch
- a technical showcase
- a carefully tuned portfolio
not like a random prebuilt effect library.

## 6) Content Improvement Requirement
Rewrite the site copy so it sounds better than a basic self-description.

### Use these profile facts
- Name: Swayam Jha
- Role: Security Researcher · Web Pentester · B.Tech CSE
- Tagline: Breaking applications to understand them better.
- About: focused on web security and offensive testing
- Activities: finding vulnerabilities, building security tooling, writing up findings
- Interests: bug bounty, API security, authentication attacks
- Practice platforms: TryHackMe, PortSwigger Web Security Academy
- Tooling focus: recon automation and security-focused scripts

### Writing style for the portfolio
- Direct and confident
- Technical but readable
- Specific rather than generic
- No filler like “passionate developer”
- No vague claims without support
- Keep it personal, but not overdone

### Suggested rewritten hero copy
Use a more polished version of this idea:
- Name: Swayam Jha
- Role: Security Researcher · Web Pentester · B.Tech EE VLSI
- Supporting line: Breaking applications to understand them better.

### Suggested about copy direction
Write something that communicates:
- you focus on web security and offensive testing
- you analyze applications by testing them deeply
- you build tools and scripts that support security work
- you document your learning through writeups and practice

### Suggested project descriptions
- SENTINEL-SCAN: multi-threaded port scanner with banner grabbing
- Recon-Lite: subdomain enumeration and recon automation
- DeCognito: security research tooling
- Password-Checker: password strength analysis tool

## 7) Information Architecture
### Home page
The home page should contain:
- a strong hero
- a clear role line
- a short credibility line
- CTA buttons
- selected work preview
- a compact about strip or statistic section

### Skills & About
This page should contain:
- a crisp summary of who Swayam Jha is
- grouped skills by category
- tools and platforms
- current interests and focus areas
- optional short timeline or learning snapshot

### Projects & Research
This page should contain:
- featured security projects
- concise descriptions
- technology or tool badges
- clear links or hover previews
- a clear emphasis on research value

### Connect
This page should contain:
- a strong invitation to connect
- email CTA
- social links
- GitHub and LinkedIn references if available
- a simple closing note

## 8) Copy Improvements To Make
Rewrite content so it sounds like a strong security portfolio.

### Avoid
- generic “about me” filler
- empty motivational language
- exaggerated claims
- long paragraphs with no structure

### Prefer
- short, specific statements
- proof of tools, projects, and focus
- concise credibility lines
- readable labels and section headers

## 9) Design Implementation Rules
- Follow the Stitch layout closely
- Improve spacing and hierarchy where needed
- Keep the dark palette
- Preserve the green accent language
- Make CTA buttons more polished and clearer
- Ensure cards and panels feel consistent
- Make the site feel more premium than the raw export

## 10) Build Behavior
### Desktop
- Strong hero composition
- Balanced sections
- Smooth section transitions
- Card grids should be aligned and visually dense without being cramped

### Mobile
- Stack content cleanly
- Keep headings readable
- Reduce motion density where needed
- Ensure CTA and nav remain easy to use
- Avoid any horizontal overflow

## 11) UI Details That Matter
- Use visible but restrained borders
- Use glow only when it helps focus
- Keep shadows subtle
- Use section labels for structure
- Make hover states informative
- Keep icon use consistent
- Avoid conflicting border radii
- Keep cards and buttons visually related

## 12) Accessibility Requirements
- Semantic HTML
- Strong text contrast
- Keyboard accessible navigation
- Visible focus states
- Reduced-motion support
- Touch-friendly hit targets
- No meaning conveyed by color alone

## 13) Performance Requirements
- Avoid unnecessary heavy assets
- Optimize images before use
- Do not introduce large animation overhead
- Keep interactions smooth
- Lazy-load non-critical media if needed
- Use reusable components instead of duplicated markup

## 14) Content Specific Sections
### Hero
- Biggest typography on the site
- Clear identity
- Short supporting statement
- Primary CTA to projects or contact
- Secondary CTA to GitHub or skills

### About
- Explain what you do in practical terms
- Mention security testing, recon tooling, and writeups
- Keep it human and direct

### Skills
Organize by:
- Security
- Languages
- Stack / tools

### Projects
Present the repository names clearly and describe outcomes, not just tech.

### Connect
Make it easy to reach out, with minimal friction and clear links.

## 15) Suggested Section Copy Bank
Use or adapt these lines:
- “Security Researcher · Web Pentester · B.Tech CSE”
- “Breaking applications to understand them better.”
- “Focused on web security, offensive testing, and practical tooling.”
- “Building recon automation and security-focused scripts.”
- “Documenting vulnerabilities, techniques, and findings through writeups.”
- “Hands-on practice through TryHackMe and PortSwigger Web Security Academy.”

## 16) Interaction Ideas
Use these interactions only if they stay tasteful:
- buttons with subtle hover lift and glow
- cards that animate border highlights on hover
- section titles that animate in with a clean stagger
- project cards that preview metadata on hover
- a faint moving grid or scanline in the background
- small cursor-follow effect only on desktop
- text split reveal for the hero headline

## 17) What To Avoid
- Over-designed page clutter
- Loud gradients
- Random decorative blobs
- Overly slow page transitions
- Effects that hurt readability
- Huge shadows
- Excessive text animation on every line
- Copy that sounds like a template

## 18) Acceptance Criteria
The build is done when:
- it matches the Stitch reference at a glance
- the site feels much more premium than the export
- the motion is noticeably better and more modern
- the copy reads like a serious portfolio
- the site works cleanly across screen sizes
- the experience feels cohesive from hero to contact

## 19) Final Instruction
Treat the Stitch export as the skeleton, the GitHub profile as the content source, and Anime.js as the motion engine.
The final product should feel like a deliberately crafted security portfolio with strong motion, strong typography, and strong personality.
