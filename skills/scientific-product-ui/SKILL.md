---
name: scientific-product-ui
description: "UI/UX design and implementation guidance for scientific or industrial instrument product websites, especially Next.js marketing sites. Use when designing pages, components, or a design system for lab equipment, analytical instruments, measurement devices, or technical products that need credibility, specs, applications, certifications, downloads, and service content."
---

# Scientific Product UI

## Goal
Build a high-trust, technical, and modern UI for scientific product websites. Prioritize clarity of specs, applications, and credibility over flashy effects.

## Quick Start
1) Collect inputs: brand assets, product lines, key specs, target industries, primary CTA (quote/demo/contact), certifications, downloadable assets.
2) Choose IA and sections (see "Information Architecture").
3) Generate a design system (colors, typography, spacing, components).
4) Assemble page layouts with predictable, scannable content blocks.
5) Validate accessibility, performance, and mobile layout.

## If ui-ux-pro-max is available
Use it first to generate a design system, then overlay the domain rules below.

Suggested query:
- "scientific instruments industrial testing laboratory equipment technical product".

Example (if the script exists in your environment):
- python3 skills/ui-ux-pro-max/scripts/search.py "scientific instruments industrial testing laboratory equipment" --design-system -p "Scientific Product Site" -f markdown

If the script is not available, use the default design system in this skill.

## Information Architecture
Use a navigation model similar to scientific instrument sites:
- Home
- Products (categories + model list)
- Applications / Industries
- Resources (datasheets, brochures, videos)
- Services / Support
- About
- Contact

## Default Design System
### Color Palette (Precision Blue)
- Background: #F6F8FB
- Surface: #FFFFFF
- Text primary: #0F1B2D
- Text secondary: #46536A
- Border: #D9E1EC
- Primary: #2F6BFF
- Primary dark: #1E4FD9
- Accent teal: #00A3A3
- Accent amber (sparingly): #F2A900

### Typography (avoid default system fonts)
Pick one pairing:
- Headings: "Space Grotesk"; Body: "Source Sans 3"
- Headings: "Sora"; Body: "IBM Plex Sans"
- Headings: "Manrope"; Body: "Work Sans"

Scale (desktop):
- H1 48/56, H2 36/44, H3 28/36, H4 22/30
- Body 16/26, Small 14/22, Caption 12/18

### Spacing & Radius
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96
- Radius: 8 for cards, 12 for hero containers, 999 for pills
- Shadow: 0 8px 24px rgba(15,27,45,0.08)

### Iconography
- Use a single SVG icon set (Lucide or Heroicons). No emoji icons.

## Layout Patterns
### Hero
- Left: value prop + 2-3 key metrics + primary CTA
- Right: product image or lab scene
- Add a slim metric strip below hero (accuracy, temperature range, resolution)

### Product Categories
- 2-4 category cards with short spec highlights
- Include "Learn more" and "Download datasheet" actions

### Featured Product
- Split layout: image + short copy + spec table
- Spec table: 5-8 rows, units aligned, abbreviations explained in tooltips

### Applications / Industries
- 6-9 cards with icon + short use case
- Include case study links if available

### Certifications & Trust
- Horizontal strip with ISO/CE/industry standard badges
- Add partner logos if real and approved

### Resources
- Cards for datasheets, brochures, whitepapers, videos
- Always include file type and size

### Service & Support
- 3-4 cards: calibration, maintenance, training, remote support

### News / Updates
- Compact list with date + category + title

### Contact Block
- Direct phone, email, address, and CTA
- Provide a short form if lead capture is needed

## Component Inventory
- Primary / secondary buttons with clear hover states
- Product card with image, model name, 2-3 specs, CTA
- Spec table (striped rows, sticky header on scroll)
- Application card with icon and short description
- Download card with metadata
- Certification badge component
- Contact card + map embed

## UX Rules
- Keep layouts grid-based and aligned.
- Use subtle gradients and soft shadows; avoid heavy glass effects.
- Avoid motion-heavy hero effects; use 150-250ms transitions.
- Ensure 4.5:1 contrast for body text.
- Focus states must be visible for keyboard navigation.
- Use consistent container width (max-w-7xl).

## Next.js Implementation Notes
- Use next/image for all product imagery.
- Keep sections as reusable components: Hero, ProductGrid, SpecTable, Applications, Resources, Certifications, Support, News, Contact.
- Use CSS variables for colors and spacing tokens.
- Avoid layout shift by reserving image aspect ratios.

## Copy Tone
- Technical, confident, and factual.
- Use units and ranges (e.g., "-70 to 350 C", "0.01 mg resolution").
- Avoid marketing fluff; show measurable value.

## Review Checklist
- Navigation labels are technical and unambiguous
- Key specs visible above the fold
- Datasheet download is easy to find
- Certifications and compliance visible
- Mobile layout has no horizontal scroll
- CTA appears in hero and near specs

Images are provided by the user and already exist under /public/images.
Use the image paths exactly as defined in the product JSON.
Do NOT invent, generate, or assume any missing images.
If an image is missing, render a neutral placeholder block instead.


