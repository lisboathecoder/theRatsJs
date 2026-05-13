import BibliotecaModel from '../models/BibliotecaModel.js';

export const buscarTodos = async (req, res) => {
    try {
        const livros = await BibliotecaModel.buscarTodos();

        if (!livros || livros.length === 0) {
            return res.status(404).json({ message: 'Nenhum livro encontrado.' });
        }

        return res.status(200).json(livros);
    } catch (error) {
        console.error('Erro ao buscar biblioteca:', error);
        return res.status(500).json({ error: 'Erro ao buscar livros da biblioteca.' });
    }
};

export const buscarPorId = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ error: 'O ID enviado não é um número válido.' });
        }

        const livro = await BibliotecaModel.buscarPorId(parseInt(id));

        if (!livro) {
            return res.status(404).json({ error: 'Livro não encontrado.' });
        }

        return res.status(200).json({ data: livro });
    } catch (error) {
        console.error('Erro ao buscar livro:', error);
        return res.status(500).json({ error: 'Erro ao buscar livro.' });
    }
};