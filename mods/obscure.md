---
title: "Obscure"
description: "Esconde um jogador de verdade dos outros — chat, nome na tab, entidade e itens, não só um efeito de poção."
---

# Obscure

Poção de invisibilidade vanilla ainda deixa rastro: nome na tab, mensagem no chat, item dropado, hitbox pra flecha. Obscure fecha todos esses buracos por decisão de um operador — quem não tem permissão de ver o jogador escondido perde ele de vista por completo (como se ele tivesse desconectado), enquanto quem pode ver continua enxergando normal, sem nenhum efeito visual de transparência.

## Como conseguir

Já vem disponível — não tem item nem craft. É um mod de comando: a parte de esconder é de operador, e o chat oculto (`/obscurechat`) é aberto a todo jogador.

## Como usar

1. Um operador esconde um jogador online: `/obscure on <jogador>` (ou `toggle`).
2. Quem não é operador e não está na whitelist daquele alvo para de ver: nome dele na tab, mensagens de chat, a entidade dele, itens que ele derruba (incluindo ao morrer) — pra esses jogadores é como se ele tivesse saído do servidor.
3. Quem PODE ver (operador segurando a tag `obscure.AdminBypass`, ou alguém na whitelist) vê o jogador 100% normal — só um `~` cinza antes do nome na tab avisa que ele está obscurecido.
4. Libere alguém pra ver um alvo específico com `/obscure whitelist add <viewer> <target>` (funciona com os dois offline) — ou deixe o próprio jogador se resolver sozinho: `/obscure whitelist selfadd <target>`, `selfremove`, `addviewer <viewer>`.
5. `/obscurechat <mensagem>` (ou `/obc`) sussurra só entre quem compartilha a mesma "visão oculta" — todo obscurecido que você enxerga, e só chega em quem também enxerga todos eles. `/obc toggle` transforma seu chat normal inteiro nesse canal.

## Comandos

| Comando | O que faz |
|---|---|
| `/obscure on\|off\|toggle <jogador>` | Esconde, revela ou alterna um jogador online (operador). |
| `/obscure status <jogador>` | Mostra se está obscurecido (operador). |
| `/obscure list` | Lista todo mundo obscurecido (online e offline) e quantos estão na whitelist de cada um (operador). |
| `/obscure whitelist add\|remove <viewer> <target>` | Libera ou revoga um jogador específico pra ver outro, mesmo offline (operador). |
| `/obscure whitelist list <target>` | Lista quem está liberado pra ver aquele alvo (operador). |
| `/obscure whitelist selfadd\|selfremove <target>` | Qualquer jogador se libera ou remove do próprio whitelist de um alvo. |
| `/obscure whitelist addviewer <viewer>` | Qualquer jogador libera outro pra vê-lo, caso fique obscurecido. |
| `/obscurechat <mensagem>` (`/obc`) | Sussurra só pra quem compartilha sua visão oculta. |
| `/obscurechat toggle` (`/obc toggle`) | Liga/desliga o modo que roteia todo seu chat pro canal oculto. |

## Configuração

Arquivo `config/obscure-config.jsonc`, com live-reload via `/reload` (aplica sem reiniciar). O único ajuste é `opBypassWhitelist`: `false` por padrão, o que faz um operador precisar segurar a tag `obscure.AdminBypass` pra ver através do esconderijo; virar `true` faz todo operador enxergar sempre, sem tag. O estado de quem está escondido, whitelist e cache de nomes fica separado em `config/obscure.json` — isso é dado gerado pelo mod, não config pra editar à mão.

## Dicas

- Por padrão nem operador vê de graça — precisa segurar a tag (`/tag @s add obscure.AdminBypass`) enquanto estiver moderando, e tirar depois (`/tag @s remove obscure.AdminBypass`).
- O jogador obscurecido some até do ping da lista de servidores e do mapa web (BlueMap, se instalado) — pra quem está de fora, ele parece 100% offline.
- Se ele desconectar de vez com itens ainda no chão, esses itens deixam de ficar escondidos e voltam a ser visíveis normalmente até desaparecerem sozinhos.
- Simple Voice Chat também é filtrado quando instalado: quem não vê, não ouve a voz dele.
