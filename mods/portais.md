---
title: "Portais"
description: "Construa portais de obsidiana chorona de qualquer tamanho para teleporte rápido entre dois pontos, com permissões configuráveis e ligações permanentes."
---

# Portais

Portais de teleporte que você mesmo constrói com obsidiana chorona, ativa com uma caneta e controla quem pode usar. Servem pra ligar dois pontos do mapa (inclusive entre dimensões) sem depender de elytra ou de andar a pé — e dá pra deixar público pra todo mundo, privado só pra quem você escolher, ou até permanente.

## Como conseguir

Dois itens, os dois na bancada de crafting normal:

**Núcleo de Portal** — receita 3x3 (propositalmente cara, é o item que consagra um portal):

| | | |
|---|---|---|
| Olho do Ender | Diamante | Olho do Ender |
| Diamante | Obsidiana Chorona | Diamante |
| Olho do Ender | Diamante | Olho do Ender |

**Caneta Mágica de Ametista** — receita sem formato fixo: 1 caco de ametista + 1 graveto + 1 saco de tinta brilhante. Vem com um número limitado de usos (padrão 12).

## Construindo um portal

1. Construa uma moldura de obsidiana chorona igual a de um portal do Nether de verdade: a borda inteira (cantos inclusos) precisa ser obsidiana chorona, e o miolo que ela cerca precisa estar vazio — é por ali que você atravessa. Qualquer tamanho, de uma lasca sólida (1x1, sem miolo nenhum pra ter) até um limite de sanidade configurado pelos admins (padrão 23 blocos de lado); pode ser bem menor que um portal de Nether comum. A borda não pode ter falhas, o miolo não pode ter nada bloqueando (nem uma mistura de vazio com obsidiana), e o formato não pode ser torto (L, blob) — só retângulo reto.
2. Clique com o botão direito em qualquer bloco da moldura segurando o Núcleo de Portal. Isso consagra o portal (consome o Núcleo) e dá um número/id pra ele.
3. Um jogador pode ter no máximo um número limitado de portais ao mesmo tempo (padrão 8).

Quebrar a obsidiana de um portal (só o dono ou quem gerencia pode) desfaz o portal e devolve um Núcleo novinho pra quem quebrou — o material não se perde, só o trabalho de ativação.

Um portal recém-consagrado ainda não faz nada — precisa ser ativado (próxima seção).

## Ativação

Ativar liga um portal a um destino, por um tempo (ou pra sempre) — tudo numa GUI, sem precisar decorar dois portais correndo contra o relógio.

Clique com qualquer caneta (normal ou avançada) num portal que você gerencia: abre um painel com um seletor de modo em cima e a lista de portais que você tem acesso embaixo. Escolha o modo, depois clique no portal de destino na lista — ativa na hora.

Modos disponíveis:

| Modo | O que exige | Efeito |
|---|---|---|
| Presets curtos (10s / 5min / 1h, configurável) | Caneta normal OU Caneta Avançada | Com caneta normal: gasta 1 uso. Com Caneta Avançada: não gasta nada. |
| 24 horas | Caneta Avançada OU Caneta normal nova| Com caneta normal: consome-a INTEIRAMENTE de uma vez. Com Caneta Avançada: não gasta nada.|
| Permanente | Caneta Avançada | Ativa **pra sempre** (sobrevive a reinício) — a caneta NÃO é consumida, dá pra reusar quantas vezes quiser |

A lista de destino só mostra portais que você já tem acesso — não dá pra usar essa tela pra descobrir portal alheio que você não tem permissão nenhuma.

Com o portal ativo, basta entrar no vão da moldura (igual um portal do Nether) e ficar parado ali por cerca de 1 segundo — é o teleporte acontecendo. Assim como o portal do Nether vanilla, depois de teleportar você precisa sair do vão antes de poder ser puxado de novo — ficar parado dentro dele não fica te teleportando toda hora.

**Rede de segurança:** se o portal do outro lado não está ativo de volta pra você, ele ainda funciona como caminho de volta automaticamente — ninguém fica preso do outro lado só porque esqueceram de ativar o retorno. Esse caminho de volta ignora completamente a permissão normal do portal (é sempre livre), de propósito: quem já foi deixado entrar não devia achar a porta dos fundos trancada.

Também dá pra ativar sem precisar ter os dois portais decorados — veja `/portais selo ativar` nos comandos.

## Permissões

Cada portal é público (qualquer jogador usa) ou privado (só quem está na lista de acesso). Dois níveis: **USAR** (pode atravessar) e **GERENCIAR** (pode ativar/desativar, trocar público/privado, e dar acesso — inclusive GERENCIAR — pra outros jogadores).

Pra abrir o painel de um portal: agache e clique com o botão direito, com a mão vazia, na superfície dele.
- Se você gerencia esse portal, abre o painel completo.
- Se não gerencia, só mostra uma info rápida (dono, público ou privado).

