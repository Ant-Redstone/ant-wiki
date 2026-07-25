---
title: "Viagem"
description: "Reduz automaticamente a distância de carregamento de chunks de um jogador enquanto ele viaja rápido ou muito alto, pra poupar desempenho do servidor sem incomodar ninguém."
---

# Viagem

Mod invisível, sem item, sem comando e sem nada pra configurar como jogador. Ele existe só pra aliviar o servidor: quando você está se movendo muito rápido (elytra, barco no gelo) ou muito alto acima do teto do Nether ou do topo do End, o jogo reduz temporariamente quantos chunks ficam carregados ao seu redor — só os SEUS, nunca os de outros jogadores — e devolve tudo ao normal assim que você desacelera ou desce.

## Por que existe

Manter uma distância de carregamento grande faz sentido enquanto você está parado ou andando devagar, olhando o cenário. Mas voando de elytra em alta velocidade, ou muito acima do teto de bedrock do Nether (a famosa "rodovia" por cima do teto), não tem como aproveitar terreno tão distante mesmo — e carregar chunk atrás de chunk nessa velocidade custa caro pro servidor. O mod aperta o alcance só nesses momentos e solta de novo depois.

## O que você pode notar

- Um aviso curto no canto da tela ("modo viagem") quando você entra em velocidade alta o suficiente (elytra, barco no gelo) — e outro avisando quando volta ao normal.
- Um pouco mais de neblina / menos distância de render enquanto está rápido ou muito alto — é esperado, não é bug de conexão.
- Ao pousar ou desacelerar, a distância volta aos poucos (não de uma vez), evitando uma trava de carregamento repentina.
- Bem acima do teto do Nether, ou muito alto no End (e por padrão também muito alto no Overworld), o encolhimento acontece e desfaz na hora, sem transição gradual — porque assim que você desce de novo pode ter terreno de verdade logo abaixo, e o jogo prioriza corrigir isso rápido.
- Se você construir uma torre bem alta no Overworld e ficar parado lá em cima, também pode notar menos distância de render mesmo sem estar se movendo rápido — é o mesmo mecanismo de altitude agindo, não um problema com sua conexão.
- Em nenhum momento a distância cai a ponto de você ficar "cego" — sempre sobra um mínimo pra enxergar ao redor.

## Configuração

Os administradores ajustam tudo isso ao vivo, sem reiniciar o servidor. Os números que mais definem a experiência: o raio de chunks usado em modo viagem normal (padrão 3) e no modo extremo de altitude (padrão 2, o mínimo que o próprio Minecraft aceita); e as alturas que disparam o modo extremo — Y128 no Nether (o teto de bedrock, um valor fixo do jogo), e por padrão Y250 no Overworld / Y180 no End (essas duas são estimativas iniciais, ajustáveis se estiverem agressivas demais).

## Dicas

- Se a distância de render cair de repente enquanto você voa rápido ou sobrevoa o teto do Nether, é o mod fazendo o trabalho dele — não precisa reportar como bug.
- O efeito é só seu: ninguém mais no servidor percebe nada quando isso acontece com você.
- Se notar o efeito parado em cima de uma construção muito alta no Overworld, é a mesma lógica de altitude — descer um pouco desliga.
