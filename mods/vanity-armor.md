---
title: "Vanity Armor"
description: "Mostra uma aparência de armadura diferente da que realmente te protege — puramente visual."
---

# Vanity Armor

Deixa você escolher uma aparência de armadura separada da que está de fato equipada. Todo mundo mais vê a "fantasia" que você escolheu; a armadura real continua sendo o que importa pra defesa, durabilidade e encantamentos.

## Como conseguir
Não craft nada pra usar a função em si — é só abrir o comando abaixo e montar a aparência na UI. A exceção é o set **Familiar** (Elmo, Peitoral, Calças e Botas Familiares), que craft normalmente na bancada, no mesmo formato das receitas de armadura de couro da vanilla, trocando o couro por **Membrana de Phantom**.

## Como usar
1. Rode `/vanityarmor` ou `/vanity` pra abrir a UI de vaidade — 5 slots: capacete, peitoral, calças, botas, e um reservado pra uso futuro.
2. Coloque nela o que você quer que os OUTROS vejam você vestindo — pode ser qualquer armadura, igual ou diferente da que está realmente equipada.
3. Pra parecer sem armadura nenhuma mesmo estando equipado por baixo, use as peças do set Familiar no slot de vaidade correspondente — elas escondem a peça real daquele slot em vez de mostrar uma skin.
4. A escolha fica salva com os seus dados de jogador — sobrevive a relog e restart do servidor, sem precisar reconfigurar.
5. Você mesmo nunca vai ver sua própria aparência de vaidade, nem em terceira pessoa — é uma limitação do próprio Minecraft (o servidor nunca manda seus próprios dados de equipamento de volta pra você). Peça pra alguém conferir, ou olhe por um espectador.

## Configuração
`config/vanity_armor.json` tem só um campo: `enabled` (ligado por padrão) desliga a substituição visual inteira — o comando e a UI continuam funcionando normalmente, só param de ter efeito até você reativar.

## Dicas
- A armadura real nunca é tocada — pode misturar vaidade de diamante com armadura de couro de verdade por baixo sem perder proteção nenhuma.
- Use o set Familiar se você curte a estética "sem armadura" mas não quer abrir mão da defesa de verdade.
- Como você não consegue ver a própria vaidade, sempre confirme com um amigo (ou modo espectador) depois de trocar, principalmente antes de um evento ou screenshot em grupo.
- A troca é só visual e imediata — não precisa relogar nem reequipar nada pra ela aparecer pros outros.
