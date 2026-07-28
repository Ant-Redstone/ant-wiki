---
title: "Nuke"
description: "Dispositivo craftável de demolição controlada: explode de verdade, mas salva e regenera tudo depois."
---

# Nuke

Um item craftável e caro de propósito que, plantado e aceso, causa uma explosão enorme de fusível longo — mas
segura: antes de destruir qualquer bloco ou entidade, o mod salva tudo em disco e regenera a área inteira
depois de um tempo de espera. A "destruição" é temporária.

## Como conseguir
Receita cara de propósito, no formato de TNT:

```
[nether_star]   [potent_sulfur] [nether_star]
[potent_sulfur] [nether_star]   [potent_sulfur]
[nether_star]   [potent_sulfur] [nether_star]
```

Ou seja: **5x nether star** (cantos + centro) + **4x potent sulfur** (meio das bordas). Resultado: uma cabeça
de jogador chamada "Nuke", com textura de TNT amarela e a lore "A very dangerous device." Alternativa:
`/nuke give` (operador) entrega direto.

## Como usar
1. **Plantar**: use a nuke como um bloco — ela vira um bloco de TNT real coberto por uma cabeça amarela.
   Quebrar antes de acender devolve o item (não solta TNT comum).
2. **Acender**: isqueiro, redstone, fogo ou reação em cadeia, como TNT normal. A cabeça amarela vira uma
   cabeça branca cavalgando o TNT aceso, e começa o fusível (padrão 2 minutos), com uma nota de flauta a cada
   tick e partículas de perigo por perto.
3. **Explosão**: ao fim do fusível, detona no raio configurado (padrão 100 blocos) — varre a esfera, salva
   tudo em disco e remove os blocos de forma animada, espalhada por vários ticks (não trava o servidor mesmo
   em raios grandes). Jogadores dentro do raio morrem mas **mantêm inventário e XP**; quem está a até 2x o
   raio vê a tela tingir de vermelho e ouve o estrondo.
4. **Regeneração**: depois do tempo de espera (padrão 8 horas), tudo volta de baixo pra cima, também animado,
   reaplicando dados de block entities e reinvocando as entidades salvas.

Tudo é resistente a queda de servidor — se cair no meio de qualquer fase (explodindo, esperando ou
regenerando), retoma certo ao reiniciar.

## Comandos
Todos abaixo de `/nuke`, restritos a operadores (e cada subcomando pode ser desligado individualmente na
config):

| Comando | O que faz |
|---|---|
| `/nuke give` | Dá uma nuke pro jogador. |
| `/nuke list` | Abre uma interface listando as nukes ativas (posição, raio, fase). Clicar numa força a regeneração imediata. |
| `/nuke restore <id>` | Força a regeneração agora, pulando a espera restante. Aceita prefixo do id. |
| `/nuke pause <id>` | Congela a contagem de uma nuke que está esperando pra regenerar — útil pra manter uma cratera como feature permanente do mapa. |
| `/nuke resume <id>` | Continua a contagem de uma nuke pausada. |
| `/nuke detonate [raio]` | Detona uma nuke na sua posição, sem craft nem fusível. Raio de 1 a 384. |
| `/nuke backup list` | Lista backups retidos de restaurações (ver Configuração). |
| `/nuke backup restore <id> <pos>` | Recria um backup retido em outro lugar. |
| `/nuke backup delete <id>` | Apaga um backup retido. |

## Terreno protegido

A explosão **pula terreno reivindicado e baú com cadeado** do mod [Posse](/mods/posse) — tanto a destruição em si
quanto a onda de calor (que chega a 50% além da borda da cratera). Ou seja: nuke não é ferramenta de grief, e uma
base reivindicada continua de pé mesmo no meio do raio.

Isso é controlado por `respeitarPosse` no config, **ligado por padrão**. Desligar faz a explosão passar por cima
de tudo — só faça isso se todo mundo no servidor concordar, porque a nuke é um item craftável por qualquer jogador,
não uma ferramenta de operador.

## Configuração
Arquivo `config/nuke.json`, recarregável a quente via `configreload`. Os números que mais importam: `radius`
(padrão 100 blocos de raio do blast), `fuseSeconds` (padrão 120s de fusível) e `waitSeconds` (padrão 28800s =
8 horas até regenerar), mais `respeitarPosse` (ligado — veja acima). Também dá pra ligar `backupBeforeRestore`
(desligado por padrão) — antes de regenerar, guarda uma cópia do que estiver ocupando cada posição no momento,
caso alguém tenha reconstruído em cima da cratera; recupere com `/nuke backup`.

## Dicas
- Ligue `backupBeforeRestore` se o seu servidor tem gente que reconstrói em cima de crateras — sem isso, a
  regeneração sobrescreve o que foi construído ali sem aviso.
- Use `/nuke pause` numa nuke que já detonou pra manter a cratera como parte permanente do mapa, em vez de
  deixar ela regenerar sozinha.
- Morrer no raio da explosão ainda mata o jogador — só o inventário e o XP ficam garantidos, não é uma forma
  segura de ficar no meio do blast.
- `/nuke list` é o jeito mais rápido de achar o id de uma nuke pra usar nos outros comandos.
