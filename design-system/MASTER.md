# SHIRAA ASIA — Design System (Master)

> **Brand:** شراع اسيا / SHIRAA ASIA
> **Tagline:** لتجارة المواد الصحية والانشائية — Trading in Sanitary & Construction Materials
> **Version:** 1.0 — June 2026

---

## 1. Brand Identity

### Logo Mark (Icon)
Three sail-like vertical parallelograms arranged side-by-side, staggered in height (left shortest → right tallest), forming a triangular rising composition. Each sail is separated by thin white gaps.

### Logo Variants
| Variant | Usage |
|---------|-------|
| **Light** | Green icon + Black text on White background |
| **Dark** | Green icon + White text on Black background |
| **Stacked** | Icon centered above text (both lines centered) |
| **Horizontal** | Icon left, text right (Arabic top, Latin bottom) |
| **Monochrome** | All black or all white (single color) |

### Logo Spacing Rules
- Icon height ≈ 2× the text block height
- Clear space around logo = half the icon width on all sides
- Three sail shapes are equal width, separated by thin gaps

---

## 2. Color Palette

### Core Brand Colors
| Role | Swatch | Hex | CSS Variable |
|------|--------|-----|-------------|
| **Primary Green** | 🟢 | `#2D9B4E` | `--color-primary` |
| **Primary Green Hover** | 🟢 | `#248C42` | `--color-primary-hover` |
| **Dark Green** | 🟢 | `#1A6B35` | `--color-primary-dark` |
| **Brand Black** | ⬛ | `#111111` | `--color-black` |
| **Brand White** | ⬜ | `#FFFFFF` | `--color-white` |

### Semantic Colors
| Role | Hex | CSS Variable |
|------|-----|-------------|
| **Background (Light)** | `#FFFFFF` | `--color-bg-light` |
| **Background (Dark)** | `#0D0D0D` | `--color-bg-dark` |
| **Surface (Light)** | `#F7F7F7` | `--color-surface-light` |
| **Surface (Dark)** | `#1A1A1A` | `--color-surface-dark` |
| **Foreground (Light)** | `#111111` | `--color-foreground-light` |
| **Foreground (Dark)** | `#FFFFFF` | `--color-foreground-dark` |
| **Muted Text (Light)** | `#6B7280` | `--color-muted-light` |
| **Muted Text (Dark)** | `#9CA3AF` | `--color-muted-dark` |
| **Border (Light)** | `#E5E7EB` | `--color-border-light` |
| **Border (Dark)** | `rgba(255,255,255,0.10)` | `--color-border-dark` |
| **Accent / CTA** | `#2D9B4E` | `--color-accent` |
| **Accent Glow** | `rgba(45,155,78,0.20)` | `--color-accent-glow` |
| **Destructive** | `#DC2626` | `--color-destructive` |
| **Success** | `#16A34A` | `--color-success` |
| **Warning** | `#F59E0B` | `--color-warning` |
| **Info** | `#3B82F6` | `--color-info` |

### Green Gradient (Hero / CTA)
```css
--gradient-primary: linear-gradient(135deg, #2D9B4E 0%, #1A6B35 100%);
--gradient-hero: linear-gradient(180deg, #0D0D0D 0%, #1A1A1A 100%);
```

---

## 3. Typography

### Font Families
| Use | Font | Fallback | CSS Variable |
|-----|------|----------|-------------|
| **Arabic Text** | Cairo | Tajawal, sans-serif | `--font-arabic` |
| **Latin Headings** | Montserrat | Inter, sans-serif | `--font-heading` |
| **Latin Body** | Inter | system-ui, sans-serif | `--font-body` |

### Google Fonts Import
```css
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
```

### Type Scale
| Level | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| **Display (Hero)** | 56–72px / 3.5–4.5rem | 800 | 1.1 | -0.02em |
| **H1** | 40–48px / 2.5–3rem | 700 | 1.2 | -0.01em |
| **H2** | 32–36px / 2–2.25rem | 700 | 1.25 | -0.01em |
| **H3** | 24–28px / 1.5–1.75rem | 600 | 1.3 | 0 |
| **H4** | 20px / 1.25rem | 600 | 1.4 | 0 |
| **Body Large** | 18px / 1.125rem | 400 | 1.6 | 0 |
| **Body** | 16px / 1rem | 400 | 1.6 | 0 |
| **Body Small** | 14px / 0.875rem | 400 | 1.5 | 0.01em |
| **Caption** | 12px / 0.75rem | 500 | 1.4 | 0.02em |
| **Button** | 14–16px | 600 | 1 | 0.02em |

