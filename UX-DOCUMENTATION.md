# UX DOCUMENTATION - NEXA WEB STUDIO

## Design System Foundation

### Typography Scale (Modular Scale 1.25 - Major Third)

```
Hero: 96px (6rem) → text-9xl
H1: 72px (4.5rem) → text-6xl
H2: 60px (3.75rem) → text-5xl
H3: 48px (3rem) → text-4xl
H4: 36px (2.25rem) → text-3xl
H5: 30px (1.875rem) → text-2xl
Body Large: 24px (1.5rem) → text-xl
Body: 18px (1.125rem) → text-lg
Body Small: 16px (1rem) → text-base
Caption: 14px (0.875rem) → text-sm
```

### 8-Point Grid System

All spacing uses multiples of 8px:
- Micro: 8px (2)
- Small: 16px (4)
- Medium: 24px (6)
- Large: 32px (8)
- XLarge: 48px (12)
- XXLarge: 64px (16)
- Section: 128px (32)

### Color Theory - 60-30-10 Rule

**Primary (60%)**: Slate-950 → Slate-900 backgrounds
- #020617 (slate-950)
- #0f172a (slate-900)
- #1e293b (slate-800)

**Secondary (30%)**: Gradients & Accents
- Blue: #3b82f6 → #60a5fa
- Purple: #a855f7 → #c084fc
- Pink: #ec4899 → #f472b6

**Accent (10%)**: Highlights & CTAs
- Cyan: #06b6d4
- Orange: #f97316
- Green: #10b981

### Cognitive Psychology Principles Applied

#### 1. Hick's Law - Choice Reduction
- Navigation limited to 5 core items
- CTAs present max 2 options per section
- Services grid shows 6 categories (3×2)

#### 2. Miller's Law - 7±2 Items
- Stats marquee shows 6 rotating metrics
- Testimonials display 3 at once
- Portfolio features 4 projects initially

#### 3. Jakob's Law - Familiar Patterns
- Navigation at top (expected)
- Logo left, menu center, CTA right
- Scroll indicator at hero bottom
- Footer with standard grid layout

#### 4. Fitts's Law - Target Sizing
- All touch targets minimum 44×44px
- CTA buttons 48px height minimum
- Nav links 40px clickable area
- Magnetic cursor increases effective target

### Layered Shadow System

**Elevation 1** (Cards):
```css
box-shadow:
  0 1px 2px rgba(0, 0, 0, 0.1),
  0 2px 4px rgba(0, 0, 0, 0.08);
```

**Elevation 2** (Hover States):
```css
box-shadow:
  0 4px 8px rgba(0, 0, 0, 0.12),
  0 8px 16px rgba(0, 0, 0, 0.08);
```

**Elevation 3** (CTAs):
```css
box-shadow:
  0 8px 16px rgba(0, 0, 0, 0.15),
  0 16px 32px rgba(0, 0, 0, 0.1),
  0 0 40px rgba(purple, 0.5);
```

### Accessibility Features

1. **Keyboard Navigation**: All interactive elements focusable
2. **ARIA Labels**: Proper semantic markup
3. **Reduced Motion**: Respects prefers-reduced-motion
4. **Color Contrast**: WCAG AA compliant (4.5:1 minimum)
5. **Touch Targets**: 44px minimum per iOS/Android guidelines

### Animation Easing

**Lenis Scroll Curve**:
```js
t => 1 - Math.pow(1 - t, 3.2)
```
- Smooth deceleration
- Long glide tail
- Natural physics feel

**Framer Motion Defaults**:
- Spring: { damping: 25, stiffness: 300 }
- Duration: 0.3s - 0.8s
- Ease: "easeOut" for entries, "easeInOut" for hovers

**GSAP Timelines**:
- Stagger: 0.1s - 0.2s between elements
- Ease: "power3.out" for reveals
- Duration: 0.6s - 1.0s

### Glassmorphism Specifications

**Light Glass**:
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

**Dark Glass**:
```css
background: rgba(0, 0, 0, 0.4);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.05);
```

### Performance Optimization

1. **GPU Acceleration**: `transform: translateZ(0)` on animations
2. **Will-change**: Applied to moving elements only
3. **Image Optimization**: WebP with fallbacks, lazy loading
4. **Code Splitting**: Dynamic imports for 3D scenes
5. **RAF Loop**: Single requestAnimationFrame for all animations

### Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Wide: 1440px+

### Conversion Optimization

1. **F-Pattern**: Hero content follows eye-tracking patterns
2. **Z-Pattern**: Sections alternate reading flow
3. **Visual Hierarchy**: Size, color, spacing guide attention
4. **CTA Placement**: Above fold + strategic sections
5. **Social Proof**: Testimonials with avatars + ratings

---

Built following Apple HIG, Material Design, and Nielsen Norman Group principles.
