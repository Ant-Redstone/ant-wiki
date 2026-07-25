---
title: "Recipe Viewer"
description: "/recipes mostra, num menu de baú ou numa janela nativa, a receita de todo item customizado de todo mod do servidor."
---

# Recipe Viewer

Com tantos mods adicionando itens craftáveis novos, fica difícil descobrir a receita de cada um sem abrir o
código. O Recipe Viewer resolve isso: um comando só, `/recipes`, mostra o resultado + a grade de ingredientes
de toda receita customizada do servidor (as receitas vanilla ficam de fora — pra elas, use o recipe book
normal do seu cliente).

## Como conseguir
Não craft nenhum, não é um item — já vem ativo assim que o servidor sobe, e qualquer jogador pode usar.

## Como usar
Digite `/recipes` (equivale a `/recipes browser`) pra abrir um menu de baú paginado com o resultado de cada
receita customizada. Clique num ícone pra ver a grade de ingredientes completa. Duas receitas quase idênticas
(uma por cor de lã, uma por tipo de madeira) aparecem como um slot só, ciclando entre as variantes — igual o
recipe book vanilla já faz.

Prefere não abrir uma tela? `/recipes dialog` mostra a mesma coisa numa janela nativa do jogo, com botões de
próxima/página anterior.

## Comandos
| Comando | O que faz |
|---|---|
| `/recipes` | Abre o menu de baú com receitas de todos os mods. |
| `/recipes browser <mod>` | Filtra pelo mod (tab-completion sugere os nomes). |
| `/recipes dialog [mod] [página]` | Mesma coisa, na janela nativa em vez do menu de baú. |
| `/recipes search <termo>` | Busca por nome de item, id da receita ou ingrediente. |

Nenhum comando exige OP — qualquer jogador pode consultar receitas.

## Configuração
Este mod não tem config — ele varre as receitas registradas no momento em que você roda o comando (o índice
é reconstruído automaticamente a cada `/reload`).

## Dicas
- Rodando `/reload` depois de uma mudança de receita? O Recipe Viewer já reflete a mudança na próxima vez que
  você abrir `/recipes` — não precisa fazer nada além disso.
- Uma busca ou filtro sem resultado te avisa no chat em vez de abrir uma tela vazia.
