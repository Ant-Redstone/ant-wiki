---
title: "Mochila"
description: "Mochilas, bolsas e coolers portáteis com muito mais espaço que o inventário normal, incluindo versões fundidas na perna."
---

# Mochila

Adiciona guardados portáteis que vão muito além do inventário e do baú comum: uma mochila com vários slots, uma bolsa que empilha um único item em quantidade absurda, um cooler que come por você, e a possibilidade de fundir qualquer uma dessas na sua perna pra nem gastar espaço do inventário.

## Como conseguir

Tudo sai da mesa de ferraria (base + adição), sem receita de bancada normal:

| Item | Base | Adição | Resultado |
|---|---|---|---|
| Mochila Pequena | Embrulho (bundle) | Baú | Mochila tier 1, 9 slots |
| Bolsa Pequena | Embrulho (bundle) | Hopper | Bolsa tier 1 |
| Cooler | Embrulho (bundle) | Gelo compactado | Cooler (3 slots de comida) |

Bolsa Tripla é diferente das outras: não sai da mesa de ferraria, e sim de uma **bancada de crafting comum**, shapeless — 3 Bolsas (qualquer tier, cheias ou vazias, em qualquer posição da grade) → 1 Bolsa Tripla, preservando o conteúdo de cada uma numa "linha" própria.

## Como usar

**Mochila** — clique direito (qualquer mão) abre um menu de baú com os slots dela em cima e seu inventário embaixo. Os 7 tiers vão de 9 até 108 slots; o tier 7 (Netherite) não cabe numa grade só, então abre paginado (3 páginas, com setas de navegação nos 2 últimos slots).

Evoluir de tier: mesa de ferraria, mochila (base) + o material seguinte (adição), sempre um tier de cada vez — cobre → ferro → ouro → esmeralda → diamante → lingote de netherite. Conteúdo, id interno e aparência sobrevivem ao upgrade.

Trocar aparência: mesa de ferraria, mochila (base) + qualquer cabeça de jogador que não seja outra mochila (adição) — troca só a textura, resto continua igual. Funciona com as cabeças do mod playerheads também, se instalado.

**Bolsa** — clique direito abre um menu compacto: um slot pra inserir (o que você joga ali é absorvido automaticamente), um ícone mostrando item + quantidade guardada (clique retira uma pilha, shift+clique retira tudo que couber no inventário), e um botão de Auto-Pickup (desligado por padrão) que puxa pro bolso qualquer item compatível que você pegar do chão. Uma bolsa vazia trava no primeiro tipo de item que receber; esvaziando de novo, destrava pra aceitar outro tipo. Upgrade de tier usa a mesma mesa de ferraria e os mesmos materiais da mochila.

Diferente da mochila, a bolsa **pode ser colocada no chão ou na parede** como uma cabeça de verdade — clique direito num bloco planta ela (segurando + agachado abre o menu na mão em vez de plantar). Clicar numa bolsa já plantada abre o mesmo menu de qualquer lugar; quebrar dropa ela com o conteúdo intacto. Se o mod storage-manager estiver instalado, uma bolsa plantada entra sozinha na rede de canos dele.

**Bolsa Tripla** — três bolsas independentes dentro de um item só, abrindo num menu único (uma linha por bolsa: inserir, ver quantidade/retirar, Auto-Pickup próprio). Upgrade de tier na mesa de ferraria só sobe a PRIMEIRA linha ainda não maximizada por vez — as outras duas ficam como estão. Também dá pra trocar a aparência dela (mesa de ferraria + cabeça de jogador) e colocá-la no chão igual a uma Bolsa normal, com as três linhas preservadas.

**Cooler** — clique direito abre 5 slots: os 3 primeiros só aceitam comida de verdade, o 4º é decorativo, e o 5º cicla o modo de Auto-Eat a cada clique:

| Modo | Efeito |
|---|---|
| Desativado | nenhum (padrão) |
| Comer ao tomar dano | come uma comida "sempre comível" (tipo maçã dourada) toda vez que você leva dano de verdade |
| Comer ao perder meio pernil | come assim que a fome cair 1 ponto desde a última comida |
| Comer ao perder 4 pernis | só age depois de perder 8 pontos de fome — mais econômico |

O Cooler nunca vira bloco (igual a mochila) e funciona em qualquer slot do inventário, não precisa estar na mão.

**Fundir na perna** — mesa de ferraria: qualquer calça (base) + uma Bolsa (não a Tripla) ou Mochila (adição) → a mesma calça, agora carregando aquela bolsa/mochila embutida, visível como uma cabecinha flutuando nas suas costas. Upgrade de tier e troca de aparência da bolsa/mochila fundida funcionam igual às versões avulsas, só que a calça continua sendo a base na mesa de ferraria. Pra abrir uma bolsa/mochila fundida sem tirar a calça: olhe bem pra baixo e dê um clique direito com a mão vazia — ou, se o mod abreai estiver instalado, clique direito nela direto no slot de armadura da tela de inventário, sem precisar do gesto de olhar pra baixo.

## Comandos

| Comando | O que faz |
|---|---|
| `/mochila bolsa-info` | Mira num bloco e mostra o que uma bolsa plantada ali realmente tem guardado (tier, item, quantidade, Auto-Pickup) |
| `/mochila bolsa-reparar <tier> [item] [quantidade]` | Restaura uma bolsa plantada que perdeu o rastreamento (só funciona numa posição que `bolsa-info` confirma estar "não rastreada") |

Os dois comandos exigem permissão de operador (GAMEMASTERS) — são ferramentas de recuperação, não uso do dia a dia.

## Configuração

Arquivo `config/mochila.json`, com live-reload se o mod configreload estiver instalado. Os números mais relevantes pro jogador: a capacidade de cada tier de Bolsa (de 10.000 na Pequena até 1.000.000 na Netherite), o som tocado ao abrir qualquer mochila/bolsa, e a escala/posição do ícone que flutua sobre uma bolsa plantada ou nas costas de quem usa uma perna fundida (esses dois últimos ainda são valores provisórios, ajustáveis pelo admin até ficarem bons visualmente).

## Dicas

- As defesas contra dupe bloqueiam colocar uma mochila/bolsa dentro de outra (inclusive dentro de si mesma) — se um clique for recusado com aviso pra fechar o menu primeiro, é isso.
- Upgrade de tier não pula etapa: pra chegar em Netherite você passa por cobre, ferro, ouro, esmeralda e diamante nessa ordem, um de cada vez.
- Bolsa Tripla é ótima pra carregar 3 materiais de bulk diferentes (por exemplo pedra, terra e madeira) num único item de inventário, sem abrir mão dos slots de uma mochila normal.
- Fundir uma bolsa/mochila na perna libera o slot de inventário que ela ocuparia — vale a pena pra quem já usa a perna certa mesmo.
