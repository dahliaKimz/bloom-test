# Bloom — Liavelle.Design

A local-first weight tracker. This project refactors the working single-file Bloom V3 prototype into editable source files. No cloud backup or public deployment has been added in this phase.

## Run locally (recommended)

1. Install Visual Studio Code (or use any text editor).
2. Open this folder in VS Code.
3. Open a terminal inside the folder, run `python -m http.server 8000` (or `python3 -m http.server 8000`).
4. Open http://localhost:8000 in Chrome.

Do not rely on double-clicking `index.html`: browsers may restrict storage for `file://` pages and those pages have separate storage from `http://localhost:8000`.

## Where to edit

- `js/config.js`: app name, creator, tagline, social links.
- `css/style.css`: colors (`:root` and `[data-theme=dark]`), spacing, buttons and layout.
- `index.html`: fixed wording and section layout.
- `js/app.js`: logic, calculations, IndexedDB, chart, backup/import, reminder.
- `docs/HOW-TO-EDIT.md`: beginner-friendly examples.
- `docs/TEST-CHECKLIST.md`: acceptance checks before a commercial launch.

## IMPORTANT: preserve your previous data

Data from the previous `.html` file does NOT automatically migrate to localhost or a different website domain. Open the OLD Bloom app in the SAME browser/location used previously, export a JSON backup via Settings, then start this project and import the backup. Keep an extra copy before replacing any local data.

Data is in browser IndexedDB, not Google Drive. JSON backup is manually exported. The reminder only runs when the app is open. This is a learning prototype and not a security-audited commercial release.

## Files

```text
Bloom_Source_Project/
  index.html
  css/style.css
  js/config.js
  js/app.js
  docs/HOW-TO-EDIT.md
  docs/TEST-CHECKLIST.md
  README.md
```
