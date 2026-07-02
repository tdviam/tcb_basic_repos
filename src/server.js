const app = require('./app');
require('dotenv').config(); // Loads values from your .env file

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running smoothly on http://localhost:${PORT}`);
});
