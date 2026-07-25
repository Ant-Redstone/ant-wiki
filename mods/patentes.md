---
title: "Patentes"
description: "Prefixo colorido e ordenação customizada na lista TAB, atribuídos por um operador."
---

# Patentes

Patentes é puramente cosmético: um operador cadastra ranks no config (id, prefixo colorido, ordem de exibição) e atribui pra qualquer jogador com um comando. O efeito aparece só na lista TAB — chat e mensagens de entrada/saída não mudam.

## Como conseguir

Já vem disponível — não tem item nem craft. É o operador quem atribui a patente pra você via comando.

## Como usar

1. Um operador cadastra os ranks à mão em `config/patentes.json` (ou usa os de exemplo que já vêm prontos na primeira subida).
2. `/patente definir <jogador> <rank>` atribui — funciona até com o jogador offline (resolve pelo nome).
3. Se o jogador estiver online, a TAB atualiza na hora, sem precisar relogar.
4. `/patente limpar <jogador>` remove a patente. `/patente lista` mostra cada rank cadastrado e quantos jogadores têm.

Os três comandos exigem operador — não existe variante para jogador comum.

## Comandos

| Comando | O que faz |
|---|---|
| `/patente definir <jogador> <rank>` | Atribui um rank (aceita offline). |
| `/patente limpar <jogador>` | Remove o rank do jogador. |
| `/patente lista` | Lista os ranks cadastrados e quantos jogadores têm cada um. |

## Configuração

Arquivo `config/patentes.json`, criado sozinho na primeira subida com um catálogo de exemplo (ranks `chef`, `vet`, `mvp`). Cada rank tem um `prefixo` (texto com código de cor) e uma `ordem` — nos exemplos que já vêm prontos, `chef` usa ordem 100, `mvp` usa 75 e `vet` usa 50; quanto maior o número, mais no topo da TAB o jogador aparece. Com o mod `configreload` instalado, mudanças no arquivo aplicam sem reiniciar o servidor e já reenviam a TAB atualizada pra todo mundo online.

## Dicas

- É só cosmético na TAB — não dá cargo, não dá permissão, não muda chat nem mensagem de entrada/saída.
- Convive de boa com o Obscure: um decide o que a entrada da TAB mostra (Patentes), o outro decide quem recebe essa entrada (Obscure) — um jogador obscurecido com patente aparece certinho pra quem pode vê-lo.
- Se o rank atribuído a alguém for removido do catálogo, o jogador fica sem prefixo até o rank voltar a existir ou a atribuição ser limpa.
