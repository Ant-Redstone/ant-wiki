---
title: "Correio"
description: "Manda itens e recados pra outros jogadores mesmo offline, com aviso automático quando eles logam."
---

# Correio

Quer deixar um item ou presente combinado pra alguém que não está online agora? Correio deixa você depositar num baú próprio que vira um pacote na caixa de entrada do destinatário — ele resgata quando quiser, sem precisar estar online no momento do envio.

## Como conseguir

Já vem disponível — não tem item nem craft, os dois comandos abaixo já fazem tudo.

## Como usar

1. `/correio enviar <jogador>` abre um baú de depósito de 27 slots (aceita nome de jogador offline).
2. Coloque o que quiser mandar e feche o baú de qualquer jeito — ESC, desconectar, até morrer — tudo que sobrou dentro vira um pacote na caixa do destinatário. Baú fechado vazio não gera nada.
3. Quando o destinatário loga, recebe um aviso no chat (uns 2 segundos depois de entrar) se tiver correio esperando.
4. `/correio receber` abre a caixa de entrada com tudo pendente (até 54 itens de uma vez — se tiver mais, resgate uma parte e rode o comando de novo pra pegar o resto).
5. O primeiro item de cada pacote chega com uma etiqueta "de fulano, há X tempo" grudada de lembrança; o resto do pacote vem idêntico ao que foi enviado.

## Comandos

| Comando | O que faz |
|---|---|
| `/correio` | Ajuda rápida dos dois comandos. |
| `/correio enviar <jogador>` | Abre o baú de depósito de 27 slots pra aquele destinatário (aceita offline). |
| `/correio receber` | Abre a caixa de entrada com tudo que está pendente. |

## Configuração

Arquivo `config/correio.json`, com live-reload (aplica sem reiniciar). Por padrão o envio é grátis (`custoEnvio: 0`); se o admin configurar um custo, ele é cobrado em diamantes por padrão (`moedaCusto`, trocável por outro item). Cada destinatário acumula no máximo 20 pacotes sem resgatar — passou disso, novos envios são recusados até ele abrir a caixa.

## Dicas

- Se o servidor configurar um custo de envio, ele é cobrado ANTES do baú abrir — sem saldo, o baú nem aparece.
- Se a caixa do destinatário já estiver no limite de pacotes, o envio é recusado até ele resgatar alguma coisa.
- Item complexo (encantado, shulker box cheia) sobrevive ao envio intacto — não é só item simples que funciona.
