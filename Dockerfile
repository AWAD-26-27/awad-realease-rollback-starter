FROM node:22.14.0-alpine3.21

WORKDIR /app
RUN mkdir -p /data && chown node:node /data

COPY --chown=node:node package.json ./
COPY --chown=node:node src/ ./src/
COPY --chown=node:node migrations/ ./migrations/

ARG APP_VERSION=1.0.0
ENV APP_VERSION=${APP_VERSION}

USER node
EXPOSE 3000
HEALTHCHECK --interval=5s --timeout=3s --start-period=2s --retries=3 CMD ["node", "-e", "fetch('http://127.0.0.1:' + (process.env.PORT || 3000) + '/health', {signal: AbortSignal.timeout(2000)}).then(r => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"]
CMD ["node", "src/server.js"]
