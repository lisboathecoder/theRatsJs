import 'dotenv/config';

const autenticar = (req, res, next) => {
    const chave = req.headers['x-api-key'];

    if (!chave || chave !== process.env.API_KEY_RATOS) {
        return res.status(401).json({ erro: 'Acesso não autorizado. X-API-Key inválida.' });
    }

    next();
};

export default autenticar;
