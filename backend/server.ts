import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bankRoutes from "./src/infrastructure/routes/bankRoutes.ts";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/bank', bankRoutes);
app.get('/api', (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});