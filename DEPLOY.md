# Deploy to GitHub Pages — step by step

The site is already committed locally. What's left: create the remote repo on GitHub, push, and enable Pages.

---

## Step 1 — Create the empty repo on GitHub

1. Go to <https://github.com/new>
2. **Repository name:** `masafa-site`
3. **Visibility:** Public (required for free GitHub Pages)
4. **Do NOT** tick "Add a README" — the repo already has one
5. Click **Create repository**

GitHub will show a page with commands. Ignore those; use the ones below.

---

## Step 2 — Push from this Mac

Open Terminal and run:

```bash
cd /Users/malshuaili/mz/masafa_site
git remote add origin https://github.com/mohadsalimweb/masafa-site.git
git push -u origin main
```

The first push will prompt for GitHub credentials. If it asks for a password, don't use your GitHub password — use a **Personal Access Token**:

- Generate one at <https://github.com/settings/tokens?type=beta>
- Give it **Contents: Read and write** permission on `masafa-site` only
- Copy it and paste it when the terminal asks for a password

(Alternatively, install `gh` CLI with `brew install gh` and run `gh auth login` once — much smoother.)

---

## Step 3 — Turn on GitHub Pages

1. On GitHub, go to your `masafa-site` repo
2. **Settings** (top tab) → **Pages** (left sidebar)
3. Under **Build and deployment**:
   - **Source:** *Deploy from a branch*
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Click **Save**

Wait about 60 seconds. The page will refresh with a green banner:

> **Your site is live at** `https://mohadsalimweb.github.io/masafa-site/`

Share that URL with your friend. Done.

---

## Future edits

Any change → commit → push, and the live site updates in ~30 seconds:

```bash
cd /Users/malshuaili/mz/masafa_site
# edit files…
git add -A
git commit -m "Update copy on submissions page"
git push
```

---

## Troubleshooting

**404 when you visit the URL.** Wait another minute; GitHub Pages takes a moment on first deploy. Then hard-refresh (Cmd-Shift-R).

**Fonts look wrong on the live site.** They shouldn't — everything is loaded from Google Fonts over HTTPS. If your friend is on a very locked-down network, they might see the system font fallbacks.

**Arabic page loads Latin fonts / vice-versa.** Confirm the `<html lang="ar">` vs `<html lang="en">` attribute is right. It should be.
