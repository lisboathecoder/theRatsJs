import prisma from '../lib/services/prismaClient.js';

export default class VideoAulaModel {
    constructor({ id = null, conteudo, content, descricao, description, urlMidia } = {}) {
        this.id = id;
        this.conteudo = conteudo;
        this.content = content;
        this.descricao = descricao;
        this.description = description;
        this.urlMidia = urlMidia;
    }

    async criar() {
        return prisma.videoAula.create({
            data: {
                conteudo: this.conteudo,
                content: this.content,
                descricao: this.descricao,
                description: this.description,
                urlMidia: this.urlMidia,
            },
        });
    }

    async atualizar() {
        return prisma.videoAula.update({
            where: { id: this.id },
            data: {
                conteudo: this.conteudo,
                content: this.content,
                descricao: this.descricao,
                description: this.description,
                urlMidia: this.urlMidia,
            },
        });
    }

    async deletar() {
        return prisma.videoAula.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.conteudo) {
            where.conteudo = { contains: filtros.conteudo, mode: 'insensitive' };
        }
        if (filtros.content) {
            where.content = { contains: filtros.content, mode: 'insensitive' };
        }
        if (filtros.descricao) {
            where.descricao = { contains: filtros.descricao, mode: 'insensitive' };
        }
        if (filtros.description) {
            where.description = { contains: filtros.description, mode: 'insensitive' };
        }
        if (filtros.urlMidia) {
            where.urlMidia = { contains: filtros.urlMidia, mode: 'insensitive' };
        }

        return prisma.videoAula.findMany({ where });
    }

    static async buscarPorId(id) {
        const data = await prisma.videoAula.findUnique({ where: { id } });
        if (!data) {
            return null;
        }
        return new VideoAulaModel(data);
    }
}
