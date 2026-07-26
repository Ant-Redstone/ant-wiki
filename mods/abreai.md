---
title: "Abre-Aí"
description: "Clique direito num item guardado no inventário pra abrir bolsas, shulkers, baú do ender e estações de crafting portáteis."
---

# Abre-Aí

Deixa você abrir certos itens direto de dentro da tela do inventário, com um clique direito simples, em vez de precisar colocá-los no mundo ou segurar na mão primeiro.

## Como conseguir

Já vem disponível — não é um item, é uma mecânica de interação que passa a valer assim que o mod está instalado no servidor.

## Como usar

Clique direito (com o cursor vazio, sem nada "na mão") num item guardado numa tela que mostra seu próprio inventário — a tela de inventário normal, ou suas próprias fileiras dentro de um baú, bancada ou qualquer outro menu aberto:

- **Bolsa ou mochila** (precisa do mod mochila instalado): abre o menu de conteúdo dela, igual a segurar na mão. Uma bolsa/mochila fundida numa calça (veja o mod mochila) também abre clicando na peça equipada, sem precisar do gesto de olhar pra baixo que o mochila usa como alternativa.
- **Shulker box** (qualquer cor): abre os 27 slots direto, sem precisar plantar no chão; fechar salva tudo de volta no próprio item.
- **Baú do ender**: abre o seu baú do ender pessoal, o mesmo de sempre.
- **Bancada de crafting, serra de pedra ou mesa de ferraria**: abre a tela "de bolso" correspondente. O item usado não é gasto, e ingredientes deixados na grade voltam pro inventário ao fechar.
- **Remote Control** (precisa do mod storage-manager instalado): conecta no storage remoto vinculado, igual a segurar ele na mão e clicar. Vale a mesma exigência de sempre: precisa estar vinculado, você precisa ter permissão nesse manager, e a área dele precisa estar carregada. Como o mod carrega os chunks do storage em segundo plano pra não travar o servidor, a tela abre um instante depois do clique, não na mesma hora.

## Configuração

Arquivo `config/abreai.json`, com live-reload via configreload. Cada recurso liga/desliga separado (bolsas e mochilas, shulker box, bancada, serra de pedra, mesa de ferraria, baú do ender, Remote Control), e cada um tem seu próprio som configurável ao abrir — útil se um admin quiser desativar só uma das funções sem tirar as outras.

## Dicas

- Só funciona com uma tela de inventário já aberta — clicar num item solto no chão ou num slot de crafting não conta.
- Carregar uma bancada, serra de pedra ou mesa de ferraria "de bolso" no inventário evita ter que voltar na base pra craftar ou reparar algo.
- Funciona também dentro das SUAS fileiras enquanto outro menu (tipo um baú) está aberto, não só na tela pura de inventário.
- Se o mod mochila não estiver instalado, só a parte de bolsas/mochilas fica inativa — shulker, baú do ender e as bancadas de bolso continuam funcionando normalmente. Vale o mesmo pro storage-manager e o Remote Control.
- O Remote Control continua abrindo do jeito normal também (segurando na mão e clicando com o botão direito) — os dois jeitos funcionam, um não substitui o outro.
