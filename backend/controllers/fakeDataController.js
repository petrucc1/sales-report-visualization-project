import Category from '../models/Category.js';
import Product from '../models/Product.js';
import Brand from '../models/Brand.js';

export async function getFakeData(req, res) {
  try {
    const categories = await Category.find().lean(); // Usa .lean() para obter objetos JavaScript simples
    const products = await Product.find().populate('category', 'name').lean(); // Exemplo de população de referência
    const brands = await Brand.find().lean();

    res.json({ categories, products, brands });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
