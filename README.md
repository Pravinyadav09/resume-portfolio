# Rishita Parashar - AI Developer Portfolio

A stunning, modern portfolio website built with **Next.js 16**, **Three.js**, and **Framer Motion**. Features a premium dark theme with glassmorphism design, 3D background animations, and smooth scroll interactions.

## ✨ Features

- 🎨 **Premium Design**: Dark theme with glassmorphism effects and gradient accents
- 🌌 **3D Background**: Interactive floating geometric shapes using Three.js and React Three Fiber
- ⚡ **Smooth Animations**: Powered by Framer Motion for scroll reveals and micro-interactions
- 📱 **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- 🎯 **Interactive Elements**: Hover effects, smooth scrolling, and dynamic navigation
- 🔷 **Modern Icons**: Lucide React icons throughout
- 🚀 **Performance Optimized**: Built with Next.js App Router and TypeScript
- 🎭 **Loading Screen**: Premium loading animation on initial page load

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: CSS Modules (Vanilla CSS)
- **Font**: Inter (Google Fonts)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx             # Main page component
│   │   └── globals.css          # Global styles and CSS variables
│   └── components/
│       ├── Background3D.tsx     # 3D animated background
│       ├── Navbar.tsx           # Responsive navigation bar
│       ├── Loader.tsx           # Loading screen
│       ├── Hero.tsx             # Hero section
│       ├── About.tsx            # About section
│       ├── Skills.tsx           # Skills showcase
│       ├── Education.tsx        # Education timeline
│       ├── Projects.tsx         # Featured projects
│       ├── Contact.tsx          # Contact information
│       ├── Footer.tsx           # Footer
│       ├── ScrollToTop.tsx      # Scroll to top button
│       └── *.module.css         # Component-specific styles
├── package.json
└── README.md
```

## 🎨 Design Features

### Glassmorphism
- Frosted glass effect with backdrop blur
- Semi-transparent backgrounds
- Subtle borders and shadows

### 3D Elements
- Anti-gravity themed floating geometric shapes
- Interactive hover effects on 3D objects
- Dynamic lighting and materials

### Animations
- Scroll-triggered reveal animations
- Smooth page transitions
- Micro-interactions on hover
- Loading screen with progress bar

### Color Palette
- Primary: Cyan (#00ffff)
- Secondary: Purple (#bd00ff)
- Background: Deep Dark (#050510)
- Card Background: Semi-transparent dark

## 📱 Responsive Design

- **Desktop**: Full-width layout with sidebar navigation
- **Tablet**: Optimized grid layouts
- **Mobile**: Hamburger menu, stacked sections, touch-friendly buttons

## 🔧 Customization

### Update Personal Information

Edit the following files:
- `src/components/Hero.tsx` - Name and title
- `src/components/About.tsx` - About description
- `src/components/Skills.tsx` - Skills data
- `src/components/Education.tsx` - Education timeline
- `src/components/Projects.tsx` - Project details
- `src/components/Contact.tsx` - Contact information and social links

### Modify Colors

Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --background: #050510;
  --foreground: #ffffff;
  --primary: #00ffff;
  --secondary: #bd00ff;
  --glass: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
  --card-bg: rgba(10, 10, 25, 0.8);
}
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Rishita Parashar**
- Email: rishitaparashar931@gmail.com
- Phone: 9926147939
- LinkedIn: [linkedin.com/in/rishitaparashar](https://linkedin.com/in/rishitaparashar)
- GitHub: [github.com/rishitaparashar](https://github.com/rishitaparashar)

---

Built with ❤️ using Next.js & Three.js
