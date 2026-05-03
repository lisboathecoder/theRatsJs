import prisma from '../lib/services/prismaClient.js';

export default class LivroModel  {
    constructor({ id = null, titulo, autor, anoPublicacao, capa, detalhesAutor_pt, detalhesAutor_en, verossimilhanca_pt, verossimilhanca_en, genero_pt, genero_en, resumo_pt, resumo_en, personagens, contextoHistorico_pt, contextoHistorico_en, analise_pt, analise_en } = {}) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.capa = capa;
        this.detalhesAutor_pt = detalhesAutor_pt;
        this.detalhesAutor_en = detalhesAutor_en;
        this.verossimilhanca_pt = verossimilhanca_pt;
        this.verossimilhanca_en = verossimilhanca_en;
        this.genero_pt = genero_pt;
        this.genero_en = genero_en;
        this.resumo_pt = resumo_pt;
        this.resumo_en = resumo_en;
        this.personagens = personagens;
        this.contextoHistorico_pt = contextoHistorico_pt;
        this.contextoHistorico_en = contextoHistorico_en;
        this.analise_pt = analise_pt;
        this.analise_en = analise_en;
    }

    async criar() {
        return prisma.livro.create({
            data: {
                titulo: this.titulo,
                autor: this.autor,
                anoPublicacao: this.anoPublicacao,
                capa: this.capa,
                detalhesAutor_pt: this.detalhesAutor_pt,
                detalhesAutor_en: this.detalhesAutor_en,
                verossimilhanca_pt: this.verossimilhanca_pt,
                verossimilhanca_en: this.verossimilhanca_en,
                genero_pt: this.genero_pt,
                genero_en: this.genero_en,
                resumo_pt: this.resumo_pt,
                resumo_en: this.resumo_en,
                contextoHistorico_pt: this.contextoHistorico_pt,
                contextoHistorico_en: this.contextoHistorico_en,
                analise_pt: this.analise_pt,
                analise_en: this.analise_en,
            },
        });
    }

    async atualizar() {
        return prisma.livro.update({
            where: { id: this.id },
            data: {
                titulo: this.titulo,
                autor: this.autor,
                anoPublicacao: this.anoPublicacao,
                capa: this.capa,
                detalhesAutor_pt: this.detalhesAutor_pt,
                detalhesAutor_en: this.detalhesAutor_en,
                verossimilhanca_pt: this.verossimilhanca_pt,
                verossimilhanca_en: this.verossimilhanca_en,
                genero_pt: this.genero_pt,
                genero_en: this.genero_en,
                resumo_pt: this.resumo_pt,
                resumo_en: this.resumo_en,
                contextoHistorico_pt: this.contextoHistorico_pt,
                contextoHistorico_en: this.contextoHistorico_en,
                analise_pt: this.analise_pt,
                analise_en: this.analise_en,
            },
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

        return prisma.livro.findMany({
            where,
            include: {
                personagens: true,
            },
        });
    }

    static async buscarPorId(id) {
        const data = await prisma.livro.findUnique({
            where: { id },
            include: {
                personagens: true,
            },
        });
        if (!data) {
            return null;
        }
        return new LivroModel(data);
    }
}