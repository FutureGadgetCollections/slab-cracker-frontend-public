# slab-cracker-frontend-public

Public read-only frontend for **Slab Cracker**. Displays analysis results and stats without authentication.

## Sibling Repos

| Repo | Purpose |
|------|---------|
| `slab-cracker-frontend-admin` | Admin UI (central hub) |
| `slab-cracker-backend` | API + ML pipeline |
| `slab-cracker-frontend-public` | This repo -- read-only results |
| `slab-cracker-data` | Static JSON read by this site |

## Architecture

- Hugo static site, Bootstrap 5 theme
- No authentication -- fully public
- Reads JSON from GitHub Raw (slab-cracker-data) with GCS fallback
- Deployed to GitHub Pages

## Dev Server

```bash
set -a && source .env && set +a && hugo server
```
