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
            capa: 'https://i.ibb.co/kgkfQfXh/the-rats.jpg',
            autor: 'Dyonélio Machado',
            anoPublicacao: 1935,

            // Antigo detalhesAutor_pt
            detalhesAutor:
                'Dyonélio Machado foi um escritor e médico brasileiro, um dos expoentes do Modernismo de 1930. Sua obra combina uma análise clínica da psique humana com a crítica social das classes trabalhadoras urbanas.',
            detalhesAutor_en:
                'Dyonélio Machado was a Brazilian writer and physician, a key figure in the 1930s Modernism. His work combines a clinical analysis of the human psyche with social criticism of the urban working classes.',

            genero: 'Romance psicológico, Realismo social',
            genero_en: 'Psychological novel, Social realism',

            resumo: 'O livro acompanha um único dia na vida de Naziazeno Barbosa, um funcionário público que vive em Porto Alegre e está desesperado para conseguir 53 mil-réis para pagar o leiteiro. A narrativa mergulha na angústia existencial e no cansaço físico do protagonista enquanto ele percorre a cidade em busca de um empréstimo impossível.',
            resumo_en:
                'The novel follows a single day in the life of Naziazeno Barbosa, a civil servant in Porto Alegre who is desperate to find 53 mil-réis to pay the milkman. The narrative dives into the existential anguish and physical exhaustion of the protagonist as he wanders the city in search of an impossible loan.',

            contexto:
                'Brasil urbano da década de 1930, período marcado pela Grande Depressão e pela ascensão de regimes autoritários, refletindo a precariedade da classe média baixa.',
            contexto_en:
                'Urban Brazil in the 1930s, a period marked by the Great Depression and the rise of authoritarian regimes, reflecting the precariousness of the lower middle class.',

            estiloEscrita:
                'Narrativa introspectiva e fragmentada, utilizando o fluxo de consciência para transmitir a ansiedade e a obsessão do protagonista por números e dinheiro.',
            estiloEscrita_en:
                "Introspective and fragmented narrative, using stream of consciousness to convey the protagonist's anxiety and obsession with numbers and money.",

            enredo: 'A trama se desenvolve em um ciclo de humilhação e busca. Naziazeno tenta sucessivos empréstimos com amigos, agiotas e superiores, enfrentando a burocracia e a indiferença social até um desfecho irônico e amargo.',
            enredo_en:
                'The plot unfolds in a cycle of humiliation and quest. Naziazeno tries successive loans with friends, money lenders, and superiors, facing bureaucracy and social indifference until an ironic and bitter conclusion.',

            verossimilhanca:
                'A obra apresenta forte realismo ao retratar dificuldades financeiras urbanas e a psicologia do desespero de forma crua e direta.',
            verossimilhanca_en:
                'The novel strongly reflects realism in portraying urban financial struggles and the psychology of despair in a raw and direct way.',

            personagens: ['Naziazeno Barbosa', 'Dulce', 'Alcides', 'O Leiteiro', 'O Diretor'],

            caracteristicasLiterarias:
                'Uso de repetições rítmicas que simulam a obsessão mental; foco no tempo psicológico em oposição ao tempo cronológico; crítica ao capitalismo urbano.',
            caracteristicasLiterarias_en:
                'Use of rhythmic repetitions that simulate mental obsession; focus on psychological time versus chronological time; critique of urban capitalism.',

            conclusao:
                'Os Ratos permanece como um dos maiores estudos sobre a ansiedade humana na literatura brasileira, onde o "rato" torna-se a metáfora perfeita para o pensamento que corrói o indivíduo.',
            conclusao_en:
                'The Rats remains one of the greatest studies of human anxiety in Brazilian literature, where the "rat" becomes the perfect metaphor for the thought that gnaws at the individual.',
        },
    });

    await prisma.personagem.createMany({
        data: [
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
