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

    // Livro
    await prisma.livro.createMany({
        data: [
            {
                titulo: 'Os Ratos',
                autor: 'Dyonélio Machado',
                capa: 'https://i.ibb.co/kgkfQfXh/the-rats.jpg',
                anoPublicacao: 1935,
                genero_pt: 'Romance psicológico, Realismo',
                genero_en: 'Psychological novel, Realism',

                resumo_pt: 'O livro acompanha um único dia na vida de Naziazeno Barbosa, um funcionário público que vive em Porto Alegre e está desesperado para conseguir dinheiro suficiente para pagar uma dívida urgente de 53 mil-réis com o leiteiro. Ao longo do dia, ele percorre a cidade tentando empréstimos, ajuda de amigos e alternativas para resolver seu problema. Sua jornada é marcada por ansiedade crescente, humilhações, frustrações e um profundo sentimento de impotência diante das dificuldades financeiras. Ao final, mesmo quando encontra uma possível solução, sua mente permanece atormentada pela insegurança e pelo medo constante da falta de dinheiro.',

                resumo_en: 'The novel follows a single day in the life of Naziazeno Barbosa, a low-level public clerk in Porto Alegre who desperately needs money to pay a small but urgent debt to the milkman. Throughout the day, he wanders the city seeking loans and help, facing humiliation, anxiety, and frustration. Even when a possible solution appears, his mind remains trapped in insecurity and fear of poverty.',

                personagens: [
                    'Naziazeno Barbosa',
                    'Adelaide',
                    'Duque',
                    'Alcides',
                    'Dr. Mondina',
                    'Leiteiro',
                ],

                contextoHistorico_pt:
                    'Brasil urbano da década de 1930, período de crise econômica, crescimento das cidades e aumento das desigualdades sociais após a Revolução de 1930.',

                contextoHistorico_en:
                    'Urban Brazil in the 1930s, marked by economic instability, urban growth, and rising social inequality following the 1930 Revolution.',

                analise_pt:
                    "A obra é uma profunda análise psicológica da pobreza e da ansiedade. O autor utiliza fluxo de consciência para mostrar o desespero interno de Naziazeno, evidenciando como a falta de dinheiro afeta não apenas a vida material, mas também a saúde mental. O livro critica a desigualdade social, a burocracia e a fragilidade das relações humanas em um contexto de necessidade. O título 'Os Ratos' simboliza tanto a degradação quanto o pensamento obsessivo que 'corrói' a mente do protagonista.",

                analise_en:
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