### Bilingual Text Rules
- Arabic text is always **RTL** (`dir="rtl"`)
- Latin text is always **LTR** (`dir="ltr"`)
- Arabic on top, Latin below when stacked
- Both use **bold, modern sans-serif** at heavy weights
- Minimum body text size: **16px** (mobile), **18px** (desktop)

---

## 4. Spacing & Layout

### Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Tight gaps, icon padding |
| `sm` | 8px | Inner component spacing |
| `md` | 16px | Standard padding |
| `lg` | 24px | Section inner padding |
| `xl` | 32px | Section gaps |
| `2xl` | 48px | Section separation |
| `3xl` | 64px | Major section breaks |
| `4xl` | 96px | Hero-level spacing |

### Container Widths
| Name | Max Width | Usage |
|------|-----------|-------|
| `narrow` | 640px | Text content, forms |
| `default` | 1024px | General content |
| `wide` | 1280px | Landing sections |
| `full` | 1440px | Hero, full-width sections |

### Grid System
- **12-column grid** on desktop
- **8-column grid** on tablet
- **4-column grid** on mobile
- **Gutter:** 24px desktop / 16px tablet / 12px mobile

### Z-Index Scale
| Token | Value | Usage |
|-------|-------|-------|
| `z-base` | 0 | Normal content |
| `z-dropdown` | 10 | Dropdowns, popovers |
| `z-sticky` | 20 | Sticky nav |
| `z-overlay` | 30 | Modals, overlays |
| `z-toast` | 40 | Toast notifications |
| `z-tooltip` | 50 | Tooltips |

---

## 5. Component Tokens

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| `sm` | 4px | Small elements, tags |
| `md` | 8px | Buttons, inputs |
| `lg` | 12px | Cards |
| `xl` | 16px | Large panels |
| `2xl` | 24px | Hero cards |
| `full` | 9999px | Pills, avatars |

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
--shadow-glow: 0 0 20px rgba(45, 155, 78, 0.25);
```

### Transitions
```css
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
--transition-spring: 400ms cubic-bezier(0.16, 1, 0.3, 1);
```

---

## 6. Buttons

### Primary Button
- Background: `--color-primary` (#2D9B4E)
- Text: white, 600 weight
- Padding: 12px 32px
- Border radius: 8px
- Hover: darken 8%, slight lift (`--shadow-glow`)
- Active: scale(0.98)
- Transition: `--transition-base`

### Secondary Button
- Background: transparent
- Border: 2px solid `--color-primary`
- Text: `--color-primary`
- Same padding/radius as primary
- Hover: fill with `--color-primary`, text → white

### Ghost Button
- Background: transparent
- Border: none
- Text: `--color-primary`
- Hover: subtle background `--color-accent-glow`

---

## 7. Card Styles

### Standard Card
- Background: `--color-surface-light` (light) / `--color-surface-dark` (dark)
- Border: 1px solid `--color-border-light` / `--color-border-dark`
- Border radius: 12px
- Padding: 24px
- Hover: shadow elevation + border glow (green)

### Featured / Glass Card (Dark Mode)
- Background: `rgba(255, 255, 255, 0.05)`
- Border: 1px solid `rgba(255, 255, 255, 0.10)`
- Backdrop filter: `blur(12px)`
- Border radius: 16px
- Hover: border → `rgba(45, 155, 78, 0.30)`, shadow glow

---

## 8. Navigation

### Navbar
- **Style:** Floating, fixed top
- **Background:** `rgba(13, 13, 13, 0.90)` with `backdrop-filter: blur(16px)` in dark mode
- **Height:** 72px
- **Spacing:** `top-4 left-4 right-4` (floating), rounded corners `rounded-2xl`
- **Logo:** Left side (horizontal variant)
- **Links:** Montserrat 500, 16px, white/gray-400
- **CTA:** Primary button, right side
- **Mobile:** Hamburger → full-screen overlay

---

## 9. Landing Page Structure

### Section Order
1. **Hero** — Full-width, dark background, brand statement + CTA
2. **About / Mission** — Company overview, trust signals
3. **Products / Services** — Grid of material categories (sanitary + construction)
4. **Why Choose Us** — USP cards with icons
5. **Projects / Portfolio** — Showcase with images
6. **Testimonials** — Client quotes
7. **Contact / CTA** — Contact form + details
8. **Footer** — Links, social, legal

### Hero Guidelines
- Dark background (`#0D0D0D`)
- Large display text (bilingual: Arabic + English)
- Subtle green gradient accent or glow
- Primary CTA button (green)
- Optional: abstract sail/maritime pattern as decoration

