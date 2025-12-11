# Nexa Studio 2035 - Master Documentation

This document serves as the single source of truth for the Nexa Studio 2035 project, combining installation instructions, architectural overview, UX rationale, and performance guidelines.

---

## 1. Overview & Quick Start

**Nexa Studio 2035** is a hyper-premium, cinematic digital agency website built with React 19, Vite, Tailwind CSS v4, and React Three Fiber. It features a modern interaction system with scroll-linked pinning, laser flow visuals, magnetic interactions, and a complete contact flow.

### 🚀 Installation

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Run Development Server:**
    ```bash
    npm run dev
    ```
3.  **Build for Production:**
    ```bash
    npm run build
    ```

### ✨ Key Features

*   **Contact System:** Unified contact modal triggered from nav, hero, pricing, and CTA sections with keyboard shortcut (Press `C`)
*   **Scroll-Linked Pinning:** `HeroPin.tsx` uses GSAP ScrollTrigger to pin the hero section and animate content
*   **Laser Flow Visuals:** `HeroLaser.tsx` and `LaserFlow.tsx` provide a futuristic, shader-based background
*   **Magnetic Interactions:** `CursorMagnet.tsx` and `MagneticButton.tsx` add physical weight to elements
*   **Organic Cursor Trails:** `CursorTrail.tsx` adds a fluid particle trail
*   **Split Text Reveals:** `SplitText.tsx` animates text character-by-character
*   **Pricing System:** Three-tier pricing with monthly/yearly toggle and direct modal integration
*   **Bento Grid Layout:** `ServicesBento.tsx` displays services in a modern grid
*   **Glassmorphism:** `GlassCard.tsx` and `Navbar.tsx` use backdrop-blur and transparency
*   **Smooth Scrolling:** `lenis.ts` provides silky smooth scroll inertia with reduced-motion support
*   **Section Transitions:** `SectionWave.tsx` adds organic dividers
*   **3D Elements:** `NebulaVortex.tsx` and `PerspectiveCard.tsx` introduce depth
*   **Social Proof:** Infinite scrolling client marquee

---

## 2. Modern Design System

### Visual Identity (2035-Grade Premium)
*   **Typography**: Inter (body), Space Grotesk (display) with modular scale 1.25
*   **Color Palette**: Deep Space (`#0a0f1f`) with Neon Accents (`#60a5fa`, `#a855f7`, `#ec4899`)
*   **Spacing**: 8-point grid system (4px, 8px, 16px, 32px, 64px, 128px)
*   **Lighting**: "Quantum Glassmorphism" — holographic borders, radial tracking glows, and volumetric lighting
*   **Motion**: Cinematic physics with weight, magnetism, and fluid transitions
*   **Noise**: Global SVG-based grain overlay at 0.02 opacity for tactile depth

### Section Flow (Optimized for Conversion)
1. **Global Shell**: Nav + CursorMagnet + CursorTrail + NoiseOverlay
2. **Hero** (HeroPin): Scroll-pinned multi-step reveal with laser background
3. **Social Proof**: Animated client logo marquee
4. **About**: Mission and stats with glass cards
5. **Services** (ServicesBento): Bento grid with magnetic hover effects
6. **Portfolio**: Case study gallery with perspective cards
7. **Pricing**: Three-tier pricing cards with billing toggle and modal CTAs
8. **Testimonials**: 3D perspective testimonial cards
9. **CTA**: Spatial light portal with primary contact action
10. **Footer**: Legal, social links, and secondary contact

---

## 3. Contact & Conversion System

### Contact Modal (`ContactModal.tsx`)
- **Triggers**: Nav button, Hero CTA, Pricing "Apply", CTA section, Footer, Keyboard (`C` key)
- **Features**: Form validation, budget selection, plan prefilling, success animation, email fallback
- **Analytics**: Tracks source of contact initiation for conversion optimization
- **Accessibility**: Full keyboard navigation, ARIA labels, focus management

### Pricing (`Pricing.tsx`)
- **Three Tiers**: Starter (₹75k), Growth (₹150k), Partner (Custom)
- **Billing Toggle**: Monthly/Yearly with 10% save indicator
- **Apply CTA**: Opens ContactModal with selected plan prefilled
- **Social Proof**: "How We Price" microcopy explains flexible terms
- **Magnetic Effects**: All cards have `data-magnet` for cursor pull

