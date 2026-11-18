# AI-LOG.md — IA#4

## 2026-11-18 — Packaging v1

Tool: Codex

Asked for: package the unchanged service so I1–I15 pass; protect tools/ and test/app.test.js.

Baseline: clean starter commit `9bc9549`, tag `starter`; packaging brief committed separately as `e1f170c` before implementation.

Kept: pinned Node 22.14.0 Alpine image, allowlisted build context, explicit runtime COPY, user node and writable /data, build-time APP_VERSION, environment configuration and production token validation, Docker healthcheck, exec-form Node startup, graceful SIGTERM/SIGINT shutdown, migrations separate from npm start.

Changed: replaced hardcoded runtime configuration and shell-form startup from the starter; retained createApp and migration CLI unchanged. Replaced the initial placeholder AI-log template with this actual record.

Rejected: the assistant attempted `sg docker -c ...` to apply the new Docker group, but the command failed with `sg: command not found`. Used an installed `newgrp docker` shell instead; Docker then reported version 29.9.2. No packaging implementation failed the first image-check run; do not invent a rejected code change.

By hand: the user checked the initial environment and reported Docker permission errors before this implementation.

Verification: `npm test` — 6 passed, 0 failed. `npm run check -- tools image --new=linkbox:v1` — 18/18 passed, including I1–I15, T1–T3; see packaging-check-log.txt. Image size 222 MB; I10 request completed with 200 and Docker stop took 1.3 seconds. Fingerprint `4b56096c90ea819d`; protected paths unchanged against starter.

Scope: packaging only; expiry and deployment automation remain for later parts. packaging-check-log.txt is a packaging checkpoint, not the final post-load check-log.txt.
