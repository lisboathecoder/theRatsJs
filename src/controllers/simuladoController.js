import SimuladoModel from "../models/SimuladoModel.js";

export const criar = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ error: 'Corpo da requisição vazio. Envie os dados!' });
        }

        const {
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
        } = req.body;

        if (!pergunta) {
            return res.status(400).json({ error: 'O campo "pergunta" é obrigatório!' });
        }

        if (!question) {
            return res.status(400).json({ error: 'O campo "question" é obrigatório!' });
        }

        if (!optionA) {
            return res.status(400).json({ error: 'O campo "optionA" é obrigatório!' });
        }

        if (!optionB) {
            return res.status(400).json({ error: 'O campo "optionB" é obrigatório!' });
        }

        if (!optionC) {
            return res.status(400).json({ error: 'O campo "optionC" é obrigatório!' });
        }

        if (!optionD) {
            return res.status(400).json({ error: 'O campo "optionD" é obrigatório!' });
        }

        if (!optionE) {
            return res.status(400).json({ error: 'O campo "optionE" é obrigatório!' });
        }

        if (!correctAnswer) {
            return res.status(400).json({ error: 'O campo "correctAnswer" é obrigatório!' });
        }

        if (!explicacao) {
            return res.status(400).json({ error: 'O campo "explicacao" é obrigatório!' });
        }

        if (!explanation) {
            return res.status(400).json({ error: 'O campo "explanation" é obrigatório!' });
        }

        if (!opcaoA) {
            return res.status(400).json({ error: 'O campo "opcaoA" é obrigatório!' });
        }

        if (!opcaoB) {
            return res.status(400).json({ error: 'O campo "opcaoB" é obrigatório!' });
        }

        if (!opcaoC) {
            return res.status(400).json({ error: 'O campo "opcaoC" é obrigatório!' });
        }

        if (!opcaoD) {
            return res.status(400).json({ error: 'O campo "opcaoD" é obrigatório!' });
        }

        if (!opcaoE) {
            return res.status(400).json({ error: 'O campo "opcaoE" é obrigatório!' });
        }

        if (!respostaCorreta) {
            return res.status(400).json({ error: 'O campo "respostaCorreta" é obrigatório!' });
        }

        const simulado = new SimuladoModel({
            pergunta: req.body.pergunta,
            question: req.body.question,
            opcaoA: req.body.opcaoA,
            optionA: req.body.optionA,
            opcaoB: req.body.opcaoB,
            optionB: req.body.optionB,
            opcaoC: req.body.opcaoC,
            optionC: req.body.optionC,
            opcaoD: req.body.opcaoD,
            optionD: req.body.optionD,
            opcaoE: req.body.opcaoE,
            optionE: req.body.optionE,
            respostaCorreta: req.body.respostaCorreta,
            correctAnswer: req.body.correctAnswer,
            explicacao: req.body.explicacao,
            explanation: req.body.explanation,
        });
        const data = await simulado.criar();
        return res.status(201).json({ message: 'Registro criado com sucesso!', data });
    } catch (error) {
        console.error('Erro ao criar:', error);
        return res.status(500).json({ error: 'Erro interno ao salvar o registro.' });
    }

    const {
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
    } = req.body;

    if (!pergunta) {
      return res
        .status(400)
        .json({ error: 'O campo "pergunta" é obrigatório!' });
    }

    if (!question) {
      return res
        .status(400)
        .json({ error: 'O campo "question" é obrigatório!' });
    }

    if (!optionA) {
      return res
        .status(400)
        .json({ error: 'O campo "optionA" é obrigatório!' });
    }

    if (!optionB) {
      return res
        .status(400)
        .json({ error: 'O campo "optionB" é obrigatório!' });
    }

    if (!optionC) {
      return res
        .status(400)
        .json({ error: 'O campo "optionC" é obrigatório!' });
    }

    if (!optionD) {
      return res
        .status(400)
        .json({ error: 'O campo "optionD" é obrigatório!' });
    }

    if (!optionE) {
      return res
        .status(400)
        .json({ error: 'O campo "optionE" é obrigatório!' });
    }

    if (!correctAnswer) {
      return res
        .status(400)
        .json({ error: 'O campo "correctAnswer" é obrigatório!' });
    }

    if (!explicacao) {
      return res
        .status(400)
        .json({ error: 'O campo "explicacao" é obrigatório!' });
    }

    if (!explanation) {
      return res
        .status(400)
        .json({ error: 'O campo "explanation" é obrigatório!' });
    }

    if (!opcaoA) {
      return res.status(400).json({ error: 'O campo "opcaoA" é obrigatório!' });
    }

    if (!opcaoB) {
      return res.status(400).json({ error: 'O campo "opcaoB" é obrigatório!' });
    }

    if (!opcaoC) {
      return res.status(400).json({ error: 'O campo "opcaoC" é obrigatório!' });
    }

    if (!opcaoD) {
      return res.status(400).json({ error: 'O campo "opcaoD" é obrigatório!' });
    }

    if (!opcaoE) {
      return res.status(400).json({ error: 'O campo "opcaoE" é obrigatório!' });
    }

    const simulado = new SimuladoModel({
      pergunta: req.body.pergunta,
      question: req.body.question,
      opcaoA: req.body.opcaoA,
      optionA: req.body.optionA,
      opcaoB: req.body.opcaoB,
      optionB: req.body.optionB,
      opcaoC: req.body.opcaoC,
      optionC: req.body.optionC,
      opcaoD: req.body.opcaoD,
      optionD: req.body.optionD,
      opcaoE: req.body.opcaoE,
      optionE: req.body.optionE,
      respostaCorreta: req.body.respostaCorreta,
      correctAnswer: req.body.correctAnswer,
      explicacao: req.body.explicacao,
      explanation: req.body.explanation,
    });
    const data = await simulado.criar();
    return res
      .status(201)
      .json({ message: "Registro criado com sucesso!", data });
  } catch (error) {
    console.error("Erro ao criar:", error);
    return res
      .status(500)
      .json({ error: "Erro interno ao salvar o registro." });
  }
};

