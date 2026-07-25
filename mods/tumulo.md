---
title: "Túmulo"
description: "Quando keepInventory está desligado, seus itens viram um túmulo protegido em vez de espalhar no chão."
---

# Túmulo

Quando você morre numa situação em que perderia o inventário (keepInventory desligado, sem nenhuma exceção rodando), os itens e a XP não ficam largados no chão pra despawnar — eles vão pra um túmulo no lugar da morte, protegido só pra você por um tempo. Depois que a proteção acaba, qualquer jogador pode saquear.

## Como conseguir
Não craft nada pra ativar — o túmulo é criado automaticamente na primeira morte com keepInventory efetivamente desligado (vanilla, um override de outro mod, ou uma "morte segura" tipo a do mod Nuke). Se algum desses estiver mantendo seu inventário, o túmulo nem entra em ação e você continua com tudo do jeito normal.

A Chave do Túmulo também não é craftada do zero — ela é entregue automaticamente assim que você respawna depois de uma morte que gerou um túmulo (dá pra admin desligar isso). Só o **aprimoramento** dela passa por craft — veja a seção própria abaixo.

## Como usar
1. Morra com keepInventory efetivamente desligado. O jogo avisa em qual posição (X Y Z, dimensão) o túmulo apareceu e por quanto tempo ele fica só seu.
2. O túmulo é um bloco com aparência de podzol, uma lápide baixa de deepslate polido em cima, e a sua própria cabeça meio enterrada ao lado — junto de um holograma com seu nome e duas datas, como uma lápide de verdade.
3. Enquanto protegido, só você consegue clicar com o botão direito nele pra recuperar tudo: cada item volta pro slot original, armadura equipada é trocada pela guardada se ela for melhor (a pior vira sobra no inventário, ou cai em cima do túmulo se não couber), e a XP guardada volta como pontos direto, sem orbe nenhum no chão.
4. Depois que o prazo acaba, qualquer jogador pode clicar pra saquear (itens vão pro inventário de quem saqueou) ou quebrar o bloco (dropa tudo no chão) — os dois liberam o túmulo.
5. Enquanto protegido, ninguém além de você consegue quebrar o bloco — a quebra é cancelada e o bloco reaparece; explosões também não destroem um túmulo protegido.

## O túmulo
- Cada morte gera um túmulo próprio — sem limite de túmulos simultâneos por padrão (dá pra configurar um teto; passando dele, o mais antigo libera os itens no próprio lugar antes do novo ser criado).
- Morrer no void ainda gera túmulo, numa posição segura acima do vazio, em vez de perder tudo.
- Se você não tinha nenhum item e seu XP é baixo (nível 12 ou menos), a morte segue normal — não cria nada, não tem o que proteger.
- A XP é sempre zerada na hora da morte (por isso nenhum orbe aparece no chão) e devolvida como pontos quando você recupera o túmulo.

## Chave do Túmulo
Ao respawnar depois de perder um túmulo, você recebe a **Chave do Túmulo** — fisicamente uma bússola, mas com a aparência de uma Chave Sinistra de Provação, presa especificamente àquele túmulo.
- Ela não funciona como bússola de verdade (não tem agulha apontando direção). O guia é outro: enquanto você segura a chave, o bloco do túmulo brilha só pra você, e de tempos em tempos uma trilha de partículas de alma sai de você em direção a ele.
- Sozinha (sem aprimorar), usar a chave não faz nada.
- **Aprimorar**: combine a chave com uma pérola do End numa mesa de crafting (qualquer formato) — vira a mesma chave, agora com brilho de encantamento.
- Uma chave aprimorada, ao usar (clique direito), inicia uma carga de alguns segundos com sons de Elder Guardian e te teleporta direto em cima do seu túmulo (ou num lugar seguro por perto, se o topo dele não estiver livre).
- A chave some sozinha do inventário assim que você recupera aquele túmulo específico, ou é limpa automaticamente no seu próximo login se ele já não existir mais (foi saqueado, quebrado ou purgado enquanto você estava offline).

## Comandos
| Comando | O que faz |
|---|---|
| `/tumulo` | Mostra a lista de comandos. |
| `/tumulo lista` | Lista os seus túmulos — coordenadas e tempo restante de proteção (ou "expirado"). |
| `/tumulo tp <n>` | (operador) Teleporta pro túmulo #n da sua própria lista. |
| `/tumulo forcar <jogador> <n>` | (operador) Recupera o túmulo #n de outro jogador direto pra você, intacto. |
| `/tumulo purgar <jogador>` | (operador) Remove todos os túmulos de um jogador (itens dropados no local de cada um). |

## Configuração
Os principais ajustes ficam em `config/tumulo.json`: `decayHours` (padrão 72) é quanto tempo real — inclusive com o servidor desligado — o túmulo fica protegido só pro dono; `xpKeepThresholdLevel` (padrão 12) é até que nível a XP é sempre 100% preservada, e `xpLossPercentAboveThreshold` (padrão 0%) decide quanto do excedente acima disso se perde; `maxGraves` (padrão 0, sem limite) controla quantos túmulos cada jogador pode ter ao mesmo tempo. `giveGraveKey` (ligado por padrão) decide se a Chave do Túmulo é entregue automaticamente.

## Dicas
- Guarde uma pérola do End só pra isso — sem aprimorar, a Chave do Túmulo é só um indicador visual, não teleporta.
- Se outro mod te dá keepInventory (por exemplo um override do Selfrules), o túmulo nunca entra em ação nessas mortes — você já mantém tudo do jeito de sempre.
- Morrer várias vezes seguidas não sobrescreve o túmulo anterior — cada um fica independente. Confira `/tumulo lista` pra não esquecer nenhum antes que expire.
- Depois que o prazo vira, corra: qualquer jogador que passar por lá pode saquear ou quebrar seu túmulo.
