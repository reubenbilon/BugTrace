require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const bugRoutes = require('./src/routes/bugRoutes');
const analyticsRoutes = require('./src/routes/analyticsRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

/* ========= MIDDLEWARE ========= */
app.use(express.json());   

/* ========= DATABASE ========= */
connectDB();               

const path = require('path');

// serve static admin files
app.use('/admin', express.static(path.join(__dirname, 'src/public/admin')));


/* ========= ROUTES ========= */
app.use('/api/bugs', bugRoutes);
app.use('/api/analytics', analyticsRoutes);

/* ========= HEALTH CHECK ========= */
app.get('/', (req, res) => {
  res.send('BugTrace backend is running');
});

/* ========= SERVER ========= */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
