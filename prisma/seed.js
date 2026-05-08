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
                email: 'pedro.vitorino7@senaisp.edu.br',
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
            },
            {
                nome: 'Victor Ferreira de Oliveira',
                curso: 'Desenvolvimento de Sistemas',
                curse: 'Systems Development',
                foto: '[vamos tirar a foto depois]',
                idade: '17 anos',
                age: '17 years old',
                email: 'victor.f.oliveira14@aluno.senai.br',
            },
            {
                nome: 'Antonio Gabriel',
                curso: 'Eletroeletrônica',
                curse: 'Electronics',
                foto: '[vamos tirar a foto depois]',
                idade: '17 anos',
                age: '17 years old',
                email: 'antonio-silva38@portalsesisp.org.br',
            },
            {
                nome: 'Pedro de Siqueira Silva ',
                curso: 'Eletroeletrônica',
                curse: 'Electronics',
                foto: '[vamos tirar a foto depois]',
                idade: '16 anos',
                age: '16 years old',
                email: 'pedro.silva34@portalsesisp.org.br',
            },
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

            detalhesAutor:
                'Dyonélio Tubino Machado (1895–1985) nasceu em Quaraí, no Rio Grande do Sul. Médico psiquiatra, jornalista e escritor, é um dos nomes centrais do Modernismo de 1930. Sua formação em psiquiatria marca profundamente sua ficção: ele constrói personagens a partir de gestos miúdos, impulsos e pensamentos quase imperceptíveis, revelando a psicologia do homem comum submetido à pressão social e econômica. Foi preso por questões políticas, filiou-se ao Partido Comunista e chegou a dividir uma cela com Graciliano Ramos. Ao longo da vida publicou 19 títulos, mas é com Os Ratos que seu nome permanece na literatura brasileira.',
            detalhesAutor_en:
                'Dyonélio Tubino Machado (1895–1985) was born in Quaraí, Rio Grande do Sul. A psychiatrist, journalist, and writer, he is one of the central figures of Brazilian 1930s Modernism. His medical background deeply shapes his fiction: characters are built through small gestures, impulses, and near-imperceptible thoughts that expose the psychology of ordinary people under social and economic pressure. He was imprisoned for political reasons, joined the Communist Party, and shared a cell with fellow writer Graciliano Ramos. Over his lifetime he published 19 titles, but it is The Rats that secured his place in Brazilian literature.',

            genero: 'Romance psicológico, Realismo social, Modernismo de 1930',
            genero_en: 'Psychological novel, Social realism, 1930s Brazilian Modernism',

            resumo: 'O livro acompanha um único dia na vida de Naziazeno Barbosa, funcionário público em Porto Alegre que acorda com um problema aparentemente simples: pagar 53 mil-réis ao leiteiro até o dia seguinte, ou perder o fornecimento de leite para seu filho pequeno, Mainho. A narrativa mergulha na angústia crescente do protagonista enquanto ele percorre ruas, repartições, bancos e cafés em busca de um empréstimo que ninguém quer conceder — transformando uma dívida trivial num calvário psicológico sem fim.',
            resumo_en:
                "The novel follows a single day in the life of Naziazeno Barbosa, a civil servant in Porto Alegre who wakes up with a seemingly simple problem: paying 53 mil-réis to the milkman by the next morning, or losing the milk supply for his young son, Mainho. The narrative plunges into the protagonist's mounting anguish as he wanders streets, government offices, banks, and cafés in search of a loan no one will grant — turning a trivial debt into an unending psychological ordeal.",

            contexto:
                'A história se passa no centro de Porto Alegre dos anos 1930, cenário marcado pela Grande Depressão, pela instabilidade política da Era Vargas e pela ascensão de regimes autoritários. Dyonélio retrata a precariedade da classe média baixa urbana num momento em que a prosa regionalista dominava a cena literária brasileira — e opta deliberadamente pelo ambiente da cidade e pelo drama do assalariado anônimo.',
            contexto_en:
                'The story is set in downtown Porto Alegre in the 1930s, a backdrop shaped by the Great Depression, the political instability of the Vargas era, and the rise of authoritarian regimes. Dyonélio portrays the precariousness of the urban lower middle class at a time when regionalist rural prose dominated Brazilian fiction — deliberately choosing the city and the plight of the anonymous wage earner instead.',

            estiloEscrita:
                'Linguagem direta, seca e econômica, composta de frases curtas que imitam a velocidade e a vertigem do pensamento ansioso. O narrador onisciente alterna discurso indireto livre e discurso direto, acompanhando de perto o fluxo mental de Naziazeno. Dyonélio usa repetições rítmicas ("confabula, confabula"), reticências em excesso e a zoomorfização — substituindo palavras como "face" por "focinho" — para aproximar o homem da figura do rato. Cada um dos 28 capítulos curtos carrega sua própria célula de suspense, resolvida no máximo no capítulo seguinte, mantendo o leitor em estado permanente de tensão.',
            estiloEscrita_en:
                'The language is direct, dry, and economical — short sentences that mimic the speed and vertigo of anxious thought. An omniscient narrator alternates between free indirect discourse and direct speech, closely tracking Naziazeno\'s mental flow. Dyonélio uses rhythmic repetitions, excessive ellipses, and zoomorphization — replacing words like "face" with "snout" — to blur the line between the man and the rat. Each of the 28 short chapters carries its own cell of suspense, resolved at most in the next one, keeping the reader in a constant state of tension.',

            enredo: 'Avisada pelo leiteiro de que a dívida precisa ser quitada até o dia seguinte, Adelaide repassa o problema ao marido. Naziazeno passa então o dia inteiro percorrendo o centro de Porto Alegre — praças, repartições, bancos, botecos — tentando empréstimos com colegas, agiotas e superiores. A cada porta fechada, o desespero se aprofunda e o tempo psicológico se dilata. No limite, consegue penhorar uma joia de um amigo chamado Duque e paga o leiteiro. Mas o desfecho oferece apenas um alívio irônico: ao deitar, Naziazeno não consegue dormir, convencido de que ratos estão roendo o dinheiro que reservou. Ao amanhecer, os mesmos problemas o esperam.',
            enredo_en:
                "Warned by the milkman that the debt must be paid by the next morning, Adelaide passes the problem on to her husband. Naziazeno then spends the entire day crossing downtown Porto Alegre — squares, government offices, banks, and bars — trying to borrow money from colleagues, moneylenders, and superiors. Each closed door deepens his despair and stretches psychological time. At the last moment, he pawns a friend's jewelry and pays the milkman. But the ending offers only bitter irony: lying down, Naziazeno cannot sleep, convinced rats are gnawing at the money he set aside. At dawn, the same problems await him.",

            verossimilhanca:
                'Dyonélio ancora a narrativa em locais reais de Porto Alegre — a Praça da Alfândega, o Mercado Público, o Café Nacional, o New York Bank — criando uma topografia urbana concreta e reconhecível. A minúcia psicológica com que descreve gestos como sacudir moedas no bolso, cortar nervosamente um pão em migalhas ou estudar como abordar um superior confere à obra um realismo que ultrapassa o documental: o leitor sente a humilhação e o cansaço de Naziazeno como experiências físicas.',
            verossimilhanca_en:
                "Dyonélio anchors the narrative in real Porto Alegre locations — Praça da Alfândega, the Public Market, Café Nacional, the New York Bank — creating a concrete, recognizable urban topography. The psychological minuteness with which he describes gestures like jingling coins in a pocket, nervously crumbling bread, or rehearsing how to approach a superior gives the novel a realism that goes beyond the documentary: the reader feels Naziazeno's humiliation and exhaustion as physical sensations.",

            personagens: [
                'Naziazeno Barbosa',
                'Adelaide',
                'Mainho',
                'O Leiteiro',
                'Dr. Romeiro',
                'Alcides',
                'Duque',
                'Costa Miranda',
            ],

            caracteristicasLiterarias:
                'Pertencente à segunda fase do Modernismo brasileiro, o romance se destaca pelo uso do tempo psicológico em oposição ao tempo cronológico; pela crítica ao capitalismo e à alienação urbana; pela influência direta da psicanálise freudiana na construção do protagonista; pela ausência de heróis ou momentos sublimes — apenas a mediocridade e a fragmentação do cotidiano. A comparação com Dostoiévski é frequente na crítica: assim como Raskólnikov em Crime e Castigo, Naziazeno é um homem comum empurrado para um abismo de angústia e impotência. O romance ganhou o Prêmio Machado de Assis da Academia Brasileira de Letras.',
            caracteristicasLiterarias_en:
                "Belonging to the second phase of Brazilian Modernism, the novel stands out for its use of psychological time versus chronological time; its critique of capitalism and urban alienation; the direct Freudian psychoanalytic influence on the protagonist's construction; and the absence of heroes or sublime moments — only the mediocrity and fragmentation of daily life. Critics frequently compare it to Dostoevsky: like Raskolnikov in Crime and Punishment, Naziazeno is an ordinary man pushed to the edge of anguish and powerlessness. The novel won the Machado de Assis Prize from the Brazilian Academy of Letters.",

            conclusao:
                'Os Ratos foi escrito em apenas 20 dias para um concurso, mas amadurecido durante nove anos. Quase um século depois de sua publicação, o romance permanece urgente: a topografia da humilhação financeira, o individualismo da cidade e a solidão do homem na multidão não envelheceram. A imagem final — Naziazeno acordado no escuro, ouvindo ratos que talvez não existam, protegendo um dinheiro que mal cobre a próxima dívida — é uma das mais perturbadoras da literatura brasileira.',
            conclusao_en:
                'The Rats was written in just 20 days for a competition, but had been maturing for nine years. Nearly a century after its publication, the novel remains urgent: the topography of financial humiliation, urban individualism, and the loneliness of a man lost in the crowd have not aged. The final image — Naziazeno awake in the dark, hearing rats that may not exist, guarding money that barely covers the next debt — is one of the most unsettling in Brazilian literature.',
        },
    });

    await prisma.personagem.createMany({
        data: [
            {
                nome: 'Adelaide',
                caracteristicas_pt: 'Preocupada, prática, direta, responsável e realista',
                caracteristicas_en:
                    'Worried, practical, straightforward, responsible and realistic',
                representacao_pt:
                    'Representa a realidade doméstica e a pressão familiar, sendo a voz da responsabilidade e da sobrevivência dentro do lar, além de evidenciar o impacto da pobreza nas relações familiares',
                representacao_en:
                    'Represents domestic reality and family pressure, acting as the voice of responsibility and survival within the household, also highlighting the impact of poverty on family relationships',
            },
            {
                nome: 'Duque',
                caracteristicas_pt:
                    'Astuto, manipulador, esperto, oportunista, sociável, persuasivo',
                caracteristicas_en:
                    'Cunning, manipulative, clever, opportunistic, sociable, persuasive',
                representacao_pt:
                    'Representa o indivíduo que se adapta ao sistema por meio da malandragem e da esperteza, simbolizando estratégias de sobrevivência em uma sociedade desigual',
                representacao_en:
                    'Represents the individual who adapts to the system through cunning and street-smart behavior, symbolizing survival strategies in an unequal society',
            },
            {
                nome: 'Alcides',
                caracteristicas_pt:
                    'Mais estável, aparentemente tranquilo, prático, menos emocional, observador',
                caracteristicas_en:
                    'More stable, apparently calm, practical, less emotional, observant',
                representacao_pt:
                    'Representa uma alternativa ao desespero de Naziazeno, simbolizando alguém mais adaptado à realidade, embora ainda inserido no mesmo contexto social difícil',
                representacao_en:
                    'Represents an alternative to Naziazeno’s despair, symbolizing someone more adapted to reality, although still within the same difficult social context',
            },
            {
                nome: 'Dona Rosa (leiteira)',
                caracteristicas_pt: 'Rígida, cobradora, direta, impaciente, prática',
                caracteristicas_en: 'Strict, demanding, direct, impatient, practical',
                representacao_pt:
                    'Representa a pressão econômica imediata e impessoal, simbolizando como as relações sociais são mediadas pelo dinheiro e pela necessidade de sobrevivência',
                representacao_en:
                    'Represents immediate and impersonal economic pressure, symbolizing how social relations are mediated by money and survival needs',
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
