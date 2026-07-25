---
title: "Mural"
description: "Converte uma imagem ou GIF de uma URL num mural de mapas travados na parede, animado e sincronizado."
---

# Mural

Pega uma imagem (ou GIF animado) de uma URL e transforma numa grade de mapas travados, prontos pra pendurar em molduras — um quadro, ou uma "tela" animada, feito 100% de mapa de Minecraft, sem cliente modificado.

## Como conseguir
Não craft nada — é só rodar o comando apontando pra uma URL de imagem.

## Como usar
1. Hospede a imagem ou GIF em algum lugar que dê um link direto pro arquivo (não é upload dentro do jogo). Hosts que funcionam: anexo do Discord, catbox.moe, postimages.org. **Imgur costuma bloquear** downloads vindos de servidor — se der erro, o mod já sugere outro host na própria mensagem.
2. Rode `/mural <LxA> <url>` — por exemplo, `/mural 3x2 <link>` gera uma grade de 3 colunas por 2 linhas (6 mapas).
3. Se você estiver de frente pra uma grade vazia de molduras (item frames) do tamanho exato, os mapas entram sozinhos, na ordem certa. Senão, vão pro seu inventário (ou caem no chão se não couber).
4. Se o link for um GIF, o mural anima sozinho, sincronizado em todos os mapas — e continua na fase certa mesmo depois de reiniciar o servidor.
5. Use `/mural travar [nome]` de frente pra qualquer grade de mapas em molduras (mesmo montada à mão) pra fixar as molduras (não quebram nem giram) e travar os mapas contra re-renderizar terreno. Rodar de novo destrava.
6. `/mural remover`, mirando o mural, desfaz ele (dono ou operador) — libera as molduras pra reuso e limpa qualquer animação associada.
7. `/mural limpar` remove animações órfãs acumuladas e compacta o arquivo em disco — só é preciso depois de um episódio de spam/acúmulo.

## Comandos
| Comando | O que faz |
|---|---|
| `/mural <LxA> <url> [travar] [nome]` | (operador) Gera o mural. `travar` já entrega fixado; `nome` define o nome dos mapas. |
| `/mural criar <LxA> <url> [nome]` | Versão segura pra qualquer jogador: só funciona numa grade de molduras vazias já existente, sempre entrega travado, nunca dá item solto. |
| `/mural travar [nome]` | Trava/destrava (é um toggle) qualquer grade de mapas em molduras na sua frente. |
| `/mural remover` | Remove o mural que você está mirando (dono do mural ou operador). |
| `/mural limpar` | (operador) Remove animações órfãs e compacta o arquivo de murais em disco. |
| `/mural` | Mostra um resumo dos comandos e hosts recomendados. |

## Configuração
Em `config/mural.json`: `maxTiles` (padrão 36) é o limite de colunas × linhas por mural; `cooldownSegundos` (padrão 5) é o intervalo mínimo entre usos do comando pelo mesmo jogador; `maxBytes` (padrão 8 MB) é o tamanho máximo do arquivo baixado. Pra GIF, `gifMaxFrames` (padrão 60) limita quantos quadros ficam guardados por animação.

## Dicas
- Prefira catbox.moe ou um anexo do Discord — imgur bloqueia boa parte dos downloads vindos de servidor.
- Sempre trave o mural depois de montado (`/mural travar` ou o `[travar]` inline) — sem isso, qualquer atualização de chunk pode re-renderizar os mapas como terreno normal de novo.
- GIF com muitos quadros deixa o arquivo de animação maior em disco — `gifMaxFrames` existe justamente pra isso não crescer sem controle.
- Jogador comum sem permissão de operador pode montar mural com `/mural criar`, mas só numa grade de molduras vazias já preparada de antemão.
