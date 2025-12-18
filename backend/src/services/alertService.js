const axios = require('axios');

const sendSlackAlert = async (bug) => {
  if (!process.env.SLACK_WEBHOOK_URL) return;

  const payload = {
    text:
`🚨 BugTrace Alert
Type: ${bug.errorType}
Message: ${bug.message}
File: ${bug.file}:${bug.line}
Severity: ${bug.severity}
Environment: ${bug.environment}
Time: ${new Date(bug.createdAt).toLocaleString()}`
  };

  try {
    await axios.post(process.env.SLACK_WEBHOOK_URL, payload);
  } catch (err) {
    console.error('Slack alert failed:', err.message);
  }
};

module.exports = sendSlackAlert;
