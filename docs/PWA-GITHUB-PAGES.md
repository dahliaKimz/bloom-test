# Bloom PWA: GitHub Pages setup

1. Extract the ZIP. GitHub Pages requires `index.html` at the repository root.
2. Create a **public** GitHub repository named `bloom-test`. Do not upload any customer weight data, personal backups or credentials.
3. Use **Add file → Upload files** and upload the **contents** of the extracted folder (not the ZIP and not an enclosing parent folder). Commit.
4. Repository **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → Folder: /(root) → Save**.
5. Wait for the published link: `https://USERNAME.github.io/bloom-test/`. Replace USERNAME with yours.
6. Test loading with internet, use browser menu **Install app** (Chrome/Android) or **Share → Add to Home Screen** (Safari/iOS), and test offline after the first successful online visit.
7. Test profile entry, historical logs, export backup, and restore.

## Notes
- This is test deployment, not a finished commercial app or Google Drive automatic backup.
- Browser storage is per origin: moving from localhost to GitHub Pages does not migrate records. Export/restore JSON first.
- Public GitHub Pages publishes the client source code. Never insert secrets or service account keys here.
- Updates to cached assets: bump `CACHE_NAME` in `sw.js` (e.g. `bloom-shell-v2`) after changing files. Existing users might need a reload.
- Reminder currently runs when Bloom is opened, not while closed.
