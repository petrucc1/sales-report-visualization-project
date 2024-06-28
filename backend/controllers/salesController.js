import { Sale } from '../models/Sale.js';

export async function getSales(req, res) {
  const { category, product, brand, month, year } = req.query;
  const filter = {};

  if (category) filter.category = category;
  if (product) filter.product = product;
  if (brand) filter.brand = brand;
  if (month) filter.month = parseInt(month); // Convertendo para número, se necessário
  if (year) filter.year = parseInt(year); // Convertendo para número, se necessário

  try {
    const sales = await Sale.find(filter).maxTimeMS(30000); // Definindo um tempo limite de 30 segundos (30000ms)
    res.json(sales);
  } catch (err) {
    console.error('Erro ao buscar dados de vendas:', err);
    res.status(500).json({ message: 'Erro ao buscar dados de vendas' });
  }
}
