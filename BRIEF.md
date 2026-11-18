# Briefs

## Packaging v1 — 2026-11-18

Request: package the unchanged linkbox service so I1–I15 pass in `npm run check -- image --new=linkbox:v1`.

Limits: nothing under `tools/` and nothing in `test/app.test.js` may change. Preserve `createApp(db, config)`, the migration CLI and all existing API behavior. Do not add expiry or release scripts in this part. Never put secrets into the image.

Acceptance: I1–I15 all pass; existing tests pass; tools fingerprint is `4b56096c90ea819d`; production rejects missing/default ADMIN_TOKEN without printing its value; shutdown drains in-flight requests within 8 seconds. Keep a separate packaging commit after this clean hand-over commit.
