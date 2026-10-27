# Website maintenance

Notes on previewing and publishing this personal blog and portfolio, and where to make common updates.

## Run and preview

Use the latest patch release of Node.js 22 and npm. From the repository root, run:

```bash
npm ci
npm run dev
```

Open the local URL shown in the terminal, usually http://localhost:4321. After making changes, check the production build and preview it:

```bash
npm run build
npm run preview
```

The build output is saved in `dist/`. Press Ctrl+C to stop the preview server.

## Publish and check failures

Merging a PR into `main` triggers the [deployment workflow](../.github/workflows/deploy.yml), which installs dependencies, builds the site, and publishes it to GitHub Pages. The workflow can also be started manually in GitHub Actions.

Check the [Deploy to GitHub Pages runs](https://github.com/kkcrafter/kkcrafter.github.io/actions/workflows/deploy.yml) for results. If a run fails, open its `build` or `deploy` job and read the logs for the failed step.

## Where to make changes

| Task | Location |
| --- | --- |
| Add or edit a post | [src/content/blog](../src/content/blog), under `en`, `de`, or `zh`. Matching filenames connect translated versions. |
| Update project links, technology tags, or layout | The `projects` array and page markup in [ProjectsPage.astro](../src/components/ProjectsPage.astro). |
| Edit project descriptions or interface translations | [ui.ts](../src/i18n/ui.ts). Project descriptions use the `projects.*` keys. |
| Edit About content | Each language directory’s `about.md` in [src/content/pages](../src/content/pages). |
| Update Notes | [notes.ts](../src/data/notes.ts). |

To create a post, replace `en` with the desired language and `my-post` with a lowercase, hyphen-separated name:

```bash
npm run new-post -- en my-post
```

Fill in the generated Markdown file’s title, description, date, tags, and body. Drafts are added to `.gitignore` and kept out of version control. When the post is ready, run:

```bash
npm run publish-post -- en my-post
```

This sets `draft` to `false` and removes the post’s ignore rule. Check the build, then include the post and `.gitignore` changes in a PR. The command itself does not push or deploy anything.
