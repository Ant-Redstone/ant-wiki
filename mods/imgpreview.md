---
title: "ImgPreview"
description: "Detecta links de imagem no chat (inclusive vindos do Discord) e mostra um preview rápido da imagem em jogo, sem precisar abrir o link fora do Minecraft."
---

# ImgPreview

Manda (ou vê alguém mandar) um link de imagem no chat e aparece um botão pra dar uma olhada rápida nela sem sair do jogo — inclusive links que chegam via integração com o Discord.

## Como conseguir

Não precisa craftar nada — já vem ativo assim que o mod está instalado no servidor. 100% do lado do servidor, ninguém precisa instalar nada no cliente.

## Como usar

Quando um link terminado em `.png`, `.jpg`, `.jpeg`, `.gif` ou `.webp` aparece no chat (de um jogador ou repassado do Discord), o mod detecta sozinho e posta um botão **[ver imagem]** logo abaixo, visível pra todo mundo.

Clique no botão (qualquer jogador que ver o botão pode clicar, não só quem mandou o link): a imagem é baixada e aparece como um mapa temporário na sua mão secundária — segure normalmente pra ver, como qualquer mapa vanilla. Depois de alguns segundos o item que estava lá antes volta sozinho (e volta na hora se você desconectar com o preview ainda ativo, então nunca fica um mapa falso salvo no seu inventário).

Também dá pra pedir um preview direto, sem depender de ninguém ter mandado o link no chat — veja o comando abaixo.

## Comandos

| Comando | O que faz |
|---|---|
| `/imgpreview <link>` | baixa a imagem do link e mostra o preview pra você, na mão secundária |

## Configuração

Ajustável pelos admins: quanto tempo o preview fica na mão antes de restaurar seu item de verdade (padrão 10 segundos), tamanho máximo de imagem aceito pro download (padrão 5 MB), e se a detecção automática no chat fica ligada (padrão sim).

## Dicas

- Link do imgur não funciona (o site bloqueia esse tipo de acesso vindo do servidor) — prefira link direto do Discord, catbox ou Wikimedia.
- `.webp` não abre (o servidor não decodifica esse formato de imagem) — se o preview falhar, peça a imagem em `.png` ou `.jpg`.
- O preview é só seu: ninguém mais vê o mapa na sua mão, então clicar no botão nunca incomoda outro jogador.
- Tem um intervalinho entre um preview e outro — se pedir de novo rápido demais, o jogo só avisa pra esperar um segundo.
