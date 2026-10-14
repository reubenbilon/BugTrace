# BugTrace

### Real-Time Backend Error Monitoring

A backend error-monitoring project built with Node.js, Express, MongoDB, and Slack alerts to capture and analyze application errors.

## Features

- Backend error monitoring
- Error tracking and analysis
- MongoDB integration
- Slack alert integration

## Tech Stack

- **Runtime:** Node.js
- **Backend:** Express.js
- **Database:** MongoDB
- **Notifications:** Slack

## Project Structure

```text
BugTrace/
├── backend/
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

Install the following before running the project:

- Node.js
- npm
- MongoDB
- Slack credentials, if Slack notifications are enabled

### Installation

Clone the repository:

```bash
git clone https://github.com/reubenbilon/BugTrace.git
cd BugTrace
```

Open the `backend` folder and install its dependencies:

```bash
cd backend
npm install
```

Configure the environment variables required by the backend before starting the application.

Check the backend's `package.json` for the available start scripts.

## Environment Variables

Create a `.env` file in the location expected by the backend code. Add the required configuration, for example:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
SLACK_WEBHOOK_URL=your_slack_webhook_url
```

Use the actual variable names expected by your application. Never commit real credentials or tokens.

## Future Improvements

- Automated backend tests
- Structured error logging
- Docker-based development environment

## Author

**Reuben Bilon**

- [GitHub](https://github.com/reubenbilon)
- [LinkedIn](https://linkedin.com/in/reuben-bilon)
