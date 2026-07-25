---
title: "Cocho de Ração"
description: "Alimentador automático de área: carregue com comida e ele alimenta sozinho os bichos adultos por perto."
---

# Cocho de Ração

Um comedouro automático: carregue com a comida certa e ele alimenta sozinho qualquer bicho adulto que passar
perto, sem precisar segurar comida na mão pra cada um.

## Como conseguir
Craft em formato de U, o mesmo do carrinho de minério — uma fileira com uma laje de madeira em cada ponta, e
a fileira de baixo inteira com lajes:

```
L . L
L L L
```

(L = qualquer laje de madeira vanilla, inclusive Nether, bambu, cerejeira e carvalho pálido.) Resultado: 1
Cocho de Ração.

## Como usar
1. Coloque o cocho no chão — ele vira um bloco de cabeça de jogador de verdade, com a skin do cocho.
2. Clique direito nele pra abrir um inventário de 3 slots.
3. Guarde a comida que os bichos que você quer alimentar comem: trigo pra vaca/ovelha, cenoura/batata/
   beterraba pra porco, sementes pra galinha, e assim por diante — qualquer coisa que o bicho aceitaria na
   mão.
4. Pronto. Periodicamente o cocho verifica os bichos adultos numa área ao redor e alimenta quem estiver com a
   comida certa guardada, entrando em modo de amor (o mesmo efeito de alimentar na mão). Filhotes são
   ignorados, e o mesmo bicho só volta a poder ser alimentado depois do cooldown normal de reprodução (5
   minutos) — o cocho não esvazia sozinho rápido demais.
5. Quebrar o cocho devolve o item (com a skin) e toda a comida guardada, sem perder nada.

## Configuração
Arquivo `config/cocho.json`, recarregável a quente via `configreload`. A área de alimentação é definida por
`feedHalfX`/`feedHalfY`/`feedHalfZ` (padrão 6/3/6, ou seja 13x7x13 blocos centrados no cocho) e `tickPeriod`
(padrão 40 ticks = 2 segundos entre varreduras).

## Dicas
- Um cocho sem comida guardada não gasta processamento nenhum — pode espalhar vários pela fazenda sem medo de
  lag.
- Só funciona colocado no chão — cabeça de jogador colocada na parede não vira um cocho funcional.
- Não dá pra acelerar a reprodução além do normal — o cocho respeita o mesmo cooldown de 5 minutos que
  alimentar na mão já tem, então ele só re-alimenta o mesmo bicho quando o jogo permitiria de qualquer forma.
