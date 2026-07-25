---
title: "Lojinha"
description: "Loja jogador-a-jogador com placa e barril/baú, sem economia de plugin, funcionando mesmo com o dono offline."
---

# Lojinha

Transforma um barril ou baú com uma placa presa nele numa loja de verdade: o estoque e o dinheiro ficam dentro do próprio container, então a loja continua vendendo ou comprando normalmente mesmo com você desconectado.

## Como conseguir

Não tem craft nem comando pra criar — é montado na mão. Pegue um barril ou baú (single ou duplo), coloque dentro o item à venda (numa loja `[compra]`, coloque a moeda que você vai pagar junto com pelo menos 1 unidade do item que quer comprar), encoste uma placa nele e escreva 4 linhas:

| Linha | Conteúdo | Exemplo |
|---|---|---|
| 1 | `[loja]` (vende) · `[compra]` (compra de jogadores) · `[mercado]` (vende tudo do container por preço único) | `[loja]` |
| 2 | Quantidade por transação, de 1 a 1728 | `16` |
| 3 | Preço (0 a 3456), com letra de moeda opcional | `5` ou `5 e` |
| 4 | Livre — nome, descrição, o que quiser | `Pedra baratinha` |

Se o formato estiver certo, a placa fica verde e brilhando. Se algo estiver errado, a mensagem diz exatamente qual linha corrigir.

## Como usar

Clicar na placa de uma loja registrada que não é sua abre a interface de compra: um preview 9x3 com o item, preço e estoque/fundos ao vivo (`[loja]`/`[compra]`), ou um navegador paginado 9x6 com todo o conteúdo do container (`[mercado]`). Clicar no item executa a transação na hora e a tela atualiza sozinha.

Ao pagar (ou vender pra uma loja `[compra]`), a busca por moeda/item olha primeiro o seu inventário solto e, se faltar, também dentro de bolsas, mochilas, bolsa tripla, shulker boxes e bundles que você estiver carregando — não precisa ter tudo solto nos slots normais do inventário.

Só o dono edita a placa, abre o container direto ou quebra o registro; hopper/dropper não podem ser encostados numa loja alheia. Se a placa ou o container sumirem por outro motivo (explosão, outro mod), a loja se desregistra sozinha sem travar nada. Um operador só tem os privilégios de dono enquanto estiver segurando a tag `lojinha.AdminBypass` — a menos que o admin tenha mudado a config pra bypass geral.

## Comandos

| Comando | O que faz |
|---|---|
| `/lojinha` | Mostra o guia rápido de como criar uma loja, direto no chat |
| `/lojinha moeda` | Olhando pra placa ou container da sua própria loja, define o item na mão (com NBT) como a moeda dela; mão vazia reseta pra moeda padrão |

Nenhum dos dois exige operador — `/lojinha moeda` só funciona se você for dono da loja (ou operador em bypass).

## Configuração

Arquivo `config/lojinha.json`, gerado automaticamente na primeira subida, com live-reload via configreload. Os números mais relevantes: limite de **8 lojas por jogador**, cooldown de **10 ticks (meio segundo)** entre transações da mesma pessoa (só pra evitar duplo clique disparando duas trocas), e preço mínimo (0 por padrão, o que permite loja de graça/doação). Também dá pra adicionar novas letras de moeda além do "e" (esmeralda) já configurado por padrão.

## Dicas

- Uma loja `[compra]` precisa da moeda E de uma amostra do item que você quer comprar dentro do container — o mod ignora stacks de moeda ao decidir qual item é o "modelo" da loja.
- Pagar com o item guardado numa bolsa, mochila ou shulker funciona — não precisa esvaziar tudo no inventário solto antes de comprar.
- `[mercado]` é bom pra liquidar estoque variado a um preço único por lote, sem precisar de uma placa por item.
- Editar a placa de uma loja que não é sua não apaga o registro dela — o mod reverte a edição sozinho e avisa de quem é.
