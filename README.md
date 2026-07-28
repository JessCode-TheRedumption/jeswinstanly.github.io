# Jeswin Stanly A — Portfolio

Built with React, Vite, Tailwind CSS, and Framer Motion.

## Design concept

The site is framed as a live system console — a nod to Business Central's
role-center header — with a "Console / Ledger" theme toggle instead of a plain
light/dark switch: dark mode is the console, light mode is a paper ledger.
Certifications are shown as document statuses (Posted / In Process / Open),
matching real ERP posting vocabulary.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
Output goes to `dist/`.

## Deploy to GitHub Pages

1. Push this project to a GitHub repo.
2. Install the deploy helper:
   ```bash
   npm install -D gh-pages
   ```
3. Add to `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. If deploying to a project subpath (not a custom domain), also set in
   `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/<repo-name>/',
     plugins: [react()],
   })
   ```
5. Run `npm run deploy`, then enable GitHub Pages on the `gh-pages` branch in
   your repo settings.

If you're pointing a custom domain (e.g. jeswinstanly.dev) at this repo,
add a `public/CNAME` file containing just the domain name, and leave
`vite.config.js` base unset.

## Editing content

All resume content — name, roles, skills, projects, certifications, and the
career timeline — lives in `src/data.js`. Update that file and every section
re-renders automatically; you shouldn't need to touch component files for
routine content edits.
