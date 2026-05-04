import prisma from '../lib/services/prismaClient.js';

export default class CuriosidadesModel {
    constructor({ id = null, conteudo, content, curiosidade, curiosity } = {}) {
        this.id = id;
        this.conteudo = conteudo;
        this.content = content;
        this.curiosidade = curiosidade;
        this.curiosity = curiosity;
    }

    async criar() {
        return prisma.curiosidade.create({
            data: {
                conteudo: this.conteudo,
                content: this.content,
                curiosidade: this.curiosidade,
                curiosity: this.curiosity,
            },
        });
    }

    async atualizar() {
        return prisma.curiosidade.update({
            where: { id: this.id },
            data: {
                conteudo: this.conteudo,
                content: this.content,
                curiosidade: this.curiosidade,
                curiosity: this.curiosity,
            },
        });
    }

    async deletar() {
        return prisma.curiosidade.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.curiosidade) {
            where.curiosidade = { contains: filtros.curiosidade, mode: 'insensitive' };
        }

        return prisma.curiosidade.findMany({ where });
    }

    static async buscarPorId(id) {
        const data = await prisma.curiosidade.findUnique({ where: { id } });
        if (!data) {
            return null;
        }
        return new CuriosidadesModel(data);
    }
}
