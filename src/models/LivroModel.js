import prisma from '../lib/services/prismaClient.js';

export default class LivroModel  {
    constructor({ id = null, titulo, autor, anoPublicacao, genero, genre, resumo, resume, personagens, contextoHistorico, historicContext, analise, analysis } = {}) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
        this.genre = genre;
        this.resumo = resumo;
        this.resume = resume;
        this.personagens = personagens;
        this.contextoHistorico = contextoHistorico;
        this.historicContext = historicContext;
        this.analise = analise;
        this.analysis = analysis;
    }

    async criar() {
        return prisma.livro.create({
            data: {
                titulo: this.titulo,
                autor: this.autor,
                anoPublicacao: this.anoPublicacao,
                genero: this.genero,
                genre: this.genre,
                resumo: this.resumo,
                resume: this.resume,
                personagens: this.personagens,
                contextoHistorico: this.contextoHistorico,
                historicContext: this.historicContext,
                analise: this.analise,
                analysis: this.analysis,
            },
        });
    }

    async atualizar() {
        return prisma.livro.update({
            where: { id: this.id },
            data: { titulo: this.titulo, autor: this.autor, anoPublicacao: this.anoPublicacao, genero: this.genero, genre: this.genre, resumo: this.resumo, resume: this.resume, personagens: this.personagens, contextoHistorico: this.contextoHistorico, historicContext: this.historicContext, analise: this.analise, analysis: this.analysis },
        });
    }

    async deletar() {
        return prisma.livro.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.titulo) {
            where.titulo = { contains: filtros.titulo, mode: 'insensitive' };
        }

        return prisma.livro.findMany({ where });
    }

    static async buscarPorId(id) {
        const data = await prisma.livro.findUnique({ where: { id } });
        if (!data) {
            return null;
        }
        return new LivroModel(data);
    }
}