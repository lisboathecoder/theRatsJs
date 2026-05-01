import prisma from '../lib/services/prismaClient.js';

export default class DicasModel {
    constructor({ id = null, conteudo, content, dicas, tips } = {}) {
        this.id = id;
        this.conteudo = conteudo;
        this.content = content;
        this.dicas = dicas;
        this.tips = tips;
    }

    async criar() {
        return prisma.dicas.create({
            data: {
                conteudo: this.conteudo,
                content: this.content,
                dicas: this.dicas,
                tips: this.tips,
            },
        });
    }

    async atualizar() {
        return prisma.dica.update({
            where: { id: this.id },
            data: {
                conteudo: this.conteudo,
                content: this.content,
                dicas: this.dicas,
                tips: this.tips,
            },
        });
    }

    async deletar() {
        return prisma.dica.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.dica) {
            where.dica = { contains: filtros.dica, mode: 'insensitive' };
        }

        return prisma.dica.findMany({ where });
    }

    static async buscarPorId(id) {
        const data = await prisma.dica.findUnique({ where: { id } });
        if (!data) {
            return null;
        }
        return new DicasModel(data);
    }
}
