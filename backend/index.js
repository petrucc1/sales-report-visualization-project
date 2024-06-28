import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

// Conexão com o MongoDB usando Mongoose
const mongoURI = process.env.MONGO_URI;

connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected!'))
.catch(err => console.error('MongoDB connection error:', err));

// Configuração das rotas
app.use('/api', router);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
