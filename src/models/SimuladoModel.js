import prisma from '../lib/services/prismaClient.js';

export default class SimuladoModel {
  constructor({
    id = null,
    pergunta,
    question,
    opcaoA,
    optionA,
    opcaoB,
    optionB,
    opcaoC,
    optionC,
    opcaoD,
    optionD,
    opcaoE,
    optionE,
    respostaCorreta,
    correctAnswer,
    explicacao,
    explanation,
  } = {}) {
    this.id = id;
    this.pergunta = pergunta;
    this.question = question;
    this.opcaoA = opcaoA;
    this.optionA = optionA;
    this.opcaoB = opcaoB;
    this.optionB = optionB;
    this.opcaoC = opcaoC;
    this.optionC = optionC;
    this.opcaoD = opcaoD;
    this.optionD = optionD;
    this.opcaoE = opcaoE;
    this.optionE = optionE;
    this.respostaCorreta = respostaCorreta;
    this.correctAnswer = correctAnswer;
    this.explicacao = explicacao;
    this.explanation = explanation;
  }

  async criar() {
    return prisma.simulado.create({
      data: {
        pergunta: this.pergunta,
        question: this.question,
        opcaoA: this.opcaoA,
        optionA: this.optionA,
        opcaoB: this.opcaoB,
        optionB: this.optionB,
        opcaoC: this.opcaoC,
        optionC: this.optionC,
        opcaoD: this.opcaoD,
        optionD: this.optionD,
        opcaoE: this.opcaoE,
        optionE: this.optionE,
        repostaCorreta: this.repostaCorreta,
        correctAnswer: this.correctAnswer,
        explicacao: this.explicacao,
        explanation: this.explanation,
      },
    });
  }

  async atualizar() {
    return prisma.simulado.update({
      where: { id: this.id },
      data: {
        pergunta: this.pergunta,
        question: this.question,
        opcaoA: this.opcaoA,
        optionA: this.optionA,
        opcaoB: this.opcaoB,
        optionB: this.optionB,
        opcaoC: this.opcaoC,
        optionC: this.optionC,
        opcaoD: this.opcaoD,
        optionD: this.optionD,
        opcaoE: this.opcaoE,
        optionE: this.optionE,
        repostaCorreta: this.repostaCorreta,
        correctAnswer: this.correctAnswer,
        explicacao: this.explicacao,
        explanation: this.explanation,
      },
    });
  }

  async deletar() {
    return prisma.simulado.delete({ where: { id: this.id } });
  }

        if (filtros.pergunta) {
            where.pergunta = { contains: filtros.pergunta, mode: 'insensitive' };
        }

        return prisma.simulado.findMany({ where });
    }

    return prisma.simulado.findMany({ where });
  }

  static async buscarPorId(id) {
    const data = await prisma.simulado.findUnique({ where: { id } });
    if (!data) {
      return null;
    }
}
