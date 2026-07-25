---
title: "Apito"
description: "Um apito que abre um menu com todos os seus bichos domados, pra teleportar, mandar sentar ou localizar à distância."
---

# Apito

Um apito que lista todo bicho que você já domesticou — onde estiver carregado no mundo — e deixa teleportar, mandar sentar/levantar e localizar tudo à distância, sem precisar sair procurando lobo, gato, papagaio ou cavalo esquecido em algum canto.

## Como conseguir

Craftado na bancada de ferraria (smithing table): base osso + adição lingote de ouro, sem template. Sai com brilho de encantamento.

## Como usar

Clique com o botão direito segurando o apito pra abrir o menu com todos os seus pets domados (cobre lobo/gato/papagaio e cavalo/jumento/mula/lhama — as duas famílias de bicho domável do jogo). Cada entrada mostra nome, tipo, distância (ou aviso de "outra dimensão") e se está sentado ou em pé.

Dentro do menu:
- **Clique esquerdo** num pet: teleporta ele até você (respeita dimensão — não traz um pet de outra dimensão sozinho).
- **Clique direito** num pet: alterna sentar/levantar à distância (bichos que não sentam, tipo cavalo, avisam que essa ação não se aplica).
- **Shift-click** num pet marcado como "não encontrado": remove ele do registro.
- Botão **"Chamar todos"**: teleporta de uma vez todo pet que dá pra resolver na sua dimensão atual (tem cooldown por jogador).

Toda vez que você abre o apito, ele revarre os pets carregados no mundo — então um pet que passou batido (por exemplo, domado antes do mod existir) tende a se autocorrigir sozinho.

Proteção extra: com a opção ligada, o próprio dono (incluindo flechas e tridentes que ele atirar) não consegue ferir os próprios pets domados.

## Comandos

| Comando | O que faz |
|---|---|
| `/apito debug` | (operador) lista todo bicho domesticável num raio de 32 blocos, com dono e se está registrado no apito — pra investigar por que um pet não aparece no menu |

## Configuração

Arquivo recarregável sem reiniciar o servidor: proteção contra dano do próprio dono aos pets (ligada por padrão), cooldown do botão "Chamar todos" (padrão 5 segundos) e o raio de busca usado ao localizar um pet de verdade no mundo perto da última posição conhecida dele (padrão 64 blocos).

## Dicas

- Se um pet sumir do menu, só abrir o apito de novo já revarre o mundo — geralmente resolve.
- Teleporte não cruza dimensão sozinho: leve o pet (ou vá você) até a dimensão certa antes de chamar.
- Cavalo, jumento, mula e lhama não sentam — o clique direito nesses só avisa que não se aplica, não é bug.
- Pet que sumiu de vez (capturado em balde, por exemplo) só sai do registro com shift-click nele dentro do menu.
