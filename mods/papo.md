---
title: "Papo"
description: "Sussurro (/msg, /tell, /w, /r) mais bonito e grupos de chat persistentes com toggle."
---

# Papo

Papo troca a cara do sussurro vanilla — mesmo comando, visual diferente — e adiciona `/r` pra responder rápido, além de um sistema de grupo de chat que sobrevive a restart: crie, convide, e alterne seu chat normal pra dentro do grupo com um toggle.

## Como conseguir

Já vem disponível — não tem item nem craft, tudo é comando de chat.

## Como usar

1. `/msg <jogador> <mensagem>` (ou `/tell`, `/w`) sussurra — mesmo formato de sempre, só a cor/formatação muda.
2. `/r <mensagem>` responde direto a quem te sussurrou por último (vale só pra sessão atual — reinicia com o servidor).
3. `/grupo criar <nome>` cria um grupo — você vira dono, primeiro membro, e o toggle já liga na hora.
4. `/grupo convidar <nome> <jogador>` convida (qualquer membro pode convidar, não só o dono); quem recebe aceita com `/grupo aceitar <nome>` ou recusa com `/grupo recusar <nome>`.
5. `/grupo toggle <nome>` liga/desliga o modo em que seu chat normal (sem precisar de comando) vai direto pro grupo em vez do público. `/grupo msg <nome> <mensagem>` manda uma mensagem avulsa sem mexer no toggle.
6. `/grupo sair <nome>` sai do grupo (se você era dono, a posse passa pro membro mais antigo); `/grupo expulsar <nome> <jogador>` e `/grupo apagar <nome>` são só do dono.

## Comandos

| Comando | O que faz |
|---|---|
| `/msg\|/tell\|/w <jogador> <mensagem>` | Sussurro — substitui o vanilla, mesmo formato, visual próprio. |
| `/r <mensagem>` | Responde a quem sussurrou por último na sessão. |
| `/grupo criar <nome>` | Cria um grupo novo. |
| `/grupo convidar <nome> <jogador>` | Convida alguém (qualquer membro pode). |
| `/grupo aceitar\|recusar <nome>` | Aceita ou recusa um convite pendente. |
| `/grupo sair <nome>` | Sai do grupo. |
| `/grupo expulsar <nome> <jogador>` | Remove um membro (só dono). |
| `/grupo apagar <nome>` | Apaga o grupo pra todo mundo (só dono). |
| `/grupo toggle <nome>` | Liga/desliga seu chat normal indo pro grupo. |
| `/grupo msg <nome> <mensagem>` | Manda uma mensagem avulsa pro grupo. |
| `/grupo listar` | Lista seus grupos e qual está com toggle ativo. |
| `/grupo membros <nome>` | Lista os membros (online/offline). |
| `/grupo convites` | Lista seus convites pendentes. |

## Configuração

Não tem número pra ajustar aqui — `config/papo.json` guarda só dado (grupos, convites, cache de nomes), não configuração, e é gerenciado inteiramente pelos comandos acima. Ele suporta recarregar sem reiniciar o servidor caso um operador precise editar o arquivo na mão, mas não há um valor numérico ou toggle de comportamento pra mexer.

## Dicas

- `/r` é de sessão — reinicia com o servidor, então não dá pra confiar nele depois de uma queda de conexão longa.
- Grupo sobrevive a restart do servidor (fica salvo), diferente de "quem sussurrou por último".
- Com o toggle de grupo ligado, seu chat normal (sem usar `/grupo msg`) já vai todo pro grupo — desligue com o mesmo comando quando quiser voltar a falar público.
