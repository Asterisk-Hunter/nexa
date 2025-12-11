# Nexa Studio 2035 - Implementation Guide

## ✅ Completed Features

### 1. Contact System (Priority 1) ✓
- **ContactModal.tsx**: Full-featured modal with form validation, success state, and animations
- **contact.ts**: Utility functions for opening modal and tracking analytics
- **Integration**: All CTAs (Nav, Hero, Pricing, CTA section) trigger the contact modal
- **Keyboard Shortcut**: Press `C` to open contact modal from anywhere
- **Tracking**: Built-in analytics hooks (ready for Google Analytics/Plausible)

### 2. Modern Section Flow (Blueprint) ✓
Current page structure:
1. **Hero** (HeroPin) - Scroll-pinned with laser background
2. **Social Proof** - Animated client marquee
3. **About** - Stats and mission
4. **Services** (ServicesBento) - Bento grid layout
5. **Portfolio** - Case study gallery
6. **Pricing** - Three-tier pricing cards with modal integration
7. **Testimonials** - 3D perspective cards
8. **CTA** - Spatial light portal with contact trigger
9. **Footer** - Legal and social links

### 3. Typography & Fonts ✓
- **Fonts Preloaded**: Inter (body), Space Grotesk (display)
- **Modular Scale 1.25**: Implemented in `tailwind.config.js`
- **Font Classes**: `.font-spacegrotesk` utility for display text
- **Line Heights**: Body 1.5, Headings 1.1-1.2

### 4. Visual System ✓
- **Colors**: space-950, neon-blue, neon-purple, neon-pink
- **8pt Grid**: All spacing tokens defined
- **Noise Overlay**: Global SVG-based grain at 0.02 opacity
- **Glass Effects**: GlassCard with radial gradient tracking
- **Shadows**: `shadow-vol-sm`, `shadow-vol-lg` for depth

### 5. Interactions ✓
- **Magnetic Buttons**: `data-magnet` attribute enables CursorMagnet
- **Cursor Trail**: Organic particle trail
- **Smooth Scroll**: Lenis with reduced-motion support
- **GSAP Pinning**: Hero section pins during scroll

### 6. Pricing Component ✓
- **Three Tiers**: Starter, Growth, Partner
- **Billing Toggle**: Monthly/Yearly with animation
- **Apply CTA**: Opens ContactModal with plan prefilled
- **Social Proof**: "How We Price" microcopy

### 7. Accessibility ✓
- **Focus Styles**: Visible outline on all interactive elements
- **Keyboard Navigation**: Full keyboard support + shortcuts
- **Reduced Motion**: All animations respect `prefers-reduced-motion`
- **Semantic HTML**: Buttons, links, and ARIA labels throughout

---

## 🔧 Next Implementation Steps

### Step 1: API Integration
**File to create**: `src/pages/api/contact.ts` (if using Next.js) or serverless function

```typescript
// Example for Vercel serverless
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  
  const { name, email, brief, source } = req.body;
  
  // Validate
  if (!name || !email || !brief) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  // Send to email service (SendGrid, Postmark, etc.)
  // await sendEmail({ to: 'hello@nexa.studio', ...formData });
  
  return res.status(200).json({ ok: true });
}
```

**Action**: 
1. Set up email service (Resend, SendGrid, or Postmark)
2. Add environment variable `SMTP_API_KEY`
3. Update `ContactModal.tsx` to POST to `/api/contact`

### Step 2: Enhance ServicesBento with Magnetic Effects
**File**: `src/components/ServicesBento.tsx`

**Current Issue**: Services cards need `data-magnet` attributes and enhanced hover states.

**Action**:
```tsx
// Add to each service card wrapper
<div data-magnet className="group">
  <GlassCard className="hover:border-neon-blue/50 transition-all">
    {/* content */}
  </GlassCard>
</div>
```

### Step 3: Add Lottie Animations
**Install**: `npm install lottie-react`

**Files to update**:
- `MagneticButton.tsx` - Add hover animation
- `ContactModal.tsx` - Success tick animation

**Action**:
```tsx
import Lottie from 'lottie-react';
import successAnimation from '@/assets/success.json';

// In ContactModal success state:
<Lottie animationData={successAnimation} loop={false} />
```

### Step 4: Portfolio Horizontal Scrub
**File**: Create `src/components/PortfolioScrub.tsx`

**Action**: Use GSAP ScrollTrigger to create horizontal scroll effect
```tsx
gsap.to(scrollContainer, {
  x: () => -(scrollWidth - viewportWidth),
  ease: 'none',
  scrollTrigger: {
    trigger: container,
    pin: true,
    scrub: 1,
    end: () => `+=${scrollWidth}`
  }
});
```

