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
                curso: 'Engenharia',
                curse: 'Engineering',
                foto: 'https://foto1.com',
                idade: '17',
                age: '17',
                email: 'arthur1@email.com',
            },
            {
                nome: 'Maria Silva',
                curso: 'Medicina',
                curse: 'Medicine',
                foto: 'https://foto2.com',
                idade: '21',
                age: '21',
                email: 'maria@email.com',
            },
        ],
    });

    // Livro
    await prisma.livro.createMany({
        data: [
            {
                titulo: 'Os Ratos',
                autor: 'Dyonélio Machado',
                capa: 'https://i.ibb.co/kgkfQfXh/the-rats.jpg',
                anoPublicacao: 1935,
                genero: 'Romance psicológico, Realismo',
                genre: 'Psychological novel, Realism',

                resumo: 'O livro acompanha um único dia na vida de Naziazeno Barbosa, um funcionário público que vive em Porto Alegre e está desesperado para conseguir dinheiro suficiente para pagar uma dívida urgente de 53 mil-réis com o leiteiro. Ao longo do dia, ele percorre a cidade tentando empréstimos, ajuda de amigos e alternativas para resolver seu problema. Sua jornada é marcada por ansiedade crescente, humilhações, frustrações e um profundo sentimento de impotência diante das dificuldades financeiras. Ao final, mesmo quando encontra uma possível solução, sua mente permanece atormentada pela insegurança e pelo medo constante da falta de dinheiro.',

                resume: 'The novel follows a single day in the life of Naziazeno Barbosa, a low-level public clerk in Porto Alegre who desperately needs money to pay a small but urgent debt to the milkman. Throughout the day, he wanders the city seeking loans and help, facing humiliation, anxiety, and frustration. Even when a possible solution appears, his mind remains trapped in insecurity and fear of poverty.',

                personagens: [
                    'Naziazeno Barbosa',
                    'Adelaide',
                    'Duque',
                    'Alcides',
                    'Dr. Mondina',
                    'Leiteiro',
                ],

                contextoHistorico:
                    'Brasil urbano da década de 1930, período de crise econômica, crescimento das cidades e aumento das desigualdades sociais após a Revolução de 1930.',

                historicContext:
                    'Urban Brazil in the 1930s, marked by economic instability, urban growth, and rising social inequality following the 1930 Revolution.',

                analise:
                    "A obra é uma profunda análise psicológica da pobreza e da ansiedade. O autor utiliza fluxo de consciência para mostrar o desespero interno de Naziazeno, evidenciando como a falta de dinheiro afeta não apenas a vida material, mas também a saúde mental. O livro critica a desigualdade social, a burocracia e a fragilidade das relações humanas em um contexto de necessidade. O título 'Os Ratos' simboliza tanto a degradação quanto o pensamento obsessivo que 'corrói' a mente do protagonista.",

                analysis:
                    "The novel offers a deep psychological exploration of poverty and anxiety. Through stream of consciousness, it portrays Naziazeno’s inner turmoil, showing how financial struggle impacts mental health. It criticizes social inequality, bureaucracy, and fragile human relationships. The title 'The Rats' symbolizes both decay and the obsessive thoughts that gnaw at the protagonist’s mind.",
            },
        ],
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
