import CuriosidadesModel from '../models/CuriosidadesModel.js';

export const criar = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ error: 'Corpo da requisição vazio. Envie os dados!' });
        }

        const { conteudo, content, curiosidade, curiosity } = req.body;

        if (!conteudo) {
            return res.status(400).json({ error: 'O campo "conteudo" é obrigatório!' });
        }

        if (!content) {
            return res.status(400).json({ error: 'O campo "content" é obrigatório!' });
        }

        if (!curiosidade) {
            return res.status(400).json({ error: 'O campo "curiosidade" é obrigatório!' });
        }

        if (!curiosity) {
            return res.status(400).json({ error: 'O campo "curiosity" é obrigatório!' });
        }

        const curiosidade1 = new CuriosidadesModel({
            conteudo,
            content,
            curisiosidades,
            curiosity,
        });
        const data = await curiosidade1.criar();
        return res.status(201).json({ message: 'Registro criado com sucesso!', data });
    } catch (error) {
        console.error('Erro ao criar:', error);
        return res.status(500).json({ error: 'Erro interno ao salvar o registro.' });
    }
};

export const buscarTodos = async (req, res) => {
    try {
        const registros = await CuriosidadesModel.buscarTodos(req.query);

        if (!registros || registros.length === 0) {
            return res.status(400).json({ message: 'Nenhum registro encontrado.' });
        }

        return res.status(200).json(registros);
    } catch (error) {
        console.error('Erro ao buscar:', error);
        return res.status(500).json({ error: 'Erro ao buscar registros.' });
    }
};

export const buscarPorId = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ error: 'O ID enviado não é um número válido.' });
        }

        const curiosidade = await CuriosidadesModel.buscarPorId(parseInt(id));

        if (!curiosidade) {
            return res.status(404).json({ error: 'Registro não encontrado.' });
        }

        return res.status(200).json({ data: curiosidade });
    } catch (error) {
        console.error('Erro ao buscar:', error);
        return res.status(500).json({ error: 'Erro ao buscar registro.' });
    }
};

export const atualizar = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido.' });
        }

        if (!req.body) {
            return res.status(400).json({ error: 'Corpo da requisição vazio. Envie os dados!' });
        }

        const curiosidade = await CuriosidadesModel.buscarPorId(parseInt(id));

        if (!curiosidade) {
            return res.status(404).json({ error: 'Registro não encontrado para atualizar.' });
        }

        if (req.body.conteudo !== undefined) {
            curiosidade.conteudo = req.body.conteudo;
        }

        const data = await curiosidade.atualizar();

        return res
            .status(200)
            .json({ message: `O registro "${data.conteudo}" foi atualizado com sucesso!`, data });
    } catch (error) {
        console.error('Erro ao atualizar:', error);
        return res.status(500).json({ error: 'Erro ao atualizar registro.' });
    }
};

export const deletar = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido.' });
        }

        const curiosidade = await CuriosidadesModel.buscarPorId(parseInt(id));

        if (!curiosidade) {
            return res.status(404).json({ error: 'Registro não encontrado para deletar.' });
        }

        await curiosidade.deletar();
        return res.status(200).json({
            message: `O registro "${curiosidade.conteudo}" foi deletado com sucesso!`,
            deletado: curiosidade,
        });
    } catch (error) {
        console.error('Erro ao deletar:', error);
        return res.status(500).json({ error: 'Erro ao deletar registro.' });
    }
};
