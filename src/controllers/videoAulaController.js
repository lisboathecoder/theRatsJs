import VideoAulaModel from '../models/VideoAulaModel.js';

export const criar = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ error: 'Corpo da requisição vazio. Envie os dados!' });
        }

        const { conteudo, content, descricao, description, urlMidia } = req.body;

        if (!conteudo) {
            return res.status(400).json({ error: 'O campo "conteudo" é obrigatório!' });
        }

        if (!content) {
            return res.status(400).json({ error: 'O campo "content" é obrigatório!' });
        }

        if (!descricao) {
            return res.status(400).json({ error: 'O campo "descrição" é obrigatório!' });
        }

        if (!description) {
            return res.status(400).json({ error: 'O campo "description" é obrigatório!' });
        }
        if (!urlMidia) {
            return res.status(400).json({ error: 'O campo "urlMidia" é obrigatório!' });
        }

        const aula1 = new VideoAulaModel({
            conteudo,
            content,
            descricao: descricao,
            description,
            urlMidia,
        });
        const data = await aula1.criar();
        return res.status(201).json({ message: 'Registro de aula criado com sucesso!', data });
    } catch (error) {
        console.error('Erro ao criar:', error);
        return res.status(500).json({ error: 'Erro interno ao salvar o registro.' });
    }
};

export const buscarTodos = async (req, res) => {
    try {
        const registros = await VideoAulaModel.buscarTodos(req.query);

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

        const videoAula = await VideoAulaModel.buscarPorId(parseInt(id));

        if (!videoAula) {
            return res.status(404).json({ error: 'Registro não encontrado.' });
        }

        return res.status(200).json({ data: videoAula });
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

        const videoAula = await VideoAulaModel.buscarPorId(parseInt(id));

        if (!videoAula) {
            return res.status(404).json({ error: 'Registro não encontrado para atualizar.' });
        }

        if (req.body.conteudo !== undefined) {
            videoAula.conteudo = req.body.conteudo;
        }
        if (req.body.content !== undefined) {
            videoAula.content = req.body.content;
        }
        if (req.body.descricao !== undefined) {
            videoAula.descricao = req.body.descricao;
        }
        if (req.body.description !== undefined) {
            videoAula.description = req.body.description;
        }
        if (req.body.urlMidia !== undefined) {
            videoAula.urlMidia = req.body.urlMidia;
        }

        const data = await videoAula.atualizar();

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

        const videoAula = await VideoAulaModel.buscarPorId(parseInt(id));

        if (!videoAula) {
            return res.status(404).json({ error: 'Registro não encontrado para deletar.' });
        }

        await videoAula.deletar();
        return res.status(200).json({
            message: `O registro "${videoAula.conteudo}" foi deletado com sucesso!`,
            deletado: videoAula,
        });
    } catch (error) {
        console.error('Erro ao deletar:', error);
        return res.status(500).json({ error: 'Erro ao deletar registro.' });
    }
};