export const buscarTodos = async (req, res) => {
    try {
        const registros = await SimuladoModel.buscarTodos(req.query);

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

        const simulado = await SimuladoModel.buscarPorId(parseInt(id));

        if (!simulado) {
            return res.status(404).json({ error: 'Registro não encontrado.' });
        }

        return res.status(200).json({ data: simulado });
    } catch (error) {
        console.error('Erro ao buscar:', error);
        return res.status(500).json({ error: 'Erro ao buscar registro.' });
    }
};

export const atualizar = async (req, res) => {
  try {
    const { id } = req.params;
    const {
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
    } = req.body;

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido." });
    }

    if (!req.body) {
      return res
        .status(400)
        .json({ error: "Corpo da requisição vazio. Envie os dados!" });
    }

    const simulado = await SimuladoModel.buscarPorId(parseInt(id));

    if (!simulado) {
      return res
        .status(404)
        .json({ error: "Registro não encontrado para atualizar." });
    }

    if (req.body.question !== undefined) {
      simulado.question = req.body.question;
    }
    if (req.body.opcaoA !== undefined) {
      simulado.opcaoA = req.body.opcaoA;
    }
    if (req.body.optionA !== undefined) {
      simulado.optionA = req.body.optionA;
    }
    if (req.body.opcaoB !== undefined) {
      simulado.opcaoB = req.body.opcaoB;
    }
    if (req.body.optionB !== undefined) {
      simulado.optionB = req.body.optionB;
    }
    if (req.body.opcaoC !== undefined) {
      simulado.opcaoC = req.body.opcaoC;
    }
    if (req.body.optionC !== undefined) {
      simulado.optionC = req.body.optionC;
    }
    if (req.body.opcaoD !== undefined) {
      simulado.opcaoD = req.body.opcaoD;
    }
    if (req.body.optionD !== undefined) {
      simulado.optionD = req.body.optionD;
    }
    if (req.body.opcaoE !== undefined) {
      simulado.opcaoE = req.body.opcaoE;
    }
    if (req.body.optionE !== undefined) {
      simulado.optionE = req.body.optionE;
    }
    if (req.body.correctAnswer !== undefined) {
      simulado.correctAnswer = req.body.correctAnswer;
    }
    if(req.body.respostaCorreta !== undefined) {
      simulado.respostaCorreta = req.body.respostaCorreta;
    }
    if (req.body.explanation !== undefined) {
      simulado.explanation = req.body.explanation;
    }
    if (req.body.explicacao !== undefined) {
      simulado.explicacao = req.body.explicacao;
    }
    if (req.body.pergunta !== undefined) {
      simulado.pergunta = req.body.pergunta;
    }

    const data = await simulado.atualizar();

    return res.status(200).json({
      message: `O registro "${data.pergunta}" foi atualizado com sucesso!`,
      data,
    });
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    return res.status(500).json({ error: "Erro ao atualizar registro." });
  }
};

export const deletar = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido.' });
        }

        const simulado = await SimuladoModel.buscarPorId(parseInt(id));

        if (!simulado) {
            return res.status(404).json({ error: 'Registro não encontrado para deletar.' });
        }

        await simulado.deletar();
        return res.status(200).json({
            message: `O registro "${simulado.pergunta}" foi deletado com sucesso!`,
            deletado: simulado,
        });
    } catch (error) {
        console.error('Erro ao deletar:', error);
        return res.status(500).json({ error: 'Erro ao deletar registro.' });
    }
};
