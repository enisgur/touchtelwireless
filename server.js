const express = require('express');
// const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Connect Database
// connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
// app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/upload', require('./routes/api/picture'));
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));
// app.use('/api/products', require('./routes/api/products'));
// app.use('/api/fix', require('./routes/api/fix'));

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
