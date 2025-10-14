# Game Lobby – Deploy & Environment

## Environment Variables (.env.local)
Copy `.env.local.example` to `.env.local` and fill:

- GOOGLE_APPS_SCRIPT_WEBHOOK_URL=YOUR_APPS_SCRIPT_WEB_APP_URL
- ADMIN_USER=admin
- ADMIN_PASS=changeme

## Local Development
- Command Prompt (recommended on Windows):
  1. cd C:\Users\DEVKRISHNA\game-lobby
  2. "C:\Program Files\nodejs\npm.cmd" run dev
- PowerShell (temporary session bypass):
  1. Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
  2. $env:Path = "C:\Program Files\nodejs;" + $env:Path; npm run dev

## Google Sheets Setup
1. Create a Google Sheet (headers: date, time, section, players, name, phone).
2. Extensions → Apps Script → paste the provided script and Deploy → Web app → Anyone.
3. Put the deployment URL into `GOOGLE_APPS_SCRIPT_WEBHOOK_URL`.

## Vercel Deployment
1. Push this folder to a GitHub repo.
2. Vercel → New Project → Import repository.
3. Project → Settings → Environment Variables: add the three variables above.
4. Add Domain: `gamelobby.co.in`.
5. DNS at registrar: A(@)=76.76.21.21, CNAME(www)=cname.vercel-dns.com.
6. Redeploy; SSL is automatic.

## Admin
- Route: `/admin` (Basic Auth)
- Credentials: `ADMIN_USER` / `ADMIN_PASS`
