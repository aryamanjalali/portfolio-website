# Portfolio Website

A modern, interactive portfolio website built with React, Vite, and Framer Motion. This portfolio showcases your skills, projects, experience, and provides a way for recruiters and potential clients to get in touch.

## Features

- 🎨 **Modern Design** - Beautiful, responsive design with smooth animations
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎭 **Interactive Animations** - Powered by Framer Motion for smooth, engaging animations
- 📱 **Fully Responsive** - Works perfectly on all devices (desktop, tablet, mobile)
- 🎯 **SEO Friendly** - Optimized structure for search engines
- 🌙 **Dark Theme** - Modern dark theme with gradient accents

## Sections

1. **Hero** - Eye-catching introduction with call-to-action buttons
2. **About** - Personal information, stats, and key features
3. **Skills** - Interactive skill cards with progress bars
4. **Projects** - Showcase of your best work with project details
5. **Experience** - Timeline of work experience and education
6. **Contact** - Contact form and social media links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd Website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```

## Customization

### Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update your name, title, and description
   - Add your social media links (GitHub, LinkedIn, Email)

2. **About Section** (`src/components/About.jsx`):
   - Update the about text and statistics
   - Modify the feature cards

3. **Skills Section** (`src/components/Skills.jsx`):
   - Update skills, technologies, and proficiency levels
   - Add or remove skill categories

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace placeholder projects with your actual projects
   - Update project images, descriptions, and links
   - Add your GitHub and demo URLs

5. **Experience Section** (`src/components/Experience.jsx`):
   - Update work experience and education details
   - Add or remove timeline items

6. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information (email, phone, location)
   - Add your social media links
   - Configure form submission (currently shows an alert - you'll need to integrate with a backend service)

### Styling

- Global styles: `src/index.css`
- Component-specific styles: `src/components/*.css`
- Color scheme: Modify CSS variables in `src/index.css`

### Colors

The color scheme can be customized by modifying the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  /* ... */
}
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **CSS3** - Styling with modern features

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Netlify

1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## Form Submission

The contact form currently shows an alert on submission. To make it functional, you can:

1. Use a service like [Formspree](https://formspree.io)
2. Set up a backend API endpoint
3. Use email services like [EmailJS](https://www.emailjs.com/)

## License

This project is open source and available under the MIT License.

## Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Note**: Remember to replace all placeholder content with your actual information before deploying!

