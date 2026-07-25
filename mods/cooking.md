---
title: "Cooking"
description: "Fogão, panela, frigideira e tábua de corte: receitas de culinária configuráveis além do forno vanilla."
---

# Cooking

Um loop de culinária de verdade em cima do Minecraft vanilla: fogão, panela, frigideira e tábua de corte, com
receitas e comidas totalmente configuráveis pelos admins. Nenhum bloco ou item novo é baixado pelo cliente —
quem entra no servidor sem o mod instalado vê e usa tudo normalmente.

## Como conseguir
As quatro estações são craftadas na bancada comum (receitas vanilla de datapack, aparecem no livro de
receitas normal):
- **Fogão**: 8 tijolos ao redor de 1 fogueira (formato de fornalha, fogueira no centro).
- **Panela de cozinhar**: 4 lingotes de ferro + 1 tigela.
- **Frigideira**: 3 lingotes de ferro + 1 graveto.
- **Tábua de corte**: 1 laje de spruce + 1 lingote de ferro (sem formato fixo).

Alternativa pra operadores: `/cooking give stove|pot|pan|board` entrega qualquer uma direto.

## Como usar
1. Plante o fogão em cima de qualquer bloco (vira tijolos de verdade + uma fogueira apagada em cima).
2. Acenda com isqueiro (fogo, fumaça e crepitar); apague agachado com a mão vazia.
3. Clique direito no fogão com a panela na mão pra pendurá-la nele.
4. Clique direito na panela (ou no fogão) abre o menu de cozimento: até 6 ingredientes + 1 recipiente. Com o
   fogão aceso embaixo, o cozimento avança sozinho (fogão apagado pausa o progresso, sem perder o que já
   cozinhou); ao terminar, o prato (uma head comestível) aparece no slot de saída, e comer devolve o
   recipiente configurado.
5. Instale a frigideira no fogão (exclusiva com a panela — só uma das duas por vez) e use nela um item cru
   configurado: frita sozinha em alguns segundos com o fogão aceso, e entrega o item cozido.
6. Coloque a tábua de corte em cima de qualquer bloco, deposite um item configurado nela e golpeie com
   qualquer espada pra picar — cada resultado configurado é sorteado de forma independente, pelo peso.
7. Comidas marcadas como banquete (`feast`) podem ser colocadas no mundo (use a head da comida sobre um
   bloco); usar o recipiente certo nela serve uma porção de cada vez, guardando quanto sobra mesmo se ela for
   quebrada e recolhida.
8. Socar a panela/frigideira/tábua solta ela de volta (com o conteúdo); quebrar o bloco de suporte derruba a
   estação inteira, sem perder nada.

## Comandos
| Comando | Quem pode | O que faz |
|---|---|---|
| `/cooking` / `/cooking recipes` | Todos | Lista no chat as receitas de panela, tábua, frigideira e craft das estações. |
| `/cooking book` | Todos | Entrega um livro escrito com as receitas atuais, gerado na hora a partir da config. |
| `/cooking give stove\|pot\|pan\|board` | Operador | Entrega a estação escolhida. |
| `/cooking stations` | Operador | Lista as estações registradas no mundo (posição, dimensão, estado). |
| `/cooking reload` | Operador | Recarrega `cooking.jsonc` do disco sem reiniciar o servidor. |
| `/cooking test` | Operador | Roda uma bateria de self-tests reais no mundo e reporta PASS/FAIL no chat. |

## Configuração
Arquivo `config/cooking/cooking.jsonc` (o outro arquivo da pasta, `stations.json`, é estado salvo do jogo —
não é config e não deve ser editado à mão). Depois de editar, rode `/cooking reload`. Alguns números centrais:
`skilletSeconds` (padrão 6s pra fritar na frigideira), o tempo de cada receita de panela (`pot[].seconds`, ex.
10s nas receitas de exemplo) e o peso de cada resultado da tábua (`board[].outputs[].weight`, de 0 a 1, cada
saída sorteada de forma independente). Todas as comidas, receitas de panela/tábua e o mapa cru→cozido da
frigideira vivem nesse mesmo arquivo.

## Dicas
- Sem fogo aceso embaixo, a panela pausa o cozimento em vez de perder o progresso — não precisa recomeçar do
  zero.
- `/cooking book` é mais rápido que abrir a documentação pra conferir as receitas atuais no meio do jogo.
- Panela e frigideira não convivem no mesmo fogão — escolha uma por estação.
- Um banquete (feast) lembra quantas porções restam mesmo se for quebrado e levado embora — dá pra mover um
  banquete pela metade sem perder comida.
