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
            // Literatura
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
            {
                pergunta:
                    'A queda da Bastilha, em 14 de julho de 1789, tornou-se o principal símbolo da Revolução Francesa porque expressou:',
                question:
                    'The fall of the Bastille on July 14, 1789, became the main symbol of the French Revolution because it expressed:',
                opcaoA: 'A aliança entre a nobreza e o campesinato francês.',
                optionA: 'The alliance between the nobility and the French peasantry.',
                opcaoB: 'A desestruturação do absolutismo e o protagonismo popular.',
                optionB: 'The destructuring of absolutism and popular leadership.',
                opcaoC: 'A tomada imediata do poder político pelos jacobinos.',
                optionC: 'The immediate seizure of political power by the Jacobins.',
                opcaoD: 'O fim definitivo das guerras napoleônicas na Europa.',
                optionD: 'The definitive end of the Napoleonic Wars in Europe.',
                opcaoE: 'A aprovação instantânea do sufrágio universal masculino.',
                optionE: 'The instant approval of universal male suffrage.',
                respostaCorreta: 'A desestruturação do absolutismo e o protagonismo popular.',
                correctAnswer: 'The destructuring of absolutism and popular leadership.',
                explicacao:
                    'A Bastilha era uma prisão real e símbolo do arbítrio absolutista. Sua queda representou o colapso prático do Antigo Regime.',
                explanation:
                    'The Bastille was a royal prison and symbol of absolutist rule. Its fall represented the practical collapse of the Old Regime.',
                materia: 'História',
            },
            {
                pergunta:
                    'No Brasil Colonial, o sistema de Capitanias Hereditárias enfrentou dificuldades devido a diversos fatores, dentre os quais destaca-se:',
                question:
                    'In Colonial Brazil, the Hereditary Captaincies system faced difficulties due to several factors, among which stands out:',
                opcaoA: 'A escassez extrema de terras férteis ao longo do litoral brasileiro.',
                optionA: 'The extreme scarcity of fertile lands along the Brazilian coast.',
                opcaoB: 'A descentralização administrativa e a falta de recursos dos donatários.',
                optionB:
                    'The administrative decentralization and lack of resources from the grantees.',
                opcaoC: 'A proibição papal ao cultivo da cana-de-açúcar na colônia.',
                optionC: 'The papal prohibition on sugar cane cultivation in the colony.',
                opcaoD: 'O imediato tratado de paz assinado com as nações indígenas.',
                optionD: 'The immediate peace treaty signed with indigenous nations.',
                opcaoE: 'A forte concorrência comercial imposta pelos Estados Unidos.',
                optionE: 'The strong commercial competition imposed by the United States.',
                respostaCorreta:
                    'A descentralização administrativa e a falta de recursos dos donatários.',
                correctAnswer:
                    'The administrative decentralization and lack of resources from the grantees.',
                explicacao:
                    'A imensidade geográfica, a resistência indígena e os altos custos de investimento inviabilizaram a maioria das capitanias.',
                explanation:
                    'The geographical immensity, indigenous resistance, and high investment costs made most captaincies unviable.',
                materia: 'História',
            },
            {
                pergunta:
                    'A crise de 1929 afetou diretamente a economia cafeeira do Brasil na época, resultando politicamente em:',
                question:
                    'The 1929 crash directly affected Brazil coffee economy at the time, resulting politically in:',
                opcaoA: 'Fortalecimento da Política do Café com Leite.',
                optionA: 'Strengthening of the Coffee with Milk Policy.',
                opcaoB: 'Ascensão da Revolução de 1930 e o fim da República Velha.',
                optionB: 'Rise of the 1930 Revolution and the end of the Old Republic.',
                opcaoC: 'Proibição total da exportação para a Europa.',
                optionC: 'Total ban on exports to Europe.',
                opcaoD: 'Restauração imediata da Monarquia Constitucional.',
                optionD: 'Immediate restoration of the Constitutional Monarchy.',
                opcaoE: 'Privatização em massa de ferrovias inglesas.',
                optionE: 'Mass privatization of British railroads.',
                respostaCorreta: 'Ascensão da Revolução de 1930 e o fim da República Velha.',
                correctAnswer: 'Rise of the 1930 Revolution and the end of the Old Republic.',
                explicacao:
                    'O colapso do preço do café desestruturou a base econômica das oligarquias paulistas, abrindo caminho para a Era Vargas.',
                explanation:
                    'The collapse of coffee prices disrupted the economic base of São Paulo oligarchies, clearing the path for the Vargas Era.',
                materia: 'História',
            },
            {
                pergunta:
                    'A Lei de Terras de 1850 no Brasil teve como impacto socioeconômico crucial:',
                question: 'The Land Law of 1850 in Brazil had as a crucial socioeconomic impact:',
                opcaoA: 'A distribuição gratuita de lotes rurais para imigrantes europeus.',
                optionA: 'The free distribution of rural lots to European immigrants.',
                opcaoB: 'A facilitação do acesso à terra para escravizados libertos.',
                optionB: 'Facilitating access to land for freed slaves.',
                opcaoC: 'A restrição do acesso à terra apenas por meio da compra.',
                optionC: 'The restriction of access to land only through purchase.',
                opcaoD: 'A abolição imediata do regime de latifúndios cafeeiros.',
                optionD: 'The immediate abolition of the coffee estate system.',
                opcaoE: 'A demarcação total das reservas indígenas remanescentes.',
                optionE: 'The total demarcation of remaining indigenous reserves.',
                respostaCorreta: 'A restrição do acesso à terra apenas por meio da compra.',
                correctAnswer: 'The restriction of access to land only through purchase.',
                explicacao:
                    'A lei garantiu a manutenção da estrutura latifundiária, impedindo que imigrantes pobres e futuros libertos fossem proprietários facilmente.',
                explanation:
                    'The law guaranteed the maintenance of the large estate structure, preventing poor immigrants and future freedmen from easily becoming owners.',
                materia: 'História',
            },
            {
                pergunta:
                    'O período da Ditadura Militar no Brasil (1964-1985) caracterizou-se institucionalmente pelo uso de Atos Institucionais. O AI-5 se destacou por:',
                question:
                    'The Military Dictatorship period in Brazil (1964-1985) was institutionally characterized by the use of Institutional Acts. AI-5 stood out for:',
                opcaoA: 'Garantir eleições diretas para a presidência da República.',
                optionA: 'Guaranteeing direct elections for the presidency of the Republic.',
                opcaoB: 'Suspender garantias constitucionais e fechar temporariamente o Congresso.',
                optionB: 'Suspending constitutional guarantees and temporarily closing Congress.',
                opcaoC: 'Criar os primeiros programas de transferência de renda no país.',
                optionC: 'Creating the first income transfer programs in the country.',
                opcaoD: 'Promover a anistia ampla, geral e irrestrita imediata.',
                optionD: 'Promoting immediate broad, general, and unrestricted amnesty.',
                opcaoE: 'Subordinar as Forças Armadas ao poder do Judiciário.',
                optionE: 'Subordinating the Armed Forces to the power of the Judiciary.',
                respostaCorreta:
                    'Suspender garantias constitucionais e fechar temporariamente o Congresso.',
                correctAnswer:
                    'Suspending constitutional guarantees and temporarily closing Congress.',
                explicacao:
                    'Editado em dezembro de 1968, o AI-5 radicalizou o regime, cassando mandatos, suspendendo o habeas corpus e oficializando a censura.',
                explanation:
                    'Issued in December 1968, AI-5 radicalized the regime, revoking mandates, suspending habeas corpus, and officializing censorship.',
                materia: 'História',
            },
            {
                pergunta:
                    'Durante a Baixa Idade Média, o renascimento comercial e urbano na Europa ocidental foi impulsionado sobretudo:',
                question:
                    'During the Late Middle Ages, the commercial and urban revival in Western Europe was driven mainly by:',
                opcaoA: 'Pela descentralização religiosa operada pela Reforma Protestante.',
                optionA: 'By the religious decentralization brought by the Protestant Reformation.',
                opcaoB: 'Pelo isolamento feudal gerado pelas invasões bárbaras.',
                optionB: 'By the feudal isolation generated by barbarian invasions.',
                opcaoC: 'Pelas Cruzadas, que reabriram as rotas de comércio no Mediterrâneo.',
                optionC: 'By the Crusades, which reopened trade routes in the Mediterranean.',
                opcaoD: 'Pelo declínio absoluto da burguesia nas cidades portuárias.',
                optionD: 'By the absolute decline of the bourgeoisie in port cities.',
                opcaoE: 'Pela abolição total da moeda nas trocas intercontinentais.',
                optionE: 'By the total abolition of currency in intercontinental exchanges.',
                respostaCorreta:
                    'Pelas Cruzadas, que reabriram as rotas de comércio no Mediterrâneo.',
                correctAnswer: 'By the Crusades, which reopened trade routes in the Mediterranean.',
                explicacao:
                    'As expedições militares propiciaram o contato com o Oriente e a dinamização mercantil de feiras urbanas.',
                explanation:
                    'The military expeditions provided contact with the East and stimulated the mercantile dynamics of urban fairs.',
                materia: 'História',
            },
            {
                pergunta:
                    'O Plano Taylor (Taylorismo) e o Fordismo inauguraram novos métodos de produção industrial no século XX baseados na:',
                question:
                    'The Taylor Plan (Taylorism) and Fordism introduced new industrial production methods in the 20th century based on:',
                opcaoA: 'Valorização da criatividade artesanal individual do operário.',
                optionA: 'Valuing the individual craft creativity of the worker.',
                opcaoB: 'Racionalização do trabalho, esteiras rolantes e especialização de tarefas.',
                optionB: 'Rationalization of work, conveyor belts, and task specialization.',
                opcaoC: 'Redução drástica das jornadas produtivas fabris para 4 horas semanais.',
                optionC: 'Drastic reduction of factory production shifts to 4 hours per week.',
                opcaoD: 'Autogestão operária e eliminação completa dos cargos de gerência.',
                optionD: 'Worker self-management and complete elimination of management positions.',
                opcaoE: 'Substituição integral da energia elétrica pelo uso exclusivo do vapor.',
                optionE: 'Full replacement of electrical energy by the exclusive use of steam.',
                respostaCorreta:
                    'Racionalização do trabalho, esteiras rolantes e especialização de tarefas.',
                correctAnswer: 'Rationalization of work, conveyor belts, and task specialization.',
                explicacao:
                    'Ambos buscaram a máxima produtividade e eficiência cronometrando o tempo e fragmentando as etapas produtivas na linha de montagem.',
                explanation:
                    'Both sought maximum productivity and efficiency by timing labor and fragmenting production steps on the assembly line.',
                materia: 'História',
            },
            {
                pergunta:
                    'A Guerra Fria (1947-1991) moldou a geopolítica global por meio de uma polarização que evitou o conflito militar direto entre as superpotências devido:',
                question:
                    'The Cold War (1947-1991) shaped global geopolitics through a polarization that avoided direct military conflict between superpowers due to:',
                opcaoA: 'Ao Tratado de Tordesilhas assinado no século anterior.',
                optionA: 'To the Treaty of Tordesillas signed in the previous century.',
                opcaoB: 'À Doutrina da Destruição Mútua Assegurada devido ao arsenal nuclear.',
                optionB:
                    'To the Doctrine of Mutually Assured Destruction due to the nuclear arsenal.',
                opcaoC: 'À mediação exclusiva exercida pela União Europeia.',
                optionC: 'To the exclusive mediation exercised by the European Union.',
                opcaoD: 'Ao desinteresse dos Estados Unidos pela expansão capitalista.',
                optionD: 'To the United States lack of interest in capitalist expansion.',
                opcaoE: 'Ao colapso econômico sofrido pela China na década de 1950.',
                optionE: 'To the economic collapse suffered by China in the 1950s.',
                respostaCorreta:
                    'À Doutrina da Destruição Mútua Assegurada devido ao arsenal nuclear.',
                correctAnswer:
                    'To the Doctrine of Mutually Assured Destruction due to the nuclear arsenal.',
                explicacao:
                    'O risco de aniquilação nuclear recíproca gerou o "equilíbrio do terror", transferindo disputas para guerras periféricas (Coreia, Vietnã).',
                explanation:
                    'The risk of reciprocal nuclear annihilation generated the "balance of terror", moving disputes to peripheral wars (Korea, Vietnam).',
                materia: 'História',
            },
            {
                pergunta:
                    'A Inconfidência Mineira (1789) e a Conjuração Baiana (1798) guardam diferenças fundamentais, entre as quais sobressai a Conjuração Baiana por:',
                question:
                    'The Inconfidência Mineira (1789) and the Conjuração Baiana (1798) hold fundamental differences, among which the Conjuração Baiana stands out for:',
                opcaoA: 'Apoiar explicitamente a manutenção do Pacto Colonial.',
                optionA: 'Explicitly supporting the maintenance of the Colonial Pact.',
                opcaoB: 'Contar com forte caráter popular e propor a abolição da escravidão.',
                optionB:
                    'Having a strong popular character and proposing the abolition of slavery.',
                opcaoC: 'Ser liderada exclusivamente pela elite latifundiária de Salvador.',
                optionC: 'Being led exclusively by the landowning elite of Salvador.',
                opcaoD: 'Rejeitar as ideias iluministas difundidas pela Revolução Francesa.',
                optionD: 'Rejecting the enlightenment ideas spread by the French Revolution.',
                opcaoE: 'Exigir a coroação imediata de um imperador nascido no Brasil.',
                optionE: 'Demanding the immediate coronation of an emperor born in Brazil.',
                respostaCorreta:
                    'Contar com forte caráter popular e propor a abolição da escravidão.',
                correctAnswer:
                    'Having a strong popular character and proposing the abolition of slavery.',
                explicacao:
                    'Diferente do movimento elitista de Minas, a revolta baiana envolveu alfaiates, soldados e negros livres, pautando demandas sociais profundas.',
                explanation:
                    'Unlike the elitist movement in Minas, the Bahia revolt involved tailors, soldiers, and free blacks, bringing deep social demands to light.',
                materia: 'História',
            },
            {
                pergunta:
                    'O Período Joanino no Brasil (1808-1821) provocou transformações estruturais definitivas na colônia cujo marco inicial foi:',
                question:
                    'The Joantine Period in Brazil (1808-1821) caused definitive structural changes in the colony, whose initial milestone was:',
                opcaoA: 'A assinatura do Tratado de Madri.',
                optionA: 'The signing of the Treaty of Madrid.',
                opcaoB: 'A Abertura dos Portos às Nações Amigas, rompendo o pacto colonial.',
                optionB: 'The Opening of Ports to Friendly Nations, breaking the colonial pact.',
                opcaoC: 'A decretação imediata da Lei Áurea.',
                optionC: 'The immediate decree of the Golden Law.',
                opcaoD: 'O início da Guerra do Paraguai no extremo sul.',
                optionD: 'The beginning of the Paraguayan War in the far south.',
                opcaoE: 'A outorga da primeira Constituição imperial brasileira.',
                optionE: 'The granting of the first Brazilian imperial Constitution.',
                respostaCorreta:
                    'A Abertura dos Portos às Nações Amigas, rompendo o pacto colonial.',
                correctAnswer:
                    'The Opening of Ports to Friendly Nations, breaking the colonial pact.',
                explicacao:
                    'A vinda da corte portuguesa em 1808 exigiu o fim do monopólio comercial metropolitano, impulsionando a futura independência.',
                explanation:
                    'The arrival of the Portuguese court in 1808 demanded the end of the metropolitan commercial monopoly, boosting future independence.',
                materia: 'História',
            },

            // Biologia
            {
                pergunta:
                    'As células procariontes diferenciam-se essencialmente das eucariontes pela ausência de:',
                question:
                    'Prokaryotic cells differ essentially from eukaryotic cells by the absence of:',
                opcaoA: 'Membrana plasmática externa.',
                optionA: 'External plasma membrane.',
                opcaoB: 'Ribossomos citoplasmáticos.',
                optionB: 'Cytoplasmic ribosomes.',
                opcaoC: 'Envoltório nuclear (carioteca) delimitando o DNA.',
                optionC: 'Nuclear envelope (karyotheca) delimiting the DNA.',
                opcaoD: 'Parede celular constituída de carboidratos.',
                optionD: 'Cell wall made of carbohydrates.',
                opcaoE: 'Moléculas de ácido ribonucleico (RNA).',
                optionE: 'Ribonucleic acid (RNA) molecules.',
                respostaCorreta: 'Envoltório nuclear (carioteca) delimitando o DNA.',
                correctAnswer: 'Nuclear envelope (karyotheca) delimiting the DNA.',
                explicacao:
                    'Procariontes possuem material genético disperso no nucleoide citoplasmático devido à ausência de membrana nuclear interna.',
                explanation:
                    'Prokaryotes have genetic material dispersed in the cytoplasmic nucleoid due to the absence of an internal nuclear membrane.',
                materia: 'Biologia',
            },
            {
                pergunta:
                    'As mitocôndrias e os cloroplastos possuem características exclusivas que sustentam a Teoria Endossimbiótica, tais como:',
                question:
                    'Mitochondria and chloroplasts have exclusive characteristics that support the Endosymbiotic Theory, such as:',
                opcaoA: 'Ausência total de proteínas funcionais estruturais.',
                optionA: 'Total absence of functional structural proteins.',
                opcaoB: 'Presença de DNA próprio, circular e ribossomos do tipo bacteriano.',
                optionB: 'Presence of own circular DNA and bacterial-type ribosomes.',
                opcaoC: 'Inabilidade completa de sintetizar macromoléculas energéticas.',
                optionC: 'Complete inability to synthesize energetic macromolecules.',
                opcaoD: 'Origem a partir do retículo endoplasmático liso.',
                optionD: 'Origin from the smooth endoplasmic reticulum.',
                opcaoE: 'Possuírem apenas uma fita lipídica simples externa.',
                optionE: 'Possessing only a single external lipid strand.',
                respostaCorreta:
                    'Presença de DNA próprio, circular e ribossomos do tipo bacteriano.',
                correctAnswer: 'Presence of own circular DNA and bacterial-type ribosomes.',
                explicacao:
                    'Essas organelas assemelham-se a antigos procariontes de vida livre que foram fagocitados por células eucariontes primitivas de forma mútua.',
                explanation:
                    'These organelles resemble ancient free-living prokaryotes that were mutually engulfed by primitive eukaryotic cells.',
                materia: 'Biologia',
            },
            {
                pergunta:
                    'O processo mitótico garante a divisão celular uniforme. A etapa em que os cromossomos atingem grau máximo de condensação e alinham-se na placa equatorial é a:',
                question:
                    'The mitotic process guarantees uniform cell division. The stage where chromosomes reach maximum condensation and align on the equatorial plate is:',
                opcaoA: 'Prófase.',
                optionA: 'Prophase.',
                opcaoB: 'Metáfase.',
                optionB: 'Metaphase.',
                opcaoC: 'Anáfase.',
                optionC: 'Anaphase.',
                opcaoD: 'Telófase.',
                optionD: 'Telophase.',
                opcaoE: 'Intérfase.',
                optionE: 'Interphase.',
                respostaCorreta: 'Metáfase.',
                correctAnswer: 'Metaphase.',
                explicacao:
                    'Na metáfase os cromossomos ligam-se às fibras do fuso mitótico pelo centrômero e migram para o centro geométrico celular.',
                explanation:
                    'In metaphase, chromosomes attach to mitotic spindle fibers by the centromere and migrate to the cell geometric center.',
                materia: 'Biologia',
            },
            {
                pergunta:
                    'Na genética clássica mendeliana, o cruzamento de dois indivíduos heterozigotos (Aa x Aa) para uma característica monogênica dominante resulta em uma proporção fenotípica de:',
                question:
                    'In classical Mendelian genetics, crossing two individuals heterozygous (Aa x Aa) for a dominant monogenic trait results in a phenotypic ratio of:',
                opcaoA: '1 : 1.',
                optionA: '1 : 1.',
                opcaoB: '9 : 3 : 3 : 1.',
                optionB: '9 : 3 : 3 : 1.',
                opcaoC: '3 : 1.',
                optionC: '3 : 1.',
                opcaoD: '1 : 2 : 1.',
                optionD: '1 : 2 : 1.',
                opcaoE: 'All dominant individuals.',
                opcaoE: 'Todos os indivíduos dominantes.',
                respostaCorreta: '3 : 1.',
                correctAnswer: '3 : 1.',
                explicacao:
                    'O genótipo gerado é 25% AA, 50% Aa (75% com fenótipo dominante) e 25% aa (25% com fenótipo recessivo), gerando proporção 3:1.',
                explanation:
                    'The generated genotype is 25% AA, 50% Aa (75% with dominant phenotype) and 25% aa (25% with recessive phenotype), yielding a 3:1 ratio.',
                materia: 'Biologia',
            },
            {
                pergunta:
                    'Em ecologia, a biomassa diminui ao longo das cadeias alimentares. Isso ocorre porque o fluxo de energia é:',
                question:
                    'In ecology, biomass decreases along food chains. This happens because energy flow is:',
                opcaoA: 'Cíclico e acumula-se nos produtores primários.',
                optionA: 'Cyclic and accumulates in primary producers.',
                opcaoB: 'Unidirecional e decrescente a cada nível trófico.',
                optionB: 'Unidirectional and decreasing at each trophic level.',
                opcaoC: 'Bidirecional e constante entre consumidores.',
                optionC: 'Bidirectional and constant among consumers.',
                opcaoD: 'Invertido em pirâmides marinhas de fitoplâncton.',
                optionD: 'Inverted in marine phytoplankton pyramids.',
                opcaoE: 'Independente da atividade metabólica celular.',
                optionE: 'Independent of cellular metabolic activity.',
                respostaCorreta: 'Unidirecional e decrescente a cada nível trófico.',
                correctAnswer: 'Unidirectional and decreasing at each trophic level.',
                explicacao:
                    'Grande parte da energia absorvida é gasta na respiração celular e dissipada na forma de calor, restando menos energia disponível para o nível seguinte.',
                explanation:
                    'Much of the absorbed energy is spent on cellular respiration and dissipated as heat, leaving less energy available for the next level.',
                materia: 'Biologia',
            },
            {
                pergunta:
                    'A vacinação atua de forma preventiva na imunização humana ao induzir o organismo a produzir:',
                question:
                    'Vaccination acts preventively in human immunization by inducing the body to produce:',
                opcaoA: 'Antígenos específicos de forma passiva imediata.',
                optionA: 'Specific antigens passively and immediately.',
                opcaoB: 'Anticorpos artificiais digeridos por macrófagos.',
                optionB: 'Artificial antibodies digested by macrophages.',
                opcaoC: 'Células de memória e anticorpos por meio de resposta imune ativa.',
                optionC: 'Memory cells and antibodies through an active immune response.',
                opcaoD: 'Hormônios esteroides inibidores de processos inflamatórios.',
                optionD: 'Steroid hormones that inhibit inflammatory processes.',
                opcaoE: 'Glóbulos vermelhos nucleados extras no baço.',
                optionE: 'Extra nucleated red blood cells in the spleen.',
                respostaCorreta:
                    'Células de memória e anticorpos por meio de resposta imune ativa.',
                correctAnswer: 'Memory cells and antibodies through an active immune response.',
                explicacao:
                    'A vacina expõe o corpo a antígenos atenuados ou mortos, gerando linfócitos B de memória sem causar a doença clinicamente ativa.',
                explanation:
                    'The vaccine exposes the body to attenuated or killed antigens, generating memory B lymphocytes without causing clinically active disease.',
                materia: 'Biologia',
            },
            {
                pergunta:
                    'O hormônio vegetal responsável pelo tropismo (fototropismo e geotropismo) através do alongamento celular diferencial é denominado:',
                question:
                    'The plant hormone responsible for tropism (phototropism and geotropism) through differential cell elongation is called:',
                opcaoA: 'Etileno.',
                optionA: 'Ethylene.',
                opcaoB: 'Giberelina.',
                optionB: 'Gibberellin.',
                opcaoC: 'Auxina (AIA).',
                optionC: 'Auxin (IAA).',
                opcaoD: 'Ácido Abscísico.',
                optionD: 'Abscisic Acid.',
                opcaoE: 'Citocinina.',
                optionE: 'Cytokinin.',
                respostaCorreta: 'Auxina (AIA).',
                correctAnswer: 'Auxin (IAA).',
                explicacao:
                    'As auxinas migram para o lado menos iluminado do caule, promovendo ali maior alongamento e fazendo a planta curvar-se em direção à luz.',
                explanation:
                    'Auxins migrate to the less illuminated side of the stem, promoting greater elongation there and causing the plant to bend toward light.',
                materia: 'Biologia',
            },
            {
                pergunta:
                    'No aparelho digestório humano, a digestão química dos carboidratos (amido) inicia-se na boca por ação da enzima:',
                question:
                    'In the human digestive tract, the chemical digestion of carbohydrates (starch) begins in the mouth through the action of the enzyme:',
                opcaoA: 'Pepsina gástrica.',
                optionA: 'Gastric pepsin.',
                opcaoB: 'Amilase salivar (ptialina).',
                optionB: 'Salivary amylase (ptyalin).',
                opcaoC: 'Lipase pancreática.',
                optionC: 'Pancreatic lipase.',
                opcaoD: 'Trípsina entérica.',
                optionD: 'Enteric trypsin.',
                opcaoE: 'Bile vesicular.',
                optionE: 'Vesicular bile.',
                respostaCorreta: 'Amilase salivar (ptialina).',
                correctAnswer: 'Salivary amylase (ptyalin).',
                explicacao:
                    'A ptialina quebra macromoléculas de amido em maltose sob um pH neutro ou levemente alcalino ideal na cavidade bucal.',
                explanation:
                    'Ptyalin breaks down starch macromolecules into maltose under an ideal neutral or slightly alkaline pH in the oral cavity.',
                materia: 'Biologia',
            },
            {
                pergunta:
                    'A conversão do gás nitrogênio atmosférico (N₂) em amônia (NH₃) no ciclo do nitrogênio é realizada principalmente por bactérias do gênero:',
                question:
                    'The conversion of atmospheric nitrogen gas (N₂) into ammonia (NH₃) in the nitrogen cycle is carried out mainly by bacteria of the genus:',
                opcaoA: 'Nitrobacter (nitratação).',
                optionA: 'Nitrobacter (nitratation).',
                opcaoB: 'Nitrosomonas (nitrosação).',
                optionB: 'Nitrosomonas (nitrosation).',
                opcaoC: 'Rhizobium, associadas a raízes de leguminosas.',
                optionC: 'Rhizobium, associated with legume roots.',
                opcaoD: 'Escherichia coli intestinais.',
                optionD: 'Intestinal Escherichia coli.',
                opcaoE: 'Lactobacillus láticos.',
                optionE: 'Lactic Lactobacillus.',
                respostaCorreta: 'Rhizobium, associadas a raízes de leguminosas.',
                correctAnswer: 'Rhizobium, associated with legume roots.',
                explicacao:
                    'Bactérias fixadoras como as do gênero Rhizobium fazem simbiose com leguminosas, introduzindo o nitrogênio gasoso na cadeia trófica.',
                explanation:
                    'Fixing bacteria such as those of the Rhizobium genus engage in symbiosis with legumes, introducing gaseous nitrogen into the food chain.',
                materia: 'Biologia',
            },
            {
                pergunta:
                    'Qual das seguintes doenças humanas é causada por um protozoário e transmitida por um inseto vetor?',
                question:
                    'Which of the following human diseases is caused by a protozoan and transmitted by an insect vector?',
                opcaoA: 'Dengue.',
                optionA: 'Dengue.',
                opcaoB: 'Doença de Chagas.',
                optionB: 'Chagas disease.',
                opcaoC: 'Tuberculose.',
                optionC: 'Tuberculosis.',
                opcaoD: 'Gripe Influenza.',
                optionD: 'Influenza Flu.',
                opcaoE: 'Esquistossomose.',
                optionE: 'Schistosomiasis.',
                respostaCorreta: 'Doença de Chagas.',
                correctAnswer: 'Chagas disease.',
                explicacao:
                    'A Doença de Chagas é causada pelo protozoário Trypanosoma cruzi e transmitida pelas fezes do inseto barbeiro (triatomíneo).',
                explanation:
                    'Chagas Disease is caused by the protozoan Trypanosoma cruzi and transmitted via the feces of the triatomine bug (barbeiro).',
                materia: 'Biologia',
            },

            // Física
            {
                pergunta:
                    'Um veículo trafega a uma velocidade constante de 108 km/h. Convertendo essa grandeza para o Sistema Internacional (SI), a velocidade equivale a:',
                question:
                    'A vehicle travels at a constant speed of 108 km/h. Converting this value to the International System (SI), the speed equals:',
                opcaoA: '10.8 m/s.',
                optionA: '10.8 m/s.',
                opcaoB: '30 m/s.',
                optionB: '30 m/s.',
                opcaoC: '300 m/s.',
                optionC: '300 m/s.',
                opcaoD: '3.6 m/s.',
                optionD: '3.6 m/s.',
                opcaoE: '18 m/s.',
                optionE: '18 m/s.',
                respostaCorreta: '30 m/s.',
                correctAnswer: '30 m/s.',
                explicacao:
                    'Para converter de km/h para m/s, divide-se o valor escalar por 3.6. Logo, 108 / 3.6 = 30 m/s.',
                explanation:
                    'To convert from km/h to m/s, you divide the value by 3.6. Thus, 108 / 3.6 = 30 m/s.',
                materia: 'Física',
            },
            {
                pergunta:
                    'De acordo com a Primeira Lei de Newton (Inércia), um corpo em movimento retilíneo uniforme (MRU) tende a:',
                question:
                    'According to Newtons First Law (Inertia), an object in uniform rectilinear motion (URM) tends to:',
                opcaoA: 'Parar imediatamente caso nenhuma força atue sobre ele.',
                optionA: 'Stop immediately if no force acts upon it.',
                opcaoB: 'Manter seu estado de movimento se a força resultante for nula.',
                optionB: 'Maintain its state of motion if the net force is zero.',
                opcaoC: 'Aumentar sua aceleração proporcionalmente à massa.',
                optionC: 'Increase its acceleration proportionally to mass.',
                opcaoD: 'Curvar sua trajetória devido à aceleração centrípeta latente.',
                optionD: 'Bend its trajectory due to latent centripetal acceleration.',
                opcaoE: 'Sofrer atrito espontâneo termodinâmico.',
                optionE: 'Suffer spontaneous thermodynamic friction.',
                respostaCorreta: 'Manter seu estado de movimento se a força resultante for nula.',
                correctAnswer: 'Maintain its state of motion if the net force is zero.',
                explicacao:
                    'A inércia garante que, na ausência de forças resultantes externas, a velocidade vetorial do corpo permanece inalterada.',
                explanation:
                    "Inertia guarantees that, in the absence of net external forces, the object's vector velocity remains unchanged.",
                materia: 'Física',
            },
            {
                pergunta: 'O eco é um fenômeno ondulatório sonoro gerado diretamente pela:',
                question: 'An echo is a sound wave phenomenon directly generated by:',
                opcaoA: 'Refração da onda ao mudar de meio físico.',
                optionA: 'Refraction of the wave when changing physical media.',
                opcaoB: 'Difração do som ao contornar frestas barométricas.',
                optionB: 'Diffraction of sound when bypassing barometric slits.',
                opcaoC: 'Reflexão da onda sonora em um anteparo rígido distante.',
                optionC: 'Reflection of the sound wave on a distant rigid surface.',
                opcaoD: 'Polarização exclusiva de ondas longitudinais audíveis.',
                optionD: 'Exclusive polarization of audible longitudinal waves.',
                opcaoE: 'Interferência destrutiva total das ondas de rádio.',
                optionE: 'Total destructive interference of radio waves.',
                respostaCorreta: 'Reflexão da onda sonora em um anteparo rígido distante.',
                correctAnswer: 'Reflection of the sound wave on a distant rigid surface.',
                explicacao:
                    'O eco ocorre quando o som emitido bate em um obstáculo e retorna ao ouvido do emissor com um atraso de tempo maior que 0.1 segundo.',
                explanation:
                    "An echo occurs when the emitted sound hits an obstacle and returns to the sender's ear with a time delay greater than 0.1 seconds.",
                materia: 'Física',
            },
            {
                pergunta:
                    'Em um circuito elétrico residencial, as lâmpadas e eletrodomésticos são ligados em paralelo principalmente para garantir que:',
                question:
                    'In a residential electrical circuit, light bulbs and appliances are connected in parallel mainly to ensure that:',
                opcaoA: 'A corrente elétrica seja rigorosamente idêntica em todos os ramos.',
                optionA: 'The electric current is rigorously identical in all branches.',
                opcaoB: 'Todos os aparelhos fiquem submetidos à mesma diferença de potencial (ddp).',
                optionB: 'All devices are subjected to the same potential difference (voltage).',
                opcaoC: 'A resistência total do circuito cresça indefinidamente.',
                optionC: 'The total resistance of the circuit increases indefinitely.',
                opcaoD: 'Se um aparelho queimar, todos os demais parem de funcionar.',
                optionD: 'If one device breaks, all others stop working.',
                opcaoE: 'O consumo de energia elétrica medido em kWh zere todo mês.',
                optionE: 'The electrical energy consumption measured in kWh resets every month.',
                respostaCorreta:
                    'Todos os aparelhos fiquem submetidos à mesma diferença de potencial (ddp).',
                correctAnswer:
                    'All devices are subjected to the same potential difference (voltage).',
                explicacao:
                    'Ligações em paralelo mantém a ddp constante (ex: 127V ou 220V) e garantem a independência de funcionamento de cada eletrodoméstico.',
                explanation:
                    'Parallel connections keep the voltage constant (e.g., 127V or 220V) and guarantee the independent functioning of each appliance.',
                materia: 'Física',
            },
            {
                pergunta:
                    'O calor específico da água é elevado (1 cal/g°C) comparado ao do solo. Isso implica que a água apresenta:',
                question:
                    'The specific heat of water is high (1 cal/g°C) compared to soil. This implies that water features:',
                opcaoA: 'Grande facilidade para variar sua temperatura termodinâmica.',
                optionA: 'Great ease in changing its thermodynamic temperature.',
                opcaoB: 'Alta resistência a variações de temperatura (funciona como isolante térmico).',
                optionB: 'High resistance to temperature variations (acts as a thermal buffer).',
                opcaoC: 'Inabilidade total de evaporar sob pressão barométrica padrão.',
                optionC: 'Total inability to evaporate under standard barometric pressure.',
                opcaoD: 'Ponto de fusão abaixo do zero absoluto da escala Kelvin.',
                optionD: 'Melting point below the absolute zero of the Kelvin scale.',
                opcaoE: 'Transmissão térmica conduzida exclusivamente por radiação gama.',
                optionE: 'Thermal transmission conducted exclusively by gamma radiation.',
                respostaCorreta:
                    'Alta resistência a variações de temperatura (funciona como isolante térmico).',
                correctAnswer:
                    'High resistance to temperature variations (acts as a thermal buffer).',
                explicacao:
                    'Por requerer muita energia para mudar sua temperatura, grandes massas de água agem como moderadores térmicos climáticos.',
                explanation:
                    'Because it requires a lot of energy to alter its temperature, large bodies of water act as climatic thermal regulators.',
                materia: 'Física',
            },
            {
                pergunta:
                    'Um feixe de luz monocromática passa do ar para o vidro. Nesse fenômeno de refração, ocorre alteração na:',
                question:
                    'A beam of monochromatic light passes from air into glass. In this refraction phenomenon, there is a change in:',
                opcaoA: 'Frequência da onda luminosa, mantendo a velocidade escalar.',
                optionA: 'Frequency of the light wave, keeping the scalar speed.',
                opcaoB: 'Velocidade de propagação e no comprimento de onda, mantendo a frequência.',
                optionB: 'Speed of propagation and wavelength, keeping the frequency constant.',
                opcaoC: 'Cor espectral visível observada pelo olho humano.',
                optionC: 'Visible spectral color observed by the human eye.',
                opcaoD: 'Direção geométrica cartesiana sem mudar a velocidade.',
                optionD: 'Cartesian geometric direction without shifting speed.',
                opcaoE: 'Amplitude harmônica da fita magnética quântica.',
                optionE: 'Harmonic amplitude of the quantum magnetic tape.',
                respostaCorreta:
                    'Velocidade de propagação e no comprimento de onda, mantendo a frequência.',
                correctAnswer:
                    'Speed of propagation and wavelength, keeping the frequency constant.',
                explicacao:
                    'A frequência depende exclusivamente da fonte emissora. Ao mudar de meio, a velocidade altera devido ao índice de refração, mudando o comprimento de onda.',
                explanation:
                    'Frequency depends exclusively on the emitting source. When changing media, speed alters due to the refractive index, which modifies the wavelength.',
                materia: 'Física',
            },
            {
                pergunta:
                    'Segundo o Teorema da Conservação da Energia Mecânica, se um objeto é abandonado do alto de um prédio sem atrito com o ar:',
                question:
                    'According to the Mechanical Energy Conservation Theorem, if an object is dropped from a building without air friction:',
                opcaoA: 'A energia cinética se mantém perfeitamente constante na queda.',
                optionA: 'Kinetic energy remains perfectly constant during the fall.',
                opcaoB: 'A energia potencial gravitacional se transforma progressivamente em energia cinética.',
                optionB:
                    'Gravitational potential energy progressively transforms into kinetic energy.',
                opcaoC: 'A energia mecânica total do sistema diminui exponencialmente.',
                optionC: 'The total mechanical energy of the system decreases exponentially.',
                opcaoD: 'A massa mecânica do corpo transmuta-se em fótons térmicos.',
                optionD: "The object's mechanical mass transmutes into thermal photons.",
                opcaoE: 'A aceleração da gravidade anula-se na metade do trajeto.',
                optionE: 'The acceleration of gravity cancels out halfway through.',
                respostaCorreta:
                    'A energia potencial gravitacional se transforma progressivamente em energia cinética.',
                correctAnswer:
                    'Gravitational potential energy progressively transforms into kinetic energy.',
                explicacao:
                    'À medida que o corpo perde altura (diminuindo a energia potencial), ele ganha velocidade escalar (aumentando a cinética), conservando a soma total.',
                explanation:
                    'As the object loses height (decreasing potential energy), it gains scalar velocity (increasing kinetic energy), conserving the total sum.',
                materia: 'Física',
            },
            {
                pergunta:
                    'Ao esfregar um bastão de vidro com um pedaço de seda, ambos se eletrizam por atrito. Esse processo fundamenta-se na:',
                question:
                    'By rubbing a glass rod with a piece of silk, both become electrified by friction. This process is grounded in the:',
                opcaoA: 'Criação espontânea de novas cargas elétricas prótons.',
                optionA: 'Spontaneous creation of new proton electrical charges.',
                opcaoB: 'Transferência de elétrons de um corpo para o outro.',
                optionB: 'Transfer of electrons from one body to another.',
                opcaoC: 'Aniquilação mútua dos nêutrons nucleares atômicos.',
                optionC: 'Mutual annihilation of nuclear atomic neutrons.',
                opcaoD: 'Fusão nuclear a frio desencadeada pela fricção manual.',
                optionD: 'Cold nuclear fusion triggered by manual rubbing.',
                opcaoE: 'Destruição total do campo magnético intrínseco do vidro.',
                optionE: 'Total destruction of the intrinsic magnetic field of glass.',
                respostaCorreta: 'Transferência de elétrons de um corpo para o outro.',
                correctAnswer: 'Transfer of electrons from one body to another.',
                explicacao:
                    'A eletrização por atrito move elétrons periféricos. Quem perde elétrons fica positivo; quem ganha, adquire carga negativa de igual valor absoluto.',
                explanation:
                    'Friction electrification moves peripheral electrons. The body that loses electrons becomes positive; the one that gains, acquires an equal negative charge.',
                materia: 'Física',
            },
            {
                pergunta:
                    'A pressão exercida por um fluido em repouso no fundo de um recipiente (Pressão Hidrostática) depende diretamente de quais grandezas?',
                question:
                    'The pressure exerted by a fluid at rest at the bottom of a container (Hydrostatic Pressure) depends directly on which variables?',
                opcaoA: 'Apenas do volume geométrico total de fluido contido.',
                optionA: 'Only on the total geometric volume of fluid contained.',
                opcaoB: 'Da densidade do fluido, da aceleração da gravidade local e da profundidade.',
                optionB: 'On fluid density, local acceleration of gravity, and depth.',
                opcaoC: 'Da área transversal da boca superior aberta do frasco.',
                optionC: 'On the cross-sectional area of the top open mouth of the flask.',
                opcaoD: 'Da condutibilidade térmica da liga metálica estrutural.',
                optionD: 'On the thermal conductivity of the structural metal alloy.',
                opcaoE: 'Do peso atômico médio ponderado dos gases atmosféricos.',
                optionE: 'On the weighted average atomic weight of atmospheric gases.',
                respostaCorreta:
                    'Da densidade do fluido, da aceleração da gravidade local e da profundidade.',
                correctAnswer: 'On fluid density, local acceleration of gravity, and depth.',
                explicacao:
                    'Pelo Teorema de Stevin, P = d * g * h. A geometria tridimensional do frasco ou o volume total não alteram a pressão hidrostática basal.',
                explanation:
                    "By Stevin's Law, P = d * g * h. The three-dimensional geometry of the flask or total volume does not alter basal hydrostatic pressure.",
                materia: 'Física',
            },
            {
                pergunta:
                    'O funcionamento dos óculos de grau para correção de Miopia baseia-se no uso de lentes:',
                question:
                    'The functioning of prescription glasses for Myopia correction is based on the use of lenses that are:',
                opcaoA: 'Divergentes, para afastar o ponto focal e projetá-lo na retina.',
                optionA:
                    'Diverging, to move the focal point backward and project it on the retina.',
                opcaoB: 'Convergentes, para aproximar a imagem formada antes da córnea.',
                optionB: 'Converging, to bring forward the image formed before the cornea.',
                opcaoC: 'Cilíndricas opacas de refração nula unilateral.',
                optionC: 'Opaque cylindrical with unilateral zero refraction.',
                opcaoD: 'Bifocais planas planas espelhadas polaroides.',
                optionD: 'Bifocal flat flat mirrored polaroids.',
                opcaoE: 'Plano-convexas de cristal líquido anisotrópico.',
                optionE: 'Plano-convex made of anisotropic liquid crystal.',
                respostaCorreta: 'Divergentes, para afastar o ponto focal e projetá-lo na retina.',
                correctAnswer:
                    'Diverging, to move the focal point backward and project it on the retina.',
                explicacao:
                    'O olho míope forma a imagem de objetos distantes antes da retina. A lente divergente corrige isso abrindo ligeiramente os raios luminosos incidentes.',
                explanation:
                    'The myopic eye forms the image of distant objects before the retina. The diverging lens corrects this by slightly opening the incoming light rays.',
                materia: 'Física',
            },

            // Química
            {
                pergunta:
                    'O modelo atômico que propôs pela primeira vez a existência de órbitas eletrônicas quantizadas de energia foi formulado por:',
                question:
                    'The atomic model that proposed for the first time the existence of quantized energy electronic orbits was formulated by:',
                opcaoA: 'John Dalton.',
                optionA: 'John Dalton.',
                opcaoB: 'J. J. Thomson.',
                optionB: 'J. J. Thomson.',
                opcaoC: 'Ernest Rutherford.',
                optionC: 'Ernest Rutherford.',
                opcaoD: 'Niels Bohr.',
                optionD: 'Niels Bohr.',
                opcaoE: 'Linus Pauling.',
                optionE: 'Linus Pauling.',
                respostaCorreta: 'Niels Bohr.',
                correctAnswer: 'Niels Bohr.',
                explicacao:
                    'Bohr refinou o modelo planetário de Rutherford introduzindo os postulados quânticos onde elétrons saltam emitindo ou absorvendo fótons.',
                explanation:
                    "Bohr refined Rutherford's planetary model by introducing quantum postulates where electrons jump while emitting or absorbing photons.",
                materia: 'Química',
            },
            {
                pergunta:
                    'A ligação química que ocorre devido à atração eletrostática entre cátions metálicos e ânions não-metálicos através de transferência definitiva de elétrons é a:',
                question:
                    'The chemical bond occurring due to electrostatic attraction between metallic cations and non-metallic anions through definitive electron transfer is:',
                opcaoA: 'Ligação covalente molecular.',
                optionA: 'Molecular covalent bond.',
                opcaoB: 'Ligação iônica.',
                optionB: 'Ionic bond.',
                opcaoC: 'Ligação metálica de mar de elétrons.',
                optionC: 'Metallic electron-sea bond.',
                opcaoD: 'Ligação de hidrogênio dipolar.',
                optionD: 'Dipolar hydrogen bond.',
                opcaoE: 'Força de Van der Waals dispersiva.',
                optionE: 'Dispersive Van der Waals force.',
                respostaCorreta: 'Ligação iônica.',
                correctAnswer: 'Ionic bond.',
                explicacao:
                    'A ligação iônica ocorre tipicamente entre metais (baixa eletronegatividade) e ametais (alta eletronegatividade), gerando retículos cristalinos.',
                explanation:
                    'Ionic bonding typically occurs between metals (low electronegativity) and nonmetals (high electronegativity), generating crystalline lattices.',
                materia: 'Química',
            },
            {
                pergunta:
                    'Uma solução aquosa que apresenta concentração de íons [H⁺] igual a 10⁻⁵ mol/L possui pH igual a:',
                question:
                    'An aqueous solution with a concentration of [H⁺] ions equal to 10⁻⁵ mol/L has a pH equal to:',
                opcaoA: '5 (solução ácida).',
                optionA: '5 (acidic solution).',
                opcaoB: '5 (solução básica).',
                optionB: '5 (basic solution).',
                opcaoC: '9 (solução alcalina).',
                optionC: '9 (alkaline solution).',
                opcaoD: '7 (solução neutra).',
                optionD: '7 (neutral solution).',
                opcaoE: '14 (solução supersaturada).',
                optionE: '14 (supersaturated solution).',
                respostaCorreta: '5 (solução ácida).',
                correctAnswer: '5 (acidic solution).',
                explicacao:
                    'O pH é definido pelo logaritmo negativo da concentração de hidrogênios: pH = -log[H⁺]. Assim, pH = -log(10⁻⁵) = 5. Menor que 7 indica acidez.',
                explanation:
                    'pH is defined by the negative logarithm of hydrogen concentration: pH = -log[H⁺]. Thus, pH = -log(10⁻⁵) = 5. Below 7 indicates acidity.',
                materia: 'Química',
            },
            {
                pergunta:
                    'De acordo com a Lei de Le Chatelier, se um sistema químico em equilíbrio químico endotérmico sofrer um aumento de temperatura:',
                question:
                    'According to Le Chatelier Principle, if a chemical system in endothermic chemical equilibrium undergoes a temperature increase:',
                opcaoA: 'O equilíbrio se deslocará no sentido de favorecer os reagentes.',
                optionA: 'The equilibrium will shift toward favoring the reactants.',
                opcaoB: 'O equilíbrio se deslocará no sentido de favorecer os produtos (sentido endotérmico).',
                optionB:
                    'The equilibrium will shift toward favoring the products (endothermic direction).',
                opcaoC: 'A constante de equilíbrio diminuirá instantaneamente a zero.',
                optionC: 'The equilibrium constant will instantly drop to zero.',
                opcaoD: 'A reação cessará completamente devido à desnaturação atômica.',
                optionD: 'The reaction will stop completely due to atomic denaturation.',
                opcaoE: 'A pressão total interna cairá pela metade.',
                optionE: 'The internal net pressure will drop by half.',
                respostaCorreta:
                    'O equilíbrio se deslocará no sentido de favorecer os produtos (sentido endotérmico).',
                correctAnswer:
                    'The equilibrium will shift toward favoring the products (endothermic direction).',
                explicacao:
                    'O aumento térmico atua como fornecimento de reagente energético em sistemas endotérmicos, deslocando o equilíbrio para a direita.',
                explanation:
                    'Thermal increase acts as an energy input in endothermic systems, shifting the equilibrium to the right to absorb excess heat.',
                materia: 'Química',
            },
            {
                pergunta:
                    'O principal componente do gás de cozinha (GLP) e dos hidrocarbonetos alcanos gasosos possui uma cadeia carbônica caracterizada como:',
                question:
                    'The main component of liquefied petroleum gas (LPG) and gaseous alkane hydrocarbons has a carbon chain characterized as:',
                opcaoA: 'Fechada, aromática e insaturada.',
                optionA: 'Closed, aromatic, and unsaturated.',
                opcaoB: 'Aberta, saturada e homogênea.',
                optionB: 'Open, saturated, and homogeneous.',
                opcaoC: 'Cíclica, ramificada e heterogênea.',
                optionC: 'Cyclic, branched, and heterogeneous.',
                opcaoD: 'Inorgânica oxigenada polimérica.',
                optionD: 'Inorganic oxygenated polymeric.',
                opcaoE: 'Alcina insaturada por tripla ligação.',
                optionE: 'Alkyne unsaturated by triple bond.',
                respostaCorreta: 'Aberta, saturada e homogênea.',
                correctAnswer: 'Open, saturated, and homogeneous.',
                explicacao:
                    'Gases alcanos como o propano (C₃H₈) e o butano (C₄H₁₀) contêm cadeias lineares lineares contendo apenas ligações simples entre carbonos.',
                explanation:
                    'Alkane gases such as propane (C₃H₈) and butane (C₄H₁₀) contain open-chain networks containing only single bonds between carbons.',
                materia: 'Química',
            },
            {
                pergunta:
                    'As forças intermoleculares determinam os pontos de ebulição das substâncias. A água (H₂O) possui alto ponto de ebulição devido à presença de:',
                question:
                    'Intermolecular forces determine substance boiling points. Water (H₂O) has a high boiling point due to the presence of:',
                opcaoA: 'Forças de dipolo induzido-dipolo induzido (London).',
                optionA: 'Induced dipole-induced dipole forces (London dispersals).',
                opcaoB: 'Ligações de hidrogênio (pontes de hidrogênio).',
                optionB: 'Hydrogen bonds.',
                opcaoC: 'Ligações covalentes apolares intrínsecas.',
                optionC: 'Intrinsic non-polar covalent bonds.',
                opcaoD: 'Atrações eletrostáticas iônicas permanentes.',
                optionD: 'Permanent ionic electrostatic attractions.',
                opcaoE: 'Interações do tipo íon-dipolo solvatado.',
                optionE: 'Solvated ion-dipole interactions.',
                respostaCorreta: 'Ligações de hidrogênio (pontes de hidrogênio).',
                correctAnswer: 'Hydrogen bonds.',
                explicacao:
                    'As ligações de hidrogênio são interações dipolo-dipolo extremamente fortes que ocorrem quando o hidrogênio está ligado ao F, O ou N.',
                explanation:
                    'Hydrogen bonds are extremely strong dipole-dipole interactions that occur when hydrogen is directly bound to F, O, or N.',
                materia: 'Química',
            },
            {
                pergunta:
                    'Na tabela periódica, os elementos de um mesmo grupo ou família apresentam como característica comum primordial:',
                question:
                    'In the periodic table, elements of the same group or family feature as a primary common characteristic:',
                opcaoA: 'O mesmo número de camadas eletrônicas ocupadas.',
                optionA: 'The same number of occupied electron shells.',
                opcaoB: 'O mesmo número de elétrons na camada de valência.',
                optionB: 'The same number of electrons in the valence shell.',
                opcaoC: 'Massas atômicas rigorosamente idênticas.',
                optionC: 'Rigorously identical atomic masses.',
                opcaoD: 'O mesmo raio atômico calculado em picômetros.',
                optionD: 'The same atomic radius measured in picometers.',
                opcaoE: 'Igual valor absolute de eletronegatividade molecular.',
                optionE: 'Equal absolute value of molecular electronegativity.',
                respostaCorreta: 'O mesmo número de elétrons na camada de valência.',
                correctAnswer: 'The same number of electrons in the valence shell.',
                explicacao:
                    'O número de elétrons periféricos determina as propriedades químicas semelhantes dos elementos situados na mesma coluna vertical.',
                explanation:
                    'The number of peripheral valence electrons determines the similar chemical properties of elements located in the same vertical column.',
                materia: 'Química',
            },
            {
                pergunta:
                    'Uma reação química cuja variação de entalpia apresenta sinal negativo (ΔH < 0) classifica-se termoquimicamente como:',
                question:
                    'A chemical reaction whose enthalpy variation features a negative sign (ΔH < 0) is classified thermochemically as:',
                opcaoA: 'Endotérmica, pois absorve calor do meio.',
                optionA: 'Endothermic, because it absorbs heat from the medium.',
                opcaoB: 'Exotérmica, pois libera calor para o meio.',
                optionB: 'Exothermic, because it releases heat to the medium.',
                opcaoC: 'Isotérmica, mantendo a energia interna nula.',
                optionC: 'Isothermal, keeping net internal energy zero.',
                opcaoD: 'Espontânea nuclear catalisada por enzimas.',
                optionD: 'Spontaneous nuclear enzyme-catalyzed reaction.',
                opcaoE: 'Atrópica, sem troca de massas entrópicas.',
                optionE: 'Atropic, without exchange of entropic masses.',
                respostaCorreta: 'Exotérmica, pois libera calor para o meio.',
                correctAnswer: 'Extermic, because it releases heat to the medium.',
                explicacao:
                    'Quando a entalpia dos produtos é menor que a dos reagentes, o excedente energético é liberado sob a forma de calor calórico.',
                explanation:
                    'When product enthalpy is lower than reactant enthalpy, the energy surplus is released in the form of caloric heat.',
                materia: 'Química',
            },
            {
                pergunta:
                    'O fenômeno da Radioatividade envolve emissões nucleares. A partícula Alfa (α) é constituída por:',
                question:
                    'The phenomenon of Radioactivity involves nuclear emissions. The Alpha (α) particle consists of:',
                opcaoA: 'Um elétron de alta energia emitido de um nêutron.',
                optionA: 'A high-energy electron emitted from a neutron.',
                opcaoB: 'Uma onda eletromagnética semelhante aos raios X.',
                optionB: 'An electromagnetic wave similar to X-rays.',
                opcaoC: 'Dois prótons e dois nêutrons (núcleo de Hélio-4).',
                optionC: 'Two protons and two neutrons (Helium-4 nucleus).',
                opcaoD: 'Um pósitron de carga elétrica elementar positiva.',
                optionD: 'A positron with elemental positive electric charge.',
                opcaoE: 'Um feixe purificado de neutrinos solares astrofísicos.',
                optionE: 'A purified beam of astrophysical solar neutrinos.',
                respostaCorreta: 'Dois prótons e dois nêutrons (núcleo de Hélio-4).',
                correctAnswer: 'Two protons and two neutrons (Helium-4 nucleus).',
                explicacao:
                    'A partícula alfa possui carga +2 e massa 4. Tem baixo poder de penetração físico, sendo detida por folhas de papel comum.',
                explanation:
                    'The alpha particle carries a +2 charge and mass 4. It has low physical penetration power, being stopped by standard sheets of paper.',
                materia: 'Química',
            },
            {
                pergunta:
                    'A destilação fracionada é o método físico ideal para separação dos componentes homogêneos contidos no:',
                question:
                    'Fractional distillation is the ideal physical method for separating homogeneous components contained in:',
                opcaoA: 'Mistura de água e areia lavada.',
                optionA: 'Mixture of water and washed sand.',
                opcaoB: 'Petróleo bruto cru industrial.',
                optionB: 'Crude industrial petroleum oil.',
                opcaoC: 'Sangue humano total centrifugado.',
                optionC: 'Centrifuged whole human blood.',
                opcaoD: 'Arroz e feijão cru misturados.',
                optionD: 'Mixed raw rice and beans.',
                opcaoE: 'Granito comercial trifásico.',
                optionE: 'Three-phase commercial granite.',
                respostaCorreta: 'Petróleo bruto cru industrial.',
                correctAnswer: 'Crude industrial petroleum oil.',
                explicacao:
                    'A destilação fracionada separa líquidos miscíveis homogêneos com base em seus diferentes pontos de ebulição em torres industriais (frações).',
                explanation:
                    'Fractional distillation separates homogeneous miscible liquids based on their distinct boiling points in industrial towers.',
                materia: 'Química',
            },

            // Língua Portuguesa
            {
                pergunta:
                    'Na sintaxe da língua portuguesa, as orações coordenadas sindéticas explicativas são introduzidas por quais conjunções?',
                question:
                    'In Portuguese syntax, explanatory syndetic coordinate clauses are introduced by which conjunctions?',
                opcaoA: 'Mas, porém, contudo.',
                optionA: 'Mas, porém, contudo (But, however, nevertheless).',
                opcaoB: 'Portanto, logo, por conseguinte.',
                optionB: 'Portanto, logo, por conseguinte (Therefore, so, consequently).',
                opcaoC: 'Porque, que, pois (antes do verbo).',
                optionC: 'Porque, que, pois (Because, for, as - before the verb).',
                opcaoD: 'Se, caso, contanto que.',
                optionD: 'Se, caso, contanto que (If, in case, as long as).',
                opcaoE: 'Embora, conquanto, ainda que.',
                optionE: 'Embora, conquanto, ainda que (Although, even though).',
                respostaCorreta: 'Porque, que, pois (antes do verbo).',
                correctAnswer: 'Porque, que, pois (Because, for, as - before the verb).',
                explicacao:
                    'As conjunções explicativas justificam a afirmação feita na oração anterior. Se "pois" estivesse deslocado após o verbo, seria conclusivo.',
                explanation:
                    'Explanatory conjunctions justify the statement made in the preceding clause. If "pois" were placed after the verb, it would be conclusive.',
                materia: 'Língua Portuguesa',
            },
            {
                pergunta:
                    'Identifique o recurso expressivo de linguagem (figura de sintaxe) presente na frase: "A maioria dos estudantes decidiram revisar a matéria."',
                question:
                    'Identify the expressive language resource (syntax figure) present in: "A maioria dos estudantes decidiram revisar a matéria" (The majority of students decided to review).',
                opcaoA: 'Metonímia quantitativa.',
                optionA: 'Quantitative metonymy.',
                opcaoB: 'Silepse de número.',
                optionB: 'Silepsis of number.',
                opcaoC: 'Pleonasmo vicioso literário.',
                optionC: 'Literary vicious pleonasm.',
                opcaoD: 'Hipérbato invertido estrutural.',
                optionD: 'Structural inverted hyperbaton.',
                opcaoE: 'Anáfora poética rimada.',
                optionE: 'Rhymed poetic anaphora.',
                respostaCorreta: 'Silepse de número.',
                correctAnswer: 'Silepsis of number.',
                explicacao:
                    'A silepse é uma concordância ideológica e não gramatical. O verbo concorda com a ideia de plural contida em "estudantes" e não com o núcleo singular "maioria".',
                explanation:
                    'Silepsis is an ideological rather than a grammatical agreement. The verb agrees with the plural idea in "students" instead of the singular "majority".',
                materia: 'Língua Portuguesa',
            },
            {
                pergunta:
                    'O uso correto do acento indicativo de crase está estruturado gramaticalmente em qual das opções?',
                question:
                    'The correct use of the grave accent indicating crase is grammatically structured in which option?',
                opcaoA: 'Ele viajou à cavalo durante a tarde.',
                optionA: 'Ele viajou à cavalo durante a tarde.',
                opcaoB: 'Entreguei os relatórios à uma secretária atenciosa.',
                optionB: 'Entreguei os relatórios à uma secretária atenciosa.',
                opcaoC: 'O candidato referiu-se à proposta apresentada ontem.',
                optionC: 'O candidato referiu-se à proposta apresentada ontem.',
                opcaoD: 'Eles decidiram caminhar passo à passo pela trilha.',
                optionD: 'Eles decidiram caminhar passo à passo pela trilha.',
                opcaoE: 'Fiquei disposto à realizar novos exames se necessário.',
                optionE: 'Fiquei disposto à realizar novos exames se necessário.',
                respostaCorreta: 'O candidato referiu-se à proposta apresentada ontem.',
                correctAnswer: 'O candidato referiu-se à proposta apresentada ontem.',
                explicacao:
                    'O verbo "referir-se" exige preposição "a" e o substantivo feminino "proposta" aceita artigo feminino "a". Não ocorre crase antes de palavras masculinas, verbos ou artigos indefinidos.',
                explanation:
                    'The verb requires the preposition "a" and the noun accepts the article "a". Crase does not happen before masculine words, verbs, or indefinite articles.',
                materia: 'Língua Portuguesa',
            },
            {
                pergunta:
                    'Em "O jovem comprou o livro cujo autor foi premiado", a palavra "cujo" desempenha função sintática pronominal de:',
                question:
                    'In "O jovem comprou o livro cujo autor foi premiado", the relative word "cujo" performs a pronominal syntactic function of:',
                opcaoA: 'Objeto direto nominal.',
                optionA: 'Nominal direct object.',
                opcaoB: 'Adjunto adnominal (estabelecendo posse).',
                optionB: 'Adnominal adjunct (establishing possession).',
                opcaoC: 'Complemento nominal passivo.',
                optionC: 'Passive nominal complement.',
                opcaoD: 'Sujeito indeterminado passivo.',
                optionD: 'Passive indeterminate subject.',
                opcaoE: 'Aposto especificativo explicativo.',
                optionE: 'Explanatory specificative appositive.',
                respostaCorreta: 'Adjunto adnominal (estabelecendo posse).',
                correctAnswer: 'Adnominal adjunct (establishing possession).',
                explicacao:
                    'O pronome relativo "cujo" concorda em gênero e número com o termo consequente e expressa uma relação intrínseca de posse ("autor do livro").',
                explanation:
                    'The relative pronoun "cujo" agrees with the following noun and expresses an intrinsic relationship of possession ("author of the book").',
                materia: 'Língua Portuguesa',
            },
            {
                pergunta:
                    'No gênero textual crônica, muito explorado em exames de vestibulares, predomina qual característica estrutural?',
                question:
                    'In the chronicle textual genre, widely explored in college entry exams, which structural feature predominates?',
                opcaoA: 'Linguagem técnica e formalismo científico rigoroso.',
                optionA: 'Technical language and rigorous scientific formalism.',
                opcaoB: 'Reflexões cotidianas com marcas de informalidade e lirismo.',
                optionB: 'Daily reflections with marks of informality and lyricism.',
                opcaoC: 'Estruturação rigorosa em estrofes e versos decassílabos.',
                optionC: 'Rigorous structuring in decasyllabic stanzas and verses.',
                opcaoD: 'Ausência total de elementos narrativos fictícios.',
                optionD: 'Total absence of fictitious narrative elements.',
                opcaoE: 'Caráter jurídico impositivo de leis estatais.',
                optionE: 'Enforcing legal character of state laws.',
                respostaCorreta: 'Reflexões cotidianas com marcas de informalidade e lirismo.',
                correctAnswer: 'Daily reflections with marks of informality and lyricism.',
                explicacao:
                    'A crônica parte de fatos simples do dia a dia, misturando jornalismo e literatura, aproximando o autor do leitor comum.',
                explanation:
                    'The chronicle stems from mundane everyday events, mixing journalism and literature, lowering distances between author and readers.',
                materia: 'Língua Portuguesa',
            },
            {
                pergunta:
                    'Na frase: "Espero que você venha logo", a oração subordinada classifica-se sintaticamente como:',
                question:
                    'In the sentence: "Espero que você venha logo", the subordinate clause is syntactically classified as:',
                opcaoA: 'Oração subordinada substantiva objetiva direta.',
                optionA: 'Substantive direct objective subordinate clause.',
                opcaoB: 'Oração subordinada adverbial causal.',
                optionB: 'Adverbial causal subordinate clause.',
                opcaoC: 'Oração subordinada adjetiva explicativa.',
                optionC: 'Adjective explanatory subordinate clause.',
                opcaoD: 'Oração subordinada substantiva subjetiva.',
                optionD: 'Substantive subjective subordinate clause.',
                opcaoE: 'Oração coordenada assindética.',
                optionE: 'Asyndetic coordinate clause.',
                respostaCorreta: 'Oração subordinada substantiva objetiva direta.',
                correctAnswer: 'Substantive direct objective subordinate clause.',
                explicacao:
                    'A oração "que você venha logo" atua como objeto direto do verbo transitivo direto "espero" (Espero ISTO).',
                explanation:
                    'The clause acts as the direct object of the transitive verb "espero" (I hope for THIS).',
                materia: 'Língua Portuguesa',
            },
            {
                pergunta:
                    'As funções da linguagem definem a intenção do emissor. O predomínio de termos focados em convencer o receptor caracteriza a função:',
                question:
                    'Functions of language define the sender intent. The predominance of terms focused on convincing the receiver characterizes the function:',
                opcaoA: 'Função emotiva ou expressiva.',
                optionA: 'Emotive or expressive function.',
                opcaoB: 'Função conativa ou apelativa.',
                optionB: 'Conative or appellative function.',
                opcaoC: 'Função metalinguística conceitual.',
                optionC: 'Conceptual metalinguistic function.',
                opcaoD: 'Função fática de contato.',
                optionD: 'Phatic contact function.',
                opcaoE: 'Função poética formal.',
                optionE: 'Formal poetic function.',
                respostaCorreta: 'Função conativa ou apelativa.',
                correctAnswer: 'Conative or appellative function.',
                explicacao:
                    'A função conativa foca no receptor, utilizando verbos no imperativo e pronomes de tratamento para induzir comportamentos (comum em publicidades).',
                explanation:
                    'The conative function centers on the receiver, using imperative verbs and second-person pronouns to influence behaviors.',
                materia: 'Língua Portuguesa',
            },
            {
                pergunta:
                    'A variação linguística diatópica (ou geográfica) manifesta-se formalmente através de:',
                question:
                    'Diatopic (or geographical) linguistic variation manifests itself formally through:',
                opcaoA: 'Diferenças de vocabulário e sotaque entre regiões distintas de um mesmo país.',
                optionA:
                    'Differences in vocabulary and accent between distinct regions of the same country.',
                opcaoB: 'Gírias profissionais restritas a médicos ou advogados seniores.',
                optionB: 'Professional jargon restricted to senior doctors or lawyers.',
                opcaoC: 'Evolução histórica de termos arcaicos como "vossa mercê" para "você".',
                optionC: 'Historical evolution of archaic terms across centuries.',
                opcaoD: 'Níveis de formalidade exigidos em atas e documentos burocráticos.',
                optionD: 'Levels of formality required in minutes and bureaucratic files.',
                opcaoE: 'Erros gramaticais primários cometidos por crianças em alfabetização.',
                optionE: 'Primary grammatical mistakes committed by children during literacy.',
                respostaCorreta:
                    'Diferenças de vocabulário e sotaque entre regiões distintas de um mesmo país.',
                correctAnswer:
                    'Differences in vocabulary and accent between distinct regions of the same country.',
                explicacao:
                    'A variação diatópica é espacial (ex: macaxeira/aipim/mandioca em diferentes estados do Brasil).',
                explanation:
                    'Diatopic variation is spatial-bound (e.g., different regional names for the same vegetable across states).',
                materia: 'Língua Portuguesa',
            },
            {
                pergunta:
                    'Assinale a alternativa que apresenta desvio em relação à concordância verbal padrão:',
                question:
                    'Choose the alternative that presents a deviation from standard verbal agreement:',
                opcaoA: 'Fas cinco anos que não visito minha cidade natal.',
                optionA: 'Faz cinco anos que não visito minha cidade natal.',
                opcaoB: 'Houveram muitos problemas na organização do evento ontem.',
                optionB: 'Houveram muitos problemas na organização do evento ontem.',
                opcaoC: 'Fomos nós que elaboramos todo o projeto estrutural.',
                optionC: 'Fomos nós que elaboramos todo o projeto estrutural.',
                opcaoD: 'Mais de um candidato criticou severamente as novas regras.',
                optionD: 'Mais de um candidato criticou severamente as novas regras.',
                opcaoE: 'Choveu granizo intensamente durante a madrugada de sábado.',
                optionE: 'Choveu granizo intensamente durante a madrugada de sábado.',
                respostaCorreta: 'Houveram muitos problemas na organização do evento ontem.',
                correctAnswer: 'Houveram muitos problemas na organização do evento ontem.',
                explicacao:
                    'O verbo "haver" no sentido de existir ou acontecer é impessoal, devendo permanecer obrigatoriamente na 3ª pessoa do singular (O correto é: Houve muitos problemas).',
                explanation:
                    'The verb "haver" meaning to exist or happen is impersonal, requiring the 3rd person singular form (Correct: Houve muitos problemas).',
                materia: 'Língua Portuguesa',
            },
            {
                pergunta: 'O mecanismo de coesão textual anafórica consiste essencialmente em:',
                question: 'The mechanism of anaphoric textual cohesion essentially consists of:',
                opcaoA: 'Antecipar um termo que ainda será expresso no corpo do texto.',
                optionA: 'Anticipating a term that is yet to be expressed in the text body.',
                opcaoB: 'Retomar uma palavra ou ideia que já foi mencionada anteriormente.',
                optionB: 'Referencing a word or idea that has already been mentioned earlier.',
                opcaoC: 'Omitir um termo facilmente dedutível pelo contexto gramatical.',
                optionC: 'Omitting a term easily deducible by grammatical context.',
                opcaoD: 'Utilizar repetições excessivas de conjunções coordenativas.',
                optionD: 'Using excessive repetitions of coordinate conjunctions.',
                opcaoE: 'Introduzir contradições lógicas insolúveis no parágrafo.',
                optionE: 'Introducing insoluble logical contradictions in the paragraph.',
                respostaCorreta:
                    'Retomar uma palavra ou ideia que já foi mencionada anteriormente.',
                correctAnswer:
                    'Referencing a word or idea that has already been mentioned earlier.',
                explicacao:
                    'A anáfora evita repetições cansativas usando pronomes, sinônimos ou advérbios para evocar elementos já expressos.',
                explanation:
                    'Anaphora prevents repetitive wording by using pronouns, synonyms, or adverbs to recall elements already presented.',
                materia: 'Língua Portuguesa',
            },

            // Matemática
            {
                pergunta:
                    'Se uma função afim f(x) = ax + b passa pelos pontos (0, 3) e (2, 7), os valores dos coeficientes a e b são, respectivamente:',
                question:
                    'If an affine function f(x) = ax + b passes through points (0, 3) and (2, 7), the values of coefficients a and b are, respectively:',
                opcaoA: 'a = 3 e b = 2.',
                optionA: 'a = 3 and b = 2.',
                opcaoB: 'a = 2 e b = 3.',
                optionB: 'a = 2 and b = 3.',
                opcaoC: 'a = 4 e b = 3.',
                optionC: 'a = 4 and b = 3.',
                opcaoD: 'a = 1 e b = 5.',
                optionD: 'a = 1 and b = 5.',
                opcaoE: 'a = 0 e b = 7.',
                optionE: 'a = 0 and b = 7.',
                respostaCorreta: 'a = 2 e b = 3.',
                correctAnswer: 'a = 2 and b = 3.',
                explicacao:
                    'O ponto (0,3) indica que b = 3 (coeficiente linear). Substituindo (2,7): 7 = a(2) + 3 => 2a = 4 => a = 2.',
                explanation:
                    'The point (0,3) indicates that b = 3 (y-intercept). Substituting (2,7): 7 = a(2) + 3 => 2a = 4 => a = 2.',
                materia: 'Matemática',
            },
            {
                pergunta:
                    'Uma loja vende um produto por R$ 200,00. Se conceder um desconto sucessivo de 10% seguido por outro desconto de 10%, o preço final será:',
                question:
                    'A shop sells an item for R$ 200.00. If it applies successive discounts of 10% followed by another 10%, the final price will be:',
                opcaoA: 'R$ 160,00.',
                optionA: 'R$ 160.00.',
                opcaoB: 'R$ 162,00.',
                optionB: 'R$ 162.00.',
                opcaoC: 'R$ 180,00.',
                optionC: 'R$ 180.00.',
                opcaoD: 'R$ 170,00.',
                optionD: 'R$ 170.00.',
                opcaoE: 'R$ 190,00.',
                optionE: 'R$ 190.00.',
                respostaCorreta: 'R$ 162,00.',
                correctAnswer: 'R$ 162.00.',
                explicacao:
                    'O primeiro desconto reduz o preço para R$ 180,00 (200 - 20). O segundo desconto tira 10% de 180, ou seja, R$ 18,00, resultando em R$ 162,00.',
                explanation:
                    'The first discount lowers the price to R$ 180.00 (200 - 20). The second discount takes 10% off 180, which is R$ 18.00, resulting in R$ 162.00.',
                materia: 'Matemática',
            },
            {
                pergunta:
                    'A quantidade de anagramas que podem ser formados a partir da palavra VESTIBULAR é calculada por:',
                question:
                    'The amount of anagrams that can be formed from the word VESTIBULAR is calculated by:',
                opcaoA: '10! (Fatorial de 10).',
                optionA: '10! (Factorial of 10).',
                opcaoB: '10! / 2! devido a repetições.',
                optionB: '10! / 2! due to repetitions.',
                opcaoC: 'Análise combinatória de combinação simples C(10, 2).',
                optionC: 'Simple combination analysis C(10, 2).',
                opcaoD: 'Arranjo simples A(10, 5).',
                optionD: 'Simple arrangement A(10, 5).',
                opcaoE: 'Progressão geométrica de razão 10.',
                optionE: 'Geometric progression of ratio 10.',
                respostaCorreta: '10! (Fatorial de 10).',
                correctAnswer: '10! (Factorial of 10).',
                explicacao:
                    'A palavra VESTIBULAR possui 10 letras distintas sem nenhuma repetição. O número total de permutações lineares equivale a 10!.',
                explanation:
                    'The word VESTIBULAR has 10 distinct letters without any repetition. The total number of linear permutations equals 10!.',
                materia: 'Matemática',
            },
            {
                pergunta:
                    'Em uma urna existem 4 bolas vermelhas e 6 bolas azuis. Retirando-se uma bola ao acaso, a probabilidade de ela ser vermelha é:',
                question:
                    'In an urn, there are 4 red balls and 6 blue balls. Removing one ball at random, the probability of it being red is:',
                opcaoA: '40%.',
                optionA: '40%.',
                opcaoB: '60%.',
                optionB: '60%.',
                opcaoC: '4%.',
                optionC: '4%.',
                opcaoD: '25%.',
                optionD: '25%.',
                opcaoE: '50%.',
                optionE: '50%.',
                respostaCorreta: '40%.',
                correctAnswer: '40%.',
                explicacao:
                    'A probabilidade é dada por casos favoráveis divididos pelo total: P = 4 / (4 + 6) = 4 / 10 = 0.40 ou 40%.',
                explanation:
                    'Probability is given by favorable outcomes divided by total: P = 4 / (4 + 6) = 4 / 10 = 0.40 or 40%.',
                materia: 'Matemática',
            },
            {
                pergunta:
                    'Um triângulo retângulo possui catetos medindo 6 cm e 8 cm. A medida de sua hipotenusa equivale a:',
                question:
                    'A right triangle has legs measuring 6 cm and 8 cm. The measure of its hypotenuse equals:',
                opcaoA: '14 cm.',
                optionA: '14 cm.',
                opcaoB: '10 cm.',
                optionB: '10 cm.',
                opcaoC: '100 cm.',
                optionC: '100 cm.',
                opcaoD: '12 cm.',
                optionD: '12 cm.',
                opcaoE: '5 cm.',
                optionE: '5 cm.',
                respostaCorreta: '10 cm.',
                correctAnswer: '10 cm.',
                explicacao:
                    'Pelo Teorema de Pitágoras: h² = 6² + 8² => h² = 36 + 64 => h² = 100 => h = 10 cm. Este é um múltiplo do triângulo pitagórico clássico 3-4-5.',
                explanation:
                    'By the Pythagorean Theorem: h² = 6² + 8² => h² = 36 + 64 => h² = 100 => h = 10 cm. This is a multiple of the classic 3-4-5 triangle.',
                materia: 'Matemática',
            },
            {
                pergunta: 'O valor do logaritmo de 1000 na base 10 (log₁₀ 1000) equivale a:',
                question: 'The value of the logarithm of 1000 in base 10 (log₁₀ 1000) equals:',
                opcaoA: '10.',
                optionA: '10.',
                opcaoB: '3.',
                optionB: '3.',
                opcaoC: '100.',
                optionC: '100.',
                opcaoD: '1.',
                optionD: '1.',
                opcaoE: '0.3.',
                optionE: '0.3.',
                respostaCorreta: '3.',
                correctAnswer: '3.',
                explicacao:
                    'Por definição de logaritmo, procuramos o expoente x tal que 10^x = 1000. Como 10³ = 1000, o resultado é 3.',
                explanation:
                    'By log definition, we search for the exponent x such that 10^x = 1000. Since 10³ = 1000, the result is 3.',
                materia: 'Matemática',
            },
            {
                pergunta:
                    'A média aritmética simples de um conjunto de dados contendo as notas 5, 7, 8 e 10 de um estudante equivale a:',
                question:
                    'The simple arithmetic mean of a data set containing a student grades 5, 7, 8, and 10 equals:',
                opcaoA: '7.0.',
                optionA: '7.0.',
                opcaoB: '7.5.',
                optionB: '7.5.',
                opcaoC: '8.0.',
                optionC: '8.0.',
                opcaoD: '6.5.',
                optionD: '6.5.',
                opcaoE: '9.0.',
                optionE: '9.0.',
                respostaCorreta: '7.5.',
                correctAnswer: '7.5.',
                explicacao:
                    'Soma-se os valores e divide-se pela quantidade de elementos: M = (5 + 7 + 8 + 10) / 4 = 30 / 4 = 7.5.',
                explanation:
                    'Sum values and divide by the number of elements: M = (5 + 7 + 8 + 10) / 4 = 30 / 4 = 7.5.',
                materia: 'Matemática',
            },
            {
                pergunta:
                    'A área de um círculo cujo raio mede exatamente 10 metros, adotando pi = 3.14, equivale a:',
                question:
                    'The area of a circle whose radius measures exactly 10 meters, assuming pi = 3.14, equals:',
                opcaoA: '31.4 metros quadrados.',
                optionA: '31.4 square meters.',
                opcaoB: '314 metros quadrados.',
                optionB: '314 square meters.',
                opcaoC: '62.8 metros quadrados.',
                optionC: '62.8 square meters.',
                opcaoD: '100 metros quadrados.',
                optionD: '100 square meters.',
                opcaoE: '3140 metros quadrados.',
                optionE: '3140 square meters.',
                respostaCorreta: '314 metros quadrados.',
                correctAnswer: '314 square meters.',
                explicacao:
                    'A fórmula da área circular é A = pi * r². Logo, A = 3.14 * (10²) = 3.14 * 100 = 314 metros quadrados.',
                explanation:
                    'The formula for circular area is A = pi * r². Thus, A = 3.14 * (10²) = 3.14 * 100 = 314 square meters.',
                materia: 'Matemática',
            },
            {
                pergunta:
                    'Em uma progressão aritmética (PA) cujo primeiro termo é a1 = 5 e a razão é r = 3, o décimo termo (a10) será:',
                question:
                    'In an arithmetic progression (AP) where the first term is a1 = 5 and the common difference is r = 3, the tenth term (a10) will be:',
                opcaoA: '35.',
                optionA: '35.',
                opcaoB: '32.',
                optionB: '32.',
                opcaoC: '27.',
                optionC: '27.',
                opcaoD: '50.',
                optionD: '50.',
                opcaoE: '45.',
                optionE: '45.',
                respostaCorreta: '32.',
                correctAnswer: '32.',
                explicacao:
                    'Usando a fórmula do termo geral: an = a1 + (n-1)*r. Portanto, a10 = 5 + (10-1)*3 = 5 + 9*3 = 5 + 27 = 32.',
                explanation:
                    'Using the general term formula: an = a1 + (n-1)*r. Therefore, a10 = 5 + (10-1)*3 = 5 + 9*3 = 5 + 27 = 32.',
                materia: 'Matemática',
            },
            {
                pergunta:
                    'Se a equação do segundo grau x² - 5x + 6 = 0 possui duas raízes reais x1 e x2, a soma dessas raízes equivale a:',
                question:
                    'If the quadratic equation x² - 5x + 6 = 0 has two real roots x1 and x2, the sum of these roots equals:',
                opcaoA: '6.',
                optionA: '6.',
                opcaoB: '5.',
                optionB: '5.',
                opcaoC: '-5.',
                optionC: '-5.',
                opcaoD: '2.',
                optionD: '2.',
                opcaoE: '3.',
                optionE: '3.',
                respostaCorreta: '5.',
                correctAnswer: '5.',
                explicacao:
                    'Pelas Relações de Girard (Soma e Produto), a soma das raízes de x² - Sx + P = 0 é dada por -b/a, que equivale a -(-5)/1 = 5.',
                explanation:
                    'By Girard relations (Sum and Product), the sum of roots for x² - Sx + P = 0 is given by -b/a, which equals -(-5)/1 = 5.',
                materia: 'Matemática',
            },

            // Artes
            {
                pergunta:
                    'O movimento Modernista no Brasil teve como marco a Semana de Arte Moderna de 1922. Sua principal proposta estética era:',
                question:
                    'The Modernist movement in Brazil had the 1922 Modern Art Week as its milestone. Its primary aesthetic proposal was:',
                opcaoA: 'A reprodução fiel dos padrões acadêmicos neoclássicos europeus.',
                optionA: 'The faithful reproduction of European neoclassical academic standards.',
                opcaoB: 'A ruptura com o academicismo e a busca por uma identidade artística genuinamente brasileira.',
                optionB:
                    'The break with academicism and the search for a genuinely Brazilian artistic identity.',
                opcaoC: 'A proibição do uso de cores quentes e vivas nas artes plásticas.',
                optionC: 'The prohibition of hot and bright colors in fine arts.',
                opcaoD: 'A valorização exclusiva de temas religiosos católicos tradicionais.',
                optionD: 'The exclusive valuation of traditional Catholic religious themes.',
                opcaoE: 'O retorno à pintura de iconografias medievais bizantinas.',
                optionE: 'The return to painting medieval Byzantine iconographies.',
                respostaCorreta:
                    'A ruptura com o academicismo e a busca por uma identidade artística genuinamente brasileira.',
                correctAnswer:
                    'The break with academicism and the search for a genuinely Brazilian artistic identity.',
                explicacao:
                    'O evento de 22 na capital paulista propôs deglutir influências das vanguardas europeias para criar uma linguagem artística nacional autônoma.',
                explanation:
                    'The 1922 event in São Paulo proposed digesting European vanguard influences to mold an autonomous national artistic language.',
                materia: 'Artes',
            },
            {
                pergunta:
                    'A técnica do claro-escuro (Chiaroscuro), muito explorada por pintores do Barroco europeu como Caravaggio, objetivava principalmente:',
                question:
                    'The Chiaroscuro technique, widely explored by European Baroque painters like Caravaggio, aimed primarily at:',
                opcaoA: 'Eliminar completamente as sombras das composições de estúdio.',
                optionA: 'Completely eliminating shadows from studio compositions.',
                opcaoB: 'Gerar dramaticidade e volume através de contrastes intensos de luz e sombra.',
                optionB:
                    'Generating emotional drama and volume through intense contrasts of light and shadow.',
                opcaoC: 'Imitar os padrões planos bidimensionais da arte egípcia antiga.',
                optionC: 'Imitating the flat two-dimensional standards of ancient Egyptian art.',
                opcaoD: 'Garantir a simetria matemática cartesiana perfeita dos rostos.',
                optionD: 'Guaranteeing perfect Cartesian mathematical symmetry of faces.',
                opcaoE: 'Pintar exclusivamente painéis ao ar livre durante o meio-dia.',
                optionE: 'Painting exclusively outdoor panels during midday.',
                respostaCorreta:
                    'Gerar dramaticidade e volume através de contrastes intensos de luz e sombra.',
                correctAnswer:
                    'Generating emotional drama and volume through intense contrasts of light and shadow.',
                explicacao:
                    'O forte contraste direciona o olhar do observador para os pontos focais teatrais, intensificando a carga emocional da cena religiosa ou mítica.',
                explanation:
                    "The stark contrast guides the viewer's gaze to theatrical focal points, intensifying the emotional weight of mythical or religious scenes.",
                materia: 'Artes',
            },
            {
                pergunta:
                    'O Cubismo, vanguarda europeia liderada por Pablo Picasso, revolucionou a pintura ocidental ao introduzir:',
                question:
                    'Cubism, a European vanguard led by Pablo Picasso, revolutionized Western painting by introducing:',
                opcaoA: 'A perspectiva linear exata projetada no Renascimento.',
                optionA: 'The exact linear perspective projected in the Renaissance.',
                opcaoB: 'A geometrização das formas e a representação de múltiplos pontos de vista simultâneos.',
                optionB:
                    'The geometrization of forms and representation of multiple simultaneous viewpoints.',
                opcaoC: 'A ausência total de linhas de contorno em paisagens impressionistas.',
                optionC: 'The total absence of outline lines in impressionistic landscapes.',
                opcaoD: 'O realismo fotográfico extremo em retratos da nobreza.',
                optionD: 'Extreme photographic realism in portraits of the nobility.',
                opcaoE: 'O uso exclusivo de pigmentos dourados extraídos de minas.',
                optionE: 'The exclusive use of golden pigments extracted from mines.',
                respostaCorreta:
                    'A geometrização das formas e a representação de múltiplos pontos de vista simultâneos.',
                correctAnswer:
                    'The geometrization of forms and representation of multiple simultaneous viewpoints.',
                explicacao:
                    'O Cubismo rompe com a ilusão tridimensional tradicional, fragmentando objetos na tela plana como se fossem vistos de vários ângulos ao mesmo tempo.',
                explanation:
                    'Cubism breaks with traditional three-dimensional illusion, fragmenting objects on the canvas as if viewed from multiple angles concurrently.',
                materia: 'Artes',
            },
            {
                pergunta:
                    'A arte renascentista resgatou preceitos estéticos da Antiguidade Clássica, destacando-se na pintura o uso de:',
                question:
                    'Renaissance art revived aesthetic concepts from Classical Antiquity, emphasizing in painting the use of:',
                opcaoA: 'Perspectiva linear geométrica, simetria e antropocentrismo.',
                optionA: 'Linear geometric perspective, symmetry, and anthropocentrism.',
                opcaoB: 'Abstracionismo geométrico bidimensional puro.',
                optionB: 'Pure two-dimensional geometric abstractionism.',
                opcaoC: 'Formas retorcidas sem preocupação com anatomia real.',
                optionC: 'Twisted forms with no concern for real anatomy.',
                opcaoD: 'Colagens industriais feitas com jornais rasgados.',
                optionD: 'Industrial collages made with torn newspapers.',
                opcaoE: 'Grafites urbanos pintados com tintas spray químicas.',
                optionE: 'Urban graffiti spray-painted with chemical spray cans.',
                respostaCorreta: 'Perspectiva linear geométrica, simetria e antropocentrismo.',
                correctAnswer: 'Linear geometric perspective, symmetry, and anthropocentrism.',
                explicacao:
                    'O Renascimento aplicou matemática e racionalidade nas artes, buscando a ilusão de profundidade e harmonia racional realista.',
                explanation:
                    'The Renaissance applied mathematics and rationality to arts, seeking realistic depth illusion and rational harmony.',
                materia: 'Artes',
            },
            {
                pergunta:
                    'O Impressionismo, movimento francês do final do século XIX, tinha como foco principal de seus pintores:',
                question:
                    'Impressionism, a late 19th-century French movement, had as its painters primary focus:',
                opcaoA: 'A denúncia explícita de problemas políticos operários.',
                optionA: 'The explicit denunciation of worker political hardships.',
                opcaoB: 'O estudo da luz solar direta e as mudanças de cores capturadas ao ar livre.',
                optionB: 'The study of direct sunlight and color variations captured outdoors.',
                opcaoC: 'O contorno preto nítido e espesso ao redor das figuras.',
                optionC: 'The thick, sharp black outline surrounding all figures.',
                opcaoD: 'A pintura em ateliês fechados e escuros sem janelas.',
                optionD: 'Painting inside dark windowless indoor studios.',
                opcaoE: 'A colagem de materiais industriais tridimensionais pesados.',
                optionE: 'The collage of heavy three-dimensional industrial elements.',
                respostaCorreta:
                    'O estudo da luz solar direta e as mudanças de cores capturadas ao ar livre.',
                correctAnswer:
                    'The study of direct sunlight and color variations captured outdoors.',
                explicacao:
                    'Pintores como Monet pesquisavam como a iluminação natural alterava a percepção visual das cores, usando pinceladas soltas e rápidas.',
                explanation:
                    'Painters like Monet researched how natural light modified visual color perceptions, utilizing quick detached brushstrokes.',
                materia: 'Artes',
            },
            {
                pergunta:
                    'O Surrealismo buscou inspiração nas teorias psicanalíticas de Sigmund Freud para criar uma arte baseada no:',
                question:
                    'Surrealism drew inspiration from Sigmund Freuds psychoanalytic theories to construct art centered on:',
                opcaoA: 'Cálculo lógico geométrico racional estruturado.',
                optionA: 'Rational structured geometric logical computation.',
                opcaoB: 'Mundo dos sonhos, do inconsciente e do automatismo psíquico.',
                optionB: 'The world of dreams, the unconscious mind, and psychic automatism.',
                opcaoC: 'Registro documental fotográfico da vida cotidiana rural.',
                optionC: 'Photographic documentary logging of rural daily routines.',
                opcaoD: 'Nacionalismo ufanista militar governamental imposto.',
                optionD: 'Imposed government military chauvinistic nationalism.',
                opcaoE: 'Minimalismo escultural monocromático industrial.',
                optionE: 'Industrial monochromatic sculptural minimalism.',
                respostaCorreta: 'Mundo dos sonhos, do inconsciente e do automatismo psíquico.',
                correctAnswer: 'The world of dreams, the unconscious mind, and psychic automatism.',
                explicacao:
                    'Artistas surrealistas (como Salvador Dalí) combinavam objetos incongruentes para desafiar a lógica consciente e evocar realidades oníricas.',
                explanation:
                    'Surrealist artists combined incongruous objects to defy conscious logic, invoking dream-like states and realities.',
                materia: 'Artes',
            },
            {
                pergunta:
                    'A Arte Pop (Pop Art), surgida nos anos 1950, utilizava frequentemente técnicas de reprodução em massa para:',
                question:
                    'Pop Art, emerging in the 1950s, frequently utilized mass reproduction techniques to:',
                opcaoA: 'Criticar e ironizar a sociedade de consumo e a cultura de massa.',
                optionA: 'Critique and ironize consumer society and mass culture.',
                opcaoB: 'Apoiar o retorno ao artesanato de luxo aristocrático medieval.',
                optionB: 'Support a return to medieval aristocratic luxury craftsmanship.',
                opcaoC: 'Afastar o público geral dos museus de arte contemporânea.',
                optionC: 'Steer the general public away from contemporary art museums.',
                opcaoD: 'Pintar exclusivamente paisagens florestais intocadas tropicais.',
                optionD: 'Exclusively paint untouched tropical forest landscapes.',
                opcaoE: 'Banir o uso de imagens publicitárias comerciais das telas.',
                optionE: 'Ban the use of commercial advertising images from canvases.',
                respostaCorreta: 'Criticar e ironizar a sociedade de consumo e a cultura de massa.',
                correctAnswer: 'Critique and ironize consumer society and mass culture.',
                explicacao:
                    'Ao retratar latas de sopa, quadrinhos e celebridades (como Warhol fazia), a Pop Art diluiu as fronteiras entre alta cultura e cultura popular.',
                explanation:
                    'By turning soup cans, comics, and celebrities into art, Pop Art blurred the boundaries between high art and popular culture.',
                materia: 'Artes',
            },
            {
                pergunta:
                    'O ready-made, conceito disruptivo introduzido por Marcel Duchamp no Dadaísmo, consistia em:',
                question:
                    'The ready-made, a disruptive concept introduced by Marcel Duchamp within Dadaism, consisted of:',
                opcaoA: 'Esculpir blocos de mármore com precisão milimétrica anatômica.',
                optionA: 'Sculpting marble blocks with anatomical accuracy.',
                opcaoB: 'Retirar um objeto industrial cotidiano de seu contexto comum e declará-lo arte.',
                optionB:
                    'Taking an everyday industrial object out of its common context and declaring it art.',
                opcaoC: 'Tecer tapetes decorativos gigantes utilizando fios de seda pura.',
                optionC: 'Weaving giant decorative rugs utilizing pure silk threads.',
                opcaoD: 'Projetar fachadas de palácios imperiais neoclássicos assimétricos.',
                optionD: 'Designing asymmetrical neoclassical imperial palace facades.',
                opcaoE: 'Fazer pinturas rupestres imitando técnicas pré-históricas.',
                optionE: 'Making rock paintings mimicking prehistoric methods.',
                respostaCorreta:
                    'Retirar um objeto industrial cotidiano de seu contexto comum e declará-lo arte.',
                correctAnswer:
                    'Taking an everyday industrial object out of its common context and declaring it art.',
                explicacao:
                    'Duchamp (com obras como a "Fonte") questionou o próprio conceito tradicional de arte e o papel da habilidade manual do artista na legitimação estética.',
                explanation:
                    'Duchamp questioned the traditional criteria of art and the necessity of structural manual craft to legitimate aesthetic value.',
                materia: 'Artes',
            },
            {
                pergunta:
                    'A arte urbana do Grafite, muito presente nas metrópoles contemporâneas, caracteriza-se essencialmente por:',
                question:
                    'The urban art of Graffiti, deeply present in contemporary metropolises, is essentially characterized by:',
                opcaoA: 'Ser realizada restritamente dentro de galerias comerciais fechadas.',
                optionA: 'Being carried out restrictively inside closed commercial galleries.',
                opcaoB: 'Apropriar-se do espaço público para expressar manifestações visuais sociais e estéticas.',
                optionB:
                    'Appropriating public space to express social, political, and aesthetic statements.',
                opcaoC: 'Utilizar apenas tintas a óleo aplicadas com pincéis medievais de pelo de animal.',
                optionC: 'Using only oil paints applied with medieval animal hair brushes.',
                opcaoD: 'Evitar qualquer diálogo ou interferência com a arquitetura da cidade.',
                optionD: 'Avoiding any dialogue or interference with city architecture.',
                opcaoE: 'Ser uma réplica idêntica de mosaicos bizantinos religiosos antigos.',
                optionE: 'Being an identical replica of ancient religious Byzantine mosaics.',
                respostaCorreta:
                    'Apropriar-se do espaço público para expressar manifestações visuais sociais e estéticas.',
                correctAnswer:
                    'Appropriating public space to express social, political, and aesthetic statements.',
                explicacao:
                    'O grafite utiliza muros, calçadas e prédios como suportes democráticos, subvertendo a paisagem urbana cinzenta e gerando debates visuais reflexivos.',
                explanation:
                    'Graffiti utilizes city infrastructure as support canvases, challenging sterile spaces and bringing artwork directly to citizens.',
                materia: 'Artes',
            },
            {
                pergunta:
                    'O Aleijadinho foi o maior expoente do Barroco e do Rococó no Brasil Colonial. Suas esculturas mais famosas foram esculpidas em:',
                question:
                    'Aleijadinho was the greatest exponent of Baroque and Rococo in Colonial Brazil. His most famous sculptures were carved in:',
                opcaoA: 'Madeira policromada e pedra-sabão.',
                optionA: 'Polychrome wood and soapstone.',
                opcaoB: 'Mármore de Carrara importado da Itália.',
                optionB: 'Carrara marble imported from Italy.',
                opcaoC: 'Bronze fundido em moldes termo-industriais.',
                optionC: 'Cast bronze created in thermo-industrial molds.',
                opcaoD: 'Plástico acrílico moldado a frio mecanicamente.',
                optionD: 'Acrylic plastic cold-molded mechanically.',
                opcaoE: 'Argila cozida em altos fornos de siderúrgicas.',
                optionE: 'Baked clay heated in high steel mill ovens.',
                respostaCorreta: 'Madeira policromada e pedra-sabão.',
                correctAnswer: 'Polychrome wood and soapstone.',
                explicacao:
                    'Em Minas Gerais, a falta de mármore levou ao uso genial da pedra-sabão local e da madeira, perceptível nas esculturas dos Profetas em Congonhas.',
                explanation:
                    'In Minas Gerais, the scarcity of marble led to the creative use of local soapstone and wood, visible in his masterpieces in Congonhas.',
                materia: 'Artes',
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
