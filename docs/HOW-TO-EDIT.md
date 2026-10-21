# Editing Bloom — mini lesson

## 1. Change text, creator, or links

Open `js/config.js` and edit strings inside quotes. For a verified website link, write `url: "https://your-site.example"`. Empty links are hidden from the footer. Save and refresh the page.

To change the copy in a card, search for the exact text (e.g. `Your weight journey`) in `index.html`. Some dynamic descriptions are in `js/app.js`.

## 2. Change brand colors

Open `css/style.css`. Find `:root` near the first line. Variables define the light mode palette:

- `--green`: button and positive trend color
- `--bg`: main background
- `--surface`: card background
- `--ink`: text color
- `--up`: graph increase color

Below that, `[data-theme=dark]` has a second palette. Change both palettes so dark mode remains legible. Keep sufficient contrast and test chart labels.

## 3. Structure

- HTML = structure and static content.
- CSS = how the app looks.
- JavaScript = what happens when you click and how data is calculated/stored.
- IndexedDB = on-device browser database named `bloom-v3` (we intentionally kept this name for compatibility on the SAME ORIGIN).

## 4. Do not lose data

Before changing storage code or the app URL, export a JSON backup. Then use Restore Preview to check counts and profile names before confirming. Do not edit database names or object-store keys until we plan a migration.

## 5. Quick practice

1. In `js/config.js`, change the tagline. Refresh.
2. In `css/style.css`, change `--green` slightly. Refresh; test light and dark mode.
3. Add a real verified website URL to `links`. Refresh; click it.
4. Export a backup and store the JSON safely.