### Interaction Patterns
*   **Magnetic Cursor**: Elements with `data-magnet` attribute pull cursor toward them
*   **Cursor Trail**: Organic particle system follows mouse with canvas rendering
*   **Smooth Scroll**: Lenis provides inertia-based scrolling (disabled in reduced-motion)
*   **Scroll Pinning**: Hero section pins while content animates through phases
*   **Glass Tracking**: Cards track mouse position for radial gradient overlay
*   **Keyboard Shortcuts**: `C` opens contact modal (documented in UI)

---

## 2. Architecture & Visual System

The site embodies a **"2035-Grade Premium Digital Agency"** aesthetic, inspired by Apple Vision Pro and Linear.

### Visual Identity
*   **Color Palette**: Deep Space (`#0a0f1f`) with Neon Accents (`#60a5fa`, `#a855f7`, `#ec4899`).
*   **Lighting**: "Quantum Glassmorphism" — holographic borders, radial tracking glows, and volumetric lighting.
*   **Motion**: Cinematic physics. Elements have weight, magnetism, and fluid transitions.

### Core Components

#### A. The "Nebula Vortex" Hero Section
A spatial interface with a floating glass prism and a GPU-accelerated particle field.
*   **Prism Core**: Uses `meshPhysicalMaterial` for realistic glass refraction.
*   **Nebula Vortex**: 3000 particles distributed in spherical coordinates.
*   **Headline**: `TextScramble` component creates a "decoding" effect.

#### B. Quantum Glass Cards
Cards with radial gradient borders that track mouse position, creating a holographic effect.
*   **Implementation**: `GlassCard.tsx` tracks mouse coordinates and applies a dynamic radial gradient overlay.

#### C. Neural Interface Design Grid (Services)
A Bento-style grid layout with cards that have gradient backgrounds and hover effects.
*   **Implementation**: `ServicesBento.tsx` creates a responsive grid with varying column spans.

#### D. Client Signals (Testimonials)
3D perspective cards with depth effects and cinematic hover animations.
*   **Implementation**: Cards use perspective transforms and `GlassCard` components.

#### E. Spatial Light Portal (CTA)
A massive pulsing radial gradient behind the text, creating a portal effect.

---

## 3. UX Design & Rationale

### Design System Foundation

*   **Typography**: Modular Scale 1.25 (Major Third). Hero text at 96px (6rem), Body at 18px (1.125rem).
*   **Grid**: 8-Point Grid System (4px, 8px, 16px, 32px, 64px, 128px).
*   **Color Theory**: 60-30-10 Rule (60% Deep Space, 30% Glass Surfaces, 10% Neon Accents).
*   **Fonts**: Inter (body, weights 300-900), Space Grotesk (display, weights 400-700).

### Cognitive Psychology Principles

1.  **Hick's Law (Choice Reduction)**: Navigation limited to 4 core items; CTAs present max 2 options per view.
2.  **Miller's Law (7±2 Items)**: Bento grids and sections organize content into digestible chunks.
3.  **Jakob's Law (Familiar Patterns)**: Standard navigation placement and scroll behaviors.
4.  **Fitts's Law (Target Sizing)**: Magnetic buttons increase effective target size, reducing required precision.

### Interaction Rationale

*   **Scroll-Linked Pinning**: Allows users to absorb the brand message without distraction before moving to content.
*   **Magnetic Cursor**: Makes the interface feel "sticky" and responsive, reducing required precision.
*   **Organic Cursor Trails**: Provides immediate visual feedback, confirming system responsiveness.
*   **Split Text Reveal**: Staggered animation guides the eye naturally through reading order.
*   **Glassmorphism & Noise**: Depth cues help users understand interface hierarchy.
*   **Smooth Scrolling (Lenis)**: Normalizes the experience across devices for fluid playback.
*   **Keyboard Shortcuts**: Power users can press `C` to open contact modal instantly.

### Conversion Optimization

*   **Single Primary Action**: Each section has one clear CTA (Contact, Apply, View Work).
*   **Pricing as Story**: Cards show value proposition, not just features. "Apply" language reduces friction.
*   **Contact Modal**: Unified form captures source tracking for optimization analysis.
*   **Social Proof**: Client marquee and testimonials build trust early in the journey.
*   **Progressive Disclosure**: Information is revealed through scroll to maintain engagement.

---

## 4. Performance & QA

### Performance Checklist

1.  **Reduced Motion Support**:
    *   `src/lib/lenis.ts` checks `prefers-reduced-motion` and disables smooth scroll.
    *   All animations use CSS media query `@media (prefers-reduced-motion: reduce)`.
    *   **Test**: Enable "Reduce Motion" in OS settings. Scroll should be native, animations instant.

