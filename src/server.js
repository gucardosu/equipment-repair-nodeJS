const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
require('./config/database');

const ClientRoutes = require('./routes/ClientRoutes');
const EquipamentoRoutes = require('./routes/equipamentoRoutes'); 
const OrdemRoutes = require('./routes/ordemRoutes');

const app = express();
const port = process.env.PORT || 3000; 

app.use(express.json());

app.use('/api/clientes', ClientRoutes);
app.use('/api/equipamentos', EquipamentoRoutes); 
app.use('/api/ordens', OrdemRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});