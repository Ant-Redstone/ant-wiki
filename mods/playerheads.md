---
title: "Player Heads"
description: "Catálogo de dezenas de milhares de cabeças decorativas, navegável num menu de baú, sem precisar de resource pack."
---

# Player Heads

Uma biblioteca gigante de cabeças decorativas (do catálogo do minecraft-heads.com) que qualquer jogador pode
navegar, buscar e coletar sem instalar nada — e sem depender de você conhecer o nome/id exato da head que
quer.

## Como conseguir
Não craft nenhum — o próprio catálogo é o "item". Abra com `/heads` e pegue a head diretamente de lá (pode
ter um custo configurado, veja abaixo).

## Como usar
`/heads` abre a tela raiz: uma categoria por seção (Humans, Decoration, Animals, Monsters, etc.), mais "All
heads" (catálogo inteiro) e "Tags" (lista de ~1.100 tags pra busca fina). Clique numa head pra pegar uma
cópia.

Na barra de baixo do menu: **Buscar** (abre uma placa — digite um nome, `#tag` pra buscar por tag, ou
`-palavra` pra excluir), **Perfis** (veja sua coleção pessoal, com histórico), **Adicionar** (no seu próprio
perfil — cole um comando `/give` do minecraft-heads.com e o mod extrai a head automaticamente) e
**Desmontar** (devolve parte do custo pago, jogando fora heads já pegas pelo mod).

## Comandos
| Comando | O que faz |
|---|---|
| `/heads` (ou `/playerheads`, `/ph`) | Abre o catálogo. |
| `/heads variants` | Solte uma head num slot e veja todas as variantes daquele modelo, sem perder nome/lore ao trocar. |
| `/heads book` | Recebe um livro-guia com todas as tags e a contagem de heads de cada uma. |

Nenhum desses exige OP.

## Configuração
Arquivo `config/playerheads-config.json`. O mais relevante pro jogador: `takeCost` (grátis, item ou XP pra
pegar uma head — modo criativo nunca paga) e `refundPercent` (quanto volta ao desmontar uma head já pega).
Muda ao vivo com `/reloadconfigs`.

## Dicas
- Achou uma head num site externo e quer adicionar? Cole o comando `/give` inteiro no botão Adicionar do seu
  perfil — não precisa editar nada manualmente.
- Trocar a skin de uma head sem perder nome customizado ou encantamento visual: use o conversor de variantes
  (`/heads variants`), não craft uma nova do zero.
- O catálogo embarcado (as 77 mil heads prontas) só atualiza com um restart do servidor — mas as heads que
  jogadores adicionam e o custo/reembolso recarregam com um `/reload` normal.
