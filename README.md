# GRABS project page (anonymous)

Static, dependency-free project page for the paper
*GRABS: Graded Satisfaction and Belief-Guided Search for Demand-Driven Navigation* (under double-anonymous review).

- `index.html` — the page (single file; Bulma CSS vendored in `static/css/bulma.min.css`, no external scripts, no analytics)
- `static/images/` — figures converted from the paper's PDFs, and five hardware panoramas (logos and bystanders blurred)
- `static/pdfs/GRABS_paper.pdf` — the anonymized paper
- `.nojekyll` — tells GitHub Pages to serve the files as-is

## Preview locally

    python3 -m http.server 8000
    # open http://localhost:8000

## Publish (later)

1. Create a fresh GitHub account (not a personal one) and a repository named `<account>.github.io`.
2. Commit with an anonymous git identity, e.g. `git -c user.name="Anonymous" -c user.email="anon@example.com" commit ...`.
3. Settings → Pages → Deploy from branch `main`, folder `/ (root)`.
4. Open the URL in a private window and re-run the checklist below.

## Anonymity checklist before every publish

- No author names, affiliations, lab names, robot namespaces, or internal paths anywhere in the repo.
- Every photo checked for logos, badges, and bystanders (blurred where present).
- PDF metadata has empty Author/Title fields (`pdfinfo static/pdfs/GRABS_paper.pdf`).
- No links to personal GitHub, Overleaf, YouTube, or Google Drive accounts.
