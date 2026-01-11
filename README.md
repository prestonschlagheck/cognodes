# CogNodes

A modern, responsive marketing website for CogNodes - a startup studio building AI-powered software for startups and businesses.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Deployment**: Vercel

## Project Structure

```
├── src/app/
│   ├── components/        # React components
│   │   ├── Hero.tsx       # Hero section with animated word morphing
│   │   ├── Navigation.tsx # Collapsible navigation bar
│   │   ├── Services.tsx   # "What We Build" service cards
│   │   ├── Ventures.tsx   # "CogNodes Labs" product showcases
│   │   ├── Stack.tsx      # Technology toolkit section
│   │   ├── WhyUs.tsx      # "What Makes Us Different" section
│   │   ├── Contact.tsx    # Contact form section
│   │   └── Footer.tsx     # Site footer
│   ├── globals.css        # Global styles & CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main landing page
├── public/
│   ├── og-image.png       # Open Graph social sharing image
│   ├── robots.txt         # Search engine directives
│   └── sitemap.xml        # XML sitemap
├── tailwind.config.ts     # Tailwind configuration
├── next.config.mjs        # Next.js configuration
├── vercel.json            # Vercel deployment settings
└── package.json           # Dependencies & scripts
```

## Features

### Hero Section
- Animated word morphing ("Scale", "Ship", "Build")
- Interactive blueprint grid that follows cursor
- Responsive design for all screen sizes

### Navigation
- Collapsible navigation bar that shrinks on scroll
- Dynamic "LABS" badge when viewing the Labs section
- Smooth animations and transitions

### Services ("What We Build")
- Four service categories: Full-Stack Products, AI Integration, Workflow Automation, Websites & Web Apps
- Animated mockup previews for each service
- Alternating layout on mobile for visual variety

### CogNodes Labs
- Showcases internal products: Diffuse.AI and Runbook
- Interactive animated mockups
- Project status indicators

### Additional Sections
- Technology stack showcase with rotating logos
- "What Makes Us Different" value propositions
- Contact section with direct email links

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Design System

The project uses CSS variables for consistent theming:

- **Colors**: Dark theme with blue (`--accent-blue`), purple (`--accent-purple`), and pink (`--accent-pink`) accents
- **Typography**: System font stack with variable font sizes
- **Spacing**: 4px-based spacing scale
- **Border Radius**: Standardized 4px corners

## Deployment

The site is configured for deployment on Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Automatic deployments on push to main

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement for animations