No painel: lista paginada de jogadores por cabeça, clique esquerdo sobe o nível de acesso dele (sem acesso → usar → gerenciar → sem acesso de novo), clique direito remove o acesso na hora. Também dá pra alternar público/privado, renomear o portal (clique na etiqueta "Renomear portal" — abre uma placa pra você escrever o nome novo, igual à busca do Storage Manager), trocar a cor da superfície SÓ deste portal (clique no couro tingido "Cor da superfície" e escreva um hex de 6 ou 8 dígitos — vazio volta pra cor padrão do servidor), escolher a **direção da saída** (veja abaixo) e ver quanto tempo falta pra ativação expirar (ou se é uma ligação permanente).

### Lado da saída

Um portal é um plano, então quem chega só pode aparecer de **um dos dois lados** dele. Clique na **bússola "Lado da saída"** no painel pra alternar entre os dois — a tela mostra as duas opções com a ativa marcada, e quais cardinais são depende de como o portal está virado (Norte/Sul num portal de parede leste-oeste, Leste/Oeste num de parede norte-sul).

O lado é propriedade do portal de **destino**: quem atravessa aparece do lado que o dono daquele portal escolheu. Você sai **de costas pro portal, olhando pra frente** — o ângulo não é configurável em separado porque sair de um lado e ficar olhando pro outro nunca é o que se quer. Só a inclinação (olhar pra cima/baixo) é preservada.

Se o lado escolhido estiver intransitável na hora (alguém construiu ali, lava, etc.), o portal cai automaticamente pro outro lado em vez de recusar o teleporte — a escolha é uma preferência, não uma trava.

- **Portal novo** nasce com o lado onde **você estava quando consagrou** — normalmente é o que você quer, porque é o lado "de fora" que você preparou.
- **Portal criado antes desta atualização** fica no lado **norte** (ou oeste, se o portal for de parede norte-sul). Se ficou do lado errado, é um clique pra alternar.

Outra forma de dar acesso sem abrir o painel: o Selo de Permissão (veja comandos) — quem pegar o selo no inventário ganha USAR automaticamente e o selo se consome sozinho.

## Caneta Avançada

Faz ligações permanentes entre portais — não expira nunca, sobrevive a reinício do servidor. É uma ferramenta permanente: **nunca se consome**, dá pra usar quantas vezes quiser pra criar ou trocar a ligação de qualquer portal que você gerencie. E não tem receita de bancada: só se consegue forjando.

Pra forjar: largue no chão uma Caneta Mágica de Ametista normal (não precisa estar cheia) junto de uma Estrela do Nether, bem próximas uma da outra, embaixo do feixe de um farol (beacon) ativo — o farol precisa ter pelo menos 1 nível de pirâmide construído (um farol sem pirâmide nenhuma não conta). A combinação acontece na hora, sem espera, com um som de forja confirmando. Isso consome a caneta normal usada e a Estrela do Nether — só a caneta avançada RESULTANTE é que nunca mais se gasta.

## Comandos

| Comando | O que faz |
|---|---|
| `/portais` | mostra a lista de comandos |
| `/portais lista` | lista os seus portais |
| `/portais info <id>` | detalhes de um portal (dono, dimensão, público/privado, permissões, ligação permanente) |
| `/portais selo ativar <id-destino> [minutos]` | gera um selo vendável que ativa um portal seu rumo ao destino indicado |
| `/portais selo permissao <id-portal>` | gera um selo vendável que dá acesso de uso a um portal (precisa gerenciar esse portal) |
| `/portais admin lista` | (operador) lista todos os portais do servidor |

## Configuração

Os admins ajustam ao vivo, sem rebuild: tamanho máximo do retângulo de obsidiana (padrão 23 blocos de lado), quantos portais cada jogador pode ter (padrão 8), a lista de durações curtas do painel de ativação (padrão 10s / 5min / 1h), a duração da opção de queimar a caneta cheia (padrão 24h) e usos padrão de uma caneta nova (12). O nível mínimo de pirâmide do farol pra forjar a caneta avançada também é configurável (padrão 1). A cor PADRÃO da superfície (pra portais sem cor própria) também é configurável (`superficieCorARGB`, um hex ARGB) — pra mudar a cor de UM portal específico, use o botão "Cor da superfície" no painel dele (veja Permissões).

## Dicas

- Quebrar um portal devolve o Núcleo — não tem problema desmontar e remontar em outro lugar se errar a construção.
- Se alguém já ativou um portal até você, dá pra sempre voltar por ele, mesmo sem ter permissão de uso — não precisa pedir liberação só pra não ficar preso do outro lado.
- Portal privado sem ninguém na lista de acesso só funciona pro dono e quem ele promover — confira o painel (agache + clique vazio) se alguém disser que não consegue atravessar.
- A Caneta Avançada é reutilizável — depois de forjar uma, guarde-a: dá pra usar em qualquer portal que você gerencie, quantas vezes quiser, sem precisar forjar outra.
