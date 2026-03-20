# CLAUDE.md — cv

## Project Overview

Thomas Berg's personal CV / portfolio site. A static React app with no backend, served from a Google Cloud Storage bucket. Also hosted locally on the NUC for development and testing.

- **Live site:** http://thomasberg.me
- **Repo description:** "My personal CV. Always open to opportunities as a TPM."

## Tech Stack

- **Framework:** React 16 (JavaScript, ES6+)
- **Styling:** SASS (indented syntax) + autoprefixer
- **Routing:** react-router-dom v5
- **Testing:** jest, @testing-library/react, @testing-library/jest-dom
- **Build:** react-scripts (Create React App) 3.x
- **Package manager:** npm
- **Infrastructure:** Google Cloud Storage (static hosting, no backend)

## Local Development

```bash
npm install       # Install dependencies
npm start         # Dev server at http://localhost:3000
npm run build     # Production build → /build
npm test          # Run jest test suite
```

## Project Structure

```
public/           # Static assets, index.html, favicons
src/
  components/     # React components (grouped in subfolders when 3+ are related)
  scripts/        # Vanilla JS utilities, grouped by purpose
  styles/         # SASS files (.sass, indented syntax)
jest.config.js    # Jest configuration
```

## Content

This repo contains personal/professional content — work history, skills, and contact info. When making changes:

- Keep content factual and up to date
- Do not fabricate or embellish work history, dates, or accomplishments
- All copy changes should be reviewed before deploying to production

## Code Style

Follows the same conventions as `breadsheet-ui`. Key rules:

### JavaScript / React

- **ES6+ syntax** (arrow functions, template literals, destructuring)
- **Double quotes** for all strings
- **Functional components** — no class-based components
- **Self-closing JSX tags** wherever possible
- Separate business logic from UI; add comments above new functional blocks

#### JSX Props

```jsx
// 2 or fewer short props → inline
<img src={headshot} alt="Thomas Berg" />

// 3+ props → one per line, first prop inline, closing /> on last-prop line
<img src={headshot}
     alt="Thomas Berg"
     className="profile-photo"
     loading="lazy" />
```

#### Component Naming

- PascalCase, no punctuation
- Verb-first when a verb is present
- HTML-element prefixes (`Btn`, `Form`, `Nav`, `Header`, `Footer`, etc.)
- 3+ related components → subfolder under `src/components/`

### SASS

- **Indented syntax** — no braces, no semicolons
- Variables at top: **Fonts → Color palette → Layout defaults**
- Lowercase, hyphen-separated, operative word first
- Triple-asterisk section headers, two blank lines before / one after
- Children nested under their parent; no blank lines between parent and children

## Deployment

This is a **pure static app** — no server, no backend, no API calls.

```bash
npm run build     # Generates /build with all static assets
```

Upload the contents of `/build` to the Google Cloud Storage bucket configured for `thomasberg.me`. Ensure the bucket is set to public, with `index.html` as the default document and a 404 page configured.

For local testing, `npm start` is sufficient.

## Notes for Claude

- There is **no backend** — do not suggest adding API calls, a server, or a database
- Keep the bundle lean; avoid adding heavy dependencies for a static CV site
- SASS indented syntax only — no SCSS, no CSS modules, no styled-components
- Content accuracy matters; always flag uncertain content rather than guessing
- React 16 is in use — avoid React 18+ APIs (e.g., `createRoot`)
