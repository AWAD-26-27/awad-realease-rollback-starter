import { config } from './config.js';
import { open } from './db.js';
import { createApp } from './app.js';

const db = open(config.dbPath);
const server = createApp(db, config);
server.listen(config.port, () =>
  console.log(`linkbox ${config.version} (${config.env}) on :${config.port}, db ${config.dbPath}`));

let stopping = false;
function shutdown() {
  if (stopping) return;
  stopping = true;

  // Stop accepting connections, then let existing requests finish before closing SQLite.
  const deadline = setTimeout(() => {
    server.closeAllConnections();
    db.close();
    process.exit(1);
  }, 7000);
  deadline.unref();

  server.close((error) => {
    clearTimeout(deadline);
    db.close();
    process.exitCode = error ? 1 : 0;
  });
}
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
