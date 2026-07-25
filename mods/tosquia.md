---
title: "Tosquia de Vacas"
description: "Tosa vacas adultas com tesoura para couro extra — com um custo real, sem ser estranho."
---

# Tosquia de Vacas

Adiciona uma interação que não existe no vanilla: usar a tesoura de tosquia numa vaca adulta pra tirar couro
dela. Pensado como fonte alternativa de couro com um custo de verdade — a vaca fica ferida e vira bezerro por
um tempo, então não dá pra farmar a mesma vaca sem esperar.

## Como conseguir
Já vem disponível — não craft nada, é só usar a tesoura de tosquia (`minecraft:shears`) comum.

## Como usar
Clique direito (mão principal) numa vaca **adulta** com a tesoura de tosquia:
- Tira 2 corações de dano dela.
- Ela vira bezerro na hora, e volta a virar adulta sozinha depois de um tempo (padrão 6 minutos) — o próprio
  crescimento natural do jogo, então sobrevive a reinício do servidor sem perder o progresso.
- Derruba 1-2 couros no chão e toca o som de tosquia.
- Gasta 1 de durabilidade da tesoura (exceto em modo criativo).
- A vaca fica "tosquiada" por um tempo: solta partículas vermelhas e pisca vermelho periodicamente (visual de
  dano, sem tirar vida de verdade) — só um aviso de que ela foi tosquiada recentemente.

Uma vaca que já é bezerro não reage à tesoura — o próprio tempo de crescimento já funciona como cooldown. Se
o dano da tosquia matar a vaca (vida baixa demais), nada mais acontece: sem virar bezerro, sem couro, sem
partícula.

## Configuração
Arquivo `config/tosquia.json`, recarregável a quente via `configreload`. Os números principais: `damageHearts`
(padrão 2.0 corações de dano), `growthSeconds` (padrão 360s = 6 minutos até virar adulta de novo) e
`leatherMin`/`leatherMax` (padrão 1-2 couros por tosquia). Dá pra desligar o efeito visual de "tosquiada"
inteiro com `taintEnabled`, ou ajustar sua cor e duração separadamente da duração do piscar.

## Dicas
- Só funciona em vaca adulta — bezerro ignora a tesoura completamente.
- Uma vaca com pouca vida pode morrer com o próprio dano da tosquia — nesse caso você não ganha nada (sem
  couro, sem bezerro, sem partícula).
- As partículas/piscar vermelhos são só visual — não afetam a vida real da vaca nem a deixam mais fraca a
  ponto de matar.
- Dá pra tosquiar a mesma vaca de novo assim que ela crescer — não existe trava permanente, só o tempo de
  crescimento do bezerro.
