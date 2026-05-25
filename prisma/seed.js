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
                foto: 'https://i.ibb.co/R4yFtVzb/arthur.jpg',
                idade: '17 anos',
                age: '17 years old',
                email: 'arthur.m.santos20@aluno.senai.br',
            },
            {
                nome: 'Pedro Arthur',
                curso: 'Eletroeletrônica',
                curse: 'Electronics',
                foto: 'https://i.ibb.co/8n26Wf6H/pesca.jpg',
                idade: '17 anos',
                age: '17 years old',
                email: 'pedro.vitorino7@senaisp.edu.br',
            },
            {
                nome: 'João Victor',
                curso: 'Desenvolvimento de Sistemas',
                curse: 'Systems Development',
                foto: 'https://i.ibb.co/sdhW8P81/joao.jpg',
                idade: '17 anos',
                age: '17 years old',
                email: 'joao.v.gomes50@aluno.senai.br',
            },
            {
                nome: 'Davi Camoleis',
                curso: 'Eletroeletrônica',
                curse: 'Electronics',
                foto: 'https://i.ibb.co/21bXdySL/davi.jpg',
                idade: '17 anos',
                age: '17 years old',
                email: 'davi.c.nascimento8@aluno.senai.br',
            },
            {
                nome: 'Felipe Augusto',
                curso: 'Fabricação Mecânica',
                curse: 'Mechanical Manufacturing',
                foto: 'https://i.ibb.co/Qww2Qn4/feli.jpg',
                idade: '17 anos',
                age: '17 years old',
                email: 'felipe.tonhatti@portalsesisp.org.br',
            },
            {
                nome: 'Rafael Santos',
                curso: 'Desenvolvimento de Sistemas',
                curse: 'Systems Development',
                foto: 'https://i.ibb.co/dvm9y9K/rafael.jpg',
                idade: '17 anos',
                age: '17 years old',
                email: 'rafael.s.mendes6@aluno.senai.br',
            },
            {
                nome: 'Davi Nobrega',
                curso: 'Eletroeletrônica',
                curse: 'Electronics',
                foto: 'https://i.ibb.co/nTv66zs/davi-nobr.jpg',
                idade: '17 anos',
                age: '17 years old',
                email: 'davi.nobrega3@portalsesisp.org.br',
            },
            {
                nome: 'Yasmim Vitória',
                curso: 'Eletroeletrônica',
                curse: 'Eletronics',
                foto: 'https://i.ibb.co/Y7HRYffY/yasmin.jpg',
                idade: '17 anos',
                age: '17 years old',
                email: 'yasmim.santos56@portalsesisp.org.br',
            },
            {
                nome: 'Gustavo Teixeira Lisboa',
                curso: 'Desenvolvimento de Sistemas',
                curse: 'Systems Development',
                foto: 'https://i.ibb.co/217JtSQb/lisboa.jpg',
                idade: '16 anos',
                age: '16 years old',
                email: 'gustavo.t.lisboa@aluno.senai.br',
            },
            {
                nome: 'Victor Ferreira de Oliveira',
                curso: 'Desenvolvimento de Sistemas',
                curse: 'Systems Development',
                foto: 'https://i.ibb.co/ycqQH0BK/victor.jpg',
                idade: '17 anos',
                age: '17 years old',
                email: 'victor.f.oliveira14@aluno.senai.br',
            },
            {
                nome: 'Antonio Gabriel',
                curso: 'Eletroeletrônica',
                curse: 'Electronics',
                foto: 'https://i.ibb.co/DfDN955v/antonio.jpg',
                idade: '17 anos',
                age: '17 years old',
                email: 'antonio-silva38@portalsesisp.org.br',
            },
            {
                nome: 'Pedro de Siqueira Silva ',
                curso: 'Eletroeletrônica',
                curse: 'Electronics',
                foto: 'https://i.ibb.co/60mrgMsM/pedrinh.jpg',
                idade: '16 anos',
                age: '16 years old',
                email: 'pedro.silva34@portalsesisp.org.br',
            },
            {
                nome: 'Pedro Henrique Urbano Escapalete ',
                curso: 'Desenvolvimento de Sistemas',
                curse: 'Systems Development',
                foto: 'https://i.ibb.co/qYNzpkS8/pedro.jpg',
                idade: '17 anos',
                age: '17 years old',
                email: 'pedro.escapalete@aluno.senai.br',
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
                conteudo: 'Vídeo sobre o livro "Os Ratos" feito pelo aluno Davi Camoleis.',
                content: 'Video about the book “Os Ratos” created by student Davi Camoleis.',
                urlMidia: 'https://youtube.com/shorts/5GOQK1J8F08?si=dlHMmEOv5pRK0zkz',
                descricao: 'Um resumo do livro "Os Ratos" contado de uma forma diferente e contagiante, feita pelo aluno de Valinhos, Davi Camoleis que, atualmente está no 3º Ano do Ensino Médio.',
                description: 'A summary of the book "The Rats", retold in a unique and engaging way by Davi Camoleis, a student from Valinhos who is currently in his junior year of high school',

            },
            {
                conteudo: 'Aula sobre Revolução Francesa',
                content: 'Class about French Revolution',
                urlMidia: 'https://www.youtube.com/watch?v=ppInSLfkRWo',
                descricao:
                    'Uma explicação completa e detalhada sobre a Revolução Francesa, abordando desde a crise do Antigo Regime, a divisão da sociedade estamental em três estados, a queda da Bastilha, até o período do terror jacobino e a posterior ascensão de Napoleão Bonaparte ao poder.',
                description:
                    'A complete and detailed explanation of the French Revolution, covering everything from the crisis of the Old Regime, the division of the estamental society into three estates, the fall of the Bastille, to the period of Jacobean terror and the subsequent rise of Napoleon Bonaparte to power.',
            },
            {
                conteudo: 'Aula de Matemática',
                content: 'Math class',
                urlMidia: 'https://www.youtube.com/watch?v=G_k7FFJv3rU',
                descricao:
                    'Uma aula aprofundada focada em funções lineares e funções afins, explicando passo a passo como identificar e diferenciar os coeficientes angular e linear na lei de formação, além de demonstrar como esses elementos determinam o comportamento e a inclinação da reta no gráfico.',
                description:
                    'An in-depth class focused on linear and affine functions, explaining step-by-step how to identify and differentiate the angular and linear coefficients in the formation law, in addition to demonstrating how these elements determine the behavior and slope of the line on the graph.',
            },
            {
                conteudo: 'Aula de Biologia: Citologia',
                content: 'Biology class: Cytology',
                urlMidia: 'https://www.youtube.com/watch?v=VwRVOcqWo2o',
                descricao:
                    'Uma introdução abrangente à área da citologia para o vestibular, detalhando detalhadamente a diferença estrutural entre as células eucariontes e procariontes, a presença ou ausência da carioteca, e as características fundamentais dos seres celulares versus acelulares.',
                description:
                    'A comprehensive introduction to cytology for college exams, detailing the structural differences between eukaryotic and prokaryotic cells, the presence or absence of the nuclear membrane, and the fundamental characteristics of cellular versus acellular organisms.',
            },
            {
                conteudo: 'Aula de Química: Modelos Atômicos',
                content: 'Chemistry class: Atomic Models',
                urlMidia: 'https://www.youtube.com/watch?v=AAPKgOX4_NM',
                descricao:
                    'Uma análise cronológica detalhada da evolução os modelos atômicos na história da ciência, explicando de forma clara as propostas de Dalton, Thomson, Rutherford e Bohr, ressaltando os conceitos de esferas maciças, a descoberta do elétron, o núcleo atômico e as órbitas quantizadas de energia.',
                description:
                    'A detailed chronological analysis of the evolution of atomic models in science history, clearly explaining the proposals of Dalton, Thomson, Rutherford, and Bohr, highlighting concepts of solid spheres, the discovery of electrons, the atomic nucleus, and quantized energy orbits.',
            },
            {
                conteudo: 'Aula de Geografia: Globalização',
                content: 'Geography class: Globalization',
                urlMidia: 'https://www.youtube.com/watch?v=U0SrpjB9Lfw',
                descricao:
                    'Uma discussão crítica sobre o processo de globalização e a internacionalização de mercados e capitais, explicando como o capital financeiro, o avanço tecnológico e a atuação das empresas transnacionais moldam os blocos econômicos e afetam as dinâmicas sociais locais.',
                description:
                    'A critical discussion on the globalization process and the internationalization of markets and capital, explaining how financial capital, technological breakthroughs, and the role of transnational corporations shape economic blocs and affect local social dynamics.',
            },
            {
                conteudo: 'Aula de Física: Cinemática',
                content: 'Physics class: Kinematics',
                urlMidia: 'https://www.youtube.com/watch?v=wlTa_yTElGM',
                descricao:
                    'Um resumão completo focado em mecânica e cinemática escalar, abordando conceitos essenciais de movimento uniforme e uniformemente variado, equações de velocidade e aceleração, além de interpretar de maneira aprofundada gráficos de posição e velocidade em função do tempo.',
                description:
                    'A complete summary focused on mechanics and scalar kinematics, covering essential concepts of uniform and uniformly varied motion, speed and acceleration equations, along with an in-depth interpretation of position and velocity graphs versus time.',
            },
            {
                conteudo: 'Aula de Português: Sintaxe do Período',
                content: 'Portuguese class: Sentence Syntax',
                urlMidia: 'https://www.youtube.com/watch?v=ZR_Ou01WsK0',
                descricao:
                    'Explicação didática detalhada sobre a sintaxe das orações coordenadas e subordinadas, ensinando a identificar os termos essenciais, integrantes e acessórios da oração para aplicar de forma correta as regras de concordância e pontuação nos vestibulares.',
                description:
                    'Detailed educational explanation of coordinate and subordinate clause syntax, teaching how to identify the essential, core, and accessory terms of a sentence to correctly apply agreement and punctuation rules in college entrance exams.',
            },
            {
                conteudo: 'Aula de Filosofia: Introdução à Filosofia',
                content: 'Philosophy class: Introduction to Philosophy',
                urlMidia: 'https://www.youtube.com/watch?v=TIIzrsbx74E',
                descricao:
                    'Uma introdução ao pensamento filosófico, abordando a transição crucial da mitologia grega para a racionalidade (Logos) na Grécia Antiga, apresentando os primeiros pensadores da história e a busca pelo princípio fundamental do universo.',
                description:
                    "An introduction to philosophical thought, covering the crucial transition from Greek mythology to rationality (Logos) in Ancient Greece, presenting history's first thinkers and their quest for the fundamental principle of the universe.",
            },
            {
                conteudo: 'Aula de Literatura: Romantismo no Brasil',
                content: 'Literature class: Romanticism in Brazil',
                urlMidia: 'https://www.youtube.com/watch?v=M7okFxuX8fM',
                descricao:
                    'Uma contextualização histórica e estética do movimento romântico no Brasil, explicando detalhadamente as três gerações da poesia romântica, os principais autores nacionais e as marcas estilísticas de idealização, nacionalismo e egocentrismo literário.',
                description:
                    'A historical and aesthetic contextualization of the Romantic movement in Brazil, explaining in detail the three generations of romantic poetry, the main national authors, and the stylistic marks of idealization, nationalism, and literary egocentrism.',
            },
            {
                conteudo: 'Aula de História: Segunda Guerra Mundial',
                content: 'History class: World War II',
                urlMidia: 'https://www.youtube.com/watch?v=ZffDTZTmLGI',
                descricao:
                    'Uma retrospectiva profunda da Segunda Guerra Mundial, detalhando as raízes geopolíticas da crise europeia, as estratégias militares do Eixo e dos Aliados, as principais batalhas decisivas e o impacto do conflito na reorganização geopolítica global do século XX.',
                description:
                    'An in-depth retrospective of World War II, detailing the geopolitical roots of the European crisis, the military strategies of the Axis and Allies, the main decisive battles, and the impact of the conflict on the global',
            },
        ],
    });

    // Curiosidade
    await prisma.curiosidade.createMany({
        data: [
            // Biologia
            {
                conteudo: 'Biologia',
                content: 'Biology',
                curiosidade: 'O DNA humano é 98% idêntico ao dos chimpanzés.',
                curiosity: 'Human DNA is 98% identical to that of chimpanzees.',
            },
            {
                conteudo: 'Biologia',
                content: 'Biology',
                curiosidade: 'As baleias-azuis têm o coração do tamanho de um carro popular.',
                curiosity: 'Blue whales have a heart the size of a small car.',
            },
            {
                conteudo: 'Biologia',
                content: 'Biology',
                curiosidade:
                    'Existem mais bactérias no seu corpo do que estrelas na nossa galáxia.',
                curiosity: 'There are more bacteria in your body than stars in our galaxy.',
            },
            {
                conteudo: 'Biologia',
                content: 'Biology',
                curiosidade:
                    'As impressões digitais dos coalas são tão parecidas com as humanas que podem confundir peritos em cenas de crime.',
                curiosity:
                    'Koalas have fingerprints so similar to humans that they can confuse crime scene investigators.',
            },
            {
                conteudo: 'Biologia',
                content: 'Biology',
                curiosidade:
                    'Os polvos têm três corações e o sangue deles é azul por ser baseado em cobre.',
                curiosity:
                    'Octopuses have three hearts and their blood is blue because it is copper-based.',
            },
            {
                conteudo: 'Biologia',
                content: 'Biology',
                curiosidade:
                    'Os fungos são geneticamente mais parecidos com os animais do que com as plantas.',
                curiosity: 'Fungi are genetically closer to animals than they are to plants.',
            },
            {
                conteudo: 'Biologia',
                content: 'Biology',
                curiosidade: 'Os dentes humanos são tão fortes quanto os dentes de um tubarão.',
                curiosity: 'Human teeth are just as strong as shark teeth.',
            },
            {
                conteudo: 'Biologia',
                content: 'Biology',
                curiosidade:
                    'Os flamingos são naturalmente brancos; eles ficam rosa por causa dos pigmentos dos alimentos que comem.',
                curiosity:
                    'Flamingos are naturally white; they turn pink because of the pigments in the food they eat.',
            },
            // Física
            {
                conteudo: 'Física',
                content: 'Physics',
                curiosidade:
                    'A luz do Sol leva cerca de 8 minutos e 20 segundos para chegar à Terra.',
                curiosity: 'Sunlight takes about 8 minutes and 20 seconds to reach Earth.',
            },
            {
                conteudo: 'Física',
                content: 'Physics',
                curiosidade: 'O som não se propaga no vácuo do espaço.',
                curiosity: 'Sound does not propagate in the vacuum of space.',
            },
            {
                conteudo: 'Física',
                content: 'Physics',
                curiosidade: 'Se você viajasse à velocidade da luz, o tempo pararia para você.',
                curiosity: 'If you traveled at the speed of light, time would stop for you.',
            },
            {
                conteudo: 'Física',
                content: 'Physics',
                curiosidade:
                    'Toda a matéria que compõe a raça humana caberia dentro de um cubo de açúcar se removêssemos o espaço vazio dos átomos.',
                curiosity:
                    'All the matter that makes up the human race would fit inside a sugar cube if we removed the empty space in atoms.',
            },
            {
                conteudo: 'Física',
                content: 'Physics',
                curiosidade:
                    'A água pode congelar e ferver ao mesmo tempo sob condições específicas de pressão e temperatura (ponto triplo).',
                curiosity:
                    'Water can freeze and boil at the same time under specific pressure and temperature conditions (triple point).',
            },
            {
                conteudo: 'Física',
                content: 'Physics',
                curiosidade:
                    'A gravidade na Lua é cerca de 16,6% da gravidade da Terra, o que permite pular muito mais alto.',
                curiosity:
                    "The Moon's gravity is about 16.6% of Earth's gravity, allowing you to jump much higher.",
            },
            {
                conteudo: 'Física',
                content: 'Physics',
                curiosidade:
                    'O vidro é tecnicamente um sólido amorfo, o que significa que seus átomos não estão perfeitamente alinhados.',
                curiosity:
                    'Glass is technically an amorphous solid, meaning its atoms are not perfectly aligned.',
            },
            {
                conteudo: 'Física',
                content: 'Physics',
                curiosidade:
                    'Um ano-luz é uma medida de distância, não de tempo, e equivale a cerca de 9,5 trilhões de quilômetros.',
                curiosity:
                    'A light-year is a measure of distance, not time, and equals about 9.5 trillion kilometers.',
            },
            // Química
            {
                conteudo: 'Química',
                content: 'Chemistry',
                curiosidade: 'O diamante e o grafite são feitos do mesmo elemento: Carbono.',
                curiosity: 'Diamond and graphite are made of the same element: Carbon.',
            },
            {
                conteudo: 'Química',
                content: 'Chemistry',
                curiosidade: 'O único metal que é líquido em temperatura ambiente é o mercúrio.',
                curiosity: 'The only metal that is liquid at room temperature is mercury.',
            },
            {
                conteudo: 'Química',
                content: 'Chemistry',
                curiosidade: 'O oxigênio líquido tem uma cor azul pálida.',
                curiosity: 'Liquid oxygen has a pale blue color.',
            },
            {
                conteudo: 'Química',
                content: 'Chemistry',
                curiosidade:
                    'A tabela periódica não possui a letra "J" em nenhum dos nomes dos elementos químicos.',
                curiosity:
                    'The periodic table does not have the letter "J" in any of the chemical element names.',
            },
            {
                conteudo: 'Química',
                content: 'Chemistry',
                curiosidade:
                    'O elemento mais abundante no universo visível é o Hidrogênio, seguido pelo Hélio.',
                curiosity:
                    'The most abundant element in the observable universe is Hydrogen, followed by Helium.',
            },
            {
                conteudo: 'Química',
                content: 'Chemistry',
                curiosidade:
                    'O sal de cozinha é feito de Sódio (um metal altamente reativo) e Cloro (um gás tóxico), mas juntos eles são inofensivos.',
                curiosity:
                    'Table salt is made of Sodium (a highly reactive metal) and Chlorine (a toxic gas), but together they are harmless.',
            },
            {
                conteudo: 'Química',
                content: 'Chemistry',
                curiosidade:
                    'A água expande quando congela, ao contrário da maioria das outras substâncias líquidas.',
                curiosity: 'Water expands when it freezes, unlike most other liquid substances.',
            },
            {
                conteudo: 'Química',
                content: 'Chemistry',
                curiosidade:
                    'O fósforo recebeu esse nome a partir de uma palavra grega que significa "portador da luz", pois ele brilha no escuro.',
                curiosity:
                    'Phosphorus was named after a Greek word meaning "light-bearer" because it glows in the dark.',
            },
            // Geografia
            {
                conteudo: 'Geografia',
                content: 'Geography',
                curiosidade: 'O Monte Everest cresce cerca de 4 milímetros todos os anos.',
                curiosity: 'Mount Everest grows about 4 millimeters every year.',
            },
            {
                conteudo: 'Geografia',
                content: 'Geography',
                curiosidade: 'A Rússia tem uma área de superfície maior do que o planeta Plutão.',
                curiosity: 'Russia has a larger surface area than the planet Pluto.',
            },
            {
                conteudo: 'Geografia',
                content: 'Geography',
                curiosidade: 'O lugar mais seco da Terra é o Deserto do Atacama, no Chile.',
                curiosity: 'The driest place on Earth is the Atacama Desert in Chile.',
            },
            {
                conteudo: 'Geografia',
                content: 'Geography',
                curiosidade:
                    'O maior deserto do mundo não é o Saara, mas sim a Antártida, já que deserto é definido pela falta de precipitação.',
                curiosity:
                    'The largest desert in the world is not the Sahara, but Antarctica, as a desert is defined by its lack of precipitation.',
            },
            {
                conteudo: 'Geografia',
                content: 'Geography',
                curiosidade:
                    'O Canadá possui mais lagos do que todos os outros países do mundo somados.',
                curiosity:
                    'Canada has more lakes than all the other countries in the world combined.',
            },
            {
                conteudo: 'Geografia',
                content: 'Geography',
                curiosidade:
                    'Istambul é a única cidade do mundo que se estende por dois continentes: Europa e Ásia.',
                curiosity:
                    'Istanbul is the only city in the world that spans across two continents: Europe and Asia.',
            },
            {
                conteudo: 'Geografia',
                content: 'Geography',
                curiosidade:
                    'A Fossa das Marianas é o ponto mais profundo dos oceanos, chegando a quase 11 quilômetros de profundidade.',
                curiosity:
                    'The Mariana Trench is the deepest point in the oceans, reaching nearly 11 kilometers in depth.',
            },
            {
                conteudo: 'Geografia',
                content: 'Geography',
                curiosidade: 'A linha do equador passa por 13 países diferentes ao redor do mundo.',
                curiosity: 'The equator passes through 13 different countries around the world.',
            },
            // História
            {
                conteudo: 'História',
                content: 'History',
                curiosidade: 'A Guerra mais curta da história durou apenas 38 minutos.',
                curiosity: 'The shortest war in history lasted only 38 minutes.',
            },
            {
                conteudo: 'História',
                content: 'History',
                curiosidade:
                    'As pirâmides do Egito foram construídas antes da existência dos mamutes.',
                curiosity: 'The pyramids of Egypt were built before mammoths existed.',
            },
            {
                conteudo: 'História',
                content: 'History',
                curiosidade:
                    'A Cleópatra viveu mais próxima da invenção do iPhone do que da construção das pirâmides.',
                curiosity:
                    'Cleopatra lived closer to the invention of the iPhone than to the construction of the pyramids.',
            },
            {
                conteudo: 'História',
                content: 'History',
                curiosidade:
                    'O herói romano Júlio César foi sequestrado por piratas na juventude e exigiu que eles aumentassem o valor do seu próprio resgate.',
                curiosity:
                    'The Roman hero Julius Caesar was kidnapped by pirates in his youth and demanded they increase his own ransom value.',
            },
            {
                conteudo: 'História',
                content: 'History',
                curiosidade: 'A universidade de Oxford é mais antiga do que o Império Asteca.',
                curiosity: 'Oxford University is older than the Aztec Empire.',
            },
            {
                conteudo: 'História',
                content: 'History',
                curiosidade:
                    'O famoso cientista Albert Einstein recebeu uma proposta para se tornar o presidente de Israel em 1952.',
                curiosity:
                    'The famous scientist Albert Einstein was offered the presidency of Israel in 1952.',
            },
            {
                conteudo: 'História',
                content: 'History',
                curiosidade:
                    'Antes do uso de moedas, o sal era tão valioso que os soldados romanos eram pagos com ele, origem da palavra "salário".',
                curiosity:
                    'Before the use of coins, salt was so valuable that Roman soldiers were paid with it, which is the origin of the word "salary".',
            },
            {
                conteudo: 'História',
                content: 'History',
                curiosidade:
                    'O ano de 1816 ficou conhecido como "O ano sem verão" devido à erupção de um supervulcão na Indonésia que bloqueou o Sol.',
                curiosity:
                    'The year 1816 became known as "The year without a summer" due to the eruption of a supervolcano in Indonesia that blocked the Sun.',
            },
            // Literatura
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade: 'Dyonélio Machado escreveu "Os Ratos" em apenas 8 a 10 dias.',
                curiosity: 'Dyonélio Machado wrote "Os Ratos" in just 8 to 10 days.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'O autor era psiquiatra, o que explica o foco psicológico profundo do livro.',
                curiosity:
                    'The author was a psychiatrist, explaining the deep psychological focus of the book.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade: 'A dívida de 53 mil réis hoje equivaleria a cerca de R$ 6.500,00.',
                curiosity: 'The debt of 53,000 réis today would be worth about R$ 6,500.00.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade: 'O livro foi um dos primeiros romances urbanos modernos do Brasil.',
                curiosity: "The book was one of Brazil's first modern urban novels.",
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'A narrativa utiliza a técnica do "fluxo de consciência" em vários momentos.',
                curiosity:
                    'The narrative uses the "stream of consciousness" technique at various points.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'Dyonélio Machado foi preso várias vezes por seu envolvimento político.',
                curiosity:
                    'Dyonélio Machado was imprisoned several times for his political involvement.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'O barulho dos ratos no final do livro sugere que a angústia é eterna.',
                curiosity:
                    'The noise of the rats at the end of the book suggests that anguish is eternal.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'Naziazeno Barbosa é considerado um "anti-herói" da literatura brasileira.',
                curiosity:
                    'Naziazeno Barbosa is considered an "anti-hero" of Brazilian literature.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade: 'O livro ganhou o prêmio da Academia Brasileira de Letras em 1935.',
                curiosity: 'The book won the Brazilian Academy of Letters prize in 1935.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade: 'A obra critica a burocracia e a desumanização das cidades grandes.',
                curiosity:
                    'The work criticizes bureaucracy and the dehumanization of large cities.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'A repetição de palavras no texto simula o cansaço físico de caminhar.',
                curiosity: 'Word repetition in the text simulates the physical fatigue of walking.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'O anel de Mondina representa o último sacrifício da dignidade familiar.',
                curiosity: "Mondina's ring represents the last sacrifice of family dignity.",
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'O nome Naziazeno tem origem religiosa, contrastando com sua vida miserável.',
                curiosity:
                    'The name Naziazeno has religious origins, contrasting with his miserable life.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade: 'O cenário de Porto Alegre é descrito de forma cinzenta e sufocante.',
                curiosity: 'The Porto Alegre setting is described in a gray and suffocating way.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade: 'A obra influenciou grandes nomes do existencialismo no Brasil.',
                curiosity: 'The work influenced major names of existentialism in Brazil.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'Dyonélio Machado escreveu "Os Ratos" em apenas 20 noites, após trabalhar durante o dia como médico psiquiatra.',
                curiosity:
                    'Dyonélio Machado wrote "Os Ratos" in just 20 nights, after working during the day as a psychiatrist.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'Antes de escrever o romance, o autor passou nove anos amadurecendo a ideia, que originalmente seria apenas um conto.',
                curiosity:
                    'Before writing the novel, the author spent nine years developing the idea, which was originally meant to be just a short story.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'O livro foi escrito para participar do Prêmio Machado de Assis, da Editora Nacional de São Paulo, por incentivo do escritor Érico Veríssimo.',
                curiosity:
                    'The book was written to compete for the Machado de Assis Prize from Editora Nacional de São Paulo, encouraged by writer Érico Veríssimo.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'Ao concorrer ao Prêmio Machado de Assis, Dyonélio não venceu sozinho — dividiu o prêmio com outros quatro autores.',
                curiosity:
                    'When competing for the Machado de Assis Prize, Dyonélio did not win alone — he shared it with four other authors.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'Todo o drama do livro gira em torno de uma dívida de 53 mil réis com o leiteiro, valor que precisava ser pago em 24 horas.',
                curiosity:
                    'The entire drama of the book revolves around a debt of 53,000 réis owed to the milkman, which needed to be paid within 24 hours.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'Toda a trama de "Os Ratos" se passa em aproximadamente 24 horas, tornando-o um dos romances mais concentrados no tempo da literatura brasileira.',
                curiosity:
                    'The entire plot of "Os Ratos" takes place in approximately 24 hours, making it one of the most temporally concentrated novels in Brazilian literature.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'Críticos comparam a estrutura de "Os Ratos" ao "Ulysses" de James Joyce, pois ambos constroem protagonistas anônimos em jornadas urbanas de um único dia.',
                curiosity:
                    'Critics compare the structure of "Os Ratos" to James Joyces "Ulysses", as both build anonymous protagonists in single-day urban journeys.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'O título vem de uma alucinação do protagonista: ao conseguir o dinheiro, ele imagina ratos roendo as cédulas durante a noite, expressando sua paranoia e angústia.',
                curiosity:
                    'The title comes from the protagonists hallucination: after getting the money, he imagines rats gnawing at the bills overnight, expressing his paranoia and anguish.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'Dyonélio Machado era formado em psiquiatria, e isso se reflete diretamente na profundidade da análise psicológica do personagem Naziazeno ao longo da obra.',
                curiosity:
                    'Dyonélio Machado was trained as a psychiatrist, which is directly reflected in the depth of the psychological analysis of the character Naziazeno throughout the novel.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'O livro descreve locais reais de Porto Alegre nos anos 1930, como a Praça da Alfândega, o Mercado Público, o Café Nacional e o New York Bank.',
                curiosity:
                    'The book describes real locations in Porto Alegre in the 1930s, such as the Praça da Alfândega, the Public Market, the Café Nacional, and the New York Bank.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'Os ratos da alucinação final são interpretados por críticos como uma alegoria do capitalismo, que consome e corrói tudo o que o indivíduo tenta conquistar.',
                curiosity:
                    'The rats in the final hallucination are interpreted by critics as an allegory for capitalism, which consumes and erodes everything the individual tries to achieve.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    '"Os Ratos" pertence à segunda fase do Modernismo brasileiro, marcada pela reflexão sobre conflitos existenciais e problemas sociais contemporâneos.',
                curiosity:
                    '"Os Ratos" belongs to the second phase of Brazilian Modernism, marked by reflection on existential conflicts and contemporary social problems.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'A narrativa em terceira pessoa utiliza o discurso indireto livre, dando ao leitor acesso direto aos pensamentos e angústias de Naziazeno sem filtros explícitos.',
                curiosity:
                    'The third-person narrative uses free indirect discourse, giving the reader direct access to Naziazenos thoughts and anguish without explicit filters.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'A linguagem da obra é direta, econômica e sem sentimentalismo, com frases curtas que mimetizam a tensão e a vertigem vividas pelo protagonista.',
                curiosity:
                    'The language of the work is direct, economical, and without sentimentalism, with short sentences that mimic the tension and vertigo experienced by the protagonist.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'O crítico Davi Arrigucci Jr. posiciona "Os Ratos" ao lado de "Vidas Secas", de Graciliano Ramos, como correlato urbano de uma mesma miséria humana.',
                curiosity:
                    'Critic Davi Arrigucci Jr. places "Os Ratos" alongside Graciliano Ramos "Vidas Secas" as an urban counterpart of the same human misery.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    '"Os Ratos" incorpora procedimentos do expressionismo literário, com deformação subjetiva do tempo, espaço e ambientes percebidos pelo protagonista.',
                curiosity:
                    '"Os Ratos" incorporates procedures from literary expressionism, with subjective distortion of time, space, and environments as perceived by the protagonist.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'Dyonélio Machado foi preso por dois anos durante o governo Vargas por suas posições políticas de esquerda, experiência que influenciou profundamente sua escrita.',
                curiosity:
                    'Dyonélio Machado was imprisoned for two years during the Vargas government due to his left-wing political positions, an experience that profoundly influenced his writing.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'Na 15ª noite de escrita, a datilógrafa que transcrevia o livro perguntou ao autor se Naziazeno seria feliz — sinal de que já havia capturado o interesse do leitor.',
                curiosity:
                    'On the 15th night of writing, the typist transcribing the book asked the author if Naziazeno would be happy — a sign that it had already captured the readers interest.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    '"Os Ratos" integra a lista de leituras obrigatórias da FUVEST para os vestibulares da USP de 2025 a 2029, evidenciando sua importância no cânone literário brasileiro.',
                curiosity:
                    '"Os Ratos" is on the FUVEST required reading list for USP entrance exams from 2025 to 2029, highlighting its importance in the Brazilian literary canon.',
            },
            {
                conteudo: 'Literatura',
                content: 'Literature',
                curiosidade:
                    'Publicado em 1935, o livro completa 90 anos em 2025 e permanece atual, pois o ciclo de endividamento e precariedade vivido por Naziazeno ainda ecoa na realidade brasileira.',
                curiosity:
                    'Published in 1935, the book turns 90 in 2025 and remains relevant, as the cycle of debt and precariousness experienced by Naziazeno still echoes in Brazilian reality.',
            },
        ],
    });

    // Dicas
    await prisma.dicas.createMany({
        data: [
            {
                conteudo: 'Dica de estudo',
                content: 'Study tip',
                dicas: 'Utilize o método Pomodoro de forma estratégica: estude com foco total e sem interrupções por 25 minutos e, em seguida, faça uma pausa de 5 minutos para descansar a mente e oxigenar o cérebro, repetindo o ciclo até completar quatro blocos, quando você deverá fazer uma pausa mais longa de 15 a 30 minutos.',
                tips: 'Utilize the Pomodoro technique strategically: study with absolute focus and zero distractions for 25 minutes, then take a 5-minute break to rest your mind and refresh your brain, repeating this cycle until you complete four blocks, after which you should take a longer restorative break of 15 to 30 minutes.',
            },
            {
                conteudo: 'Dica 1 para redação do vestibular',
                content: 'Tip 1 for the college entrance exam essay',
                dicas: 'Leia o edital com extrema atenção para conhecer todos os critérios de correção e dedique os primeiros minutos da prova a interpretar o tema proposto de forma minuciosa, evitando tangenciamentos e garantindo que você compreendeu o recorte temático exato exigido pela banca examinadora.',
                tips: 'Read the exam guidelines with extreme attention to know all the grading criteria and dedicate the first few minutes of the test to carefully interpreting the proposed theme, preventing any off-topic drift and ensuring you fully understand the exact thematic scope required by the examination board.',
            },
            {
                conteudo: 'Dica de produtividade',
                content: 'Productivity tip',
                dicas: 'Evite terminantemente a multitarefa; concentrar-se em uma única atividade por vez evita a sobrecarga cognitiva, aumenta significativamente a qualidade do aprendizado, reduz a taxa de erros e permite que você conclua suas tarefas em um tempo total muito menor.',
                tips: 'Strictly avoid multitasking; focusing on a single task at a time prevents cognitive overload, significantly increases the quality of your learning, reduces error rates, and ultimately allows you to complete your tasks in a much shorter total amount of time.',
            },
            {
                conteudo: 'Dica 2 para redação do vestibular',
                content: 'Tip 2 for the college entrance exam essay',
                dicas: 'Faça um planejamento de texto estruturado antes de começar a escrever a introdução; monte um esqueleto ou projeto de texto delimitando claramente qual será a sua tese central, quais argumentos serão usados em cada parágrafo de desenvolvimento e qual proposta de intervenção solucionará o problema.',
                tips: 'Create a structured text plan before you even begin writing the introduction; outline your essay project by clearly defining your central thesis, which arguments will be used in each development paragraph, and what intervention proposal will solve the problem.',
            },
            {
                conteudo: 'Dica de saúde mental',
                content: 'Mental health tip',
                dicas: 'Mantenha a sua rotina de sono em dia e regular, dormindo de 7 a 8 horas por noite, pois é durante as fases mais profundas do sono que o cérebro processa as informações recebidas ao longo do dia, fixando e consolidando o conteúdo na memória de longo prazo.',
                tips: 'Keep your sleep routine consistent and regular, aiming for 7 to 8 hours of quality rest per night, as it is during the deepest stages of sleep that the brain processes all the information received throughout the day, fixing and consolidating the content into long-term memory.',
            },
            {
                conteudo: 'Dica 3 para redação do vestibular',
                content: 'Tip 3 for the college entrance exam essay',
                dicas: 'Use uma linguagem formal, clara e totalmente objetiva, adequando-se perfeitamente à norma-padrão da Língua Portuguesa; evite gírias, expressões coloquiais, marcas de oralidade, clichês ou o uso excessivo de termos rebuscados que possam prejudicar a fluidez da leitura e a compreensão das suas ideias.',
                tips: "Use formal, clear, and fully objective language, strictly adhering to the standard rules of written Portuguese; avoid slang, colloquial expressions, speech traits, clichés, or the excessive use of overly complex words that could hinder the text's flow and the understanding of your ideas.",
            },
            {
                conteudo: 'Dica de organização',
                content: 'Organization tip',
                dicas: 'Crie um cronograma semanal que seja verdadeiramente realista e adaptado à sua rotina, distribuindo as matérias por blocos de tempo específicos, alternando entre disciplinas exatas e humanas, e incluindo obrigatoriamente momentos dedicados ao descanso e ao lazer para evitar o esgotamento mental.',
                tips: 'Create a weekly schedule that is truly realistic and adapted to your daily routine, distributing subjects into specific time blocks, alternating between exact and human sciences, and mandatorily including dedicated moments for rest and leisure to prevent mental burnout.',
            },
            {
                conteudo: 'Dica 4 para redação do vestibular',
                content: 'Tip 4 for the college entrance exam essay',
                dicas: 'Apresente argumentos consistentes, progressivos e profundamente bem fundamentados na sua dissertação, utilizando dados estatísticos de fontes confiáveis, fatos históricos comprovados, conceitos filosóficos ou exemplos concretos da realidade para sustentar e legitimar o seu ponto de vista.',
                tips: 'Present consistent, progressive, and deeply well-founded arguments in your essay, utilizing statistical data from reliable sources, proven historical facts, philosophical concepts, or concrete real-world examples to sustain and legitimize your point of view.',
            },
            {
                conteudo: 'Dica de prova',
                content: 'Exam tip',
                dicas: 'Ao iniciar a avaliação, comece resolvendo as questões mais fáceis e aquelas cujo conteúdo você domina completamente; isso garante pontos valiosos logo no início, otimiza o tempo disponível e aumenta significativamente a sua autoconfiança para enfrentar os desafios mais complexos no final.',
                tips: 'When starting an exam, begin by answering the easiest questions and those whose content you completely master; this guarantees valuable points early on, optimizes your available time, and significantly boosts your self-confidence to tackle the more complex challenges later.',
            },
            {
                conteudo: 'Dica 5 para redação do vestibular',
                content: 'Tip 5 for the college entrance exam essay',
                dicas: 'Reserve os minutos finais exclusivamente para revisar o texto com distanciamento crítico, corrigindo pequenos desvios gramaticais, erros ortográficos, problemas de concordância ou falhas de coesão, garantindo uma transição perfeita entre os parágrafos antes de passar a limpo na folha oficial.',
                tips: 'Reserve the final minutes exclusively to review your text with critical detachment, correcting minor grammatical slips, spelling mistakes, agreement errors, or cohesion flaws, ensuring a seamless transition between paragraphs before transferring it to the official answer sheet.',
            },
            {
                conteudo: 'Dica de revisão',
                content: 'Review tip',
                dicas: 'Use mapas mentais, diagramas e resumos visuais para revisar temas complexos, conectando palavras-chave, conceitos principais e ramificações de forma dinâmica, o que estimula o hemisfério direito do cérebro e facilita a recuperação rápida das informações no dia da prova.',
                tips: "Use mind maps, diagrams, and visual summaries to review complex topics, connecting keywords, main concepts, and secondary branches in a dynamic way, which stimulates the brain's right hemisphere and facilitates quick information retrieval on exam day.",
            },
            {
                conteudo: 'Dica de ambiente',
                content: 'Environment tip',
                dicas: 'Separe um local fixo para os estudos que seja limpo, bem iluminado, silencioso e completamente livre de distrações visuais ou sonoras, garantindo que sua postura física esteja confortável para que toda a sua energia e atenção fiquem totalmente voltadas aos materiais didáticos.',
                tips: 'Set aside a designated study space that is clean, well-lit, quiet, and completely free from visual or noise distractions, ensuring that your physical posture is comfortable so that all your energy and attention can remain entirely focused on your educational materials.',
            },
            {
                conteudo: 'Dica de memorização',
                content: 'Memorization tip',
                dicas: 'Pratique a técnica da autoexplicação baseada na Técnica Feynman: explique a matéria para si mesmo em voz alta, utilizando suas próprias palavras e criando analogias simples, como se estivesse dando uma aula para alguém que nunca ouviu falar sobre o assunto, identificando onde estão suas dúvidas.',
                tips: 'Practice the self-explanation technique based on the Feynman Method: explain the subject to yourself out loud, using your own words and creating simple analogies, as if you were teaching a lesson to someone who has never heard of the topic, thereby identifying gaps in your knowledge.',
            },
            {
                conteudo: 'Dica de simulados',
                content: 'Practice test tip',
                dicas: 'Faça simulados completos reproduzindo fielmente as condições reais do exame, o que inclui cronometrar o tempo oficial, sentar-se em uma cadeira adequada, evitar consultas a materiais externos e gerenciar as pausas para ir ao banheiro, treinando assim o seu corpo e mente para o ritmo da prova.',
                tips: 'Take complete practice tests while faithfully reproducing the real exam conditions, which includes timing yourself against the official clock, sitting in a proper chair, avoiding external material consultations, and managing bathroom breaks, thus training both body and mind for the actual test pacing.',
            },
            {
                conteudo: 'Dica de redação (Repertório)',
                content: 'Essay tip (Knowledge base)',
                dicas: 'Esteja sempre atualizado sobre os principais fatos, debates e acontecimentos políticos, econômicos e sociais do mundo, lendo jornais, assistindo a documentários e consumindo portais de notícias confiáveis para construir um repertório sociocultural sólido e argumentativo.',
                tips: 'Stay consistently up to date on major world events, debates, and political, economic, and social developments by reading newspapers, watching documentaries, and consuming reliable news portals to build a solid, argumentative, and sociocultural knowledge base.',
            },
            {
                conteudo: 'Dica de foco',
                content: 'Focus tip',
                dicas: 'Antes de iniciar a sua sessão de estudos, deixe o celular em outro cômodo da casa ou utilize aplicativos rigorosos que bloqueiam o acesso às redes sociais, criando um bloqueio completo de notificações visuais e sonoras que interrompem o seu estado de fluxo e concentração profunda.',
                tips: 'Before starting your study session, leave your phone in another room or use strict applications that block access to social media, creating a complete barrier against visual and auditory notifications that disrupt your state of flow and deep concentration.',
            },
            {
                conteudo: 'Dica de bem-estar',
                content: 'Well-being tip',
                dicas: 'Não negligencie o seu corpo durante a rotina de estudos: mantenha uma garrafa de água sempre por perto para se manter hidratado e aproveite os pequenos intervalos para fazer alongamentos leves nos braços, pescoço e pernas, melhorando a circulação sanguínea e aliviando a tensão muscular acumulada.',
                tips: 'Do not neglect your body during your study routine: keep a water bottle close by to stay properly hydrated and use short breaks to perform light stretches for your arms, neck, and legs, which improves blood circulation and relieves accumulated muscle tension.',
            },
        ],
    });

    // Simulado
    await prisma.simulado.createMany({
        data: [
            {
                pergunta: 'Qual é o nome do protagonista de "Os Ratos"?',
                question: 'Who is the protagonist of "Os Ratos"?',
                opcaoA: 'Aluísio',
                optionA: 'Aluísio',
                opcaoB: 'Naziazeno Barbosa',
                optionB: 'Naziazeno Barbosa',
                opcaoC: 'Duque',
                optionC: 'Duque',
                opcaoD: 'Mondina',
                optionD: 'Mondina',
                opcaoE: 'Felisberto',
                optionE: 'Felisberto',
                respostaCorreta: 'Naziazeno Barbosa',
                correctAnswer: 'Naziazeno Barbosa',
                explicacao:
                    'Naziazeno é o funcionário público que vive a angústia de conseguir dinheiro.',
                explanation:
                    'Naziazeno is the civil servant who lives the anguish of getting money.',
                materia: 'Literatura',
            },
            {
                pergunta: 'Quanto tempo dura a narrativa principal do livro?',
                question: 'How long does the main narrative of the book last?',
                opcaoA: 'Uma semana',
                optionA: 'One week',
                opcaoB: 'Um mês',
                optionB: 'One month',
                opcaoC: '24 horas',
                optionC: '24 hours',
                opcaoD: 'Um ano',
                optionD: 'One year',
                opcaoE: 'Três dias',
                optionE: 'Three days',
                respostaCorreta: '24 horas',
                correctAnswer: '24 hours',
                explicacao: 'A história se passa em um único dia de angústia e busca por dinheiro.',
                explanation:
                    'The story takes place in a single day of anguish and search for money.',
                materia: 'Literatura',
            },
            {
                pergunta: 'Qual a dívida urgente que Naziazeno precisa pagar logo no início?',
                question: 'What urgent debt does Naziazeno need to pay at the beginning?',
                opcaoA: 'Aluguel da casa',
                optionA: 'House rent',
                opcaoB: 'Conta de luz',
                optionB: 'Electricity bill',
                opcaoC: 'Dívida com o leiteiro',
                optionC: 'Debt with the milkman',
                opcaoD: 'Empréstimo bancário',
                optionD: 'Bank loan',
                opcaoE: 'Aposta de jogo',
                optionE: 'Gambling debt',
                respostaCorreta: 'Dívida com o leiteiro',
                correctAnswer: 'Debt with the milkman',
                explicacao: 'Ele deve 53 mil réis ao leiteiro, que ameaça cortar o fornecimento.',
                explanation:
                    'He owes 53,000 réis to the milkman, who threatens to cut off the supply.',
                materia: 'Literatura',
            },
            {
                pergunta: 'O que os ratos simbolizam na obra?',
                question: 'What do the rats symbolize in the work?',
                opcaoA: 'A sujeira da cidade',
                optionA: "The city's dirt",
                opcaoB: 'A agonia e os problemas que corroem o personagem',
                optionB: 'The agony and problems that consume the character',
                opcaoC: 'Uma praga biológica',
                optionC: 'A biological plague',
                opcaoD: 'A riqueza escondida',
                optionD: 'Hidden wealth',
                opcaoE: 'A amizade entre vizinhos',
                optionE: 'Friendship between neighbors',
                respostaCorreta: 'A agonia e os problemas que corroem o personagem',
                correctAnswer: 'The agony and problems that consume the character',
                explicacao:
                    'Os ratos representam a inquietação mental e a corrosão da dignidade pela pobreza.',
                explanation:
                    'The rats represent mental restlessness and the corrosion of dignity by poverty.',
                materia: 'Literatura',
            },
            {
                pergunta: 'Quem é o amigo que tenta ajudar Naziazeno a conseguir dinheiro?',
                question: 'Who is the friend who tries to help Naziazeno get money?',
                opcaoA: 'Alpino',
                optionA: 'Alpino',
                opcaoB: 'Duque',
                optionB: 'Duque',
                opcaoC: 'Alcides',
                optionC: 'Alcides',
                opcaoD: 'Roberto',
                optionD: 'Roberto',
                opcaoE: 'Mondina',
                optionE: 'Mondina',
                respostaCorreta: 'Alcides',
                correctAnswer: 'Alcides',
                explicacao: 'Alcides acompanha Naziazeno em sua peregrinação pela cidade.',
                explanation: 'Alcides accompanies Naziazeno in his pilgrimage through the city.',
                materia: 'Literatura',
            },
            {
                pergunta: 'Em qual cidade se passa a história?',
                question: 'In which city does the story take place?',
                opcaoA: 'São Paulo',
                optionA: 'São Paulo',
                opcaoB: 'Rio de Janeiro',
                optionB: 'Rio de Janeiro',
                opcaoC: 'Porto Alegre',
                optionC: 'Porto Alegre',
                opcaoD: 'Belo Horizonte',
                optionD: 'Belo Horizonte',
                opcaoE: 'Recife',
                optionE: 'Recife',
                respostaCorreta: 'Porto Alegre',
                correctAnswer: 'Porto Alegre',
                explicacao: 'A obra descreve cenários urbanos de Porto Alegre na década de 30.',
                explanation: 'The work describes urban settings of Porto Alegre in the 1930s.',
                materia: 'Literatura',
            },
            {
                pergunta: 'Qual objeto Naziazeno tenta empenhar para conseguir dinheiro?',
                question: 'What object does Naziazeno try to pawn to get money?',
                opcaoA: 'Seu relógio',
                optionA: 'His watch',
                opcaoB: 'O anel de sua esposa',
                optionB: "His wife's ring",
                opcaoC: 'Um quadro valioso',
                optionC: 'A valuable painting',
                opcaoD: 'Sua mobília',
                optionD: 'His furniture',
                opcaoE: 'Seu casaco',
                optionE: 'His coat',
                respostaCorreta: 'O anel de sua esposa',
                correctAnswer: "His wife's ring",
                explicacao: 'O anel é o último recurso de valor para tentar quitar a dívida.',
                explanation: 'The ring is the last resource of value to try to settle the debt.',
                materia: 'Literatura',
            },
            {
                pergunta: 'Como se chama a esposa de Naziazeno?',
                question: "What is Naziazeno's wife's name?",
                opcaoA: 'Mondina',
                optionA: 'Mondina',
                opcaoB: 'Adelaide',
                optionB: 'Adelaide',
                opcaoC: 'Maria',
                optionC: 'Maria',
                opcaoD: 'Lucília',
                optionD: 'Lucília',
                opcaoE: 'Clara',
                optionE: 'Clara',
                respostaCorreta: 'Mondina',
                correctAnswer: 'Mondina',
                explicacao:
                    'Mondina sofre junto com o marido a precariedade da situação financeira.',
                explanation:
                    'Mondina suffers along with her husband the precariousness of the financial situation.',
                materia: 'Literatura',
            },
            {
                pergunta: 'Qual o estilo literário predominante em "Os Ratos"?',
                question: 'What is the predominant literary style in "Os Ratos"?',
                opcaoA: 'Romantismo',
                optionA: 'Romanticism',
                opcaoB: 'Modernismo (2ª fase)',
                optionB: 'Modernism (2nd phase)',
                opcaoC: 'Barroco',
                optionC: 'Baroque',
                opcaoD: 'Realismo',
                optionD: 'Realism',
                opcaoE: 'Parnasianismo',
                optionE: 'Parnassianism',
                respostaCorreta: 'Modernismo (2ª fase)',
                correctAnswer: 'Modernism (2nd phase)',
                explicacao:
                    'A obra faz parte do romance social e psicológico do Modernismo brasileiro.',
                explanation:
                    'The work is part of the social and psychological novel of Brazilian Modernism.',
                materia: 'Literatura',
            },
            {
                pergunta: 'Qual sentimento domina o protagonista durante todo o livro?',
                question: 'What feeling dominates the protagonist throughout the book?',
                opcaoA: 'Alegria extrema',
                optionA: 'Extreme joy',
                opcaoB: 'Ódio profundo',
                optionB: 'Deep hatred',
                opcaoC: 'Angústia e humilhação',
                optionC: 'Anguish and humiliation',
                opcaoD: 'Orgulho',
                optionD: 'Pride',
                opcaoE: 'Indiferença',
                optionE: 'Indifference',
                respostaCorreta: 'Angústia e humilhação',
                correctAnswer: 'Anguish and humiliation',
                explicacao: 'Naziazeno sente-se diminuído e ansioso pela falta de dinheiro.',
                explanation: 'Naziazeno feels diminished and anxious due to the lack of money.',
                materia: 'Literatura',
            },
            {
                pergunta: 'A técnica narrativa que foca no interior do personagem é chamada de:',
                question: "The narrative technique focusing on the character's interior is called:",
                opcaoA: 'Flashback',
                optionA: 'Flashback',
                opcaoB: 'Romance Psicológico',
                optionB: 'Psychological Novel',
                opcaoC: 'Épico',
                optionC: 'Epic',
                opcaoD: 'Fábula',
                optionD: 'Fable',
                opcaoE: 'Conto de fadas',
                optionE: 'Fairy tale',
                respostaCorreta: 'Romance Psicológico',
                correctAnswer: 'Psychological Novel',
                explicacao: 'O livro é um marco do romance psicológico no Brasil.',
                explanation: 'The book is a landmark of the psychological novel in Brazil.',
                materia: 'Literatura',
            },
            {
                pergunta: 'Qual a profissão de Naziazeno?',
                question: "What is Naziazeno's profession?",
                opcaoA: 'Professor',
                optionA: 'Teacher',
                opcaoB: 'Médico',
                optionB: 'Doctor',
                opcaoC: 'Funcionário Público',
                optionC: 'Civil Servant',
                opcaoD: 'Comerciante',
                optionD: 'Merchant',
                opcaoE: 'Engenheiro',
                optionE: 'Engineer',
                respostaCorreta: 'Funcionário Público',
                correctAnswer: 'Civil Servant',
                explicacao:
                    'Ele trabalha em uma repartição pública, o que não garante seu sustento.',
                explanation:
                    'He works in a public office, which does not guarantee his livelihood.',
                materia: 'Literatura',
            },
            {
                pergunta: 'O que Naziazeno faz ao final do livro, após conseguir o dinheiro?',
                question: 'What does Naziazeno do at the end of the book after getting the money?',
                opcaoA: 'Foge de casa',
                optionA: 'Runs away from home',
                opcaoB: 'Vai dormir, mas ouve o barulho dos ratos',
                optionB: 'Goes to sleep, but hears the noise of rats',
                opcaoC: 'Dá uma festa',
                optionC: 'Throws a party',
                opcaoD: 'Pede demissão',
                optionD: 'Resigns',
                opcaoE: 'Compra um presente para Mondina',
                optionE: 'Buys a gift for Mondina',
                respostaCorreta: 'Vai dormir, mas ouve o barulho dos ratos',
                correctAnswer: 'Goes to sleep, but hears the noise of rats',
                explicacao:
                    'O final sugere que, embora a dívida tenha sido paga, o tormento continua.',
                explanation:
                    'The ending suggests that although the debt has been paid, the torment continues.',
                materia: 'Literatura',
            },
            {
                pergunta: 'Quem é o diretor da repartição que nega o adiantamento a Naziazeno?',
                question: 'Who is the office director who denies the advance to Naziazeno?',
                opcaoA: 'Dr. Duque',
                optionA: 'Dr. Duque',
                opcaoB: 'Sr. Felisberto',
                optionB: 'Mr. Felisberto',
                opcaoC: 'Cunha',
                optionC: 'Cunha',
                opcaoD: 'Alcides',
                optionD: 'Alcides',
                opcaoE: 'Diretor Geral',
                optionE: 'General Director',
                respostaCorreta: 'Diretor Geral',
                correctAnswer: 'General Director',
                explicacao: 'A recusa do adiantamento inicia a peregrinação desesperada.',
                explanation: 'The refusal of the advance starts the desperate pilgrimage.',
                materia: 'Literatura',
            },
            {
                pergunta: 'A linguagem do livro é marcada por ser:',
                question: 'The language of the book is characterized by being:',
                opcaoA: 'Poética e rebuscada',
                optionA: 'Poetic and refined',
                opcaoB: 'Seca, direta e repetitiva',
                optionB: 'Dry, direct, and repetitive',
                opcaoC: 'Cheia de gírias modernas',
                optionC: 'Full of modern slang',
                opcaoD: 'Arcaica',
                optionD: 'Archaic',
                opcaoE: 'Cômica',
                optionE: 'Comic',
                respostaCorreta: 'Seca, direta e repetitiva',
                correctAnswer: 'Dry, direct, and repetitive',
                explicacao: 'A repetição reforça a obsessão do personagem pelo dinheiro.',
                explanation: "Repetition reinforces the character's obsession with money.",
                materia: 'Literatura',
            },
            {
                pergunta: 'Como Naziazeno vê a figura do leiteiro?',
                question: 'How does Naziazeno see the milkman figure?',
                opcaoA: 'Como um salvador',
                optionA: 'As a savior',
                opcaoB: 'Como um carrasco ou perseguidor',
                optionB: 'As an executioner or pursuer',
                opcaoC: 'Como um pai',
                optionC: 'As a father',
                opcaoD: 'Com indiferença',
                optionD: 'With indifference',
                opcaoE: 'Como um sócio',
                optionE: 'As a partner',
                respostaCorreta: 'Como um carrasco ou perseguidor',
                correctAnswer: 'As an executioner or pursuer',
                explicacao: 'O leiteiro representa a cobrança implacável do sistema.',
                explanation: 'The milkman represents the relentless collection of the system.',
                materia: 'Literatura',
            },
            {
                pergunta: 'O livro "Os Ratos" ganhou qual prêmio importante na época?',
                question: 'The book "Os Ratos" won which important prize at the time?',
                opcaoA: 'Prêmio Jabuti',
                optionA: 'Jabuti Prize',
                opcaoB: 'Prêmio Machado de Assis',
                optionB: 'Machado de Assis Prize',
                opcaoC: 'Prêmio da Academia Brasileira de Letras',
                optionC: 'Brazilian Academy of Letters Prize',
                opcaoD: 'Prêmio Nobel',
                optionD: 'Nobel Prize',
                opcaoE: 'Prêmio Camões',
                optionE: 'Camões Prize',
                respostaCorreta: 'Prêmio da Academia Brasileira de Letras',
                correctAnswer: 'Brazilian Academy of Letters Prize',
                explicacao: 'A obra foi premiada pela ABL em 1935.',
                explanation: 'The work was awarded by the ABL in 1935.',
                materia: 'Literatura',
            },
            {
                pergunta: 'Qual o papel de Duque na história?',
                question: "What is Duque's role in the story?",
                opcaoA: 'Agiota',
                optionA: 'Moneylender',
                opcaoB: 'Irmão de Naziazeno',
                optionB: "Naziazeno's brother",
                opcaoC: 'Vendedor de ratos',
                optionC: 'Rat seller',
                opcaoD: 'Vizinho barulhento',
                optionD: 'Noisy neighbor',
                opcaoE: 'Policial',
                optionE: 'Policeman',
                respostaCorreta: 'Agiota',
                correctAnswer: 'Moneylender',
                explicacao:
                    'Duque é um dos que Naziazeno procura para tentar o dinheiro via empréstimo.',
                explanation: 'Duque is one of those Naziazeno seeks to try to get money via loan.',
                materia: 'Literatura',
            },
            {
                pergunta: 'O título "Os Ratos" refere-se a:',
                question: 'The title "Os Ratos" refers to:',
                opcaoA: 'Ratos reais na casa e os pensamentos roedores de Naziazeno',
                optionA: "Real rats in the house and Naziazeno's gnawing thoughts",
                opcaoB: 'Um apelido para os políticos',
                optionB: 'A nickname for politicians',
                opcaoC: 'Um grupo de criminosos',
                optionC: 'A group of criminals',
                opcaoD: 'Aos filhos do protagonista',
                optionD: "To the protagonist's children",
                opcaoE: 'Um laboratório de pesquisa',
                optionE: 'A research lab',
                respostaCorreta: 'Ratos reais na casa e os pensamentos roedores de Naziazeno',
                correctAnswer: "Real rats in the house and Naziazeno's gnawing thoughts",
                explicacao:
                    'A metáfora une a infestação física à infestação mental da preocupação.',
                explanation:
                    'The metaphor joins the physical infestation to the mental infestation of worry.',
                materia: 'Literatura',
            },
            {
                pergunta: 'Quem é o autor de "Os Ratos"?',
                question: 'Who is the author of "Os Ratos"?',
                opcaoA: 'Graciliano Ramos',
                optionA: 'Graciliano Ramos',
                opcaoB: 'Dyonélio Machado',
                optionB: 'Dyonélio Machado',
                opcaoC: 'Jorge Amado',
                optionC: 'Jorge Amado',
                opcaoD: 'Érico Veríssimo',
                optionD: 'Érico Veríssimo',
                opcaoE: 'Rachel de Queiroz',
                optionE: 'Rachel de Queiroz',
                respostaCorreta: 'Dyonélio Machado',
                correctAnswer: 'Dyonélio Machado',
                explicacao: 'Dyonélio Machado foi médico psiquiatra e escritor gaúcho.',
                explanation:
                    'Dyonélio Machado was a psychiatrist and writer from Rio Grande do Sul.',
                materia: 'Literatura',
            },
            // --- BIOLOGIA (ENEM/Vestibular) ---
            {
                pergunta:
                    'A replicação semiconservativa do DNA implica que, após uma divisão, cada molécula-filha contém:',
                question:
                    'Semi-conservative DNA replication implies that after one division, each daughter molecule contains:',
                opcaoA: 'Duas fitas novas sintetizadas inteiramente pela DNA polimerase',
                optionA: 'Two new strands synthesized entirely by DNA polymerase',
                opcaoB: 'Uma fita original da molécula-mãe e uma fita recém-sintetizada',
                optionB:
                    'One original strand from the parent molecule and one newly synthesized strand',
                opcaoC: 'Fragmentos intercalados de fitas velhas e novas ao longo de toda a molécula',
                optionC: 'Intercalated fragments of old and new strands throughout the molecule',
                opcaoD: 'Apenas a fita-molde, descartando a fita complementar',
                optionD: 'Only the template strand, discarding the complementary strand',
                opcaoE: 'Duas fitas originais unidas por novas ligações covalentes',
                optionE: 'Two original strands joined by new covalent bonds',
                respostaCorreta: 'Uma fita original da molécula-mãe e uma fita recém-sintetizada',
                correctAnswer:
                    'One original strand from the parent molecule and one newly synthesized strand',
                explicacao:
                    'No modelo semiconservativo, cada fita da dupla-hélice serve de molde. Cada molécula-filha herda uma fita parental e recebe uma fita nova — metade é conservada.',
                explanation:
                    'In the semi-conservative model, each strand serves as a template. Each daughter molecule inherits one parental strand and receives one new strand — half is conserved.',
                materia: 'Biologia',
            },
            {
                pergunta:
                    'Na primeira aplicação de um inseticida, 95% dos insetos morreram. Na quinta aplicação, apenas 20% morreram. Com base nos princípios darwinistas, a explicação correta é:',
                question:
                    'On the first application of an insecticide, 95% of insects died. By the fifth application, only 20% died. Based on Darwinian principles, the correct explanation is:',
                opcaoA: 'O inseticida induziu mutações nos insetos, tornando-os resistentes',
                optionA: 'The insecticide induced mutations in insects, making them resistant',
                opcaoB: 'Os insetos aprenderam a evitar o inseticida ao longo das gerações',
                optionB: 'Insects learned to avoid the insecticide over generations',
                opcaoC: 'Indivíduos com resistência prévia foram selecionados, aumentando sua frequência na população',
                optionC:
                    'Individuals with prior resistance were selected, increasing their frequency in the population',
                opcaoD: 'O inseticida perdeu eficácia química por degradação espontânea',
                optionD: 'The insecticide lost chemical efficacy due to spontaneous degradation',
                opcaoE: 'A resistência surgiu porque os insetos precisavam sobreviver ao novo ambiente',
                optionE: 'Resistance arose because insects needed to survive the new environment',
                respostaCorreta:
                    'Indivíduos com resistência prévia foram selecionados, aumentando sua frequência na população',
                correctAnswer:
                    'Individuals with prior resistance were selected, increasing their frequency in the population',
                explicacao:
                    'A variabilidade genética já existia na população. Os indivíduos resistentes sobreviveram e se reproduziram, tornando o alelo de resistência mais frequente. O inseticida selecionou — não criou — a resistência.',
                explanation:
                    'Genetic variability already existed in the population. Resistant individuals survived and reproduced, making the resistance allele more frequent. The insecticide selected — did not create — resistance.',
                materia: 'Biologia',
            },
            {
                pergunta:
                    'Sobre a dinâmica predador-presa, quando a população de presas aumenta, espera-se que:',
                question:
                    'Regarding predator-prey dynamics, when the prey population increases, it is expected that:',
                opcaoA: 'A população de predadores diminua imediatamente por competição',
                optionA: 'The predator population decreases immediately due to competition',
                opcaoB: 'A população de predadores cresça após um intervalo de tempo, reduzindo depois as presas',
                optionB: 'The predator population grows after a time lag, then reduces the prey',
                opcaoC: 'Ambas as populações cresçam indefinidamente em mutualismo',
                optionC: 'Both populations grow indefinitely in mutualism',
                opcaoD: 'A presa controle o predador por meio de toxinas químicas',
                optionD: 'The prey controls the predator through chemical toxins',
                opcaoE: 'O predador regule sua população independentemente da disponibilidade de presas',
                optionE: 'The predator regulates its population independently of prey availability',
                respostaCorreta:
                    'A população de predadores cresça após um intervalo de tempo, reduzindo depois as presas',
                correctAnswer:
                    'The predator population grows after a time lag, then reduces the prey',
                explicacao:
                    'A dinâmica de Lotka-Volterra opera por retroalimentação negativa com defasagem temporal: mais presas → mais predadores → menos presas → menos predadores → recuperação das presas, reiniciando o ciclo.',
                explanation:
                    'Lotka-Volterra dynamics operate through negative feedback with a time lag: more prey → more predators → fewer prey → fewer predators → prey recovery, restarting the cycle.',
                materia: 'Biologia',
            },
            {
                pergunta:
                    'Qual das seguintes evidências NÃO sustenta a teoria endossimbiótica para a origem das mitocôndrias?',
                question:
                    'Which of the following pieces of evidence does NOT support the endosymbiotic theory for the origin of mitochondria?',
                opcaoA: 'Mitocôndrias possuem DNA circular próprio, semelhante ao de bactérias',
                optionA: 'Mitochondria have their own circular DNA, similar to bacteria',
                opcaoB: 'Mitocôndrias se reproduzem por divisão binária',
                optionB: 'Mitochondria reproduce by binary fission',
                opcaoC: 'Os ribossomos mitocondriais são do tipo 70S, igual aos de procariotos',
                optionC: 'Mitochondrial ribosomes are of the 70S type, the same as prokaryotes',
                opcaoD: 'A membrana interna da mitocôndria possui cardiolipina, lipídeo típico de bactérias',
                optionD:
                    'The inner mitochondrial membrane contains cardiolipin, a lipid typical of bacteria',
                opcaoE: 'O núcleo eucariótico possui envelope nuclear duplo com poros, ausente em bactérias',
                optionE:
                    'The eukaryotic nucleus has a double nuclear envelope with pores, absent in bacteria',
                respostaCorreta:
                    'O núcleo eucariótico possui envelope nuclear duplo com poros, ausente em bactérias',
                correctAnswer:
                    'The eukaryotic nucleus has a double nuclear envelope with pores, absent in bacteria',
                explicacao:
                    'O envelope nuclear é uma característica do hospedeiro ancestral eucariótico, não do endossimbionte. As demais alternativas são evidências diretas da origem procariótica das mitocôndrias.',
                explanation:
                    'The nuclear envelope is a feature of the ancestral eukaryotic host, not the endosymbiont. The other options are direct evidence of the prokaryotic origin of mitochondria.',
                materia: 'Biologia',
            },
            {
                pergunta:
                    'Um casal heterozigoto (Aa × Aa) para albinismo já tem três filhos com pigmentação normal. Qual a probabilidade de o quarto filho ser albino?',
                question:
                    'A heterozygous couple (Aa × Aa) for albinism already has three normally pigmented children. What is the probability that the fourth child will be albino?',
                opcaoA: '1/4, pois cada concepção é um evento independente',
                optionA: '1/4, because each conception is an independent event',
                opcaoB: 'Menor que 1/4, pois os três filhos normais anteriores reduzem a chance',
                optionB:
                    'Less than 1/4, because the three previous normal children reduce the chance',
                opcaoC: '3/4, pois três filhos normais indicam que o próximo deve ser albino',
                optionC: '3/4, because three normal children indicate the next must be albino',
                opcaoD: '0, pois genitores heterozigotos com filhos normais não podem ter filhos albinos',
                optionD:
                    '0, because heterozygous parents with normal children cannot have albino children',
                opcaoE: '1/2, pois há apenas dois resultados possíveis: normal ou albino',
                optionE: '1/2, because there are only two possible outcomes: normal or albino',
                respostaCorreta: '1/4, pois cada concepção é um evento independente',
                correctAnswer: '1/4, because each conception is an independent event',
                explicacao:
                    'Cada concepção é independente — o histórico anterior não altera a probabilidade. O cruzamento Aa × Aa sempre gera 25% de chance para aa. Confundir isso com a lei dos grandes números é um erro clássico.',
                explanation:
                    'Each conception is an independent event — prior history does not change the probability. The Aa × Aa cross always yields a 25% chance for aa. Confusing this with the law of large numbers is a classic mistake.',
                materia: 'Biologia',
            },
            {
                pergunta:
                    'A produção excessiva de lactato durante exercício físico intenso ocorre porque:',
                question:
                    'The excessive production of lactate during intense physical exercise occurs because:',
                opcaoA: 'Há excesso de oxigênio nas células musculares, inibindo a cadeia respiratória',
                optionA: 'There is excess oxygen in muscle cells, inhibiting the respiratory chain',
                opcaoB: 'A glicose está ausente, forçando a oxidação exclusiva de lipídeos',
                optionB: 'Glucose is absent, forcing exclusive oxidation of lipids',
                opcaoC: 'A demanda de ATP supera a capacidade aeróbia, ativando a glicólise anaeróbia',
                optionC: 'ATP demand exceeds aerobic capacity, activating anaerobic glycolysis',
                opcaoD: 'A mitocôndria bloqueia a síntese de ATP por ausência de ADP',
                optionD: 'Mitochondria block ATP synthesis due to absence of ADP',
                opcaoE: 'Alta concentração de CO₂ inibe a lactato desidrogenase',
                optionE: 'High CO₂ concentration inhibits lactate dehydrogenase',
                respostaCorreta:
                    'A demanda de ATP supera a capacidade aeróbia, ativando a glicólise anaeróbia',
                correctAnswer:
                    'ATP demand exceeds aerobic capacity, activating anaerobic glycolysis',
                explicacao:
                    'Quando a intensidade supera a capacidade aeróbia, o piruvato é convertido em lactato para regenerar NAD⁺ e manter a glicólise ativa. O lactato pode ser reconvertido em glicose pelo fígado via ciclo de Cori.',
                explanation:
                    'When intensity exceeds aerobic capacity, pyruvate is converted to lactate to regenerate NAD⁺ and keep glycolysis running. Lactate can be reconverted to glucose by the liver via the Cori cycle.',
                materia: 'Biologia',
            },
            // --- FÍSICA (ENEM/Vestibular) ---
            {
                pergunta:
                    'Um passageiro em um ônibus em movimento é lançado para frente quando o veículo freia bruscamente. Esse fenômeno é explicado corretamente por:',
                question:
                    'A passenger on a moving bus is thrown forward when the vehicle brakes suddenly. This phenomenon is correctly explained by:',
                opcaoA: 'A Segunda Lei de Newton, pois uma força empurra o passageiro para frente',
                optionA: "Newton's Second Law, as a force pushes the passenger forward",
                opcaoB: 'A Primeira Lei de Newton, pois o corpo tende a manter seu estado de movimento',
                optionB: "Newton's First Law, as the body tends to maintain its state of motion",
                opcaoC: 'A Terceira Lei de Newton, pois o banco exerce força igual e oposta ao passageiro',
                optionC:
                    "Newton's Third Law, as the seat exerts an equal and opposite force on the passenger",
                opcaoD: 'A Lei da Gravitação Universal, pois a massa do passageiro atrai o chão do ônibus',
                optionD:
                    'The Law of Universal Gravitation, as the passenger mass attracts the bus floor',
                opcaoE: 'O princípio da conservação de energia, pois a energia cinética é transferida ao passageiro',
                optionE:
                    'The principle of energy conservation, as kinetic energy is transferred to the passenger',
                respostaCorreta:
                    'A Primeira Lei de Newton, pois o corpo tende a manter seu estado de movimento',
                correctAnswer:
                    "Newton's First Law, as the body tends to maintain its state of motion",
                explicacao:
                    'A inércia (Primeira Lei) faz o passageiro continuar em movimento mesmo após o ônibus frear. Nenhuma força o empurra para frente — o que ocorre é a ausência de força suficiente para desacelerá-lo junto com o veículo.',
                explanation:
                    'Inertia (First Law) keeps the passenger in motion even after the bus brakes. No force pushes them forward — what happens is the absence of sufficient force to decelerate them along with the vehicle.',
                materia: 'Física',
            },
            {
                pergunta:
                    'Um mergulhador percebe que, ao descer para maiores profundidades, a pressão sobre seu corpo aumenta. Isso ocorre porque:',
                question:
                    'A diver notices that, as they descend to greater depths, the pressure on their body increases. This occurs because:',
                opcaoA: 'A temperatura da água diminui, aumentando sua densidade e portanto a pressão',
                optionA:
                    'The water temperature decreases, increasing its density and therefore the pressure',
                opcaoB: 'A pressão atmosférica é somada à pressão da coluna de água acima do mergulhador',
                optionB:
                    'Atmospheric pressure is added to the pressure of the water column above the diver',
                opcaoC: 'A pressão hidrostática depende apenas da densidade do líquido, independente da profundidade',
                optionC:
                    'Hydrostatic pressure depends only on the density of the liquid, regardless of depth',
                opcaoD: 'A força gravitacional diminui com a profundidade, aumentando a pressão lateral',
                optionD: 'Gravitational force decreases with depth, increasing lateral pressure',
                opcaoE: 'A pressão aumenta apenas na superfície do líquido, não no interior',
                optionE: 'Pressure increases only at the surface of the liquid, not inside it',
                respostaCorreta:
                    'A pressão atmosférica é somada à pressão da coluna de água acima do mergulhador',
                correctAnswer:
                    'Atmospheric pressure is added to the pressure of the water column above the diver',
                explicacao:
                    'Pela equação P = P₀ + ρgh, a pressão total aumenta com a profundidade h. A pressão atmosférica P₀ atua na superfície e se transmite integralmente ao fluido (Princípio de Pascal), somando-se à pressão da coluna de água.',
                explanation:
                    "By the equation P = P₀ + ρgh, total pressure increases with depth h. Atmospheric pressure P₀ acts on the surface and is fully transmitted to the fluid (Pascal's Principle), adding to the water column pressure.",
                materia: 'Física',
            },
            {
                pergunta:
                    'Dois fios condutores paralelos percorridos por correntes elétricas no mesmo sentido irão:',
                question:
                    'Two parallel conducting wires carrying electric currents in the same direction will:',
                opcaoA: 'Se repelir, pois correntes paralelas sempre geram campos opostos',
                optionA: 'Repel each other, as parallel currents always generate opposing fields',
                opcaoB: 'Se atrair, pois os campos magnéticos gerados interagem de forma atrativa',
                optionB:
                    'Attract each other, as the generated magnetic fields interact attractively',
                opcaoC: 'Permanecer neutros, pois os campos magnéticos se cancelam',
                optionC: 'Remain neutral, as the magnetic fields cancel each other out',
                opcaoD: 'Se repelir apenas se as correntes tiverem mesma intensidade',
                optionD: 'Repel only if the currents have the same intensity',
                opcaoE: 'Se atrair apenas se os fios estiverem em contato físico',
                optionE: 'Attract only if the wires are in physical contact',
                respostaCorreta:
                    'Se atrair, pois os campos magnéticos gerados interagem de forma atrativa',
                correctAnswer:
                    'Attract each other, as the generated magnetic fields interact attractively',
                explicacao:
                    'Correntes paralelas no mesmo sentido geram campos magnéticos que, pela Regra da Mão Direita, produzem força atrativa entre os fios. Correntes em sentidos opostos geram repulsão. Esse é o princípio usado na definição do Ampère no SI.',
                explanation:
                    'Parallel currents in the same direction generate magnetic fields that, by the Right-Hand Rule, produce an attractive force between the wires. Currents in opposite directions generate repulsion. This is the principle used in defining the Ampere in the SI.',
                materia: 'Física',
            },
            {
                pergunta:
                    'Um objeto é lançado horizontalmente do topo de um penhasco. Desprezando a resistência do ar, qual afirmação sobre seu movimento é correta?',
                question:
                    'An object is launched horizontally from the top of a cliff. Neglecting air resistance, which statement about its motion is correct?',
                opcaoA: 'O objeto descreve uma trajetória vertical, pois a gravidade domina o movimento',
                optionA:
                    'The object follows a vertical trajectory, as gravity dominates the motion',
                opcaoB: 'A velocidade horizontal aumenta continuamente durante a queda',
                optionB: 'The horizontal velocity increases continuously during the fall',
                opcaoC: 'O movimento é a composição de MRU horizontal e MRUV vertical, resultando em trajetória parabólica',
                optionC:
                    'The motion is a composition of horizontal URM and vertical UARM, resulting in a parabolic trajectory',
                opcaoD: 'A aceleração do objeto diminui conforme ele se afasta do penhasco',
                optionD: 'The acceleration of the object decreases as it moves away from the cliff',
                opcaoE: 'O tempo de queda depende da velocidade inicial horizontal',
                optionE: 'The fall time depends on the initial horizontal velocity',
                respostaCorreta:
                    'O movimento é a composição de MRU horizontal e MRUV vertical, resultando em trajetória parabólica',
                correctAnswer:
                    'The motion is a composition of horizontal URM and vertical UARM, resulting in a parabolic trajectory',
                explicacao:
                    'No lançamento horizontal, os eixos são independentes: horizontalmente não há força, logo velocidade constante (MRU); verticalmente atua a gravidade, logo aceleração constante (MRUV). A composição vetorial resulta em trajetória parabólica. O tempo de queda depende apenas da altura, não da velocidade horizontal.',
                explanation:
                    'In horizontal launch, the axes are independent: horizontally there is no force, so constant velocity (URM); vertically gravity acts, so constant acceleration (UARM). The vector composition results in a parabolic trajectory. Fall time depends only on height, not on horizontal velocity.',
                materia: 'Física',
            },
            {
                pergunta:
                    'Uma panela de pressão cozinha alimentos mais rapidamente que uma panela comum porque:',
                question: 'A pressure cooker cooks food faster than a regular pot because:',
                opcaoA: 'A tampa metálica conduz mais calor para o interior da panela',
                optionA: 'The metal lid conducts more heat into the pot',
                opcaoB: 'O aumento da pressão interna eleva o ponto de ebulição da água',
                optionB: 'The increase in internal pressure raises the boiling point of water',
                opcaoC: 'A pressão reduzida dentro da panela acelera a transferência de calor',
                optionC: 'The reduced pressure inside the pot accelerates heat transfer',
                opcaoD: 'A água entra em ebulição a temperaturas menores sob alta pressão',
                optionD: 'Water boils at lower temperatures under high pressure',
                opcaoE: 'O vapor gerado aumenta a condutividade térmica do alimento',
                optionE: 'The steam generated increases the thermal conductivity of the food',
                respostaCorreta: 'O aumento da pressão interna eleva o ponto de ebulição da água',
                correctAnswer:
                    'The increase in internal pressure raises the boiling point of water',
                explicacao:
                    'O ponto de ebulição depende da pressão: maior pressão → maior temperatura de ebulição. Na panela de pressão, o vapor acumula e eleva a pressão interna, fazendo a água ferver a cerca de 120°C em vez de 100°C. Maior temperatura significa transferência de calor mais rápida para o alimento.',
                explanation:
                    'The boiling point depends on pressure: higher pressure → higher boiling temperature. In the pressure cooker, steam accumulates and raises internal pressure, making water boil at about 120°C instead of 100°C. Higher temperature means faster heat transfer to the food.',
                materia: 'Física',
            },
            {
                pergunta:
                    'Um estudante observa que, ao aproximar um ímã de uma argola metálica, surge uma corrente elétrica na argola. Esse fenômeno é denominado:',
                question:
                    'A student observes that, when bringing a magnet close to a metal ring, an electric current appears in the ring. This phenomenon is called:',
                opcaoA: 'Efeito Joule, pois a resistência elétrica converte movimento em calor',
                optionA: 'Joule effect, as electrical resistance converts motion into heat',
                opcaoB: 'Indução eletromagnética, pois a variação do fluxo magnético gera força eletromotriz',
                optionB:
                    'Electromagnetic induction, as the variation of magnetic flux generates electromotive force',
                opcaoC: 'Efeito fotoelétrico, pois fótons do campo magnético ejetam elétrons do metal',
                optionC:
                    'Photoelectric effect, as photons from the magnetic field eject electrons from the metal',
                opcaoD: 'Condução estática, pois o ímã transfere cargas à argola por contato',
                optionD:
                    'Static conduction, as the magnet transfers charges to the ring by contact',
                opcaoE: 'Ressonância magnética, pois o campo oscila na frequência natural dos elétrons',
                optionE:
                    'Magnetic resonance, as the field oscillates at the natural frequency of electrons',
                respostaCorreta:
                    'Indução eletromagnética, pois a variação do fluxo magnético gera força eletromotriz',
                correctAnswer:
                    'Electromagnetic induction, as the variation of magnetic flux generates electromotive force',
                explicacao:
                    'A Lei de Faraday estabelece que uma variação no fluxo magnético através de um condutor induz uma força eletromotriz (fem) e, se o circuito for fechado, uma corrente elétrica. Esse princípio é a base dos geradores elétricos e transformadores.',
                explanation:
                    "Faraday's Law states that a variation in magnetic flux through a conductor induces an electromotive force (emf) and, if the circuit is closed, an electric current. This principle is the basis of electric generators and transformers.",
                materia: 'Física',
            },
            {
                pergunta:
                    'Ao entrar num ambiente mais quente, um termômetro de mercúrio demora alguns segundos para marcar a temperatura correta. Isso ocorre porque:',
                question:
                    'When entering a warmer environment, a mercury thermometer takes a few seconds to show the correct temperature. This occurs because:',
                opcaoA: 'O mercúrio possui baixa condutividade elétrica, retardando a leitura',
                optionA: 'Mercury has low electrical conductivity, delaying the reading',
                opcaoB: 'A transferência de calor ocorre até o equilíbrio térmico entre o termômetro e o ambiente',
                optionB:
                    'Heat transfer occurs until thermal equilibrium between the thermometer and the environment',
                opcaoC: 'O vidro reflete o calor do ambiente, impedindo a expansão imediata do mercúrio',
                optionC:
                    'The glass reflects heat from the environment, preventing immediate expansion of mercury',
                opcaoD: 'O mercúrio se contrai ao receber calor, demorando a atingir o novo volume',
                optionD:
                    'Mercury contracts when receiving heat, taking time to reach the new volume',
                opcaoE: 'A dilatação do vidro compensa a do mercúrio, anulando a variação',
                optionE:
                    'The expansion of the glass compensates for the mercury, canceling the variation',
                respostaCorreta:
                    'A transferência de calor ocorre até o equilíbrio térmico entre o termômetro e o ambiente',
                correctAnswer:
                    'Heat transfer occurs until thermal equilibrium between the thermometer and the environment',
                explicacao:
                    'O termômetro registra sua própria temperatura, não a do ambiente diretamente. O calor flui do ambiente para o mercúrio até ambos atingirem equilíbrio térmico (mesma temperatura). Esse processo leva tempo e é descrito pela Lei Zero da Termodinâmica.',
                explanation:
                    "The thermometer records its own temperature, not the environment's directly. Heat flows from the environment to the mercury until both reach thermal equilibrium (same temperature). This process takes time and is described by the Zeroth Law of Thermodynamics.",
                materia: 'Física',
            },
            {
                pergunta:
                    'Um carro percorre 60 km na primeira hora e 60 km na segunda hora, porém por caminhos diferentes. Sobre o movimento desse carro, é correto afirmar:',
                question:
                    "A car travels 60 km in the first hour and 60 km in the second hour, but along different paths. Regarding the car's motion, it is correct to state:",
                opcaoA: 'O carro está em MRU, pois percorreu distâncias iguais em tempos iguais',
                optionA: 'The car is in URM, as it covered equal distances in equal times',
                opcaoB: 'A velocidade escalar média é 60 km/h, mas a velocidade vetorial média pode ser diferente',
                optionB:
                    'The average scalar speed is 60 km/h, but the average vector velocity may differ',
                opcaoC: 'A velocidade média e a velocidade escalar média são sempre iguais em qualquer trajetória',
                optionC:
                    'Average velocity and average scalar speed are always equal for any trajectory',
                opcaoD: 'Como as distâncias são iguais, o deslocamento vetorial também deve ser igual',
                optionD:
                    'Since the distances are equal, the vector displacement must also be equal',
                opcaoE: 'O carro possui aceleração nula, pois a rapidez não variou',
                optionE: 'The car has zero acceleration, as the speed did not change',
                respostaCorreta:
                    'A velocidade escalar média é 60 km/h, mas a velocidade vetorial média pode ser diferente',
                correctAnswer:
                    'The average scalar speed is 60 km/h, but the average vector velocity may differ',
                explicacao:
                    'Velocidade escalar (rapidez) considera apenas o módulo da distância percorrida. Velocidade vetorial considera o deslocamento (variação de posição). Como os caminhos são diferentes, o vetor deslocamento pode ser diferente mesmo com mesma distância percorrida. MRU exige trajetória retilínea e velocidade constante — não é o caso aqui.',
                explanation:
                    'Scalar speed considers only the magnitude of distance traveled. Vector velocity considers displacement (change in position). Since the paths are different, the displacement vector may differ even with the same distance traveled. URM requires rectilinear trajectory and constant velocity — which is not the case here.',
                materia: 'Física',
            },
            // --- QUÍMICA (ENEM/Vestibular) ---
            {
                pergunta:
                    'O antiácido estomacal age neutralizando o excesso de ácido clorídrico (HCl) produzido pelo estômago. Um comprimido contém hidróxido de magnésio Mg(OH)₂ como princípio ativo. A reação que ocorre é classificada como:',
                question:
                    'Stomach antacid works by neutralizing excess hydrochloric acid (HCl) produced by the stomach. A tablet contains magnesium hydroxide Mg(OH)₂ as the active ingredient. The reaction that occurs is classified as:',
                opcaoA: 'Reação de oxirredução, pois há troca de elétrons entre o ácido e a base',
                optionA:
                    'Redox reaction, as there is electron transfer between the acid and the base',
                opcaoB: 'Reação de neutralização, pois ácido e base reagem formando sal e água',
                optionB: 'Neutralization reaction, as acid and base react forming salt and water',
                opcaoC: 'Reação de decomposição, pois o Mg(OH)₂ se separa em íons no estômago',
                optionC: 'Decomposition reaction, as Mg(OH)₂ separates into ions in the stomach',
                opcaoD: 'Reação exotérmica de combustão, pois libera energia ao reagir com o HCl',
                optionD:
                    'Exothermic combustion reaction, as it releases energy when reacting with HCl',
                opcaoE: 'Reação de adição, pois o Mg(OH)₂ se adiciona ao HCl sem formar novos produtos',
                optionE: 'Addition reaction, as Mg(OH)₂ adds to HCl without forming new products',
                respostaCorreta:
                    'Reação de neutralização, pois ácido e base reagem formando sal e água',
                correctAnswer:
                    'Neutralization reaction, as acid and base react forming salt and water',
                explicacao:
                    'A reação Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O é uma neutralização clássica: os íons H⁺ do ácido reagem com os íons OH⁻ da base formando água, e os íons restantes formam o sal MgCl₂. O pH do meio se eleva, aliviando a acidez gástrica.',
                explanation:
                    'The reaction Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O is a classic neutralization: H⁺ ions from the acid react with OH⁻ ions from the base forming water, and the remaining ions form the salt MgCl₂. The pH of the medium rises, relieving gastric acidity.',
                materia: 'Química',
            },
            {
                pergunta:
                    'A gasolina comum vendida no Brasil contém etanol misturado. Essa mistura é possível porque o etanol e os hidrocarbonetos da gasolina são miscíveis. O etanol (C₂H₅OH) é polar, enquanto os hidrocarbonetos são apolares. Como explicar essa miscibilidade?',
                question:
                    'Regular gasoline sold in Brazil contains blended ethanol. This mixture is possible because ethanol and gasoline hydrocarbons are miscible. Ethanol (C₂H₅OH) is polar, while hydrocarbons are nonpolar. How can this miscibility be explained?',
                opcaoA: 'Substâncias de polaridades diferentes são sempre miscíveis entre si',
                optionA: 'Substances of different polarities are always miscible with each other',
                opcaoB: 'A cadeia carbônica apolar do etanol permite interação com os hidrocarbonetos, apesar do grupo OH polar',
                optionB:
                    'The nonpolar carbon chain of ethanol allows interaction with hydrocarbons, despite the polar OH group',
                opcaoC: 'O etanol é apolar porque possui carbono em sua estrutura',
                optionC: 'Ethanol is nonpolar because it contains carbon in its structure',
                opcaoD: 'A miscibilidade ocorre apenas quando as substâncias têm mesma massa molar',
                optionD: 'Miscibility occurs only when substances have the same molar mass',
                opcaoE: 'A presença de oxigênio no etanol garante miscibilidade com qualquer substância',
                optionE: 'The presence of oxygen in ethanol ensures miscibility with any substance',
                respostaCorreta:
                    'A cadeia carbônica apolar do etanol permite interação com os hidrocarbonetos, apesar do grupo OH polar',
                correctAnswer:
                    'The nonpolar carbon chain of ethanol allows interaction with hydrocarbons, despite the polar OH group',
                explicacao:
                    'O etanol possui dupla natureza: o grupo OH é polar (forma pontes de H com água) e a cadeia C₂H₅ é apolar (interage com hidrocarbonetos por forças de London). Essa característica anfifílica explica sua miscibilidade parcial com substâncias de polaridades distintas, sendo essencial para sua função como aditivo na gasolina.',
                explanation:
                    'Ethanol has a dual nature: the OH group is polar (forms H-bonds with water) and the C₂H₅ chain is nonpolar (interacts with hydrocarbons via London forces). This amphiphilic characteristic explains its partial miscibility with substances of different polarities, making it essential as a gasoline additive.',
                materia: 'Química',
            },
            {
                pergunta:
                    'O carbono-14 (¹⁴C) é utilizado na datação de fósseis por ser radioativo e se desintegrar com meia-vida de 5.730 anos. Uma amostra orgânica apresenta hoje 1/8 da quantidade original de ¹⁴C. Há quantos anos esse organismo morreu?',
                question:
                    'Carbon-14 (¹⁴C) is used in fossil dating because it is radioactive and decays with a half-life of 5,730 years. An organic sample today has 1/8 of the original amount of ¹⁴C. How many years ago did this organism die?',
                opcaoA: '5.730 anos',
                optionA: '5,730 years',
                opcaoB: '11.460 anos',
                optionB: '11,460 years',
                opcaoC: '17.190 anos',
                optionC: '17,190 years',
                opcaoD: '22.920 anos',
                optionD: '22,920 years',
                opcaoE: '28.650 anos',
                optionE: '28,650 years',
                respostaCorreta: '17.190 anos',
                correctAnswer: '17,190 years',
                explicacao:
                    'A cada meia-vida, a quantidade se reduz à metade: 1 → 1/2 → 1/4 → 1/8. Para chegar a 1/8 da quantidade original, são necessárias 3 meias-vidas. 3 × 5.730 = 17.190 anos. O conceito de meia-vida é fundamental em química nuclear e tem aplicações diretas em arqueologia e medicina nuclear.',
                explanation:
                    'Each half-life reduces the amount by half: 1 → 1/2 → 1/4 → 1/8. To reach 1/8 of the original amount, 3 half-lives are needed. 3 × 5,730 = 17,190 years. The concept of half-life is fundamental in nuclear chemistry with direct applications in archaeology and nuclear medicine.',
                materia: 'Química',
            },
            {
                pergunta:
                    'Ao abrir uma garrafa de refrigerante gelado, bolhas de CO₂ se formam rapidamente. Quando o mesmo refrigerante está quente, as bolhas são ainda mais intensas. Esse comportamento é explicado pela:',
                question:
                    'When opening a cold bottle of soda, CO₂ bubbles form quickly. When the same soda is warm, the bubbles are even more intense. This behavior is explained by:',
                opcaoA: 'Lei de Boyle: o volume do gás aumenta com a temperatura à pressão constante',
                optionA: "Boyle's Law: gas volume increases with temperature at constant pressure",
                opcaoB: 'Lei de Henry: a solubilidade de gases em líquidos diminui com o aumento da temperatura',
                optionB:
                    "Henry's Law: the solubility of gases in liquids decreases with increasing temperature",
                opcaoC: 'Princípio de Le Chatelier: o equilíbrio se desloca para compensar o aumento de pressão',
                optionC:
                    "Le Chatelier's Principle: equilibrium shifts to compensate for the pressure increase",
                opcaoD: 'Lei de Charles: o aumento de temperatura reduz a pressão interna da garrafa',
                optionD:
                    "Charles's Law: increasing temperature reduces internal pressure in the bottle",
                opcaoE: 'Lei de Lavoisier: a massa de CO₂ é conservada ao passar do líquido para o gasoso',
                optionE:
                    "Lavoisier's Law: the mass of CO₂ is conserved when passing from liquid to gas",
                respostaCorreta:
                    'Lei de Henry: a solubilidade de gases em líquidos diminui com o aumento da temperatura',
                correctAnswer:
                    "Henry's Law: the solubility of gases in liquids decreases with increasing temperature",
                explicacao:
                    'A Lei de Henry estabelece que a solubilidade de um gás num líquido é diretamente proporcional à pressão e inversamente proporcional à temperatura. Com o aumento da temperatura, o CO₂ dissolvido tem menos tendência a permanecer em solução, escapando mais rapidamente na forma de bolhas ao se abrir a garrafa.',
                explanation:
                    "Henry's Law states that the solubility of a gas in a liquid is directly proportional to pressure and inversely proportional to temperature. As temperature increases, dissolved CO₂ has less tendency to remain in solution, escaping more rapidly as bubbles when the bottle is opened.",
                materia: 'Química',
            },
            {
                pergunta:
                    'A chuva ácida é um problema ambiental causado principalmente pela emissão de SO₂ e NOₓ por indústrias e veículos. Esses gases reagem com a água da atmosfera formando ácidos. Qual alternativa descreve corretamente as reações envolvidas?',
                question:
                    'Acid rain is an environmental problem mainly caused by the emission of SO₂ and NOₓ by industries and vehicles. These gases react with atmospheric water forming acids. Which alternative correctly describes the reactions involved?',
                opcaoA: 'SO₂ reage com O₂ formando SO₃, que reage com H₂O produzindo H₂SO₄',
                optionA: 'SO₂ reacts with O₂ forming SO₃, which reacts with H₂O producing H₂SO₄',
                opcaoB: 'SO₂ reage diretamente com H₂O formando H₂SO₄ sem etapas intermediárias',
                optionB: 'SO₂ reacts directly with H₂O forming H₂SO₄ without intermediate steps',
                opcaoC: 'O NOₓ reage apenas com O₂, sem envolver água na formação de ácido',
                optionC: 'NOₓ reacts only with O₂, without involving water in acid formation',
                opcaoD: 'A chuva ácida contém apenas H₂SO₃, pois o SO₂ não se oxida na atmosfera',
                optionD: 'Acid rain contains only H₂SO₃, as SO₂ does not oxidize in the atmosphere',
                opcaoE: 'Os gases SO₂ e NOₓ se neutralizam mutuamente antes de reagir com a água',
                optionE: 'SO₂ and NOₓ gases neutralize each other before reacting with water',
                respostaCorreta:
                    'SO₂ reage com O₂ formando SO₃, que reage com H₂O produzindo H₂SO₄',
                correctAnswer:
                    'SO₂ reacts with O₂ forming SO₃, which reacts with H₂O producing H₂SO₄',
                explicacao:
                    'Na atmosfera ocorre: SO₂ + ½O₂ → SO₃ (oxidação catalítica) e SO₃ + H₂O → H₂SO₄ (ácido sulfúrico). O NO também se oxida: 2NO + O₂ → 2NO₂, e NO₂ + H₂O → HNO₃ (ácido nítrico). Ambos os ácidos abaixam o pH da chuva (normal ≈ 5,6) para valores inferiores a 5,0, causando danos a ecossistemas e estruturas metálicas.',
                explanation:
                    'In the atmosphere: SO₂ + ½O₂ → SO₃ (catalytic oxidation) and SO₃ + H₂O → H₂SO₄ (sulfuric acid). NO also oxidizes: 2NO + O₂ → 2NO₂, and NO₂ + H₂O → HNO₃ (nitric acid). Both acids lower rainfall pH (normal ≈ 5.6) below 5.0, causing damage to ecosystems and metal structures.',
                materia: 'Química',
            },
            {
                pergunta:
                    'Durante a eletrólise da água, observa-se que o volume de gás produzido no cátodo é sempre o dobro do volume produzido no ânodo. Isso ocorre porque:',
                question:
                    'During the electrolysis of water, the volume of gas produced at the cathode is always twice the volume produced at the anode. This occurs because:',
                opcaoA: 'O hidrogênio tem menor densidade que o oxigênio, ocupando mais volume na mesma massa',
                optionA:
                    'Hydrogen has lower density than oxygen, occupying more volume at the same mass',
                opcaoB: 'A equação 2H₂O → 2H₂ + O₂ produz 2 mol de H₂ para cada 1 mol de O₂',
                optionB: 'The equation 2H₂O → 2H₂ + O₂ produces 2 mol of H₂ for every 1 mol of O₂',
                opcaoC: 'O cátodo recebe mais corrente elétrica do que o ânodo no circuito',
                optionC: 'The cathode receives more electric current than the anode in the circuit',
                opcaoD: 'O oxigênio se dissolve parcialmente na água, reduzindo seu volume coletado',
                optionD: 'Oxygen partially dissolves in water, reducing its collected volume',
                opcaoE: 'A água contém dois hidrogênios e um oxigênio, e cada átomo gera um mol de gás',
                optionE:
                    'Water contains two hydrogens and one oxygen, and each atom generates one mole of gas',
                respostaCorreta:
                    'A equação 2H₂O → 2H₂ + O₂ produz 2 mol de H₂ para cada 1 mol de O₂',
                correctAnswer:
                    'The equation 2H₂O → 2H₂ + O₂ produces 2 mol of H₂ for every 1 mol of O₂',
                explicacao:
                    'Pela estequiometria da reação 2H₂O → 2H₂ + O₂, para cada 2 mols de água decompostos, formam-se 2 mols de H₂ e 1 mol de O₂. Pela Lei de Avogadro, volumes iguais de gases nas mesmas condições contêm igual número de mols — logo o volume de H₂ é o dobro do de O₂. O cátodo é onde ocorre a redução (2H⁺ + 2e⁻ → H₂) e o ânodo a oxidação (2H₂O → O₂ + 4H⁺ + 4e⁻).',
                explanation:
                    "By the stoichiometry of the reaction 2H₂O → 2H₂ + O₂, for every 2 moles of water decomposed, 2 moles of H₂ and 1 mole of O₂ are formed. By Avogadro's Law, equal volumes of gases under the same conditions contain equal numbers of moles — so the volume of H₂ is twice that of O₂. The cathode is where reduction occurs (2H⁺ + 2e⁻ → H₂) and the anode oxidation (2H₂O → O₂ + 4H⁺ + 4e⁻).",
                materia: 'Química',
            },
            {
                pergunta:
                    'Polietileno, PVC e nylon são exemplos de polímeros amplamente usados no cotidiano. Qual característica os define como polímeros?',
                question:
                    'Polyethylene, PVC and nylon are examples of polymers widely used in daily life. What characteristic defines them as polymers?',
                opcaoA: 'São substâncias simples formadas por um único tipo de átomo',
                optionA: 'They are simple substances formed by a single type of atom',
                opcaoB: 'São macromoléculas formadas pela repetição de unidades menores chamadas monômeros',
                optionB:
                    'They are macromolecules formed by the repetition of smaller units called monomers',
                opcaoC: 'São misturas homogêneas de compostos orgânicos de baixa massa molar',
                optionC: 'They are homogeneous mixtures of organic compounds with low molar mass',
                opcaoD: 'São compostos iônicos formados por metais e não-metais em estrutura cristalina',
                optionD:
                    'They are ionic compounds formed by metals and non-metals in a crystalline structure',
                opcaoE: 'São moléculas orgânicas que contêm obrigatoriamente nitrogênio em sua estrutura',
                optionE: 'They are organic molecules that must contain nitrogen in their structure',
                respostaCorreta:
                    'São macromoléculas formadas pela repetição de unidades menores chamadas monômeros',
                correctAnswer:
                    'They are macromolecules formed by the repetition of smaller units called monomers',
                explicacao:
                    'Polímeros são macromoléculas de alta massa molar resultantes da polimerização — ligação de milhares de monômeros. O polietileno deriva do eteno (CH₂=CH₂), o PVC do cloreto de vinila, e o nylon de diaminas e diácidos. A estrutura repetitiva confere propriedades mecânicas como resistência e flexibilidade, fundamentais para suas aplicações industriais.',
                explanation:
                    'Polymers are high molar mass macromolecules resulting from polymerization — the bonding of thousands of monomers. Polyethylene derives from ethylene (CH₂=CH₂), PVC from vinyl chloride, and nylon from diamines and diacids. The repetitive structure confers mechanical properties such as strength and flexibility, fundamental for their industrial applications.',
                materia: 'Química',
            },
            {
                pergunta:
                    'Um estudante aquece uma solução saturada de nitrato de potássio (KNO₃) e observa que mais sal se dissolve. Ao resfriar, cristais se formam novamente. Esse comportamento indica que a dissolução do KNO₃ é:',
                question:
                    'A student heats a saturated potassium nitrate (KNO₃) solution and observes that more salt dissolves. Upon cooling, crystals form again. This behavior indicates that the dissolution of KNO₃ is:',
                opcaoA: 'Exotérmica, pois o aquecimento favorece reações que liberam calor',
                optionA: 'Exothermic, as heating favors reactions that release heat',
                opcaoB: 'Endotérmica, pois o aquecimento favorece o processo que absorve calor, aumentando a solubilidade',
                optionB:
                    'Endothermic, as heating favors the process that absorbs heat, increasing solubility',
                opcaoC: 'Neutra em relação ao calor, pois sólidos sempre se dissolvem mais com temperatura',
                optionC: 'Thermally neutral, as solids always dissolve more with temperature',
                opcaoD: 'Exotérmica, pois a formação de cristais ao resfriar libera energia',
                optionD: 'Exothermic, as crystal formation upon cooling releases energy',
                opcaoE: 'Irreversível, pois a recristalização é uma reação química diferente da dissolução',
                optionE:
                    'Irreversible, as recrystallization is a different chemical reaction from dissolution',
                respostaCorreta:
                    'Endotérmica, pois o aquecimento favorece o processo que absorve calor, aumentando a solubilidade',
                correctAnswer:
                    'Endothermic, as heating favors the process that absorbs heat, increasing solubility',
                explicacao:
                    'Pelo Princípio de Le Chatelier, se o aumento de temperatura favorece a dissolução (maior solubilidade), o processo de dissolução absorve calor — ou seja, é endotérmico (ΔH > 0). Ao resfriar, o equilíbrio se desloca no sentido da cristalização (exotérmica), precipitando o sal. Esse comportamento é típico da maioria dos sais inorgânicos sólidos.',
                explanation:
                    "By Le Chatelier's Principle, if increasing temperature favors dissolution (greater solubility), the dissolution process absorbs heat — that is, it is endothermic (ΔH > 0). Upon cooling, equilibrium shifts toward crystallization (exothermic), precipitating the salt. This behavior is typical of most solid inorganic salts.",
                materia: 'Química',
            },
            // --- LÍNGUA PORTUGUESA (ENEM/Vestibular) ---
            {
                pergunta:
                    'Leia o trecho: "Ele tinha os olhos de um lobo faminto — vasculhavam cada canto da sala, calculando distâncias." A linguagem figurada predominante nesse trecho é:',
                question:
                    'Read the excerpt: "He had the eyes of a hungry wolf — they scanned every corner of the room, calculating distances." The predominant figurative language in this excerpt is:',
                opcaoA: 'Hipérbole, pois exagera as características físicas do personagem',
                optionA:
                    'Hyperbole, as it exaggerates the physical characteristics of the character',
                opcaoB: 'Metonímia, pois substitui o personagem pela parte do corpo',
                optionB: 'Metonymy, as it substitutes the character for a body part',
                opcaoC: 'Metáfora, pois compara implicitamente os olhos do personagem aos de um lobo',
                optionC:
                    "Metaphor, as it implicitly compares the character's eyes to those of a wolf",
                opcaoD: 'Eufemismo, pois suaviza uma característica negativa do personagem',
                optionD: 'Euphemism, as it softens a negative characteristic of the character',
                opcaoE: 'Antítese, pois opõe a ideia de lobo à de ser humano',
                optionE: 'Antithesis, as it opposes the idea of a wolf to that of a human being',
                respostaCorreta:
                    'Metáfora, pois compara implicitamente os olhos do personagem aos de um lobo',
                correctAnswer:
                    "Metaphor, as it implicitly compares the character's eyes to those of a wolf",
                explicacao:
                    'A metáfora é uma comparação sem o uso de conectivos como "como" ou "parece". No trecho, os olhos do personagem são identificados diretamente aos de um lobo, transferindo as características do animal ao humano. Se fosse "olhos como os de um lobo", seria símile (comparação explícita).',
                explanation:
                    'A metaphor is a comparison without connectives like "like" or "as". In the excerpt, the character\'s eyes are directly identified with a wolf\'s, transferring the animal\'s characteristics to the human. If it were "eyes like a wolf\'s", it would be a simile (explicit comparison).',
                materia: 'Língua Portuguesa',
            },
            {
                pergunta:
                    'Considere as frases: I. "O governo anunciou novas medidas." II. "Novas medidas foram anunciadas." III. "Anunciaram-se novas medidas." Sobre a voz verbal empregada em cada frase, é correto afirmar:',
                question:
                    'Consider the sentences: I. "The government announced new measures." II. "New measures were announced." III. "New measures were announced." (reflexive passive). Regarding the verbal voice used in each sentence, it is correct to state:',
                opcaoA: 'I é passiva, II é ativa e III é reflexiva',
                optionA: 'I is passive, II is active and III is reflexive',
                opcaoB: 'I é ativa, II é passiva analítica e III é passiva sintética',
                optionB: 'I is active, II is analytical passive and III is synthetic passive',
                opcaoC: 'I, II e III estão na voz ativa, apenas com ordenações diferentes',
                optionC:
                    'I, II and III are all in the active voice, just with different word orders',
                opcaoD: 'II e III são ativas porque o sujeito pratica a ação em ambas',
                optionD: 'II and III are active because the subject performs the action in both',
                opcaoE: 'I é reflexiva, pois o governo age sobre si mesmo',
                optionE: 'I is reflexive, as the government acts upon itself',
                respostaCorreta: 'I é ativa, II é passiva analítica e III é passiva sintética',
                correctAnswer: 'I is active, II is analytical passive and III is synthetic passive',
                explicacao:
                    'Na voz ativa (I), o sujeito pratica a ação. Na passiva analítica (II), usa-se o verbo auxiliar "ser" + particípio. Na passiva sintética (III), usa-se o pronome apassivador "se" com o verbo na 3ª pessoa. As três frases têm o mesmo sentido, mas estruturas distintas — questão clássica de equivalência de vozes verbais no ENEM.',
                explanation:
                    'In the active voice (I), the subject performs the action. In the analytical passive (II), the auxiliary verb "to be" + past participle is used. In the synthetic passive (III), the passive pronoun "se" is used with the verb in the 3rd person. All three sentences have the same meaning but different structures.',
                materia: 'Língua Portuguesa',
            },
            {
                pergunta:
                    'Leia o fragmento de Machado de Assis em "Dom Casmurro": "Não consultes dicionários. Capitu tinha os olhos que o diabo lhe deu." O narrador Bentinho é considerado não confiável pela crítica literária principalmente porque:',
                question:
                    'Read the fragment from Machado de Assis in "Dom Casmurro": "Do not consult dictionaries. Capitu had the eyes the devil gave her." The narrator Bentinho is considered unreliable by literary criticism mainly because:',
                opcaoA: 'Ele narra os fatos em ordem cronológica inversa, confundindo o leitor',
                optionA:
                    'He narrates the events in reverse chronological order, confusing the reader',
                opcaoB: 'É um narrador em primeira pessoa cujas interpretações dos fatos são subjetivas e potencialmente distorcidas por ciúme',
                optionB:
                    'He is a first-person narrator whose interpretations of facts are subjective and potentially distorted by jealousy',
                opcaoC: 'Usa linguagem rebuscada que impede a compreensão dos acontecimentos reais',
                optionC: 'He uses elaborate language that prevents understanding of real events',
                opcaoD: 'Admite explicitamente no texto que inventou partes da história',
                optionD: 'He explicitly admits in the text that he invented parts of the story',
                opcaoE: 'É uma personagem secundária que narra fatos que não presenciou',
                optionE: 'He is a secondary character who narrates events he did not witness',
                respostaCorreta:
                    'É um narrador em primeira pessoa cujas interpretações dos fatos são subjetivas e potencialmente distorcidas por ciúme',
                correctAnswer:
                    'He is a first-person narrator whose interpretations of facts are subjective and potentially distorted by jealousy',
                explicacao:
                    'O conceito de narrador não confiável (unreliable narrator) é central em Dom Casmurro. Bentinho narra décadas depois dos fatos, movido pelo ciúme e pela necessidade de justificar suas ações. O leitor nunca tem acesso à "verdade" objetiva — apenas à versão de Bento. A ambiguidade sobre a traição de Capitu é proposital e é o maior debate do Realismo brasileiro.',
                explanation:
                    'The concept of an unreliable narrator is central to Dom Casmurro. Bentinho narrates decades after the events, driven by jealousy and the need to justify his actions. The reader never has access to the "objective truth" — only Bento\'s version. The ambiguity about Capitu\'s betrayal is intentional and is the greatest debate in Brazilian Realism.',
                materia: 'Língua Portuguesa',
            },
            {
                pergunta:
                    'Analise o período: "Embora estivesse cansado, o atleta completou a prova." A oração subordinada adverbial "Embora estivesse cansado" expressa circunstância de:',
                question:
                    'Analyze the sentence: "Although he was tired, the athlete completed the race." The adverbial subordinate clause "Although he was tired" expresses the circumstance of:',
                opcaoA: 'Causa, pois explica o motivo de o atleta ter completado a prova',
                optionA: 'Cause, as it explains why the athlete completed the race',
                opcaoB: 'Condição, pois estabelece um requisito para a conclusão da prova',
                optionB: 'Condition, as it establishes a requirement for completing the race',
                opcaoC: 'Concessão, pois indica um fato que contraria a expectativa da oração principal',
                optionC:
                    'Concession, as it indicates a fact that contradicts the expectation of the main clause',
                opcaoD: 'Consequência, pois o cansaço resultou na conclusão da prova',
                optionD: 'Consequence, as the tiredness resulted in completing the race',
                opcaoE: 'Finalidade, pois o atleta ficou cansado para completar a prova',
                optionE: 'Purpose, as the athlete got tired in order to complete the race',
                respostaCorreta:
                    'Concessão, pois indica um fato que contraria a expectativa da oração principal',
                correctAnswer:
                    'Concession, as it indicates a fact that contradicts the expectation of the main clause',
                explicacao:
                    'A oração concessiva admite um obstáculo ou fato contrário à expectativa, sem impedir a realização da ação principal. Conjunções concessivas: embora, ainda que, mesmo que, apesar de que. O raciocínio é: "era de se esperar que, estando cansado, não completasse — mas completou". Isso a diferencia da causal, que explicaria o motivo, não o contraste.',
                explanation:
                    'The concessive clause admits an obstacle or fact contrary to expectation, without preventing the main action. Concessive conjunctions: although, even though, despite. The reasoning is: "one would expect that, being tired, he would not complete it — but he did". This distinguishes it from the causal clause, which would explain the reason, not the contrast.',
                materia: 'Língua Portuguesa',
            },
            {
                pergunta:
                    'O movimento literário do Romantismo brasileiro privilegiou a idealização da natureza e do índio como símbolos nacionais. Essa escolha estética tinha também uma função ideológica, que era:',
                question:
                    'The Brazilian Romantic literary movement favored the idealization of nature and the indigenous people as national symbols. This aesthetic choice also had an ideological function, which was:',
                opcaoA: 'Criticar o processo de colonização europeia e defender a cultura indígena original',
                optionA:
                    'Criticize the European colonization process and defend the original indigenous culture',
                opcaoB: 'Construir uma identidade nacional brasileira distinta da portuguesa após a Independência',
                optionB:
                    'Build a distinct Brazilian national identity separate from the Portuguese after Independence',
                opcaoC: 'Promover o retorno dos colonizadores portugueses ao Brasil',
                optionC: 'Promote the return of Portuguese colonizers to Brazil',
                opcaoD: 'Reproduzir os valores estéticos do Classicismo europeu em solo brasileiro',
                optionD: 'Reproduce the aesthetic values of European Classicism on Brazilian soil',
                opcaoE: 'Denunciar as desigualdades sociais entre índios e colonizadores brancos',
                optionE:
                    'Denounce the social inequalities between indigenous people and white colonizers',
                respostaCorreta:
                    'Construir uma identidade nacional brasileira distinta da portuguesa após a Independência',
                correctAnswer:
                    'Build a distinct Brazilian national identity separate from the Portuguese after Independence',
                explicacao:
                    'O Romantismo brasileiro (1822 em diante) surge no contexto da Independência política. A exaltação do índio (Indianismo — Gonçalves Dias, José de Alencar) e da natureza tropical funcionava como afirmação de uma identidade própria, separada da metrópole portuguesa. O índio idealizado não representava crítica ao colonialismo, mas um símbolo fundador conveniente para a elite letrada do Império.',
                explanation:
                    'Brazilian Romanticism (from 1822) emerges in the context of political Independence. The exaltation of the indigenous people (Indianism — Gonçalves Dias, José de Alencar) and tropical nature functioned as an affirmation of a distinct identity, separate from the Portuguese metropolis. The idealized indigenous person did not represent criticism of colonialism, but a convenient founding symbol for the literate elite of the Empire.',
                materia: 'Língua Portuguesa',
            },
            {
                pergunta:
                    'Considere a tirinha hipotética em que um personagem diz: "Preciso de um tempo." e outro responde: "Claro, são 14h32." O humor decorre de:',
                question:
                    'Consider a hypothetical comic strip where a character says: "I need some time." and another responds: "Sure, it\'s 2:32 PM." The humor arises from:',
                opcaoA: 'Uma hipérbole, pois o segundo personagem exagera ao dar a hora exata',
                optionA:
                    'A hyperbole, as the second character exaggerates by giving the exact time',
                opcaoB: 'Uma ironia, pois o segundo personagem discorda de forma velada',
                optionB: 'An irony, as the second character disagrees in a veiled way',
                opcaoC: 'Uma ambiguidade semântica, pois "precisar de um tempo" tem sentido literal e figurado',
                optionC:
                    'A semantic ambiguity, as "needing time" has both literal and figurative meanings',
                opcaoD: 'Um pleonasmo, pois tempo e hora são palavras sinônimas',
                optionD: 'A pleonasm, as time and hour are synonymous words',
                opcaoE: 'Uma antítese, pois os personagens têm opiniões opostas sobre o tempo',
                optionE: 'An antithesis, as the characters have opposite opinions about time',
                respostaCorreta:
                    'Uma ambiguidade semântica, pois "precisar de um tempo" tem sentido literal e figurado',
                correctAnswer:
                    'A semantic ambiguity, as "needing time" has both literal and figurative meanings',
                explicacao:
                    'O efeito cômico da tirinha explora a polissemia: "precisar de um tempo" no sentido figurado significa querer um período de pausa ou reflexão (geralmente em relacionamentos), enquanto no sentido literal significa querer saber as horas. O segundo personagem interpreta deliberada ou ingenuamente o sentido literal, gerando o humor. Esse recurso é chamado de ambiguidade ou duplo sentido.',
                explanation:
                    'The comic effect of the strip exploits polysemy: "needing time" in the figurative sense means wanting a period of pause or reflection (usually in relationships), while in the literal sense it means wanting to know the time. The second character deliberately or naively interprets the literal meaning, generating humor. This device is called ambiguity or double meaning.',
                materia: 'Língua Portuguesa',
            },
            {
                pergunta: 'Na frase "Quem muito fala, pouco age", ocorre uma relação de:',
                question:
                    'In the sentence "Those who talk a lot, act little", there is a relation of:',
                opcaoA: 'Adição, pois as orações somam informações sobre o mesmo sujeito',
                optionA: 'Addition, as the clauses add information about the same subject',
                opcaoB: 'Proporcionalidade, pois o aumento de uma ação implica redução de outra',
                optionB:
                    'Proportionality, as the increase of one action implies the reduction of another',
                opcaoC: 'Concessão, pois a segunda oração contraria a expectativa da primeira',
                optionC:
                    'Concession, as the second clause contradicts the expectation of the first',
                opcaoD: 'Condição, pois falar muito é requisito para agir pouco',
                optionD: 'Condition, as talking a lot is a requirement for acting little',
                opcaoE: 'Causa e consequência, pois falar muito causa agir pouco diretamente',
                optionE: 'Cause and consequence, as talking a lot directly causes acting little',
                respostaCorreta:
                    'Proporcionalidade, pois o aumento de uma ação implica redução de outra',
                correctAnswer:
                    'Proportionality, as the increase of one action implies the reduction of another',
                explicacao:
                    'A oração adverbial proporcional estabelece uma relação em que duas ações variam simultaneamente — uma aumenta enquanto a outra diminui (ou vice-versa). Conjunções proporcionais típicas: "quanto mais... mais", "à medida que", "quem muito... pouco". Não é causal (não há relação de causa-efeito direta) nem concessiva (não há contraste de expectativa).',
                explanation:
                    'The proportional adverbial clause establishes a relationship in which two actions vary simultaneously — one increases while the other decreases (or vice versa). Typical proportional conjunctions: "the more... the more", "as", "whoever much... little". It is not causal (there is no direct cause-effect relationship) nor concessive (there is no contrast of expectation).',
                materia: 'Língua Portuguesa',
            },
            {
                pergunta:
                    'A norma culta da língua portuguesa exige o uso do pronome oblíquo "mim" em qual das alternativas abaixo?',
                question:
                    'The standard norm of the Portuguese language requires the use of the oblique pronoun "mim" (me) in which of the alternatives below?',
                opcaoA: 'Fui eu quem resolveu o problema.',
                optionA: 'It was I who solved the problem.',
                opcaoB: 'Entre eu e você, não há segredos.',
                optionB: 'Between you and I, there are no secrets.',
                opcaoC: 'Para mim resolver isso é fácil.',
                optionC: 'For me to solve this is easy.',
                opcaoD: 'Ele pediu para mim sair mais cedo.',
                optionD: 'He asked for me to leave earlier.',
                opcaoE: 'Deixa eu falar primeiro.',
                optionE: 'Let me speak first.',
                respostaCorreta: 'Entre eu e você, não há segredos.',
                correctAnswer: 'Between you and I, there are no secrets.',
                explicacao:
                    '"Mim" é pronome oblíquo usado após preposição, exceto quando é sujeito de verbo no infinitivo. Em "Entre eu e você" o correto é "Entre mim e você", pois após preposição usa-se oblíquo. Já em "Para mim resolver" e "Ele pediu para mim sair", o pronome é sujeito do infinitivo — o correto seria "Para eu resolver" e "para eu sair". Em "Deixa eu falar", o "eu" é sujeito do infinitivo — correto. Essa distinção é clássica no ENEM.',
                explanation:
                    '"Mim" is an oblique pronoun used after prepositions, except when it is the subject of a verb in the infinitive. In "Between you and I", the correct form is "Between me and you", as after a preposition the oblique form is used. In "For me to solve" and "He asked for me to leave", the pronoun is the subject of the infinitive — the correct form would be "For I to solve" and "for I to leave". In "Let me speak", "me/eu" is the subject of the infinitive — correct.',
                materia: 'Língua Portuguesa',
            },
            // --- MATEMÁTICA (ENEM/Vestibular) ---
            {
                pergunta:
                    'Uma loja oferece um desconto de 20% sobre o preço original de um produto. Em seguida, aplica um acréscimo de 20% sobre o valor com desconto. O preço final em relação ao original é:',
                question:
                    'A store offers a 20% discount on the original price of a product. Then it applies a 20% increase on the discounted value. The final price in relation to the original is:',
                opcaoA: 'Igual ao original, pois desconto e acréscimo se cancelam',
                optionA: 'Equal to the original, as discount and increase cancel each other out',
                opcaoB: '4% menor que o original',
                optionB: '4% less than the original',
                opcaoC: '4% maior que o original',
                optionC: '4% greater than the original',
                opcaoD: '20% menor que o original',
                optionD: '20% less than the original',
                opcaoE: '40% maior que o original',
                optionE: '40% greater than the original',
                respostaCorreta: '4% menor que o original',
                correctAnswer: '4% less than the original',
                explicacao:
                    'Aplicando os fatores multiplicativos: 0,8 × 1,2 = 0,96. O preço final é 96% do original, ou seja, 4% menor. Isso ocorre porque os percentuais são aplicados sobre bases diferentes — erro clássico de considerar que +20% e -20% se anulam.',
                explanation:
                    'Applying the multiplicative factors: 0.8 × 1.2 = 0.96. The final price is 96% of the original, i.e., 4% less. This occurs because the percentages are applied on different bases — a classic mistake of thinking +20% and -20% cancel each other out.',
                materia: 'Matemática',
            },
            {
                pergunta:
                    'Uma urna contém 4 bolas vermelhas, 3 azuis e 2 brancas. Retirando-se uma bola ao acaso, qual a probabilidade de ela NÃO ser azul?',
                question:
                    'An urn contains 4 red balls, 3 blue and 2 white. Drawing one ball at random, what is the probability that it is NOT blue?',
                opcaoA: '1/3',
                optionA: '1/3',
                opcaoB: '2/3',
                optionB: '2/3',
                opcaoC: '3/9',
                optionC: '3/9',
                opcaoD: '6/9',
                optionD: '6/9',
                opcaoE: '4/9',
                optionE: '4/9',
                respostaCorreta: '2/3',
                correctAnswer: '2/3',
                explicacao:
                    'Total de bolas: 4 + 3 + 2 = 9. Bolas não azuis: 4 + 2 = 6. P(não azul) = 6/9 = 2/3. Alternativamente: P(não azul) = 1 - P(azul) = 1 - 3/9 = 1 - 1/3 = 2/3. Notar que 6/9 e 2/3 são equivalentes — ambas corretas, mas 2/3 é a forma simplificada.',
                explanation:
                    'Total balls: 4 + 3 + 2 = 9. Non-blue balls: 4 + 2 = 6. P(not blue) = 6/9 = 2/3. Alternatively: P(not blue) = 1 - P(blue) = 1 - 3/9 = 1 - 1/3 = 2/3. Note that 6/9 and 2/3 are equivalent — both correct, but 2/3 is the simplified form.',
                materia: 'Matemática',
            },
            {
                pergunta:
                    'Um capital de R$ 2.000,00 é aplicado durante 3 anos a uma taxa de juros simples de 5% ao ano. Qual o montante ao final do período?',
                question:
                    'A capital of R$ 2,000.00 is invested for 3 years at a simple interest rate of 5% per year. What is the total amount at the end of the period?',
                opcaoA: 'R$ 2.100,00',
                optionA: 'R$ 2,100.00',
                opcaoB: 'R$ 2.150,00',
                optionB: 'R$ 2,150.00',
                opcaoC: 'R$ 2.300,00',
                optionC: 'R$ 2,300.00',
                opcaoD: 'R$ 2.315,25',
                optionD: 'R$ 2,315.25',
                opcaoE: 'R$ 3.000,00',
                optionE: 'R$ 3,000.00',
                respostaCorreta: 'R$ 2.300,00',
                correctAnswer: 'R$ 2,300.00',
                explicacao:
                    'Juros simples: J = C × i × t = 2000 × 0,05 × 3 = R$ 300,00. Montante: M = C + J = 2000 + 300 = R$ 2.300,00. O valor R$ 2.315,25 seria o resultado com juros compostos (M = 2000 × 1,05³ ≈ 2315,25) — distrator clássico para confundir os dois regimes.',
                explanation:
                    'Simple interest: I = P × r × t = 2000 × 0.05 × 3 = R$ 300.00. Total: M = P + I = 2000 + 300 = R$ 2,300.00. The value R$ 2,315.25 would be the result with compound interest (M = 2000 × 1.05³ ≈ 2315.25) — a classic distractor to confuse the two regimes.',
                materia: 'Matemática',
            },
            {
                pergunta:
                    'A função f(x) = x² - 4x + 3 possui raízes reais. Os valores de x para os quais f(x) = 0 são:',
                question:
                    'The function f(x) = x² - 4x + 3 has real roots. The values of x for which f(x) = 0 are:',
                opcaoA: 'x = 1 e x = 3',
                optionA: 'x = 1 and x = 3',
                opcaoB: 'x = -1 e x = -3',
                optionB: 'x = -1 and x = -3',
                opcaoC: 'x = 2 e x = 2',
                optionC: 'x = 2 and x = 2',
                opcaoD: 'x = 0 e x = 4',
                optionD: 'x = 0 and x = 4',
                opcaoE: 'Não possui raízes reais',
                optionE: 'Has no real roots',
                respostaCorreta: 'x = 1 e x = 3',
                correctAnswer: 'x = 1 and x = 3',
                explicacao:
                    'Pela fórmula de Bhaskara: Δ = (-4)² - 4(1)(3) = 16 - 12 = 4. √Δ = 2. x = (4 ± 2)/2 → x₁ = 3 e x₂ = 1. Verificação: f(1) = 1 - 4 + 3 = 0 ✓ e f(3) = 9 - 12 + 3 = 0 ✓. O vértice da parábola está em x = 2, com f(2) = -1 (ponto mínimo).',
                explanation:
                    "By Bhaskara's formula: Δ = (-4)² - 4(1)(3) = 16 - 12 = 4. √Δ = 2. x = (4 ± 2)/2 → x₁ = 3 and x₂ = 1. Verification: f(1) = 1 - 4 + 3 = 0 ✓ and f(3) = 9 - 12 + 3 = 0 ✓. The vertex of the parabola is at x = 2, with f(2) = -1 (minimum point).",
                materia: 'Matemática',
            },
            {
                pergunta:
                    'Em uma sala com 30 alunos, a média das notas foi 7,0. Após a inclusão de um novo aluno, a média caiu para 6,9. Qual foi a nota do novo aluno?',
                question:
                    "In a class of 30 students, the average grade was 7.0. After adding a new student, the average dropped to 6.9. What was the new student's grade?",
                opcaoA: '3,9',
                optionA: '3.9',
                opcaoB: '4,0',
                optionB: '4.0',
                opcaoC: '5,0',
                optionC: '5.0',
                opcaoD: '6,0',
                optionD: '6.0',
                opcaoE: '6,5',
                optionE: '6.5',
                respostaCorreta: '3,9',
                correctAnswer: '3.9',
                explicacao:
                    'Soma original: 30 × 7,0 = 210. Nova soma com 31 alunos: 31 × 6,9 = 213,9. Nota do novo aluno: 213,9 - 210 = 3,9. Esse tipo de questão exige cuidado: a média caiu, então a nota nova é menor que a média anterior — e significativamente menor, pois um único valor afastado puxa a média.',
                explanation:
                    "Original sum: 30 × 7.0 = 210. New sum with 31 students: 31 × 6.9 = 213.9. New student's grade: 213.9 - 210 = 3.9. This type of question requires care: the average dropped, so the new grade is lower than the previous average — and significantly lower, since a single outlier pulls the average.",
                materia: 'Matemática',
            },
            {
                pergunta:
                    'Um triângulo retângulo tem catetos medindo 6 cm e 8 cm. Qual a medida da hipotenusa e a área do triângulo, respectivamente?',
                question:
                    'A right triangle has legs measuring 6 cm and 8 cm. What are the hypotenuse and the area of the triangle, respectively?',
                opcaoA: '10 cm e 24 cm²',
                optionA: '10 cm and 24 cm²',
                opcaoB: '14 cm e 48 cm²',
                optionB: '14 cm and 48 cm²',
                opcaoC: '10 cm e 48 cm²',
                optionC: '10 cm and 48 cm²',
                opcaoD: '100 cm e 24 cm²',
                optionD: '100 cm and 24 cm²',
                opcaoE: '10 cm e 20 cm²',
                optionE: '10 cm and 20 cm²',
                respostaCorreta: '10 cm e 24 cm²',
                correctAnswer: '10 cm and 24 cm²',
                explicacao:
                    'Pelo teorema de Pitágoras: h² = 6² + 8² = 36 + 64 = 100 → h = 10 cm. Esse é o famoso triângulo 3-4-5 (multiplicado por 2): 6-8-10. Área do triângulo: A = (base × altura)/2 = (6 × 8)/2 = 24 cm². O distrator 48 cm² é o resultado sem dividir por 2 — erro comum.',
                explanation:
                    'By the Pythagorean theorem: h² = 6² + 8² = 36 + 64 = 100 → h = 10 cm. This is the famous 3-4-5 triangle (multiplied by 2): 6-8-10. Triangle area: A = (base × height)/2 = (6 × 8)/2 = 24 cm². The distractor 48 cm² is the result without dividing by 2 — a common mistake.',
                materia: 'Matemática',
            },
            {
                pergunta:
                    'Uma torneira enche um tanque em 4 horas. Outra enche o mesmo tanque em 6 horas. Trabalhando juntas, em quanto tempo encherão o tanque?',
                question:
                    'One faucet fills a tank in 4 hours. Another fills the same tank in 6 hours. Working together, how long will it take to fill the tank?',
                opcaoA: '10 horas',
                optionA: '10 hours',
                opcaoB: '5 horas',
                optionB: '5 hours',
                opcaoC: '2 horas e 24 minutos',
                optionC: '2 hours and 24 minutes',
                opcaoD: '3 horas',
                optionD: '3 hours',
                opcaoE: '2 horas',
                optionE: '2 hours',
                respostaCorreta: '2 horas e 24 minutos',
                correctAnswer: '2 hours and 24 minutes',
                explicacao:
                    'Capacidade conjunta por hora: 1/4 + 1/6 = 3/12 + 2/12 = 5/12 do tanque por hora. Tempo total: t = 1 ÷ (5/12) = 12/5 = 2,4 horas = 2 horas e 24 minutos. Erro comum é somar os tempos (4 + 6 = 10h) ou calcular a média (5h) — ambos ignoram que as taxas, não os tempos, se somam.',
                explanation:
                    'Combined capacity per hour: 1/4 + 1/6 = 3/12 + 2/12 = 5/12 of the tank per hour. Total time: t = 1 ÷ (5/12) = 12/5 = 2.4 hours = 2 hours and 24 minutes. A common mistake is to add the times (4 + 6 = 10h) or calculate the average (5h) — both ignore that rates, not times, are added.',
                materia: 'Matemática',
            },
            {
                pergunta:
                    'Uma progressão aritmética tem primeiro termo a₁ = 3 e razão r = 5. Qual o valor do 10º termo?',
                question:
                    'An arithmetic progression has first term a₁ = 3 and common difference r = 5. What is the value of the 10th term?',
                opcaoA: '45',
                optionA: '45',
                opcaoB: '48',
                optionB: '48',
                opcaoC: '50',
                optionC: '50',
                opcaoD: '53',
                optionD: '53',
                opcaoE: '55',
                optionE: '55',
                respostaCorreta: '48',
                correctAnswer: '48',
                explicacao:
                    'Fórmula do termo geral de uma PA: aₙ = a₁ + (n-1) × r. Para o 10º termo: a₁₀ = 3 + (10-1) × 5 = 3 + 9 × 5 = 3 + 45 = 48. Distrator comum: usar n em vez de (n-1), resultando em 3 + 10 × 5 = 53. A sequência é: 3, 8, 13, 18, 23, 28, 33, 38, 43, 48.',
                explanation:
                    'Formula for the general term of an AP: aₙ = a₁ + (n-1) × r. For the 10th term: a₁₀ = 3 + (10-1) × 5 = 3 + 9 × 5 = 3 + 45 = 48. Common distractor: using n instead of (n-1), resulting in 3 + 10 × 5 = 53. The sequence is: 3, 8, 13, 18, 23, 28, 33, 38, 43, 48.',
                materia: 'Matemática',
            },

            // --- ARTES (ENEM/Vestibular) ---
            {
                pergunta:
                    'Tarsila do Amaral pintou "Abaporu" em 1928 e a obra tornou-se símbolo do Movimento Antropofágico brasileiro. O termo "antropofagia", no contexto do Modernismo, significa:',
                question:
                    'Tarsila do Amaral painted "Abaporu" in 1928 and the work became a symbol of the Brazilian Anthropophagic Movement. The term "anthropophagy", in the context of Modernism, means:',
                opcaoA: 'A recusa total de qualquer influência estrangeira na arte brasileira',
                optionA: 'The total rejection of any foreign influence in Brazilian art',
                opcaoB: 'A cópia fiel das vanguardas europeias para modernizar a arte nacional',
                optionB: 'The faithful copying of European avant-gardes to modernize national art',
                opcaoC: 'A assimilação crítica de influências externas, transformando-as em algo genuinamente brasileiro',
                optionC:
                    'The critical assimilation of external influences, transforming them into something genuinely Brazilian',
                opcaoD: 'O retorno às tradições indígenas pré-coloniais como única fonte artística válida',
                optionD:
                    'The return to pre-colonial indigenous traditions as the only valid artistic source',
                opcaoE: 'A valorização exclusiva da arte sacra e religiosa no Brasil',
                optionE: 'The exclusive valorization of sacred and religious art in Brazil',
                respostaCorreta:
                    'A assimilação crítica de influências externas, transformando-as em algo genuinamente brasileiro',
                correctAnswer:
                    'The critical assimilation of external influences, transforming them into something genuinely Brazilian',
                explicacao:
                    'Oswald de Andrade, no Manifesto Antropófago (1928), propôs que o Brasil "devorasse" as influências europeias como o canibal devora o inimigo — não para copiá-las, mas para absorver sua força e criar algo novo. Tarsila capturou essa ideia em Abaporu: figura humana desproporcional, sol e cacto tropicais, fusão do primitivo com o moderno.',
                explanation:
                    "Oswald de Andrade, in the Anthropophagic Manifesto (1928), proposed that Brazil should 'devour' European influences like a cannibal devours an enemy — not to copy them, but to absorb their strength and create something new. Tarsila captured this idea in Abaporu: disproportionate human figure, tropical sun and cactus, fusion of the primitive with the modern.",
                materia: 'Artes',
            },
            {
                pergunta:
                    'O Impressionismo rompeu com a tradição pictórica europeia do século XIX principalmente porque:',
                question:
                    'Impressionism broke with the 19th century European pictorial tradition mainly because:',
                opcaoA: 'Abandonou completamente a representação do mundo real, optando pela abstração total',
                optionA:
                    'It completely abandoned the representation of the real world, opting for total abstraction',
                opcaoB: 'Priorizou a captação da luz e da atmosfera no instante da percepção, em vez da representação detalhada e idealizada',
                optionB:
                    'It prioritized capturing light and atmosphere at the moment of perception, rather than detailed and idealized representation',
                opcaoC: 'Substituiu a pintura a óleo pela aquarela como técnica exclusiva do movimento',
                optionC:
                    'It replaced oil painting with watercolor as the exclusive technique of the movement',
                opcaoD: 'Focou em cenas religiosas e mitológicas, recusando temas do cotidiano',
                optionD:
                    'It focused on religious and mythological scenes, refusing everyday themes',
                opcaoE: 'Exigiu que os artistas pintassem exclusivamente em ateliês fechados com luz artificial',
                optionE:
                    'It required artists to paint exclusively in closed studios with artificial light',
                respostaCorreta:
                    'Priorizou a captação da luz e da atmosfera no instante da percepção, em vez da representação detalhada e idealizada',
                correctAnswer:
                    'It prioritized capturing light and atmosphere at the moment of perception, rather than detailed and idealized representation',
                explicacao:
                    'Monet, Renoir e Degas pintavam en plein air (ao ar livre) buscando registrar a impressão visual fugaz de um momento — a luz mudando sobre a água, a névoa matinal, o movimento. Isso contrariava a Academia, que valorizava contornos precisos, composição clássica e temas nobres. O nome "Impressionismo" veio ironicamente de um crítico que ridicularizou "Impression, Soleil Levant" de Monet.',
                explanation:
                    'Monet, Renoir and Degas painted en plein air (outdoors) seeking to capture the fleeting visual impression of a moment — light changing on water, morning mist, movement. This contradicted the Academy, which valued precise outlines, classical composition and noble themes. The name "Impressionism" came ironically from a critic who ridiculed Monet\'s "Impression, Sunrise".',
                materia: 'Artes',
            },
            {
                pergunta:
                    'A obra "Guernica" (1937), de Pablo Picasso, é considerada um dos mais poderosos exemplos de arte política do século XX. O elemento formal que reforça a mensagem de horror e caos da obra é:',
                question:
                    'The work "Guernica" (1937) by Pablo Picasso is considered one of the most powerful examples of political art of the 20th century. The formal element that reinforces the message of horror and chaos in the work is:',
                opcaoA: 'O uso de cores vivas e saturadas para transmitir a violência do bombardeio',
                optionA:
                    'The use of vivid and saturated colors to convey the violence of the bombing',
                opcaoB: 'A paleta monocromática em preto, branco e cinza aliada à fragmentação cubista das formas',
                optionB:
                    'The monochromatic palette in black, white and gray combined with the cubist fragmentation of forms',
                opcaoC: 'A representação realista e detalhada dos corpos para provocar empatia imediata',
                optionC:
                    'The realistic and detailed representation of bodies to provoke immediate empathy',
                opcaoD: 'O formato circular da tela, simbolizando o ciclo sem fim da guerra',
                optionD: 'The circular format of the canvas, symbolizing the endless cycle of war',
                opcaoE: 'A ausência de figuras humanas, representando o vazio deixado pela destruição',
                optionE: 'The absence of human figures, representing the void left by destruction',
                respostaCorreta:
                    'A paleta monocromática em preto, branco e cinza aliada à fragmentação cubista das formas',
                correctAnswer:
                    'The monochromatic palette in black, white and gray combined with the cubist fragmentation of forms',
                explicacao:
                    'Picasso escolheu deliberadamente a ausência de cor — remetendo a fotografias jornalísticas e ao luto — e a fragmentação cubista dos corpos para expressar a violência do bombardeio nazista à cidade basca de Guernica. Corpos retorcidos, gritos silenciados, olhos deslocados: a linguagem formal é inseparável do conteúdo político.',
                explanation:
                    'Picasso deliberately chose the absence of color — evoking journalistic photographs and mourning — and the cubist fragmentation of bodies to express the violence of the Nazi bombing of the Basque city of Guernica. Twisted bodies, silenced screams, displaced eyes: the formal language is inseparable from the political content.',
                materia: 'Artes',
            },
            {
                pergunta:
                    'O Barroco brasileiro, presente em igrejas como a de São Francisco de Assis em Ouro Preto, tem como principal representante o artista Aleijadinho. Uma característica que distingue o Barroco brasileiro do europeu é:',
                question:
                    'Brazilian Baroque, present in churches like São Francisco de Assis in Ouro Preto, has the artist Aleijadinho as its main representative. A characteristic that distinguishes Brazilian Baroque from European Baroque is:',
                opcaoA: 'A ausência total de ornamentação e o apelo à simplicidade das formas',
                optionA: 'The total absence of ornamentation and the appeal to simplicity of forms',
                opcaoB: 'A incorporação de elementos da cultura local, como o uso da pedra-sabão e iconografia tropical',
                optionB:
                    'The incorporation of local cultural elements, such as the use of soapstone and tropical iconography',
                opcaoC: 'A influência direta do Renascimento italiano sem nenhuma adaptação regional',
                optionC:
                    'The direct influence of Italian Renaissance without any regional adaptation',
                opcaoD: 'O predomínio da escultura em mármore importado da Europa',
                optionD: 'The predominance of sculpture in marble imported from Europe',
                opcaoE: 'A rejeição do tema religioso em favor de cenas históricas e mitológicas',
                optionE:
                    'The rejection of religious themes in favor of historical and mythological scenes',
                respostaCorreta:
                    'A incorporação de elementos da cultura local, como o uso da pedra-sabão e iconografia tropical',
                correctAnswer:
                    'The incorporation of local cultural elements, such as the use of soapstone and tropical iconography',
                explicacao:
                    'O Barroco chegou ao Brasil via Portugal, mas foi reinterpretado com materiais e símbolos locais. Aleijadinho usou a pedra-sabão (lioz brasileiro) e incorporou elementos da flora e fauna tropicais nos ornamentos. Rostos dos profetas e anjos têm traços mestiços. Essa síntese entre o europeu e o brasileiro é marca do Barroco colonial mineiro.',
                explanation:
                    'The Baroque arrived in Brazil via Portugal, but was reinterpreted with local materials and symbols. Aleijadinho used soapstone (Brazilian lioz) and incorporated elements of tropical flora and fauna in the ornaments. The faces of prophets and angels have mixed-race features. This synthesis between European and Brazilian is a hallmark of Baroque colonial art from Minas Gerais.',
                materia: 'Artes',
            },
            {
                pergunta:
                    'Andy Warhol, ao reproduzir em série imagens de latas de sopa Campbell e retratos de Marilyn Monroe, questionava:',
                question:
                    'Andy Warhol, by reproducing in series images of Campbell soup cans and portraits of Marilyn Monroe, was questioning:',
                opcaoA: 'A superioridade técnica da pintura a óleo sobre a serigrafia industrial',
                optionA:
                    'The technical superiority of oil painting over industrial screen printing',
                opcaoB: 'Os limites entre arte erudita e cultura de massa, e a transformação de produtos em ícones pela mídia',
                optionB:
                    'The boundaries between erudite art and mass culture, and the transformation of products into icons by the media',
                opcaoC: 'A necessidade de retorno às técnicas artesanais medievais diante da industrialização',
                optionC:
                    'The need to return to medieval craft techniques in the face of industrialization',
                opcaoD: 'A superioridade da arte europeia sobre a americana no contexto da Guerra Fria',
                optionD:
                    'The superiority of European art over American art in the context of the Cold War',
                opcaoE: 'O papel da religião na sociedade capitalista americana dos anos 1960',
                optionE: 'The role of religion in American capitalist society of the 1960s',
                respostaCorreta:
                    'Os limites entre arte erudita e cultura de massa, e a transformação de produtos em ícones pela mídia',
                correctAnswer:
                    'The boundaries between erudite art and mass culture, and the transformation of products into icons by the media',
                explicacao:
                    'A Pop Art de Warhol é uma crítica e celebração simultânea do capitalismo de consumo. Ao elevar embalagens industriais e celebridades midiáticas ao status de obra de arte, Warhol apagava a fronteira entre o "alto" e o "baixo" culturais, antecipando debates contemporâneos sobre originalidade, reprodutibilidade e o papel da mídia na construção de valor simbólico.',
                explanation:
                    "Warhol's Pop Art is simultaneously a critique and celebration of consumer capitalism. By elevating industrial packaging and media celebrities to the status of artwork, Warhol erased the boundary between cultural 'high' and 'low', anticipating contemporary debates about originality, reproducibility and the role of media in constructing symbolic value.",
                materia: 'Artes',
            },
            {
                pergunta:
                    'A Semana de Arte Moderna de 1922 foi realizada no Teatro Municipal de São Paulo e provocou escândalo no público da época. Qual das afirmações abaixo descreve corretamente seu impacto histórico?',
                question:
                    'The Modern Art Week of 1922 was held at the Municipal Theater of São Paulo and caused a scandal among the public at the time. Which of the statements below correctly describes its historical impact?',
                opcaoA: 'Consolidou o Academicismo como estilo oficial da arte brasileira por mais 50 anos',
                optionA:
                    'It consolidated Academicism as the official style of Brazilian art for another 50 years',
                opcaoB: 'Inaugurou o Modernismo no Brasil, propondo ruptura com o Academicismo e busca por uma identidade cultural brasileira',
                optionB:
                    'It inaugurated Modernism in Brazil, proposing a break with Academicism and the search for a Brazilian cultural identity',
                opcaoC: 'Foi um evento exclusivamente musical, sem participação de artes visuais ou literatura',
                optionC:
                    'It was an exclusively musical event, without participation of visual arts or literature',
                opcaoD: 'Reproduziu fielmente as vanguardas europeias sem propor nenhuma releitura nacional',
                optionD:
                    'It faithfully reproduced European avant-gardes without proposing any national reinterpretation',
                opcaoE: 'Foi organizado pelo governo imperial como celebração do centenário da Independência',
                optionE:
                    'It was organized by the imperial government as a celebration of the centenary of Independence',
                respostaCorreta:
                    'Inaugurou o Modernismo no Brasil, propondo ruptura com o Academicismo e busca por uma identidade cultural brasileira',
                correctAnswer:
                    'It inaugurated Modernism in Brazil, proposing a break with Academicism and the search for a Brazilian cultural identity',
                explicacao:
                    'A Semana de 22 reuniu artistas como Tarsila do Amaral, Anita Malfatti, Oswald de Andrade e Mário de Andrade. Propôs liberdade de criação frente às normas acadêmicas europeias e a construção de uma arte autenticamente brasileira. Coincidiu com o centenário da Independência política, mas foi organizada pela elite intelectual paulistana, não pelo governo.',
                explanation:
                    'The Week of 22 brought together artists such as Tarsila do Amaral, Anita Malfatti, Oswald de Andrade and Mário de Andrade. It proposed freedom of creation against European academic norms and the construction of an authentically Brazilian art. It coincided with the centenary of political Independence, but was organized by the São Paulo intellectual elite, not by the government.',
                materia: 'Artes',
            },
            {
                pergunta:
                    'O grafite urbano, praticado por artistas como Banksy e os brasileiros Os Gêmeos, é frequentemente debatido entre arte e vandalismo. Do ponto de vista da história da arte, o grafite se insere na tradição de:',
                question:
                    'Urban graffiti, practiced by artists like Banksy and Brazilians Os Gêmeos, is frequently debated between art and vandalism. From the perspective of art history, graffiti fits into the tradition of:',
                opcaoA: 'Arte sacra, por ocupar espaços públicos de caráter comunitário e coletivo',
                optionA:
                    'Sacred art, for occupying public spaces of community and collective character',
                opcaoB: 'Arte conceitual e de intervenção urbana, questionando quem define o que é arte e onde ela pode existir',
                optionB:
                    'Conceptual and urban intervention art, questioning who defines what art is and where it can exist',
                opcaoC: 'Academicismo, por seguir regras formais rígidas de composição e perspectiva',
                optionC:
                    'Academicism, for following rigid formal rules of composition and perspective',
                opcaoD: 'Arte abstrata, por não representar figuras reconhecíveis em nenhuma de suas manifestações',
                optionD:
                    'Abstract art, for not representing recognizable figures in any of its manifestations',
                opcaoE: 'Renascimento, por valorizar a técnica apurada e o estudo anatômico do corpo humano',
                optionE:
                    'Renaissance, for valuing refined technique and anatomical study of the human body',
                respostaCorreta:
                    'Arte conceitual e de intervenção urbana, questionando quem define o que é arte e onde ela pode existir',
                correctAnswer:
                    'Conceptual and urban intervention art, questioning who defines what art is and where it can exist',
                explicacao:
                    'O grafite herda da Arte Conceitual (anos 1960-70) a ideia de que o conceito e o contexto são tão importantes quanto a técnica. Ao ocupar muros, viadutos e espaços não autorizados, o grafite questiona a institucionalização da arte em museus e galerias, democratiza o acesso à produção cultural e usa a cidade como suporte — o que o aproxima também da Arte Urbana e da performance.',
                explanation:
                    'Graffiti inherits from Conceptual Art (1960s-70s) the idea that concept and context are as important as technique. By occupying walls, viaducts and unauthorized spaces, graffiti questions the institutionalization of art in museums and galleries, democratizes access to cultural production and uses the city as a medium — which also connects it to Urban Art and performance.',
                materia: 'Artes',
            },
            {
                pergunta:
                    'O Expressionismo, movimento do início do século XX com obras como "O Grito" de Edvard Munch, se diferencia do Impressionismo principalmente porque:',
                question:
                    'Expressionism, a movement from the early 20th century with works like "The Scream" by Edvard Munch, differs from Impressionism mainly because:',
                opcaoA: 'Busca representar a realidade exterior com máxima fidelidade fotográfica',
                optionA:
                    'It seeks to represent external reality with maximum photographic fidelity',
                opcaoB: 'Prioriza a expressão de estados emocionais e psicológicos internos, distorcendo a realidade para isso',
                optionB:
                    'It prioritizes the expression of internal emotional and psychological states, distorting reality for this purpose',
                opcaoC: 'Rejeita o uso de cores intensas, preferindo paletas neutras e sóbrias',
                optionC:
                    'It rejects the use of intense colors, preferring neutral and sober palettes',
                opcaoD: 'Foca exclusivamente em paisagens naturais e cenas ao ar livre',
                optionD: 'It focuses exclusively on natural landscapes and outdoor scenes',
                opcaoE: 'É um movimento exclusivamente escultórico, sem expressão na pintura',
                optionE: 'It is an exclusively sculptural movement, with no expression in painting',
                respostaCorreta:
                    'Prioriza a expressão de estados emocionais e psicológicos internos, distorcendo a realidade para isso',
                correctAnswer:
                    'It prioritizes the expression of internal emotional and psychological states, distorting reality for this purpose',
                explicacao:
                    'Enquanto o Impressionismo captava a percepção visual da luz e do instante, o Expressionismo voltou-se para o interior — angústia, medo, alienação urbana. Munch distorceu a paisagem de "O Grito" para exteriorizar a experiência subjetiva do terror. Cores intensas, formas deformadas e pinceladas agitadas são recursos formais que traduzem estados psicológicos, não a realidade visível.',
                explanation:
                    'While Impressionism captured the visual perception of light and the instant, Expressionism turned inward — anguish, fear, urban alienation. Munch distorted the landscape of "The Scream" to externalize the subjective experience of terror. Intense colors, deformed shapes and agitated brushstrokes are formal resources that translate psychological states, not visible reality.',
                materia: 'Artes',
            },

            // --- GEOGRAFIA ---
            {
                pergunta: 'Qual o maior oceano do planeta?',
                question: 'What is the largest ocean on the planet?',
                opcaoA: 'Atlântico',
                optionA: 'Atlantic',
                opcaoB: 'Índico',
                optionB: 'Indian',
                opcaoC: 'Ártico',
                optionC: 'Arctic',
                opcaoD: 'Pacífico',
                optionD: 'Pacific',
                opcaoE: 'Antártico',
                optionE: 'Antarctic',
                respostaCorreta: 'Pacífico',
                correctAnswer: 'Pacific',
                explicacao: 'O Pacífico cobre um terço da superfície da Terra.',
                explanation: "The Pacific covers one-third of the Earth's surface.",
                materia: 'Geografia',
            },
            {
                pergunta: 'Qual a maior floresta tropical do mundo?',
                question: 'What is the largest tropical rainforest in the world?',
                opcaoA: 'Congo',
                optionA: 'Congo',
                opcaoB: 'Taiga',
                optionB: 'Taiga',
                opcaoC: 'Amazônia',
                optionC: 'Amazon',
                opcaoD: 'Mata Atlântica',
                optionD: 'Atlantic Forest',
                opcaoE: 'Savana',
                optionE: 'Savannah',
                respostaCorreta: 'Amazônia',
                correctAnswer: 'Amazon',
                explicacao: 'A Amazônia abrange nove países da América do Sul.',
                explanation: 'The Amazon spans nine South American countries.',
                materia: 'Geografia',
            },
            {
                pergunta: 'Qual o país mais populoso do mundo?',
                question: 'What is the most populous country in the world?',
                opcaoA: 'EUA',
                optionA: 'USA',
                opcaoB: 'Índia',
                optionB: 'India',
                opcaoC: 'China',
                optionC: 'China',
                opcaoD: 'Brasil',
                optionD: 'Brazil',
                opcaoE: 'Rússia',
                optionE: 'Russia',
                respostaCorreta: 'Índia',
                correctAnswer: 'India',
                explicacao: 'A Índia ultrapassou a China recentemente.',
                explanation: 'India recently surpassed China.',
                materia: 'Geografia',
            },
            {
                pergunta: 'Qual linha imaginária divide a Terra em Norte e Sul?',
                question: 'Which imaginary line divides the Earth into North and South?',
                opcaoA: 'Meridiano de Greenwich',
                optionA: 'Greenwich Meridian',
                opcaoB: 'Trópico de Câncer',
                optionB: 'Tropic of Cancer',
                opcaoC: 'Equador',
                optionC: 'Equator',
                opcaoD: 'Círculo Polar',
                optionD: 'Polar Circle',
                opcaoE: 'Trópico de Capricórnio',
                optionE: 'Tropic of Capricorn',
                respostaCorreta: 'Equador',
                correctAnswer: 'Equator',
                explicacao: 'O Equador é o marco zero da latitude.',
                explanation: 'The Equator is the zero point of latitude.',
                materia: 'Geografia',
            },
            {
                pergunta: 'Onde se localiza o Deserto do Saara?',
                question: 'Where is the Sahara Desert located?',
                opcaoA: 'Ásia',
                optionA: 'Asia',
                opcaoB: 'América do Sul',
                optionB: 'South America',
                opcaoC: 'África',
                optionC: 'Africa',
                opcaoD: 'Austrália',
                optionD: 'Australia',
                opcaoE: 'Europa',
                optionE: 'Europe',
                respostaCorreta: 'África',
                correctAnswer: 'Africa',
                explicacao: 'Fica no norte do continente africano.',
                explanation: 'It is in the north of the African continent.',
                materia: 'Geografia',
            },
            {
                pergunta: 'Qual o maior país em extensão territorial?',
                question: 'What is the largest country by land area?',
                opcaoA: 'Canadá',
                optionA: 'Canada',
                opcaoB: 'China',
                optionB: 'China',
                opcaoC: 'Rússia',
                optionC: 'Russia',
                opcaoD: 'EUA',
                optionD: 'USA',
                opcaoE: 'Austrália',
                optionE: 'Australia',
                respostaCorreta: 'Rússia',
                correctAnswer: 'Russia',
                explicacao: 'A Rússia ocupa vasta área na Europa e Ásia.',
                explanation: 'Russia occupies a vast area in Europe and Asia.',
                materia: 'Geografia',
            },
            {
                pergunta: 'O que é o PIB?',
                question: 'What is GDP?',
                opcaoA: 'População Interna Bruta',
                optionA: 'Gross Internal Population',
                opcaoB: 'Produto Interno Bruto',
                optionB: 'Gross Domestic Product',
                opcaoC: 'Preço Industrial Baixo',
                optionC: 'Low Industrial Price',
                opcaoD: 'Plano de Investimento Brasil',
                optionD: 'Brazil Investment Plan',
                opcaoE: 'Ponto de Interesse Bancário',
                optionE: 'Banking Interest Point',
                respostaCorreta: 'Produto Interno Bruto',
                correctAnswer: 'Gross Domestic Product',
                explicacao: 'Soma de todos os bens e serviços produzidos.',
                explanation: 'Sum of all goods and services produced.',
                materia: 'Geografia',
            },
            {
                pergunta: 'Qual o monte mais alto do mundo?',
                question: 'What is the highest mountain in the world?',
                opcaoA: 'K2',
                optionA: 'K2',
                opcaoB: 'Kilimanjaro',
                optionB: 'Kilimanjaro',
                opcaoC: 'Everest',
                optionC: 'Everest',
                opcaoD: 'Aconcágua',
                optionD: 'Aconcagua',
                opcaoE: 'Monte Branco',
                optionE: 'Mont Blanc',
                respostaCorreta: 'Everest',
                correctAnswer: 'Everest',
                explicacao: 'Localizado no Himalaia, com 8.848m.',
                explanation: 'Located in the Himalayas, at 8,848m.',
                materia: 'Geografia',
            },
            {
                pergunta: 'Qual o menor país do mundo?',
                question: 'What is the smallest country in the world?',
                opcaoA: 'Mônaco',
                optionA: 'Monaco',
                opcaoB: 'Vaticano',
                optionB: 'Vatican',
                opcaoC: 'Malta',
                optionC: 'Malta',
                opcaoD: 'San Marino',
                optionD: 'San Marino',
                opcaoE: 'Nauru',
                optionE: 'Nauru',
                respostaCorreta: 'Vaticano',
                correctAnswer: 'Vatican',
                explicacao: 'O Vaticano é um enclave dentro de Roma.',
                explanation: 'The Vatican is an enclave within Rome.',
                materia: 'Geografia',
            },
            {
                pergunta: 'O que é o efeito "El Niño"?',
                question: 'What is the "El Niño" effect?',
                opcaoA: 'Resfriamento das águas do Pacífico',
                optionA: 'Cooling of Pacific waters',
                opcaoB: 'Aquecimento das águas do Pacífico',
                optionB: 'Warming of Pacific waters',
                opcaoC: 'Tornado no Atlântico',
                optionC: 'Tornado in the Atlantic',
                opcaoD: 'Derretimento das calotas polares',
                optionD: 'Polar ice cap melting',
                opcaoE: 'Seca no Saara',
                optionE: 'Drought in the Sahara',
                respostaCorreta: 'Aquecimento das águas do Pacífico',
                correctAnswer: 'Warming of Pacific waters',
                explicacao: 'Altera o clima global periodicamente.',
                explanation: 'It periodically changes the global climate.',
                materia: 'Geografia',
            },

            // --- HISTÓRIA ---
            {
                pergunta: 'Em que ano começou a Segunda Guerra Mundial?',
                question: 'In what year did World War II begin?',
                opcaoA: '1914',
                optionA: '1914',
                opcaoB: '1939',
                optionB: '1939',
                opcaoC: '1945',
                optionC: '1945',
                opcaoD: '1918',
                optionD: '1918',
                opcaoE: '1929',
                optionE: '1929',
                respostaCorreta: '1939',
                correctAnswer: '1939',
                explicacao: 'A guerra começou com a invasão da Polônia em 1939.',
                explanation: 'The war began with the invasion of Poland in 1939.',
                materia: 'História',
            },
            {
                pergunta: 'Quem foi o primeiro presidente do Brasil?',
                question: 'Who was the first president of Brazil?',
                opcaoA: 'Getúlio Vargas',
                optionA: 'Getúlio Vargas',
                opcaoB: 'Deodoro da Fonseca',
                optionB: 'Deodoro da Fonseca',
                opcaoC: 'Dom Pedro II',
                optionC: 'Dom Pedro II',
                opcaoD: 'Juscelino Kubitschek',
                optionD: 'Juscelino Kubitschek',
                opcaoE: 'Tancredo Neves',
                optionE: 'Tancredo Neves',
                respostaCorreta: 'Deodoro da Fonseca',
                correctAnswer: 'Deodoro da Fonseca',
                explicacao: 'Proclamou a República em 1889.',
                explanation: 'Proclaimed the Republic in 1889.',
                materia: 'História',
            },
            {
                pergunta: 'Em que ano ocorreu a Revolução Francesa?',
                question: 'In what year did the French Revolution occur?',
                opcaoA: '1500',
                optionA: '1500',
                opcaoB: '1789',
                optionB: '1789',
                opcaoC: '1822',
                optionC: '1822',
                opcaoD: '1914',
                optionD: '1914',
                opcaoE: '1492',
                optionE: '1492',
                respostaCorreta: '1789',
                correctAnswer: '1789',
                explicacao: 'Marco inicial da Idade Contemporânea.',
                explanation: 'Starting point of the Contemporary Age.',
                materia: 'História',
            },
            {
                pergunta: 'Qual era o nome da política de segregação racial na África do Sul?',
                question: 'What was the name of the racial segregation policy in South Africa?',
                opcaoA: 'Nazismo',
                optionA: 'Nazism',
                opcaoB: 'Holocausto',
                optionB: 'Holocaust',
                opcaoC: 'Apartheid',
                optionC: 'Apartheid',
                opcaoD: 'Fascismo',
                optionD: 'Fascism',
                opcaoE: 'Gulag',
                optionE: 'Gulag',
                respostaCorreta: 'Apartheid',
                correctAnswer: 'Apartheid',
                explicacao: 'Derrubado nos anos 90 com ajuda de Nelson Mandela.',
                explanation: "Overthrown in the 90s with Nelson Mandela's help.",
                materia: 'História',
            },
            {
                pergunta: 'Quem descobriu a América em 1492?',
                question: 'Who discovered America in 1492?',
                opcaoA: 'Pedro Álvares Cabral',
                optionA: 'Pedro Álvares Cabral',
                opcaoB: 'Vasco da Gama',
                optionB: 'Vasco da Gama',
                opcaoC: 'Cristóvão Colombo',
                optionC: 'Christopher Columbus',
                opcaoD: 'Américo Vespúcio',
                optionD: 'Amerigo Vespucci',
                opcaoE: 'Marco Polo',
                optionE: 'Marco Polo',
                respostaCorreta: 'Cristóvão Colombo',
                correctAnswer: 'Christopher Columbus',
                explicacao: 'Chegou às Antilhas financiando pela Espanha.',
                explanation: 'Reached the Antilles funded by Spain.',
                materia: 'História',
            },
            {
                pergunta: 'O que foi a Queda do Muro de Berlim?',
                question: 'What was the Fall of the Berlin Wall?',
                opcaoA: 'Início da 1ª Guerra',
                optionA: 'Beginning of WWI',
                opcaoB: 'Fim da União Soviética',
                optionB: 'End of the Soviet Union',
                opcaoC: 'Símbolo do fim da Guerra Fria (1989)',
                optionC: 'Symbol of the end of the Cold War (1989)',
                opcaoD: 'Uma batalha da 2ª Guerra',
                optionD: 'A WWII battle',
                opcaoE: 'Revolução Industrial',
                optionE: 'Industrial Revolution',
                respostaCorreta: 'Símbolo do fim da Guerra Fria (1989)',
                correctAnswer: 'Symbol of the end of the Cold War (1989)',
                explicacao: 'Reunificou a Alemanha.',
                explanation: 'Reunified Germany.',
                materia: 'História',
            },
            {
                pergunta: 'Qual civilização construiu as pirâmides de Gizé?',
                question: 'Which civilization built the Giza pyramids?',
                opcaoA: 'Gregos',
                optionA: 'Greeks',
                opcaoB: 'Romanos',
                optionB: 'Romans',
                opcaoC: 'Egípcios',
                optionC: 'Egyptians',
                opcaoD: 'Maias',
                optionD: 'Mayans',
                opcaoE: 'Astecas',
                optionE: 'Aztecs',
                respostaCorreta: 'Egípcios',
                correctAnswer: 'Egyptians',
                explicacao: 'Eram túmulos para os faraós.',
                explanation: 'They were tombs for pharaohs.',
                materia: 'História',
            },
            {
                pergunta: 'Quem foi o líder da Revolução Russa de 1917?',
                question: 'Who was the leader of the 1917 Russian Revolution?',
                opcaoA: 'Stalin',
                optionA: 'Stalin',
                opcaoB: 'Lenin',
                optionB: 'Lenin',
                opcaoC: 'Tsar Nicolau II',
                optionC: 'Tsar Nicholas II',
                opcaoD: 'Gorbatchov',
                optionD: 'Gorbachev',
                opcaoE: 'Putin',
                optionE: 'Putin',
                respostaCorreta: 'Lenin',
                correctAnswer: 'Lenin',
                explicacao: 'Liderou os bolcheviques ao poder.',
                explanation: 'Led the Bolsheviks to power.',
                materia: 'História',
            },
            {
                pergunta: 'O que foi o Renascimento?',
                question: 'What was the Renaissance?',
                opcaoA: 'Movimento religioso moderno',
                optionA: 'Modern religious movement',
                opcaoB: 'Renovação cultural e científica (XV-XVI)',
                optionB: 'Cultural and scientific renewal (15th-16th c.)',
                opcaoC: 'Período das trevas',
                optionC: 'Dark Ages',
                opcaoD: 'Independência do Brasil',
                optionD: "Brazil's independence",
                opcaoE: 'Crise de 1929',
                optionE: '1929 Crash',
                respostaCorreta: 'Renovação cultural e científica (XV-XVI)',
                correctAnswer: 'Cultural and scientific renewal (15th-16th c.)',
                explicacao: 'Foco no humanismo e na ciência.',
                explanation: 'Focus on humanism and science.',
                materia: 'História',
            },
            {
                pergunta: 'Quanto tempo durou a Ditadura Militar no Brasil?',
                question: 'How long did the Military Dictatorship in Brazil last?',
                opcaoA: '10 anos',
                optionA: '10 years',
                opcaoB: '21 anos',
                optionB: '21 years',
                opcaoC: '50 anos',
                optionC: '50 years',
                opcaoD: '5 anos',
                optionD: '5 years',
                opcaoE: '30 anos',
                optionE: '30 years',
                respostaCorreta: '21 anos',
                correctAnswer: '21 years',
                explicacao: 'De 1964 até 1985.',
                explanation: 'From 1964 until 1985.',
                materia: 'História',
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
