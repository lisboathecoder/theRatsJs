import PersonagemModel from '../models/PersonagensModel.js';

export const criar = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ error: 'Corpo da requisição vazio. Envie os dados!' });
        }

        const { nome, caracteristicas_pt, caracteristicas_en, representacao_pt, representacao_en, livroId } = req.body;

        if (!nome) {
            return res.status(400).json({ error: 'O campo "nome" é obrigatório!' });
        }

        if (!caracteristicas_pt) {
            return res.status(400).json({ error: 'O campo "caracteristicas_pt" é obrigatório!' });
        }

        if (!caracteristicas_en) {
            return res.status(400).json({ error: 'O campo "caracteristicas_en" é obrigatório!' });
        }

        if (!representacao_pt) {
            return res.status(400).json({ error: 'O campo "representacao_pt" é obrigatório!' });
        }

        if (!representacao_en) {
            return res.status(400).json({ error: 'O campo "representacao_en" é obrigatório!' });
        }

        if (livroId === undefined || livroId === null) {
            return res.status(400).json({ error: 'O campo "livroId" é obrigatório para relacionar o personagem a um livro.' });
        }

        const personagem = new PersonagemModel({
            nome,
            caracteristicas_pt,
            caracteristicas_en,
            representacao_pt,
            representacao_en,
            livroId,
        });
        const data = await personagem.criar();
        return res.status(201).json({ message: 'Registro criado com sucesso!', data });
    } catch (error) {
        console.error('Erro ao criar:', error);
        return res.status(500).json({ error: 'Erro interno ao salvar o registro.' });
    }
};

export const buscarTodos = async (req, res) => {
    try {
        const registros = await PersonagemModel.buscarTodos(req.query);

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

        const personagem = await PersonagemModel.buscarPorId(parseInt(id));

        if (!personagem) {
            return res.status(404).json({ error: 'Registro não encontrado.' });
        }

        return res.status(200).json({ data: personagem });
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

        const personagem = await PersonagemModel.buscarPorId(parseInt(id));

        if (!personagem) {
            return res.status(404).json({ error: 'Registro não encontrado para atualizar.' });
        }

        if (req.body.nome!== undefined) {
            personagem.nome = req.body.nome;
        }

        const data = await personagem.atualizar();

        return res
            .status(200)
            .json({ message: `O registro "${data.nome}" foi atualizado com sucesso!`, data });
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

        const personagem = await PersonagemModel.buscarPorId(parseInt(id));

        if (!personagem) {
            return res.status(404).json({ error: 'Registro não encontrado para deletar.' });
        }

        await personagem.deletar();
        return res
            .status(200)
            .json({
                message: `O registro "${personagem.nome}" foi deletado com sucesso!`,
                deletado: personagem  ,
            });
    } catch (error) {
        console.error('Erro ao deletar:', error);
        return res.status(500).json({ error: 'Erro ao deletar registro.' });
    }
};
