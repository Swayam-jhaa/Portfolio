# prd.md
# Product Requirements Document
# Swayam Jha Portfolio

## 1) Product Summary
Build a premium personal portfolio website for Swayam Jha that presents him as a serious security researcher, web pentester, and B.Tech CSE student.
The site must preserve the structure and intent of the Stitch export while upgrading the experience into a polished, animated, content-rich portfolio.

This product is not a generic personal site.
It is a focused professional portfolio with strong visual identity, clear messaging, and modern motion.

## 2) Product Vision
The website should instantly communicate three things:
1. Swayam Jha is technically serious.
2. He works in web security and offensive testing.
3. He can present his work with polish and confidence.

The finished product should feel:
- modern
- technical
- credible
- visually distinctive
- smooth and responsive
- high-end without being noisy

## 3) Product Goals
### Primary goals
- Present Swayam Jha’s identity clearly and memorably
- Showcase security-focused projects and research in a structured way
- Improve content quality across all sections
- Add premium motion using Anime.js
- Deliver a polished responsive experience across devices

### Secondary goals
- Make the portfolio easy to update later
- Create reusable sections and components
- Support future project additions
- Make the site feel more impressive than the raw Stitch export

## 4) Non-Goals
This project does not need to:
- become a full CMS
- support complex user accounts
- include blog infrastructure unless later requested
- include payment features
- include heavy 3D or GPU-intensive effects
- replicate Stitch pixel-for-pixel if a better UX decision exists

## 5) Target Audience
### Primary audience
- recruiters
- security hiring managers
- fellow developers and researchers
- bug bounty and web security communities
- classmates or peers reviewing projects

### Secondary audience
- future collaborators
- people browsing GitHub
- people evaluating technical depth and presentation quality

## 6) Core Product Message
The portfolio should communicate:
- Security research is the main focus
- Web pentesting is a real area of practice
- Tool building and automation are part of the work
- Learning is backed by hands-on experimentation
- The owner cares about craft, not just credentials

## 7) Source Inputs
The product must be built from these inputs:
- Stitch export screens
- Stitch image/code export assets
- GitHub profile information from Swayam-jhaa
- project names from the repositories already identified
- the `design.md` file
- the `prompt.md` file

## 8) Product Information Architecture
### Site sections
The portfolio must include:
- Home
- Skills & About
- Projects & Research
- Connect

### Optional support areas
If they fit the layout cleanly:
- quick stats
- current focus
- featured tools
- learning platforms
- project methodology
- short timeline or experience strip

## 9) Page-Level Requirements

## 9.1 Home
### Purpose
Create the strongest first impression on the site.

### Required content
- name: Swayam Jha
- role line: Security Researcher · Web Pentester · B.Tech CSE
- supporting tagline: Breaking applications to understand them better.
- strong primary CTA
- secondary CTA
- selected work preview
- short credibility cue

### UX requirements
- the hero must dominate visually
- CTAs must be clear and easy to reach
- the page should feel lively but controlled
- the first fold must look finished and premium

### Content requirements
The hero text should feel concise and confident.
Avoid generic phrases and avoid filler.

## 9.2 Skills & About
### Purpose
Explain who Swayam Jha is and what he focuses on.

### Required content
- short about paragraph
- grouped skills
- tools and technologies
- current interests
- short learning or focus statement

### UX requirements
- information must be easy to scan
- skill groups should be logically organized
- the section should not feel like a wall of tags
- the writing should feel credible and personal

### Suggested skill groups
- Security
- Languages
- Tools
- Platforms
- Scripting / Automation

## 9.3 Projects & Research
### Purpose
Show proof of capability through project work.

### Required content
- featured project cards
- short descriptions
- tech or tool labels
- outcomes or purpose
- links or actions where available

### UX requirements
- projects should be easy to compare
- cards should have strong hierarchy
- each card should explain what the project does
- the section should feel like a research showcase, not a generic gallery

### Featured projects to include
- SENTINEL-SCAN
- Recon-Lite
- DeCognito
- Password-Checker
- CameraCanvas if it fits the portfolio story

## 9.4 Connect
### Purpose
Make contact simple and direct.

### Required content
- short invite to connect
- email or contact CTA
- GitHub link
- social links if available
- closing line that feels professional

### UX requirements
- no friction
- no clutter
- clear link targets
- strong contrast for contact actions

## 10) Content Requirements
## 10.1 Tone
The copy must be:
- direct
- technical
- polished
- specific
- confident

### Avoid
- “passionate developer” style filler
- vague claims without examples
- overly casual language
- exaggerated self-promotion
- overly long paragraphs

### Prefer
- short, meaningful statements
- outcome-oriented language
- specific technical focus
- readable labels
- clean hierarchy

## 10.2 Bio direction
The about copy should communicate:
- web security focus
- offensive testing mindset
- practical tooling
- interest in vulnerability discovery
- learning through labs, practice, and personal projects

## 10.3 Project copy direction
Each project description should explain:
- what it does
- why it exists
- what it demonstrates
- the technical value

Do not just restate repo names.

## 11) Design Requirements
The product must retain the dark technical design language from the Stitch export while improving presentation.

