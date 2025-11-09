# GitHub Pages Deployment Guide

## Automatic Deployment (Recommended)

The repository is set up with GitHub Actions to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup Steps:

1. **Enable GitHub Pages:**
   - Go to your repository: https://github.com/aryamanjalali/portfolio-website
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the changes

2. **First Deployment:**
   - The workflow will automatically run when you push to `main`
   - Or manually trigger it: Go to **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

3. **Access Your Site:**
   - Your site will be available at: `https://aryamanjalali.github.io/portfolio-website/`
   - It may take a few minutes for the first deployment

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
npm run build
npm run deploy
```

This uses `gh-pages` to deploy the `dist` folder to the `gh-pages` branch.

## Local Development

To run the website locally:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Troubleshooting

- **404 errors on GitHub Pages**: Make sure the `base` path in `vite.config.js` matches your repository name
- **Assets not loading**: Check that all paths use relative URLs
- **Build fails**: Check the Actions tab in GitHub for error details

