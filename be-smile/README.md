# BE SMILE – Child Development Center & Rehabilitation Centre

A production-ready, accessible, and responsive website built for **BE SMILE Child Development Center & Rehabilitation Centre**.

> **"Helping Little Minds Grow, Learn & Shine"**  
> *"We try to make your life beautiful"*

---

## 🎨 Brand Identity & Theme Palette

The visual design system is directly inspired by the official **BE SMILE** logo:

| Color Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| `--primary` | `#10B9C3` | Turquoise – Primary brand identity & accents |
| `--primary-dark` | `#079BA5` | Dark turquoise hover & active states |
| `--purple` | `#7A43D8` | Secondary brand color & headers |
| `--orange` | `#FFAA18` | Warm Amber – High-priority CTA buttons |
| `--green` | `#63C32D` | Natural Green – Highlights, checkmarks & badges |
| `--navy` | `#102A5C` | Deep Navy – Headings & high-contrast typography |
| `--light-cyan` | `#F0FCFD` | Soft pastel background for sections & cards |
| `--light-purple` | `#F7F3FF` | Soft lilac background for "Why Choose Us" |
| `--light-orange` | `#FFF8E9` | Gentle amber background for testimonials |
| `--white` | `#FFFFFF` | Base background and clean card surfaces |

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: [Google Fonts: Poppins & Nunito](https://fonts.google.com/) via `next/font/google`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Image Optimization**: `next/image` with responsive `sizes`

---

## 📂 Project Architecture

```text
be-smile/
├── app/
│   ├── layout.tsx         # Root layout with fonts, SEO meta & sticky navbar
│   ├── page.tsx           # Homepage with all 10 required sections in order
│   ├── globals.css        # Design tokens, keyframes & soft shadow utilities
│   ├── about/
│   │   └── page.tsx       # Mission, philosophy & core values
│   ├── services/
│   │   └── page.tsx       # 6 Comprehensive therapy disciplines
│   ├── team/
│   │   └── page.tsx       # Licensed clinical faculty & therapist bios
│   ├── gallery/
│   │   └── page.tsx       # Therapy rooms & child-safe facilities
│   └── contact/
│       └── page.tsx       # Online assessment booking & contact desk
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Responsive sticky navbar with mobile drawer
│   │   └── Footer.tsx     # 4-Column footer with contact & social links
│   ├── home/
│   │   ├── Hero.tsx            # Attractive hero with multi-color heading
│   │   ├── TrustHighlights.tsx # Credentials and value pillars
│   │   ├── Services.tsx        # 6 Interactive therapy service cards
│   │   ├── About.tsx           # Two-column story with 3 support points
│   │   ├── WhyChooseUs.tsx     # Soft purple section with 4 circular features
│   │   ├── Stats.tsx           # Horizontal stats with editable constants
│   │   ├── CenterGallery.tsx   # 4 Facility rooms with hover zoom
│   │   ├── Testimonials.tsx    # "What Parents Say" with star ratings
│   │   ├── TeamPreview.tsx     # 4 Team cards with qualification details
│   │   └── CTA.tsx             # Large curved turquoise banner with CTA
│   └── ui/
│       ├── Button.tsx          # Reusable button with variants & sizes
│       ├── SectionHeading.tsx  # Consistent badges & responsive headings
│       └── ServiceCard.tsx     # Typed card with custom brand accents
│
├── public/
│   └── images/
│       ├── logo.png            # Official BE SMILE logo
│       ├── hero/hero-child.jpg # High-resolution hero toddler image
│       ├── about/about-therapy.jpg
│       ├── gallery/            # Therapy room, sensory gym, play arena, counseling
│       └── team/               # Pediatric therapists portraits
│
├── lib/
│   └── constants.ts            # Centralized editable data (Stats, Services, Team)
│
├── types/
│   └── index.ts                # Strict TypeScript interfaces
│
└── README.md
```

---

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
pnpm install
# or
npm install
```

### 2. Run the Development Server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
pnpm build
pnpm start
```

---

## 📝 Editing Content

All client-facing numbers, therapists, testimonials, and contact details are conveniently located in:

```typescript
lib/constants.ts
```

- **Statistics**: Update the `STATS` array to reflect current student milestones.
- **Therapies**: Modify or add services in the `SERVICES` array.
- **Testimonials**: Replace placeholder reviews in `TESTIMONIALS`.
- **Team**: Update clinician bios, photos, and certifications in `TEAM_MEMBERS`.
- **Images**: Drop new client photos directly into `/public/images/`.
