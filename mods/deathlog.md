---
title: "Deathlog"
description: "Histórico consultável de todas as mortes dos jogadores, com snapshot do inventário, pra staff investigar e devolver itens."
---

# Deathlog

Ferramenta de moderação: registra toda morte de jogador com hora, local, causa e uma cópia completa do inventário daquele momento, pra staff investigar reclamação de item perdido e devolver o que for preciso.

## Como conseguir
Não é um item nem tem craft — o mod já registra toda morte sozinho assim que está instalado. Só a staff usa ativamente, através do comando abaixo.

## Como usar
1. Rode `/deathlog <jogador>` (ou `/dl <jogador>`) pra abrir a lista de mortes daquele jogador — funciona mesmo se ele estiver offline, desde que já tenha alguma morte registrada.
2. Cada linha da lista é uma morte, mais recente primeiro, com a cabeça do jogador como ícone: tempo relativo ("3h atrás"), local, causa, e se os itens foram mantidos ou perdidos.
3. Clique numa morte pra abrir a inspeção — o snapshot do inventário organizado como se fosse o do próprio jogador (armadura/offhand em cima, principal e hotbar embaixo).
4. Botão direito numa morte da lista (ou o botão de ender pearl na inspeção) teleporta você pro local exato. Se aquela morte tiver virado um túmulo protegido (mod Túmulo), você pousa em cima dele em vez do chão da morte.
5. Pegue um item específico da inspeção como se fosse tirar de um baú — o registro guardado nunca muda por isso, fechar e abrir de novo mostra o snapshot completo de novo. O botão de esmeralda devolve tudo que sobrou na tela direto pro jogador (precisa estar online); devolver uma segunda vez pede confirmação antes de duplicar.

Se a morte tiver gerado um túmulo protegido, a linha de item já mostra isso direto — "guardado num túmulo em X Y Z" — em vez do palpite de despawn, porque nesse caso os itens estão seguros, não largados nem sumidos.

## Comandos
| Comando | O que faz |
|---|---|
| `/deathlog <jogador>` (ou `/dl <jogador>`) | Abre a lista de mortes daquele jogador. Sugestão de nome inclui jogadores offline já registrados. |
| `/deathlog` (sem argumento) | Mostra uma mensagem de ajuda. |

Os dois exigem permissão de operador.

## Configuração
Não tem arquivo de configuração pra ajustar — nenhum número aqui é editável pelo admin. Dois limites ficam fixos no código: só as últimas **50** mortes de cada jogador guardam o snapshot completo do inventário (as mais antigas somem da lista, mas o total histórico continua contando pra sempre), e o palpite de "ainda no chão vs. despawnou" usa **5 minutos** como corte.

## Dicas
- Devolver item edita só a cópia que a staff está vendo, nunca o registro salvo — não tem problema fechar no meio, o snapshot original continua intacto.
- Antes de sair devolvendo item pelo comando, olhe se a morte já não foi "mantida" (keepInventory ativo por qualquer motivo).
- Com o mod Túmulo instalado, boa parte das reclamações de item perdido já se resolve sozinha — os itens de uma morte "graveada" nunca chegam a tocar o chão.
- Ative o placar do objetivo `deathlog` (`/scoreboard objectives setdisplay ...`) se quiser mostrar o total de mortes de cada jogador numa lista ou sidebar.
