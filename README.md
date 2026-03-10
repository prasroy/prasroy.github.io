# Personal GitHub Pages Site

A clean starter website for your bio and blog, designed for GitHub Pages.

## Included

- Home page with bio and contact section
- Blog listing page
- Three sample blog posts
- Responsive custom styling and subtle animation

## Customize quickly

1. Update your name and email in these files:
   - `index.html`
   - `blog/index.html`
   - `posts/*.html`
2. Edit post metadata in `assets/js/posts.js`.
3. Add new post HTML files under `posts/` and append entries to `POSTS`.

## Run locally

Open `index.html` directly in browser, or run a static server:

```powershell
cd c:\prasdata\gitspace
python -m http.server 8080
```

Then visit http://localhost:8080.

## Publish to GitHub Pages

1. Create a repository named `prasroy.github.io`.
2. Push this project to the repository.
3. In GitHub repo settings, open Pages and set:
   - Source: Deploy from a branch
   - Branch: `main` and `/ (root)`
4. Wait for deployment and open:
   - `https://prasroy.github.io`
