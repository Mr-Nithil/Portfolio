# Nithil Sheshan | Personal Portfolio

This repository contains my personal portfolio website, built to present my profile, technical skills, projects, publications, certifications, leadership experience, and contact details in one place.

The portfolio is built with React and Vite, and designed to be clean, responsive, and easy to maintain.

## Live Portfolio

View the deployed site here: https://mr-nithil.github.io/Portfolio

## Portfolio Preview

![Portfolio Screenshot](./public/readme_screenshots/Portfolio.png)

## About Me

I am a Mobile Engineer focused on Flutter development, cross-platform app architecture, and production-ready implementation. This portfolio is my central space to showcase real work, technical depth, and engineering growth.

## Connect

- GitHub: https://github.com/Mr-Nithil
- LinkedIn: https://www.linkedin.com/in/nithil-sheshan-4a3945210/
- Medium: https://medium.com/@nithilsheshan
- Email: mailto:nithil.sheshan@gmail.com

## What This Portfolio Includes

- Hero section with personal introduction and quick actions
- About section focused on engineering background and strengths
- Skills and technology highlights
- Project showcase with detailed modal view and image gallery
- Experience and education timeline
- Publications and certifications with preview support
- Leadership and volunteering section with gallery expansion
- Contact section with direct links
- Mobile-first responsive behavior across all sections

## Tech Stack

- React
- Vite
- JavaScript (ES modules)
- CSS (custom responsive styling)

## Project Structure

```text
src/
	components/
	data/
		projects.js
		techIcons.js
	pages/
	styles/
	assets/
public/
	projects/
	certifications/
	leadership-volunteering/
	contact-icons/
```

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deployment (GitHub Pages)

1. Set the homepage in package.json:

```json
"homepage": "https://<your-github-username>.github.io/<your-repo-name>/"
```

2. Deploy:

```bash
npm run deploy
```

3. In repository settings, enable GitHub Pages from the gh-pages branch.

## Personalization Guide

- Update section content in src/components/
- Manage project content in src/data/projects.js
- Manage tech icon mapping in src/data/techIcons.js
- Replace media assets under public/
- Replace CV file in public/ and update the download link if needed

## Notes

This is a personal portfolio project, so the structure and content are intentionally customized for profile presentation rather than a general product workflow.
