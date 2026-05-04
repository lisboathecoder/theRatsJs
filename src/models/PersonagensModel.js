import prisma from '../lib/services/prismaClient.js';

export default class PersonagemModel {
    constructor({
        id = null,
        nome,

        caracteristicas_pt,
        caracteristicas_en,

        representacao_pt,
        representacao_en,

    } = {}) {
        this.id = id;
        this.nome = nome;

        this.caracteristicas_pt = caracteristicas_pt;
        this.caracteristicas_en = caracteristicas_en;

        this.representacao_pt = representacao_pt;
        this.representacao_en = representacao_en;
    }

    async criar() {
        return prisma.personagem.create({
            data: {
                nome: this.nome,
                caracteristicas_en: this.caracteristicas_en,
                caracteristicas_pt: this.caracteristicas_pt,
                representacao_en: this.representacao_en,
                representacao_pt: this.representacao_pt,
            },
        });
    }

    async atualizar() {
        return prisma.personagem.update({
            where: { id: this.id },
            data: {
                nome: this.nome,
                caracteristicas_en: this.caracteristicas_en,
                caracteristicas_pt: this.caracteristicas_pt,
                representacao_en: this.representacao_en,
                representacao_pt: this.representacao_pt,
            },
        });
    }

    async deletar() {
        return prisma.personagem.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.nome) {
            where.nome = { contains: filtros.nome, mode: 'insensitive' };
        }

        return prisma.personagem.findMany({
            where,
        });
    }

    static async buscarPorId(id) {
        const data = await prisma.personagem.findUnique({
            where: { id },
        });
        if (!data) {
            return null;
        }
        return new PersonagemModel(data);
    }
}
    