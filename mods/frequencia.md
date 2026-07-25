---
title: "Baú de Frequência"
description: "Baús que compartilham um único inventário à distância, sintonizados por 3 lãs coloridas e trancáveis com diamante."
---

# Baú de Frequência

Um baú que não guarda nada sozinho: o conteúdo vive amarrado a uma "frequência" (3 cores de lã), e todo Baú de Frequência sintonizado nessa mesma combinação — em qualquer lugar do mapa — abre o mesmíssimo inventário compartilhado.

## Como conseguir

Bancada de crafting, shapeless: 1 baú do ender + 3 lã branca → Baú de Frequência. Sai sintonizado na frequência padrão (branco/branco/branco), pública.

## Como usar

Coloque o baú. Pra sintonizar, segure um corante e clique direito nele — cada clique recolore uma das 3 lãs, ciclando 1ª → 2ª → 3ª a cada corante gasto (mirar direto numa lã específica recolore só ela, se seu aim acertar o hitbox dela). A combinação de cores aparece como 3 quadrados coloridos no título do menu e na descrição do item.

Clique direito sem corante (ou com qualquer item que não seja corante/diamante/lingote de ouro) abre o inventário compartilhado — um baú de 27 slots normal, do mesmo tamanho de um baú do ender. Qualquer outro Baú de Frequência com as mesmas 3 lãs abre o idêntico inventário, então colocar item de um lado e tirar do outro é transferência instantânea, sem limite de distância ou dimensão.

**Trancar (privado)** — segurando um diamante, clique direito no "fecho" (o blocochinho dourado/azul acima da tampa) trava a frequência na hora, sem precisar abrir o menu; ou abra o menu, deixe um diamante dentro e feche — o mod consome o diamante e vincula a frequência ao seu UUID (só os SEUS baús com essa combinação acessam esse inventário daqui pra frente). Um baú trancado só abre/quebra pra quem trancou. Como travar troca pra um inventário privado diferente do público, **os itens que já estavam lá dentro ficam na frequência pública antiga** — tranque um baú vazio pra não perder o rastro do que tinha nele.

**Destrancar** — segurando um lingote de ouro, clique direito no fecho enquanto estiver trancado devolve o diamante (dropado no chão) e volta a frequência pra pública.

Segurar Shift ao clicar passa direto pro vanilla (por exemplo, pra encostar um hopper na parede do baú) em vez de abrir/sintonizar/trancar. Quebrar e replantar o mesmo item preserva exatamente as cores, o dono e o estado de trancado — não volta pro padrão. Hopper, dropper e comparador enxergam o inventário compartilhado normalmente; se o mod storage-manager estiver instalado, o baú entra na rede de canos dele também.

## Configuração

Arquivo `config/frequencia.json`, com live-reload. Aqui os campos são quase todos visuais — não existe capacidade ou cooldown pra ajustar, já que o inventário é um baú de 27 slots comum. Por padrão o corpo já usa a skin de baú do ender (batendo com o ingrediente da receita), mas dá pra trocar pra qualquer outro bloco, as cores do fecho que indicam público/trancado (ouro/diamante por padrão), e o tamanho da área de clique de cada lã, pra facilitar acertar uma cor específica.

## Dicas

- Se você já tem itens guardados, tranque o baú vazio primeiro — travar/destravar troca de inventário compartilhado, então o conteúdo antigo não vem junto sozinho.
- Combine várias frequências públicas iguais espalhadas pela base ou pelo servidor pra ter "teleporte de item" instantâneo entre pontos distantes.
- Um baú de frequência dentro de um terreno reivindicado (mod posse) também respeita as regras daquele terreno, além do próprio cadeado de diamante.
- Use Shift + clique direito pra encostar um hopper ou outro bloco na parede do baú sem acidentalmente abrir ou sintonizar ele.
