import 'dotenv/config';

// Agora exportamos funções específicas para cada nível de acesso
export const authAdmin = (req, res, next) => {
    const chave = req.headers['x-api-key'];

    if (!chave || chave !== process.env.API_KEY_ADMIN) {
        return res.status(401).json({ erro: 'Acesso negado. Requer chave de Administrador.' });
    }
    next();
};

export const authPublic = (req, res, next) => {
    const chave = req.headers['x-api-key'];
    const chaveAdmin = process.env.API_KEY_ADMIN;
    const chavePublica = process.env.API_KEY_RATOS;

    if (!chave || (chave !== chavePublica && chave !== chaveAdmin)) {
        return res.status(401).json({ erro: 'Acesso não autorizado. API-Key inválida.' });
    }
    next();
};
