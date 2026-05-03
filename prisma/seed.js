import pg from 'pg';
import 'dotenv/config';
import pkg from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const { PrismaClient } = pkg;
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Resetando tabelas...');

    await prisma.participantes.deleteMany();
    await prisma.personagem.deleteMany();
    await prisma.livro.deleteMany();
    await prisma.videoAula.deleteMany();
    await prisma.curiosidade.deleteMany();
    await prisma.dicas.deleteMany();
    await prisma.simulado.deleteMany();

    console.log('📦 Inserindo dados...');

    // Usuario
    await prisma.participantes.createMany({
        data: [
            {
                nome: 'Arthur Morais',
                curso: 'Desenvolvimento de Sistemas',
                curse: 'Systems Development',
                foto: '[vamos tirar a foto depois]',
                idade: '17 anos',
                age: '17 years old',
                email: 'arthur.m.santos20@aluno.senai.br',
            },
            {
                nome: 'Pedro Arthur',
                curso: 'Eletroeletrônica',
                curse: 'Electronics',
                foto: '[vamos tirar a foto depois]',
                idade: '17 anos',
                age: '17 years old',
                email: 'pedro.vitorino7@senaisp.edu.br'
            },
            {
                nome: 'João Victor',
                curso: 'Desenvolvimento de Sistemas',
                curse: 'Systems Development',
                foto: '[vamos tirar a foto depois]',
                idade: '17 anos',
                age: '17 years old',
                email: 'joao.v.gomes50@aluno.senai.br',
            },
            {
                nome: 'Davi Camoleis',
                curso: 'Eletroeletrônica',
                curse: 'Electronics',
                foto: '[vamos tirar a foto depois]',
                idade: '17 anos',
                age: '17 years old',
                email: 'davi.c.nascimento8@aluno.senai.br',
            },
            {
                nome: 'Felipe Augusto',
                curso: 'Fabricação Mecânica',
                curse: 'Mechanical Manufacturing',
                foto: '[vamos tirar a foto depois]',
                idade: '17 anos',
                age: '17 years old',
                email: 'felipe.tonhatti@portalsesisp.org.br',
            },
            {
                nome: 'Rafael Santos',
                curso: 'Desenvolvimento de Sistemas',
                curse: 'Systems Development',
                foto: '[vamos tirar a foto depois]',
                idade: '17 anos',
                age: '17 years old',
                email: 'rafael.s.mendes6@aluno.senai.br',
            },
            {
                nome: 'Davi Nobrega',
                curso: 'Eletroeletrônica',
                curse: 'Electronics',
                foto: '[vamos tirar a foto depois]',
                idade: '17 anos',
                age: '17 years old',
                email: 'davi.nobrega3@portalsesisp.org.br',
            },
            {
                nome: 'Yasmim Vitória',
                curso: 'Eletroeletrônica',
                curse: 'Eletronics',
                foto: '[vamos tirar a foto depois]',
                idade: '17 anos',
                age: '17 years old',
                email: 'yasmim.santos56@portalsesisp.org.br',
            },
            {
                nome: 'Gustavo Teixeira Lisboa',
                curso: 'Desenvolvimento de Sistemas',
                curse: 'Systems Development',
                foto: '[vamos tirar a foto depois]',
                idade: '16 anos',
                age: '16 years old',
                email: 'gustavo.t.lisboa@aluno.senai.br',
            }
        ],
    });

    await prisma.personagem.deleteMany();

    // Livro com personagens
    await prisma.livro.create({
        data: {
            titulo: 'Os Ratos',
            autor: 'Dyonélio Machado',
            capa: 'https://i.ibb.co/kgkfQfXh/the-rats.jpg',
            anoPublicacao: 1935,

            detalhesAutor_pt:
                'Dyonélio Machado foi um escritor e médico brasileiro, conhecido por obras psicológicas e sociais.',
            detalhesAutor_en:
                'Dyonélio Machado was a Brazilian writer and physician known for psychological and social works.',

            verossimilhanca_pt:
                'A obra apresenta forte realismo ao retratar dificuldades financeiras urbanas.',
            verossimilhanca_en:
                'The novel strongly reflects realism in portraying urban financial struggles.',

            genero_pt: 'Romance psicológico, Realismo',
            genero_en: 'Psychological novel, Realism',

            resumo_pt:
                'O livro acompanha um único dia na vida de Naziazeno Barbosa, um funcionário público que vive em Porto Alegre e está desesperado para conseguir dinheiro suficiente para pagar uma dívida urgente de 53 mil-réis com o leiteiro. Ao longo do dia, ele percorre a cidade tentando empréstimos, ajuda de amigos e alternativas para resolver seu problema. Sua jornada é marcada por ansiedade crescente, humilhações, frustrações e um profundo sentimento de impotência diante das dificuldades financeiras. Ao final, mesmo quando encontra uma possível solução, sua mente permanece atormentada pela insegurança e pelo medo constante da falta de dinheiro.',
            resumo_en:
                'The novel follows a single day in the life of Naziazeno Barbosa, a low-level public clerk in Porto Alegre who desperately needs money to pay a small but urgent debt to the milkman. Throughout the day, he wanders the city seeking loans and help, facing humiliation, anxiety, and frustration. Even when a possible solution appears, his mind remains trapped in insecurity and fear of poverty.',

            contextoHistorico_pt:
                'Brasil urbano da década de 1930, com crise econômica.',
            contextoHistorico_en:
                'Urban Brazil in the 1930s with economic crisis.',

            analise_pt:
                'A obra explora a ansiedade causada pela pobreza.',
            analise_en:
                'The novel explores anxiety caused by poverty.',

            personagens: {
                create: [
                    {
                        nome: 'Naziazeno Barbosa',
                        caracteristicas_pt: 'Ansioso, endividado, inseguro',
                        caracteristicas_en: 'Anxious, indebted, insecure',
                        representacao_pt: 'Homem comum oprimido',
                        representacao_en: 'Oppressed common man',
                    },
                    {
                        nome: 'Adelaide',
                        caracteristicas_pt: 'Preocupada, prática',
                        caracteristicas_en: 'Worried, practical',
                        representacao_pt: 'Pressão familiar',
                        representacao_en: 'Family pressure',
                    },
                    {
                        nome: 'Duque',
                        caracteristicas_pt: 'Esperto, oportunista',
                        caracteristicas_en: 'Clever, opportunistic',
                        representacao_pt: 'Sobrevivência social',
                        representacao_en: 'Social survival',
                    },
                    {
                        nome: 'Alcides',
                        caracteristicas_pt: 'Amigo, solidário',
                        caracteristicas_en: 'Friendly, supportive',
                        representacao_pt: 'Apoio social',
                        representacao_en: 'Social support',
                    },
                    {
                        nome: 'Dr. Mondina',
                        caracteristicas_pt: 'Autoritário, distante',
                        caracteristicas_en: 'Authoritative, distant',
                        representacao_pt: 'Elite burocrática',
                        representacao_en: 'Bureaucratic elite',
                    },
                    {
                        nome: 'Leiteiro',
                        caracteristicas_pt: 'Cobrador, direto',
                        caracteristicas_en: 'Demanding, direct',
                        representacao_pt: 'Pressão econômica',
                        representacao_en: 'Economic pressure',
                    },
                ],
            },
        },
    });

    // VideoAula
    await prisma.videoAula.createMany({
        data: [
            {
                conteudo: 'Aula sobre Revolução Francesa',
                content: 'Class about French Revolution',
                urlMidia: 'https://video1.com',
                descricao: 'Explicação completa',
                description: 'Full explanation',
            },
            {
                conteudo: 'Aula de Matemática',
                content: 'Math class',
                urlMidia: 'https://video2.com',
                descricao: 'Funções lineares',
                description: 'Linear functions',
            },
        ],
    });

    // Curiosidade
    await prisma.curiosidade.createMany({
        data: [
            {
                conteudo: 'Curiosidade sobre o espaço',
                content: 'Space curiosity',
                curiosidade: 'O Sol representa 99% da massa do sistema solar',
                curiosity: 'The Sun is 99% of solar system mass',
            },
            {
                conteudo: 'Curiosidade histórica',
                content: 'History curiosity',
                curiosidade: 'Napoleão não era tão baixo quanto dizem',
                curiosity: 'Napoleon was not that short',
            },
        ],
    });

    // Dicas
    await prisma.dicas.createMany({
        data: [
            {
                conteudo: 'Dica de estudo',
                content: 'Study tip',
                dicas: 'Estude 25 minutos e descanse 5',
                tips: 'Study 25 min, rest 5',
            },
            {
                conteudo: 'Dica de produtividade',
                content: 'Productivity tip',
                dicas: 'Evite multitarefa',
                tips: 'Avoid multitasking',
            },
        ],
    });

    // Simulado
    await prisma.simulado.createMany({
        data: [
            {
                pergunta: 'Qual a capital do Brasil?',
                question: 'What is the capital of Brazil?',
                opcaoA: 'São Paulo',
                optionA: 'São Paulo',
                opcaoB: 'Rio de Janeiro',
                optionB: 'Rio de Janeiro',
                opcaoC: 'Brasília',
                optionC: 'Brasília',
                opcaoD: 'Salvador',
                optionD: 'Salvador',
                opcaoE: 'Curitiba',
                optionE: 'Curitiba',
                respostaCorreta: 'C',
                correctAnswer: 'C',
                explicacao: 'Brasília é a capital desde 1960.',
                explanation: 'Brasília has been the capital since 1960.',
            },
            {
                pergunta: 'Quanto é 2 + 2?',
                question: 'What is 2 + 2?',
                opcaoA: '3',
                optionA: '3',
                opcaoB: '4',
                optionB: '4',
                opcaoC: '5',
                optionC: '5',
                opcaoD: '6',
                optionD: '6',
                opcaoE: '7',
                optionE: '7',
                respostaCorreta: 'B',
                correctAnswer: 'B',
                explicacao: '2 + 2 = 4',
                explanation: '2 + 2 = 4',
            },
        ],
    });

    console.log('✅ Seed concluído!');
}

main()
    .catch((e) => {
        console.error('❌ Erro no seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
