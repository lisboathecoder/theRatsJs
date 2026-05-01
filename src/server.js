import express from 'express';
import 'dotenv/config';
import livroRoutes from './routes/livroRoute.js';
import participantesRoutes from './routes/participantesRoute.js';
import curiosidadesRoutes from './routes/curiosidadesRoute.js';
import dicasRoutes from './routes/dicasRoute.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('🚀 API funcionando');
});

// Rotas
app.use('/api/livros', livroRoutes);
app.use('/api/participantes', participantesRoutes);
app.use('/api/curiosidades', curiosidadesRoutes);
app.use('/api/dicas', dicasRoutes)

app.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});

app.listen(PORT, () => {
    console.log(`📚 Biblioteca rodando em http://localhost:${PORT}`);
});
