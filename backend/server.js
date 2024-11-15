const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
// const userRoutes = require('./routes/userRoutes');  // This line is commented out as the file is missing
const taskRoutes = require('./routes/taskRoutes');
// const { errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// app.use('/api/users', userRoutes);  // Corrected: Commented out due to missing userRoutes file
app.use('/api/tasks', taskRoutes);

// Uncomment or add an error handler middleware if required
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
