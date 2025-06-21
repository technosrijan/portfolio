# Srijan Mukherjee - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, TailwindCSS, and Framer Motion, showcasing the work and journey of Srijan Mukherjee - a data engineer in training and semi-professional guitarist.

## 🚀 Features

- **Modern Design**: Clean, minimal aesthetic with glassmorphism effects and subtle gradients
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Performance Optimized**: Built with Next.js 15 and optimized for speed
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: shadcn/ui
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

\`\`\`
srijan-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Music.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── public/
├── README.md
├── package.json
├── tailwind.config.js
└── tsconfig.json
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/srijan-mukherjee/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information
Update the content in each component file to reflect your own information:
- `components/Hero.tsx` - Name, tagline, and call-to-action buttons
- `components/About.tsx` - Personal bio and education details
- `components/Projects.tsx` - Your projects and achievements
- `components/Music.tsx` - Musical background and influences
- `components/Skills.tsx` - Technical and creative skills
- `components/Contact.tsx` - Contact information and social links

### Styling
- Colors and gradients can be customized in `tailwind.config.js`
- Global styles are in `app/globals.css`
- Component-specific styles use TailwindCSS classes

### Images
Replace placeholder images in the `public/` directory with your own:
- Hero background image
- Project screenshots
- Profile photos

## 📱 Sections Overview

### Hero Section
- Eye-catching introduction with animated background
- Call-to-action buttons for projects and music
- Smooth scroll navigation

### About Me
- Personal introduction and background
- Educational information (dual degree details)
- Academic achievements and current focus

### Projects
- Featured projects with detailed descriptions
- Technology stacks and key features
- Links to GitHub repositories and live demos
- Highlighted: TDS Virtual TA project

### Music
- Information about Bengali rock band "Khobor"
- Musical influences and inspirations
- Links to music platforms and social media
- Equipment and production tools

### Skills
- Technical skills (Python, FastAPI, AI/ML, etc.)
- Music production skills
- Currently learning section
- Categorized skill display

### Contact
- Contact form with validation
- Social media links
- Professional networking information

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Manual Deployment
1. Build the project: `npm run build`
2. Export static files: `npm run export` (if using static export)
3. Deploy the generated files to your hosting provider

## 🔧 Environment Variables

Create a `.env.local` file for any environment-specific configurations:

\`\`\`env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
\`\`\`

## 📈 Performance Optimizations

- **Image Optimization**: Uses Next.js Image component for automatic optimization
- **Code Splitting**: Automatic code splitting with Next.js App Router
- **Lazy Loading**: Components load as they enter the viewport
- **Caching**: Optimized caching strategies for static assets
- **Bundle Analysis**: Use `npm run analyze` to analyze bundle size

## 🎯 SEO Features

- Semantic HTML structure
- Meta tags and Open Graph data
- Structured data for better search engine understanding
- Optimized images with alt text
- Fast loading times and Core Web Vitals optimization

## 🧪 Testing

Run the type checker:
\`\`\`bash
npm run type-check
\`\`\`

Run the linter:
\`\`\`bash
npm run lint
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons
- [shadcn/ui](https://ui.shadcn.com/) for accessible UI components

## 📞 Support

If you have any questions or need help with customization, feel free to reach out:
- Email: srijan.mukherjee@example.com
- GitHub: [@srijan-mukherjee](https://github.com/srijan-mukherjee)
- LinkedIn: [Srijan Mukherjee](https://linkedin.com/in/srijan-mukherjee)

---

**Built with ❤️ by Srijan Mukherjee**
