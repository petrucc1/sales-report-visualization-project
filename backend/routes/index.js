import express from 'express';
import { getSales } from '../controllers/salesController.js';
import { getFakeData } from '../controllers/fakeDataController.js';

const router = express.Router();

router.get('/sales', getSales); // Rota existente para vendas
router.get('/fake-data', getFakeData); // Rota para dados fictícios

export default router;