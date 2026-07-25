---
title: "Config Reload"
description: "Faz o /reload vanilla também recarregar a config de todos os outros mods, sem reiniciar o servidor."
---

# Config Reload

Mod de infraestrutura, sem nenhuma mecânica de jogo própria: ele só garante que mudar um número de config em
qualquer outro mod (cooldown, custo, duração, tamanho...) tenha efeito na hora, sem precisar reiniciar o
servidor inteiro.

## Como conseguir
Não craft nenhum, não é um item — já vem ativo assim que o servidor sobe.

## Como usar
Não tem uso direto de jogador — é uma ferramenta de administração. Cada mod que participa desse mecanismo
simplesmente recarrega sozinho a própria config quando um dos comandos abaixo roda.

## Comandos
| Comando | O que faz |
|---|---|
| `/reload` | Comando vanilla de data packs — agora também recarrega a config de todo mod inscrito. |
| `/reloadconfigs` | Só recarrega as configs dos mods, sem tocar em data packs. |

Os dois são restritos a operadores. Depois de rodar qualquer um, o servidor manda um resumo pros operadores
online (quantos recarregaram, quais falharam) e loga o mesmo resumo no console.

## Configuração
Este mod não tem config própria — não há nada pra ajustar nele.

## Dicas
- Se você é admin e mudou um valor de config de qualquer mod da lista, `/reloadconfigs` é mais rápido que
  reiniciar o servidor inteiro.
- Uma falha ao recarregar a config de UM mod nunca impede os outros de recarregar — o resumo mostra
  exatamente qual falhou, se algum falhar.
