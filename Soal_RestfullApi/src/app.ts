import express, { Application } from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes';
import categoryRoutes from './routes/categoryRoutes';
import { sequelize } from './models';

const app: Application = express();

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Route API
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);

// Sync database dan jalankan server
sequelize.sync().then(() => {
  console.log('Database synced');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
