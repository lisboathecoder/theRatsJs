import prisma from '../lib/services/prismaClient.js';

export default class ParticipantesModel {
    constructor({
        id = null,
        nome,
        curso,
        curse,
        foto,
        idade,
        age,
        email,
    } = {}) {
        this.id = id;
        this.nome = nome;
        this.curso = curso;
        this.curse = curse;
        this.foto = foto;
        this.idade = idade;
        this.age = age;
        this.email = email;
    }

    async criar() {
        return prisma.participantes.create({
            data: {
                nome: this.nome,
                curso: this.curso,
                curse: this.curse,
                foto: this.foto,
                idade: this.idade,
                age: this.age,
                email: this.email,
            },
        });
    }

    async atualizar() {
        return prisma.participantes.update({
            where: { id: this.id },
            data: {
                nome: this.nome,
                curso: this.curso,
                curse: this.curse,
                foto: this.foto,
                idade: this.idade,
                age: this.age,
                email: this.email,
            },
        });
    }

    async deletar() {
        return prisma.participantes.delete({ where: { id: this.id } });
    }

    static async buscarTodos(filtros = {}) {
        const where = {};

        if (filtros.nome) {
            where.nome = { contains: filtros.nome, mode: 'insensitive' };
        }

        if (filtros.curso) {
            where.curso = { contains: filtros.curso, mode: 'insensitive' };
        }

        return prisma.participantes.findMany({ where });
    }

    static async buscarPorId(id) {
        const data = await prisma.participantes.findUnique({ where: { id } });
        if (!data) {
            return null;
        }
        return new ParticipantesModel(data);
    }
}
