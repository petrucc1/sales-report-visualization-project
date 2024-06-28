import mongoose from 'mongoose';

const saleSchema = new mongoose.Schema({
  product: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
  sales: { type: Number, required: true }
});

// Define índice composto para os campos utilizados em filtros
saleSchema.index({ product: 1, brand: 1, category: 1, month: 1, year: 1 });

export const Sale = mongoose.model('Sale', saleSchema);
