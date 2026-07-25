---
title: "AFK"
description: "Detecta ausência real do teclado e ajusta sono/phantom ao redor do jogador AFK, sem nunca desconectar ninguém."
---

# AFK

Marca quem está realmente ausente — sem mexer a câmera nem interagir por um tempo — e ajusta o servidor ao redor dessa pessoa (contagem de sono, insônia/phantom) sem nunca desconectar ela.

## Como conseguir
Não craft nada nem precisa configurar nada — a detecção já funciona sozinha assim que o mod está instalado.

## Como usar
1. Fique parado, sem mexer a câmera e sem interagir (bloco, entidade, item, ataque, chat, comando) pelo tempo configurado (padrão 5 minutos) — o jogo te marca AFK automaticamente e avisa numa mensagem na action bar.
2. Seu nome aparece em cinza no TAB com um prefixo `[AFK]` na frente enquanto durar.
3. Enquanto AFK, você não conta pro número de jogadores necessários pra dormir/pular a noite, e não acumula "tempo sem descansar" — ou seja, não gera phantom em cima de você por insônia que não foi culpa sua.
4. Qualquer ação real (mexer a câmera, interagir, atacar, falar, rodar comando) tira você do AFK na hora.
5. Rode `/afk` a qualquer momento pra se marcar ou desmarcar manualmente, sem esperar o tempo de inatividade.
6. Você nunca é desconectado por ficar AFK — o mod só observa e ajusta, nunca kicka.

Se **todo mundo** online estiver AFK ao mesmo tempo, a exclusão do sono é ignorada e o servidor volta ao comportamento vanilla normal — sem essa exceção, a conta de "jogadores precisos pra dormir" travaria a noite pra sempre com 100% de AFK.

Uma fazenda AFK com clicker automático que gera interação de verdade continua contando como jogador ativo — não dá pra distinguir um clique de script de um clique real sem quebrar fazenda/pesca AFK legítima, então isso é esperado, não uma falha.

## Comandos
| Comando | O que faz | Quem pode usar |
|---|---|---|
| `/afk` | Liga/desliga seu próprio estado AFK na hora. | Qualquer jogador (se habilitado na config) |

## Configuração
Em `config/afk.json`: `afkAposSegundos` (padrão 300) é quanto tempo sem rotação de câmera nem interação até marcar AFK sozinho; `sufixoTab` (padrão `§7[AFK] `) é o prefixo mostrado no TAB; `pularNoiteSeTodosAfk` (ligado por padrão) decide se 100% de AFK simultâneo libera o sono normal em vez de travar a noite; `comandoManual` (ligado por padrão) habilita o `/afk` manual.

## Dicas
- Se você só vai sair rapidinho e quer manter o marcador de sono correto, `/afk` manual é mais rápido que esperar os 5 minutos padrão.
- O marcador `[AFK]` no TAB soma com patente/rank de outro mod, se o servidor tiver — nenhum dos dois some por causa do outro.
- Fazenda ou pesca AFK com auto-clicker continua contando como "ativa" pro sono — isso é proposital, não bug pra reportar.
- Se o admin desligar `comandoManual`, o `/afk` responde com erro e não faz nada — só a detecção automática continua valendo.
