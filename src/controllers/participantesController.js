import ParticipantesModel from '../models/ParticipantesModel.js';

export const criar = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ error: 'Corpo da requisição vazio. Envie os dados!' });
        }

        const { nome, curso, curse, foto, idade, age, email } = req.body;

        if (!nome) {
            return res.status(400).json({ error: 'O campo "nome" é obrigatório!' });
        }

        if (!curso) {
            return res.status(400).json({ error: 'O campo "curso" é obrigatório!' });
        }

        if (!curse) {
            return res.status(400).json({ error: 'O campo "curse" é obrigatório!' });
        }

        if (!foto) {
            return res.status(400).json({ error: 'O campo "foto" é obrigatório!' });
        }

        if (!idade) {
            return res.status(400).json({ error: 'O campo "idade" é obrigatório!' });
        }

        if (!age) {
            return res.status(400).json({ error: 'O campo "age" é obrigatório!' });
        }

        if (!email) {
            return res.status(400).json({ error: 'O campo "email" é obrigatório!' });
        }

        const participante = new ParticipantesModel({
            nome,
            curso,
            curse,
            foto,
            idade,
            age,
            email,
        });
        const data = await participante.criar();
        return res.status(201).json({ message: 'Registro criado com sucesso!', data });
    } catch (error) {
        console.error('Erro ao criar:', error);
        return res.status(500).json({ error: 'Erro interno ao salvar o registro.' });
    }
};

export const buscarTodos = async (req, res) => {
    try {
        const registros = await ParticipantesModel.buscarTodos(req.query);

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

        const participante = await ParticipantesModel.buscarPorId(parseInt(id));

        if (!participante) {
            return res.status(404).json({ error: 'Registro não encontrado.' });
        }

        return res.status(200).json({ data: participante });
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

        const participante = await ParticipantesModel.buscarPorId(parseInt(id));

        if (!participante) {
            return res.status(404).json({ error: 'Registro não encontrado para atualizar.' });
        }

        if (req.body.nome!== undefined) {
            participante.nome = req.body.nome;
        }

        const data = await participante.atualizar();

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

        const participante = await ParticipantesModel.buscarPorId(parseInt(id));

        if (!participante) {
            return res.status(404).json({ error: 'Registro não encontrado para deletar.' });
        }

        await participante.deletar();
        return res
            .status(200)
            .json({
                message: `O registro "${participante.nome}" foi deletado com sucesso!`,
                deletado: participante  ,
            });
    } catch (error) {
        console.error('Erro ao deletar:', error);
        return res.status(500).json({ error: 'Erro ao deletar registro.' });
    }
};