### Step 5: Performance Optimization
**Actions**:
1. Lazy load heavy 3D components:
   ```tsx
   const LaserFlow = lazy(() => import('./LaserFlow'));
   ```
2. Add `loading="lazy"` to images
3. Reduce particle counts on mobile
4. Run Lighthouse audit

---

## 📋 QA Checklist

### Contact Flow
- [ ] Nav "Contact" button opens modal
- [ ] Hero "Start Project" opens modal with source="hero"
- [ ] Pricing "Apply" opens modal with plan prefilled
- [ ] CTA "Start Project" opens modal
- [ ] Press `C` key opens modal
- [ ] Form validation works (required fields)
- [ ] Success state shows checkmark animation
- [ ] Email fallback link works

### Interactions
- [ ] `data-magnet` elements pull toward cursor
- [ ] Cursor trail follows mouse smoothly
- [ ] Hero section pins during scroll
- [ ] Smooth scroll works (Lenis active)
- [ ] Services cards have magnetic effect
- [ ] Pricing toggle animates smoothly

### Visual
- [ ] Noise overlay visible (subtle grain)
- [ ] Glass cards show radial gradient on hover
- [ ] Neon colors match brand (blue/purple/pink)
- [ ] Typography uses Inter and Space Grotesk
- [ ] Spacing follows 8pt grid

### Accessibility
- [ ] Tab navigation works on all elements
- [ ] Focus outlines visible
- [ ] Reduced motion disables animations
- [ ] Screen reader labels present
- [ ] Color contrast passes WCAG AA

### Performance
- [ ] Fonts preloaded (no FOIT)
- [ ] LCP < 2.5s
- [ ] No layout shift on load
- [ ] Mobile frame rate stable (>30fps)
- [ ] Particle counts reduced on mobile

---

## 🎨 Design Tokens Reference

### Colors
```css
--space-950: #05080f (background)
--space-900: #0a0f1f (surfaces)
--neon-blue: #60a5fa (primary)
--neon-purple: #a855f7 (secondary)
--neon-pink: #ec4899 (accent)
```

### Typography Scale (1.25)
```
Hero: 6rem (96px)
H1: 4.5rem (72px)
H2: 3rem (48px)
Body: 1.125rem (18px)
Caption: 0.875rem (14px)
```

### Spacing (8pt Grid)
```
1 = 4px
2 = 8px
4 = 16px
8 = 32px
16 = 64px
32 = 128px
```

---

## 🚀 Deployment Checklist

Before going live:
- [ ] Set up environment variables (API keys, email service)
- [ ] Configure DNS and domain
- [ ] Add favicon and OG images
- [ ] Set up analytics (Google Analytics, Plausible)
- [ ] Test contact form end-to-end
- [ ] Run performance audit (Lighthouse score >90)
- [ ] Test on mobile devices
- [ ] Verify reduced-motion works
- [ ] Add error tracking (Sentry)
- [ ] Set up monitoring (Vercel Analytics, etc.)

---

## 📖 Component Documentation

### ContactModal
**Props**:
- `isOpen: boolean` - Modal visibility state
- `onClose: () => void` - Close handler
- `source?: string` - Where modal was opened from
- `prefillPlan?: string` - Pre-selected pricing plan

**Events**: Dispatches analytics events via `trackContactOpen(source)`

### Pricing
**Features**:
- Monthly/yearly billing toggle
- Three pricing tiers
- CTA opens contact modal with plan prefilled
- "How We Price" microcopy

### NoiseOverlay
**Purpose**: Adds global texture overlay for tactile feel
**Config**: SVG-based fractal noise at 0.02 opacity

### SocialProof
**Purpose**: Infinite scrolling client logos
**Animation**: Framer Motion `animate` with loop

---

## 💡 Pro Tips

1. **Performance**: Always test on real mobile devices, not just DevTools
2. **Animations**: Keep ScrollTrigger `scrub` values <1 for smooth feel
3. **Accessibility**: Test with keyboard only before launching
4. **Contact Form**: Add honeypot field to prevent spam
5. **Analytics**: Track modal source to see which CTAs convert best
6. **Fonts**: Use `font-display: swap` to prevent invisible text
7. **Images**: Compress and use WebP format for faster loading
8. **SEO**: Add meta tags for each section (OG, Twitter cards)

---

**Last Updated**: December 8, 2025
**Status**: Core features implemented, ready for API integration and polish
