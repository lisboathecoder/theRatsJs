import express from 'express';
import 'dotenv/config';
import livroRoutes from './routes/livroRoute.js';
import participantesRoutes from './routes/participantesRoute.js';
import curiosidadesRoutes from './routes/curiosidadesRoute.js';
import dicasRoutes from './routes/dicasRoute.js';
import personagensRoutes from './routes/personagensRoute.js';
import videoAulaRoutes from './routes/videoAulaRoute.js';
import simuladoRoutes from './routes/simuladoRoute.js';
import autenticarApiKey from '../src/utils/apiKey.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('🚀 API funcionando');
});

// Rotas
app.use('/api/livros', autenticarApiKey, livroRoutes);
app.use('/api/participantes', autenticarApiKey, participantesRoutes);
app.use('/api/curiosidades', autenticarApiKey, curiosidadesRoutes);
app.use('/api/dicas', autenticarApiKey, dicasRoutes);
app.use('/api/personagens', autenticarApiKey, personagensRoutes);
app.use('/api/videoAulas', autenticarApiKey, videoAulaRoutes);
app.use('/api/simulados', autenticarApiKey, simuladoRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});

app.listen(PORT, () => {
    console.log(`📚 Biblioteca rodando em http://localhost:${PORT}`);
});