### Visual principles
- dark base surfaces
- neon-green primary accent
- clean typography
- clear spacing
- high contrast
- subtle borders
- restrained glow
- controlled motion

### Style constraints
- not playful
- not cartoonish
- not generic SaaS
- not overly flashy
- not cluttered
- not decorative without purpose

## 12) Motion Requirements
The motion system should use Anime.js and follow a disciplined premium style.

### Required motion categories
- hero text entrance
- staggered section reveal
- hover feedback on cards and buttons
- subtle background movement
- line sweep or scanline accents
- progressive reveal of content blocks
- gentle parallax where useful

### Motion rules
- animations must support comprehension
- no motion should reduce readability
- reduce intensity on smaller screens if necessary
- support reduced-motion preferences
- keep timings consistent across the site

### Motion quality target
Animations should feel like:
- a high-end technical portfolio
- a carefully crafted showcase
- a modern Awwwards-inspired site
not like a template with effects pasted on top.

## 13) Functional Requirements
### Navigation
- users can move between the main sections easily
- navigation must work on mobile and desktop
- active section or page state should be clear

### CTAs
- primary CTA should take users to the most important action
- secondary CTA should support browsing or external profile viewing

### Project interactions
- project cards should be clickable or clearly interactive
- hover states should provide useful feedback
- any preview or detail action should remain lightweight

### Responsive behavior
- the layout must adapt cleanly across screen sizes
- no horizontal overflow
- content must remain readable on small screens
- spacing must scale down gracefully

## 14) Technical Requirements
### Frontend
The implementation should support:
- reusable components
- structured content data
- easy updates to project listings
- consistent motion patterns
- maintainable styling

### Motion library
- Anime.js must be used for animation behavior
- animation code should be modular
- avoid mixing one-off ad hoc animation logic everywhere

### Performance
- minimize heavy assets
- optimize images
- keep interactions smooth
- avoid unnecessary animation overhead
- lazy load non-critical media if applicable

## 15) Accessibility Requirements
The product must be accessible and usable by default.

### Required accessibility behaviors
- semantic HTML structure
- visible focus states
- sufficient text contrast
- keyboard navigability
- reduced-motion support
- touch-friendly controls
- no dependence on color alone for meaning

## 16) Content Data Model
The portfolio should be organized so content can be updated without rewriting the UI.

### Suggested data entities
- site identity
- navigation items
- hero content
- about content
- skills groups
- projects
- social/contact links
- CTA definitions
- section copy blocks

### Project data fields
Each project should support:
- name
- short description
- longer description
- purpose
- tech stack
- status
- category
- link(s)
- featured flag
- display order

## 17) Project Content Baseline
### Identity block
- Swayam Jha
- Security Researcher · Web Pentester · B.Tech CSE
- Breaking applications to understand them better.

### Skills baseline
Use the existing GitHub-derived profile context and emphasize:
- Burp Suite
- Nmap
- Wireshark
- Metasploit
- OWASP
- Python
- JavaScript
- C++
- Bash
- Node.js
- MySQL
- MongoDB
- Linux
- Kali

### Project baseline
Present the listed projects in a way that highlights purpose and technical depth.

## 18) UX Requirements
### Clarity
A visitor should understand who Swayam Jha is within seconds.

### Hierarchy
The name, role, and projects must dominate before secondary details.

### Scanability
Content should be easy to skim on both desktop and mobile.

### Trust
The site should read like a serious technical portfolio with actual work behind it.

## 19) Acceptance Criteria
The product is successful when:
- the homepage creates a premium first impression
- the copy is sharper than the original export
- the animations feel modern and controlled
- the portfolio is clearly about security research
- the site is responsive and accessible
- the content structure is easy to maintain
- the final result feels cohesive from start to finish

## 20) Delivery Requirements
The implementation should produce:
- a working portfolio website
- reusable design components
- clean content structure
- polished motion patterns
- maintainable source files
- markdown documentation for design and prompt context

## 21) Risks and Mitigations
### Risk: too much motion
Mitigation:
- keep animations subtle and purposeful

### Risk: copy sounds generic
Mitigation:
- use specific security-focused language and project proof

### Risk: mobile layout feels crowded
Mitigation:
- simplify spacing and reduce section density on small screens

### Risk: site feels too similar to the raw Stitch export
Mitigation:
- preserve structure, but improve hierarchy, motion, and copy

### Risk: performance issues
Mitigation:
- compress assets, avoid over-animating, and keep code modular

## 22) Milestones
### Milestone 1
Lock content direction and page structure.

### Milestone 2
Implement the visual system and reusable components.

### Milestone 3
Add motion with Anime.js and refine interaction timing.

### Milestone 4
Populate real content and improve copy.

### Milestone 5
Test responsiveness, accessibility, and polish.

### Milestone 6
Finalize and verify the experience across the main screens.

## 23) Definition of Done
The product is done when:
- all major sections are present
- content is improved and accurate
- motion feels premium and consistent
- responsive behavior is solid
- accessibility standards are respected
- the site is ready to present as a serious portfolio

## 24) Final Product Statement
This portfolio should present Swayam Jha as a technically capable security researcher with a strong sense of craft.
It should be visually distinctive, easy to navigate, and convincing enough to stand on its own without explanation.