2.  **Mobile Optimization**:
    *   Particle counts in `NebulaVortex` and `CursorTrail` are reduced on mobile (detect via `window.matchMedia`).
    *   Glass effects use optimized backdrop-blur values.
    *   Touch targets meet minimum 44×44px accessibility standard.

3.  **Asset Loading**:
    *   Fonts preloaded in `<head>` with `font-display: swap` to prevent FOIT.
    *   Heavy 3D components should be lazy-loaded: `const LaserFlow = lazy(() => import('./LaserFlow'))`.
    *   Images use `loading="lazy"` attribute.

4.  **Animation Performance**:
    *   Animations target `transform` and `opacity` to use the compositor thread.
    *   `will-change` is used sparingly (only during active animations).
    *   GSAP ScrollTrigger uses `scrub` values <1 for smooth performance.

5.  **LCP (Largest Contentful Paint)**:
    *   Hero text is visible immediately (no font loading delay).
    *   Critical fonts are preloaded and displayed with swap.
    *   Target: LCP < 2.5 seconds.

6.  **Bundle Size**:
    *   Current bundle: ~1.35MB (400KB gzipped).
    *   **Optimization needed**: Code-split with dynamic imports for 3D components.

### QA Checklist

*   [ ] **Reduced Motion:** Verify Lenis is disabled and animations are instant.
*   [ ] **Mobile Performance:** Verify stable frame rate (>30fps) on mobile.
*   [ ] **Scroll Pinning:** Ensure Hero section pins, animates, and releases correctly.
*   [ ] **Cursor Visibility:** Ensure custom cursor is visible on all backgrounds.
*   [ ] **Contact Modal:** All CTAs (Nav, Hero, Pricing, CTA, Footer) open modal correctly.
*   [ ] **Keyboard Navigation:** Tab through all interactive elements, press `C` to open contact.
*   [ ] **Pricing Toggle:** Monthly/yearly toggle animates smoothly.
*   [ ] **Magnetic Effects:** Elements with `data-magnet` pull cursor toward them.
*   [ ] **Form Validation:** Contact modal validates required fields.
*   [ ] **Success State:** Contact modal shows checkmark animation after submit.
*   [ ] **Focus Styles:** All interactive elements show visible focus outline.
*   [ ] **Lenis Ignore:** Verify `lenis-ignore` class works for internal scrollable areas.

### Accessibility Audit

*   [ ] **WCAG AA Compliance:** Color contrast ratios meet 4.5:1 for body text.
*   [ ] **Keyboard Only:** All functionality accessible without mouse.
*   [ ] **Screen Reader:** ARIA labels present on all interactive elements.
*   [ ] **Focus Management:** Modal traps focus when open, returns on close.
*   [ ] **Touch Targets:** All buttons meet 44×44px minimum size.

---

## 5. Project Structure

