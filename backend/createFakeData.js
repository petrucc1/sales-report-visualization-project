import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Category from './models/Category.js';
import Product from './models/Product.js';
import Brand from './models/Brand.js';

dotenv.config();

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected!');

        // Insere categorias fictícias
        const category1 = await Category.create({ name: 'Automóveis' });
        const category2 = await Category.create({ name: 'Comida' });

        // Insere produtos fictícios associados a categorias
        const product1 = await Product.create({ name: 'Carro', category: category1._id });
        const product2 = await Product.create({ name: 'Cereais', category: category2._id });

        // Insere marcas fictícias
        const brand1 = await Brand.create({ name: 'VW' });
        const brand2 = await Brand.create({ name: 'Kellogs' });

        console.log('Dados fictícios inseridos com sucesso!');
    } catch (err) {
        console.error('Erro ao conectar ou inserir dados:', err.message);
    } finally {
        mongoose.disconnect();
    }
};

connectDB();
