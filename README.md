# Streamline NextJS Template

Streamline NextJS Template is a premium template built by https://www.shadcnblocks.com

- [Demo](https://streamline-nextjs-template.vercel.app/)
- [Documentation](https://docs.shadcnblocks.com/templates/getting-started)

## Screenshot

![Streamline NextJS Template screenshot](./public/og-image.jpg)

## Getting Started

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- Nextjs 15 / App Router
- Tailwind 4
- shadcn/ui

## Contributors

This project is maintained by the current development team.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com)

```bash
npx vercel --prod
```

```bash
git checkout -b backup-branch
git push origin backup-branch
```

```bash
git filter-branch --env-filter '
if [ "$GIT_AUTHOR_NAME" = "franagl" ]; then
    export GIT_AUTHOR_NAME="zircai"
    export GIT_AUTHOR_EMAIL="zircai99@gmail.com"
fi
if [ "$GIT_COMMITTER_NAME" = "franagl" ]; then
    export GIT_COMMITTER_NAME="zircai"
    export GIT_COMMITTER_EMAIL="zircai99@gmail.com"
fi
' --tag-name-filter cat -- --all
```

```bash
git push origin main --force
```

```bash
git branch -D backup-branch
git push origin --delete backup-branch
```

```bash
git remote -v
```

# Create a new orphan branch
git checkout --orphan temp_branch

# Add all files to the new branch
git add -A

# Commit the files
git commit -m "Initial commit"

# Delete the main branch
git branch -D main

# Rename the current branch to main
git branch -m main

# Force push to GitHub
git push -f origin main

```bash
git remote -v
```

</rewritten_file>