# Nithil Sheshan Portfolio

Minimal, modern, Flutter-focused developer portfolio built with React + Vite.

## Features

- Dark mode by default with light mode toggle and persistence
- Modular components and data-driven project cards
- Project details modal with image carousel
- Smooth section reveal animations and scroll progress bar
- Responsive mobile-first layout
- SEO-ready metadata and static deployment support

## Project Structure

```text
src/
	components/
	data/
		projects.js
	pages/
	styles/
	assets/
public/
	projects/
```

## Run Locally

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

1. Update the `homepage` value in `package.json`:

```json
"homepage": "https://<your-github-username>.github.io/<your-repo-name>/"
```

2. Install dependencies:

```bash
npm install
```

3. Deploy:

```bash
npm run deploy
```

4. In repository settings, enable GitHub Pages from the `gh-pages` branch.

## Customization

- Update personal info in component files under `src/components/`
- Add/edit projects in `src/data/projects.js`
- Replace placeholder CV at `public/Nithil-Sheshan-CV.pdf`
