# GitHub Pages Setup Checklist

## ⚠️ IMPORTANT: Verify These Settings on GitHub

1. **Go to your repository**: https://github.com/aryamanjalali/portfolio-website

2. **Check GitHub Pages Settings**:
   - Click **Settings** → **Pages**
   - **Source**: Should be set to **"GitHub Actions"** (NOT "Deploy from a branch")
   - **Branch**: Should be empty (not used when using GitHub Actions)
   - **Custom domain**: Leave empty unless you have one

3. **Check Workflow Permissions**:
   - Go to **Settings** → **Actions** → **General**
   - Under **Workflow permissions**, select:
     - ✅ **Read and write permissions**
     - ✅ **Allow GitHub Actions to create and approve pull requests**

4. **Verify Repository Name**:
   - Repository name should be: `portfolio-website`
   - This matches the base path in `vite.config.js`: `/portfolio-website/`

5. **Check Actions Tab**:
   - Go to **Actions** tab
   - Look for "Deploy to GitHub Pages" workflow
   - Check if it's running or has errors
   - If it failed, click on it to see error details

6. **Manual Trigger** (if needed):
   - Go to **Actions** tab
   - Click **Deploy to GitHub Pages**
   - Click **Run workflow** → **Run workflow**

## Common Issues:

### Issue: "Page build failed"
- **Solution**: Make sure GitHub Pages source is set to "GitHub Actions", not a branch

### Issue: "404 Not Found" when accessing the site
- **Solution**: Wait 5-10 minutes after deployment, GitHub Pages can be slow
- Check the Actions tab to see if deployment completed successfully

### Issue: "Assets not loading"
- **Solution**: Verify the base path in `vite.config.js` matches your repository name exactly

### Issue: "Workflow not running"
- **Solution**: Check workflow permissions in Settings → Actions → General

## Your Site URL:
https://aryamanjalali.github.io/portfolio-website/

## After Making Changes:
1. Push to `main` branch
2. Wait for GitHub Actions to complete (check Actions tab)
3. Wait 2-5 minutes for GitHub Pages to update
4. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