---

## 10. Style Direction

### Design Approach: **Premium Corporate Dark**
- **Overall feel:** Premium, corporate, modern, trustworthy
- **Dark mode is primary** — black backgrounds dominate
- **Green as accent** — never overwhelms, used for CTAs, highlights, hover states
- **Clean geometric shapes** — no unnecessary decoration
- **Generous whitespace** — let content breathe
- **Bilingual** — seamless Arabic (RTL) + English (LTR)

### Anti-Patterns (AVOID)
- ❌ Vibrant / playful colors or shapes
- ❌ Emoji icons (use SVG icons from Heroicons/Lucide)
- ❌ Scale transforms on hover (causes layout shift)
- ❌ Pure white (`#FFFFFF`) backgrounds as default
- ❌ Muted green or low-contrast text
- ❌ Mixing too many font families
- ❌ Infinite animations on decorative elements

---

## 11. Responsive Breakpoints

| Breakpoint | Width | Columns |
|-----------|-------|---------|
| **Mobile** | < 640px | 4 |
| **Tablet** | 640–1024px | 8 |
| **Desktop** | 1024–1440px | 12 |
| **Wide** | > 1440px | 12 (centered) |

---

## 12. Iconography

- **Icon set:** Lucide Icons (consistent, clean, professional)
- **Default size:** 24×24px (`w-6 h-6`)
- **Small:** 20×20px (`w-5 h-5`)
- **Large:** 32×32px (`w-8 h-8`)
- **Stroke width:** 2px
- **Color:** Inherit from parent text color

---

## 13. Accessibility

- **Color contrast:** Minimum 4.5:1 for normal text, 3:1 for large text
- **Focus rings:** Visible green outline (`2px solid --color-primary`)
- **Keyboard navigation:** Tab order matches visual order
- **ARIA labels:** All icon-only buttons and interactive elements
- **Alt text:** All meaningful images
- **Reduced motion:** Respect `prefers-reduced-motion`
- **Touch targets:** Minimum 44×44px

---

## 14. CSS Custom Properties (Tailwind v4)

```css
@import "tailwindcss";

@theme {
  /* Brand Colors */
  --color-primary: #2D9B4E;
  --color-primary-hover: #248C42;
  --color-primary-dark: #1A6B35;

  /* Surfaces */
  --color-surface-light: #F7F7F7;
  --color-surface-dark: #1A1A1A;

  /* Dark Mode Backgrounds */
  --color-bg-dark: #0D0D0D;
  --color-bg-dark-elevated: #141414;

  /* Semantic */
  --color-accent: #2D9B4E;
  --color-accent-glow: rgba(45, 155, 78, 0.20);
  --color-destructive: #DC2626;
  --color-success: #16A34A;
  --color-warning: #F59E0B;
  --color-info: #3B82F6;

  /* Typography */
  --font-arabic: 'Cairo', 'Tajawal', sans-serif;
  --font-heading: 'Montserrat', 'Inter', sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;

  /* Shadows */
  --shadow-glow: 0 0 20px rgba(45, 155, 78, 0.25);
}
```

---

## 15. Tailwind v4 CSS (Ready to Use)

The final `src/style.css` should contain:

```css
@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

@theme {
  --color-primary: #2D9B4E;
  --color-primary-hover: #248C42;
  --color-primary-dark: #1A6B35;
  --color-brand-black: #111111;
  --color-brand-white: #FFFFFF;
  --color-surface-light: #F7F7F7;
  --color-surface-dark: #1A1A1A;
  --color-bg-dark: #0D0D0D;
  --color-bg-dark-elevated: #141414;
  --color-accent: #2D9B4E;
  --color-accent-glow: rgba(45, 155, 78, 0.20);
  --color-destructive: #DC2626;
  --color-success: #16A34A;
  --color-warning: #F59E0B;
  --color-info: #3B82F6;
  --font-arabic: 'Cairo', 'Tajawal', sans-serif;
  --font-heading: 'Montserrat', 'Inter', sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --shadow-glow: 0 0 20px rgba(45, 155, 78, 0.25);
}
```

---

*This design system was generated using the ui-ux-pro-max skill, tailored to the SHIRAA ASIA brand identity.*
