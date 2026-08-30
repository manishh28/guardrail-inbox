# Guardrail Inbox

An independent community solution for NamoID's **The approval inbox for AI agents** challenge.

Guardrail Inbox is a focused proof of concept for human approval of sensitive AI actions. A simulated agent proposes refunds, address changes, and data exports; an authenticated team member reviews, edits, approves, rejects, or executes them. The UI makes expiry, action integrity, single-use execution, and payload-free audit history visible.

## Run locally

```bash
npm install
npm run dev
```

For real NamoID Hosted Auth, create a Browser / SPA application in the Test environment, register `http://localhost:5173/auth/callback`, then run with:

```bash
VITE_NAMOID_CLIENT_ID=namoid_client_test_... npm run dev
```

Without a client ID, the local demo uses an explicit **Enter demo workspace** button. The production path uses `@namoidhq/js`, Hosted Auth redirect, state/PKCE transaction handling, and UserInfo. No client secret or token is committed or persisted.

## What works

- NamoID Hosted Auth integration path for a public SPA.
- Authenticated reviewer state and explicit demo mode.
- Three simulated AI action types.
- Pending, approved, rejected, expired, and executed states.
- Visible proposal/action integrity model and blocked tamper demo.
- Single-use execution UI and payload-free audit trail.
- Responsive UI, keyboard-operable buttons, and mobile layout.
- Automated tests for tampering and replay.

## Known limitations

This is a six-hour POC: data is browser-local, the executor is simulated, and the demo mode is not a security boundary. A production milestone would move action storage and execution to a backend, validate server-side NamoID sessions, persist canonical action hashes, enforce role policy, and add durable idempotency keys.

## AI and external resources

AI assistance was used for implementation scaffolding and copy review. The core workflow, interaction model, and security edge-case tests are intentionally small and readable for human review. Auth integration follows the [NamoID JavaScript SDK documentation](https://docs.namoid.in/sdks/javascript).

## Attribution

**Powered by [NamoID](https://namoid.in/)**. This is an independent community build, not an official NamoID product, security recommendation, audit, or endorsement.

Challenge source: [NamoID Community Challenges](https://challenges.namoid.in/).

Challenge ID: `agent-approval-inbox`  
Contributor: Sarthak Vijayvergiya  
Live demo: Add URL after deployment  
Final commit: Add full SHA at submission time  
Time spent: under 6 hours  
License: MIT

## Submission

Create a public repository from the [official template](https://github.com/namoidhq/namoid-challenge-template/generate), copy this implementation, deploy it over HTTPS, run `git rev-parse HEAD`, and submit the repository, demo, tests, and pinned 40-character commit SHA through the [community build form](https://github.com/namoidhq/namoid-challenges/issues/new?template=community-build.yml).
