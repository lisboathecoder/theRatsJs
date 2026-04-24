import pg from 'pg';
import 'dotenv/config';
import pkg from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const { PrismaClient } = pkg;
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🔄 Limpando banco de dados...');

    // Ordem de exclusão (importante se houvesse relações/FKs)
    await prisma.simulado.deleteMany();
    await prisma.dicas.deleteMany();
    await prisma.curiosidade.deleteMany();
    await prisma.videoAula.deleteMany();
    await prisma.livro.deleteMany();
    await prisma.usuario.deleteMany();

    console.log('🌱 Iniciando seed...');

    // 1. Usuarios
    console.log('👤 Inserindo usuários...');
    await prisma.usuario.createMany({
        data: [
            {
                nome: 'João Silva',
                curso: 'Engenharia',
                curse: 'Engineering',
                foto: 'https://avatar.url/joao.png',
                idade: '20 anos',
                age: '20 years old',
                email: 'joao@email.com',
            },
            {
                nome: 'Maria Souza',
                curso: 'Letras',
                curse: 'Literature',
                foto: 'https://avatar.url/maria.png',
                idade: '22 anos',
                age: '22 years old',
                email: 'maria@email.com',
            },
        ],
    });

    // 2. Livros
    console.log('📚 Inserindo livros...');
    await prisma.livro.createMany({
        data: [
            {
                titulo: 'Dom Casmurro',
                autor: 'Machado de Assis',
                anoPublicacao: 1899,
                genero: 'Romance',
                genre: 'Novel',
                resumo: 'A história de Bentinho e Capitu...',
                resume: 'The story of Bentinho and Capitu...',
                personagens: 'Bentinho, Capitu, Escobar',
                characters: 'Bentinho, Capitu, Escobar',
                contextoHistorico: 'Brasil Império',
                historicContext: 'Imperial Brazil',
                analise: 'Ambiguidade narrativa sobre traição',
                analysis: 'Narrative ambiguity about betrayal',
            },
        ],
    });

    // 3. VideoAulas
    console.log('🎥 Inserindo vídeo aulas...');
    await prisma.videoAula.createMany({
        data: [
            {
                conteudo: 'Literatura Brasileira',
                content: 'Brazilian Literature',
                urlMidia: 'https://youtube.com/watch?v=exemplo1',
                descricao: 'Introdução ao Realismo',
                description: 'Introduction to Realism',
            },
        ],
    });

    // 4. Curiosidades
    console.log('💡 Inserindo curiosidades...');
    await prisma.curiosidade.createMany({
        data: [
            {
                conteudo: 'Machado de Assis',
                content: 'Machado de Assis',
                curiosidade: 'Ele foi um dos fundadores da ABL.',
                curiosity: 'He was one of the founders of the Brazilian Academy of Letters.',
            },
        ],
    });

    // 5. Dicas
    console.log('📌 Inserindo dicas...');
    await prisma.dicas.createMany({
        data: [
            {
                conteudo: 'Estudo Ativo',
                content: 'Active Study',
                dicas: 'Faça resumos logo após a leitura.',
                tips: 'Make summaries right after reading.',
            },
        ],
    });

    // 6. Simulados
    console.log('📝 Inserindo simulados...');
    await prisma.simulado.createMany({
        data: [
            {
                pergunta: 'Quem escreveu "Memórias Postumas"?',
                question: 'Who wrote "Memórias Postumas"?',
                opcaoA: 'Machado de Assis',
                optionA: 'Machado de Assis',
                opcaoB: 'José de Alencar',
                optionB: 'José de Alencar',
                opcaoC: 'Clarice Lispector',
                optionC: 'Clarice Lispector',
                opcaoD: 'Jorge Amado',
                optionD: 'Jorge Amado',
                opcaoE: 'Carlos Drummond',
                optionE: 'Carlos Drummond',
                respostaCorreta: 'A',
                correctAnswer: 'A',
                explicacao: 'Obra marco do realismo brasileiro.',
                explanation: 'A landmark work of Brazilian realism.',
            },
        ],
    });

    console.log('✅ Todos os registros foram inseridos com sucesso!');
}

main()
    .catch((e) => {
        console.error('❌ Erro no seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
