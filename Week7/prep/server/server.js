import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import personRouter from './routes/person.routes.js';

const app = express();

app.use(express.json(), cors({origin:'http://localhost:5173'}));
//new server implementation
app.use("/api",personRouter)
// /api/persons

dotenv.config();
const PORT = process.env.PORT;
dbConnect(); //connecting to MongoDB driver
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);

