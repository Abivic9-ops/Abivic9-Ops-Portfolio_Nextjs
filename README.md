Victor Mwendwa Portfolio

A modern, responsive developer portfolio built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion. Showcasing projects, skills, services, and a built in AI chat assistant powered by OpenRouter.

Tech Stack

Next.js 16 with App Router for fast, server rendered pages
React 19 for the latest React features and performance
Tailwind CSS v4 for utility first styling
Framer Motion for smooth animations and transitions
shadcn/ui for accessible, reusable UI components
OpenRouter API for the AI chat assistant
Formspree for the contact form
TypeScript for type safety throughout

Features

Responsive design optimized for phones, tablets, laptops, and large screens
Dark and light theme toggle
Animated hero section with rotating titles
Project showcase with filtering and detailed views
Skills page with interactive categories
Services page with expandable details
Contact form with validation and multiple contact channels
AI chat assistant that answers questions about Victor's work and services
Floating action buttons for quick access to WhatsApp, email, and scroll to top
Command palette for fast navigation
Scroll progress indicator
Mobile friendly navigation with slide out menu

Getting Started

Prerequisites

Node.js 18 or later
npm, yarn, pnpm, or bun

Installation

Clone the repository and install dependencies:

  git clone <repository-url>
  cd portfolio
  npm install

Environment Variables

Copy the example environment file and fill in your values:

  cp .env.example .env.local

Required variables:

  NEXT_PUBLIC_FORMSPREE_ID - Your Formspree form endpoint for the contact form
  OPENROUTER_API_KEY - API key from https://openrouter.ai/keys for the AI chat
  NEXT_PUBLIC_WHATSAPP_NUMBER - WhatsApp number for the floating chat button
  CONTACT_EMAIL - Email address shown in the AI chat responses
  NEXT_PUBLIC_SITE_URL - Your deployed site URL

Optional variables:

  LLM_MODEL - Override the default AI model (default: meta-llama/llama-3.3-70b-instruct:free)

Running Locally

Start the development server:

  npm run dev

Open http://localhost:3000 in your browser to view the site.

Building for Production

  npm run build
  npm start

Deployment

Vercel

This project is optimized for Vercel deployment. Push to a GitHub repository and import it on Vercel:

1. Connect your GitHub repository on vercel.com/new
2. Vercel auto detects Next.js and configures the build
3. Add your environment variables in the Vercel dashboard
4. Deploy

Environment variables must be set in the Vercel dashboard under Settings, Environment Variables. The .env.local file is only used during local development.

Other Platforms

The project can be deployed on any platform that supports Node.js:

  npm run build
  npm start

Project Structure

  src/
    app/            Next.js App Router pages and API routes
      api/chat/     AI chat API endpoint (OpenRouter proxy)
      about/        About page
      contact/      Contact page
      projects/     Projects listing and detail pages
      services/     Services page
      skills/       Skills page
    components/     Reusable React components
      chat/         AI chat widget and related components
      sections/     Page section components (hero, about, contact, etc.)
      ui/           shadcn/ui base components
    hooks/          Custom React hooks
    lib/            Utility functions and data

The AI Chat Assistant

The built in chat assistant uses OpenRouter to connect to free language models. Visitors can ask about Victor's skills, services, projects, and how to get in touch. The chat supports:

Conversation history within a session
Suggested quick reply chips
Rate limiting to prevent abuse
Automatic retry on temporary failures
Responsive design with full screen mode on mobile

To configure the AI model, set the LLM_MODEL environment variable to any model available on OpenRouter.

Customization

Colors and Theme

The color scheme is defined in src/app/globals.css using CSS custom properties. Update the HSL values in the :root and .dark sections to change the palette.

Content

Project data lives in src/lib/projects.ts
Skills data lives in src/lib/skills.ts
Site configuration lives in src/lib/site.ts

Font

The site uses Poppins from Google Fonts, configured in src/app/layout.tsx.

License

This project is personal work by Victor Mwendwa. All rights reserved.
