const fs = require('fs');
const path = require('path');

function logger(req, res, next) {
  res.on('finish', () => {
    const log = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} ${req.get('referer') || '-'} ${req.get('user-agent') || '-'}\n`;
    fs.appendFile(
      path.join(__dirname, '../access.log'),
      log,
      (err) => {
        if (err) {
          console.error('Failed to write to log file:', err);
        }
      }
    );
  });
  next();
}

module.exports = logger;