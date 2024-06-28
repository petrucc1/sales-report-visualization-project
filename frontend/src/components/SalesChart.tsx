import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchSales } from '../api';

interface SaleData {
  name: string;
  jan: number;
  fev: number;
  mar: number;
  abr: number;
}

const SalesChart: React.FC = () => {
  const [data, setData] = useState<SaleData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const salesData: any[] = await fetchSales(); // Temporariamente usando 'any' para 'salesData'
        console.log('Dados recebidos:', salesData);

        const processedData: SaleData[] = [];

        salesData.forEach((sale: any) => { // Definindo 'sale' como 'any' temporariamente
          const existingEntry = processedData.find((entry) => entry.name === sale.brand || entry.name === sale.category || sale.name === sale.product);

          if (existingEntry) {
            existingEntry.jan += sale.month === 1 ? sale.sales : 0;
            existingEntry.fev += sale.month === 2 ? sale.sales : 0;
            existingEntry.mar += sale.month === 3 ? sale.sales : 0;
            existingEntry.abr += sale.month === 4 ? sale.sales : 0;
          } else {
            const newEntry: SaleData = {
              name: sale.brand || sale.category || sale.product,
              jan: sale.month === 1 ? sale.sales : 0,
              fev: sale.month === 2 ? sale.sales : 0,
              mar: sale.month === 3 ? sale.sales : 0,
              abr: sale.month === 4 ? sale.sales : 0,
            };
            processedData.push(newEntry);
          }
        });

        setData(processedData);
      } catch (error) {
        console.error('Erro ao buscar dados de vendas:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="jan" stackId="a" fill="#8884d8" name="Janeiro" />
        <Bar dataKey="fev" stackId="a" fill="#82ca9d" name="Fevereiro" />
        <Bar dataKey="mar" stackId="a" fill="#ffc658" name="Março" />
        <Bar dataKey="abr" stackId="a" fill="#ff7f50" name="Abril" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
