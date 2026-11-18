# Notes

## Packaging environment

Host Node is v26.12.0; the packaged runtime is Node 22.14.0 on Alpine 3.21. Six old-client tests also passed inside that image via the tools check.

The agent shell did not inherit newly granted docker group membership. `sg` is unavailable on this machine; running Docker/checks in an installed `newgrp docker` shell worked without changing socket permissions.

## Packaging verification

See packaging-check-log.txt: T1–T3 and I1–I15 all passed (18/18). Fingerprint: `4b56096c90ea819d`. No protected tools/tests were changed. The runtime image contains only migrations/, package.json and src/ in /app. Production configuration remains external; env/production.env is not created or committed.

The packaging checkpoint is not a final under-load submission run. No finding about an incorrect tool was observed during this part.