```
nexa-web-studio/
├── public/                         # Public assets (empty - ready for images/fonts)
├── src/
│   ├── components/                 # All UI components
│   │   ├── About.tsx               # About section with GlassCard grid
│   │   ├── BentoGrid.tsx           # Reusable Bento grid layout primitive
│   │   ├── CTA.tsx                 # Call-to-action section with portal effect
│   │   ├── CTA3D.tsx               # Animated 3D sphere background for CTA
│   │   ├── CursorMagnet.tsx        # GSAP-based cursor magnet wrapper
│   │   ├── CursorTrail.tsx         # Organic particle trail following cursor
│   │   ├── CustomCursor.tsx        # Custom cursor with spring physics
│   │   ├── Footer.tsx              # Footer with social links
│   │   ├── GlassCard.tsx           # Glassmorphic card with radial gradient tracking
│   │   ├── HeroLaser.tsx           # React Three Fiber canvas for LaserFlow
│   │   ├── HeroPin.tsx             # GSAP ScrollTrigger pinned hero section
│   │   ├── HeroR3F.tsx             # 3D Prism + Nebula particle system
│   │   ├── LaserFlow.tsx           # Custom shader material for neon energy flow
│   │   ├── MagneticButton.tsx      # Framer Motion magnetic button with spring
│   │   ├── NavBar.tsx              # Glassmorphic navbar with scroll fade
│   │   ├── NebulaVortex.tsx        # 3D particle vortex (3000 particles)
│   │   ├── PerspectiveCard.tsx     # 3D perspective card with mouse tracking
│   │   ├── Portfolio.tsx           # Portfolio grid section
│   │   ├── SectionWave.tsx         # Animated SVG wave divider
│   │   ├── Services.tsx            # Services section wrapper
│   │   ├── ServicesBento.tsx       # Bento grid for service cards
│   │   ├── SplitText.tsx           # GSAP character-by-character text reveal
│   │   ├── StatsMarquee.tsx        # Infinite scrolling stats marquee
│   │   ├── Testimonials.tsx        # Client testimonials with perspective cards
│   │   ├── TextScramble.tsx        # Scramble/decode text animation effect
│   │   └── theme-provider.tsx      # Dark/light theme context provider
│   ├── lib/
│   │   ├── gsap.ts                 # GSAP + ScrollTrigger initialization
│   │   ├── lenis.js                # Lenis smooth scroll setup (legacy)
│   │   ├── lenis.ts                # TypeScript Lenis configuration
│   │   ├── scroll.ts               # Scroll utility functions
│   │   ├── useLenis.js             # React hook for Lenis (legacy)
│   │   └── utils.ts                # Utility functions (cn, etc.)
│   ├── assets/                     # Static assets (empty - ready for images)
│   ├── App.jsx                     # Main app layout (legacy)
│   ├── App.tsx                     # Main app layout (TypeScript)
│   ├── index.css                   # Global styles + Tailwind directives
│   └── main.tsx                    # React 19 entry point
├── eslint.config.js                # ESLint flat config
├── index.html                      # HTML entry point
├── jsconfig.json                   # JavaScript compiler config
├── package.json                    # Dependencies and scripts
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.js              # Tailwind CSS v4 configuration
├── tsconfig.json                   # TypeScript base config
├── tsconfig.app.json               # TypeScript app config
├── tsconfig.node.json              # TypeScript Node config
└── vite.config.ts                  # Vite bundler configuration
```

### Key File Descriptions

#### Components
- **HeroPin.tsx**: The scroll-pinned hero section. Uses GSAP ScrollTrigger to pin the viewport while animating the prism and text.
- **LaserFlow.tsx**: Custom WebGL shader material creating the neon laser energy flow effect behind the hero.
- **GlassCard.tsx**: Reusable glassmorphic card with mouse-tracking radial gradient border (holographic effect).
- **MagneticButton.tsx**: Button that "pulls" toward the cursor using Framer Motion spring physics.
- **SplitText.tsx**: Splits text into characters/words and animates them sequentially with GSAP on scroll.
- **CursorTrail.tsx**: Canvas-based particle system that follows mouse movement with organic trailing effect.
- **NebulaVortex.tsx**: 3D particle field rendered with React Three Fiber, distributed in spherical coordinates.
- **ServicesBento.tsx**: Bento grid layout for displaying services with glassmorphic cards.
- **PerspectiveCard.tsx**: Card with 3D perspective transform based on mouse position.

#### Library Files
- **lenis.ts**: Initializes Lenis smooth scroll with reduced motion detection and cleanup.
- **gsap.ts**: Registers GSAP plugins (ScrollTrigger) and provides configuration.
- **utils.ts**: Contains utility functions like `cn()` for conditional className merging.

#### Configuration
- **vite.config.ts**: Configures Vite bundler with React plugin and path aliases.
- **tailwind.config.js**: Tailwind CSS v4 configuration with custom colors and animations.
- **tsconfig.json**: TypeScript compiler options for the project.

*   [x] **Lazy Loading:** R3F Canvas and heavy components should be lazy loaded (implemented in HeroR3F).
*   [x] **Code Splitting:** Vite handles this automatically.
*   [x] **Asset Optimization:** Use optimized formats (WebP/AVIF) for any images.
*   [x] **Reduced Motion:** prefers-reduced-motion is respected (Lenis disabled, animations simplified).
*   [x] **LCP Target:** < 2.5s. The 3D scene is lightweight (particles).

##  Design System

*   **Grid:** 8pt grid system.
*   **Typography:** Modular scale (Major Third 1.25).
*   **Colors:** Deep Space (#050505) + Neon Accents.
*   **Motion:** Spring physics (stiffness: 150, damping: 15).

##  Component Usage

### lenis-ignore
Add the class lenis-ignore to any container that needs native scrolling (e.g., code blocks, internal sliders).

`jsx
<div className=""lenis-ignore overflow-y-auto h-64"">
  {/* Scrollable content */}
</div>
`

##  Assets
*   Fonts: Inter (Google Fonts)
*   Icons: Lucide React (Vector)
