---
name: scientific-product-website-frontend
description: >
  Build a static scientific product company website (frontend only).
  Focus on real product data, SSG, and fast visual delivery.
  No database, no backend APIs required at this stage.
---

## Scope

This skill focuses ONLY on frontend implementation:
- Static site generation (SSG)
- Real product data stored in files (TypeScript / Markdown)
- SEO-friendly product pages
- No database
- No authentication
- No admin system

## Tech Stack

- Next.js (App Router, SSG)
- React
- Tailwind CSS
- Static data source:
  - TypeScript files OR
  - Markdown content files

## Data Rules

- Product data MUST come from real extracted content
- No fabricated specifications
- ARC series should be treated as:
  - One product line
  - Multiple models (variants)

## Page Structure

- Home
- Products (list)
- Product Detail
- Services
- About
- Contact

## Rendering Strategy

- Use Static Site Generation (SSG)
- Use generateStaticParams for dynamic routes
- All product pages should be pre-rendered at build time

## Design Principles

- Clean, professional, industrial style
- Specification tables are mandatory
- Avoid excessive animations
- Focus on readability and trust

## Future Compatibility

- Data source should be replaceable by API later
- Page components should not depend on database logic
