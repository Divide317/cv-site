# cv-site

Résumé and portfolio site for Cedric Antony Joseph.

| File | What it is |
|---|---|
| `index.html` | The site: one self-contained page, no build step |
| `status.js` | Project status, progress and learning. Edit this file to update the site |
| `Cedric_Antony_Joseph_Resume.pdf` | One-page résumé (public copy, no phone number) |
| `resume/resume.tex` | LaTeX source of the résumé |

## Updating the site

Everything that changes over time lives in `status.js`: each project's stage, progress
percentage, description and next step, plus the certificates in progress. Change the values,
set `updated` to today's date, commit and push.

The page adds three things live from the public GitHub API on every visit:

- the time of the last push to each project's repository
- recent activity on those repositories
- merged pull requests to other people's repositories (the block appears once there is one)

## Rebuilding the résumé

```sh
cd resume
pdflatex resume.tex                 # public copy, no phone number
cp resume.pdf ../Cedric_Antony_Joseph_Resume.pdf
```

For a copy to send directly, with a phone number in the header:

```sh
pdflatex "\def\phoneline{+00 00000 00000 \textbar{} }\input{resume.tex}"
```

## Publishing

- **GitHub Pages:** Settings, Pages, Source "Deploy from a branch", branch `main`, folder `/ (root)`.
  The site is then served at `https://divide317.github.io/cv-site/`.
- **Vercel:** import this repository; no framework and no build command.
