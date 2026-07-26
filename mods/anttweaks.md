---
title: "AntTweaks"
description: "Miudezas que não mereciam um mod próprio — tingir lã e vela 8 por vez, e a Pérola do Ender Dourada, que segura os monstros perto dela sem sumir."
---

# AntTweaks

Mod "gaveta de miudezas": em vez de criar um mod novo pra cada ajuste pequeno, o que não justifica isso entra
aqui. Hoje são duas coisas — receitas em lote e a Pérola do Ender Dourada.

## Receitas em massa
- **Lã em massa** — 16 receitas novas (uma por cor de destino), shapeless: 8x lã de qualquer uma das outras
  15 cores + 1x corante da cor alvo → 8x lã da cor alvo. Mesma lógica da receita vanilla de tingir lã (não
  aceita a própria cor alvo como entrada), só que 8 de cada vez em vez de 1. A receita vanilla de 1 unidade
  continua existindo do lado da nova — as duas convivem.
- **Vela em massa** — mesma ideia, pra velas: 16 receitas novas, shapeless, 8x vela de qualquer cor (colorida
  ou sem cor) + 1x corante da cor alvo → 8x vela da cor alvo. Também convive normalmente com a receita
  vanilla de 1 unidade.

Nenhuma receita vanilla foi removida, alterada ou substituída — tudo aqui é adição pura via data pack, no
mesmo grupo das receitas equivalentes do jogo (`wool` / `dyed_candle`), então aparecem juntas no livro de
receitas do cliente (quando descobertas) e no `/recipes` do mod recipeviewer, se instalado.

## Pérola do Ender Dourada

Uma pérola do ender com 8 barras de ouro em volta. **Jogada no chão**, ela impede os monstros num raio de
**24 blocos** de sumirem por distância.

### Pra que serve

Farm de duas dimensões não funciona direito em servidor com mais de uma pessoa online. O jogo apaga monstro
que está longe **do jogador mais próximo**, então basta alguém estar no Overworld pra que os monstros da sua
farm do Overworld sumam enquanto você espera os itens no Nether. Com uma pérola dourada largada no meio da
farm, aqueles monstros param de sumir e a farm continua rendendo com você em qualquer lugar.

### Craft

Bancada de trabalho:

|  |  |  |
|---|---|---|
| Barra de ouro | Barra de ouro | Barra de ouro |
| Barra de ouro | **Pérola do Ender** | Barra de ouro |
| Barra de ouro | Barra de ouro | Barra de ouro |

Sai 1 Pérola do Ender Dourada.

### Como usar

1. Solte a pérola no chão (tecla de largar item — **não** é arremesso) no meio da área que precisa ficar viva.
2. Pronto. Enquanto o item estiver no chão, nada num raio de 24 blocos some por distância.
3. Pra desligar, é só pegar a pérola de volta.

No chão ela **não expira** (não some depois de 5 minutos como item normal) e é imune a fogo, explosão e
cactus — a proteção só acaba quando alguém recolhe a pérola.

Use `/perolas` pra listar as pérolas ativas no servidor (útil pra achar uma que ficou esquecida).

### O que ela impede exatamente

O jogo tem duas formas de apagar um monstro por distância, e a pérola bloqueia as duas:

| Situação | Sem a pérola | Com a pérola por perto |
|---|---|---|
| Monstro a mais de 128 blocos de qualquer jogador | some no tique seguinte | fica |
| Monstro entre 32 e 128 blocos, parado há mais de 30s | pode sumir a qualquer momento | fica |

### O que ela **não** faz

- **Não pode ser arremessada.** A pérola dourada é só pra colocar no chão — o arremesso é bloqueado de
  propósito, senão você perderia 8 de ouro num teleporte. Pra teleportar, use pérola normal.
- **Não protege no modo Peaceful.** No Peaceful o jogo joga os monstros hostis fora por outro caminho, que não
  passa pela distância. Se o servidor virar Peaceful, eles vão embora com pérola ou sem.
- **Não gera monstro, não carrega chunk e não aumenta o limite de monstros do mundo.** Se a área não estiver
  carregada, nada acontece lá de qualquer jeito — a pérola só evita o sumiço, não mantém a região ligada.
- **Não deixa o monstro imortal.** Ele morre de dano, de luz do sol, de afogamento, de queda — tudo igual.

## Configuração

`config/anttweaks.json`:

| Campo | Padrão | O que faz |
|---|---|---|
| `perolaDouradaAtiva` | `true` | Liga/desliga a Pérola do Ender Dourada inteira. |
| `perolaDouradaRaio` | `24.0` | Raio em blocos da proteção de cada pérola. |

As receitas em lote são fixas e não têm configuração.

## Dicas
- Ainda quer tingir só 1 unidade? A receita vanilla original continua funcionando normalmente, sem nenhuma
  mudança.
- As receitas em massa pedem exatamente 8 do item base + 1 corante — não dá pra usar quantidades
  intermediárias (7, 9 etc.) numa única craftada.
- Vela sem cor entra como entrada válida em qualquer receita de vela em massa, igual às outras 15 cores.
- Uma pérola cobre 24 blocos de raio. Farm comprida precisa de mais de uma — vale espalhar em vez de confiar
  numa só no meio.
- A pérola no chão é um item comum de pegar: se ela estiver num lugar onde alguém passa, alguém vai recolher
  sem querer e a farm para. Vale deixar num canto fora do caminho.
