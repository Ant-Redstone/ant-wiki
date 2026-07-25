---
title: "Useful Enchantments"
description: "Encantamentos novos além do vanilla, incluindo o Glide, que transforma um peitoral em elytra."
---

# Useful Enchantments

Adiciona 8 encantamentos "vanilla+" — bounce, voo, mineração em área, coleta automática à distância, durabilidade extra — e ajusta a bigorna pra ela nunca mais recusar um resultado por "caro demais". Tudo craftado na mesa de ferraria (smithing table) e aplicado por bigorna, do jeito vanilla normal; nenhum mod client é necessário.

## Como conseguir
Cada encantamento sai como livro encantado de uma receita de mesa de ferraria:

| Encantamento | Vai em | Receita (smithing table) |
|---|---|---|
| Bouncy | Botas | bola de slime + bola de slime |
| Glide | Peitoral | ghast seco + elytra |
| Quick March (níveis I–III) | Sela ou harness | sela ou harness + açúcar |
| Veinminer | Picareta | diamante + TNT |
| Timber | Machado | diamante + tora de carvalho |
| Better Mining (níveis I–IV) | Picareta, pá ou enxada | diamante + bloco de ferro |
| Auto-Collect | Ferramenta de mineração, arma corpo a corpo, arco, besta ou tridente | diamante + pérola do End |
| Tuff (níveis I–III) | Qualquer ferramenta ou armadura | tuff + diamante |

Alguns desses encantamentos também aparecem nos trades do bibliotecário, dependendo do nível dele.

## Como usar
1. Craft o livro na mesa de ferraria com os dois ingredientes da tabela acima.
2. Leve o livro e a peça numa bigorna (uso vanilla normal). Pra Quick March, combine dois livros/peças do mesmo nível pra subir de nível.
3. O efeito passa a valer assim que a peça está equipada ou segurada no lugar certo.

**Bouncy (botas)** — anula todo dano de queda; caindo de mais de 1.5 blocos, você quica como um slime e mantém o impulso horizontal. Segurando qualquer lança, o bounce ativa em qualquer altura de queda (até no chão plano) e fica mais forte — um truque de movimento deliberado. Agachar cancela.

**Glide (peitoral)** — voa feito elytra sem trocar a peça de armadura; pular de novo no ar (duplo pulo) ativa o voo. Clique direito no peitoral encantado dentro do próprio inventário alterna a aparência dele entre o visual normal e o de uma elytra de verdade — puramente estético, não muda defesa nem encantamento.

**Quick March (sela ou harness, até nível III)** — a montaria (cavalo, Happy Ghast etc.) que usa o equipamento encantado anda ou voa mais rápido por nível. Some ao desmontar ou trocar o equipamento.

**Veinminer (picareta)** — minerar um minério quebra o veio inteiro conectado, de uma vez (até 64 blocos), com um brilho ciano mostrando o veio inteiro antes de você quebrar o primeiro bloco.

**Timber (machado)** — cortar uma tora derruba a árvore inteira (até 96 blocos), mas só se tiver folha de verdade encostando no tronco (folha colocada à mão não conta). Desliga completamente se você agachar.

**Better Mining (picareta, pá ou enxada, até nível IV)** — quebra uma área ao redor do bloco mirado, no plano da face que você realmente acertou: nível I é 1x2, II é 3x3, III é 5x5, IV é 7x7. Só afeta blocos da mesma família da ferramenta (pedra/minério pra picareta, terra/areia pra pá, etc.), desliga se você agachar, e clicar com o botão direito numa ferramenta encantada — dentro do inventário, não segurando na mão — abre um seletor pra escolher uma área menor que o nível real permite.

**Auto-Collect (ferramenta de mineração, arma corpo a corpo, arco, besta ou tridente)** — quebrar um bloco ou matar um bicho já teleporta os drops direto pra você, sem precisar andar até eles. Funciona mesmo acertando de longe com arco/besta/tridente.

**Tuff (qualquer ferramenta ou armadura, até nível III)** — reduz a chance da peça perder durabilidade a cada uso, parecido com Unbreaking.

Veinminer, Timber e Better Mining mostram um brilho (visível só pra você) em tudo que vai ser quebrado junto, atualizado em tempo real conforme você mira — nunca mostra algo que a mineração de fato não faria.

## Comandos
| Comando | O que faz |
|---|---|
| `/usefulench status` | Mostra a config atual e os níveis de Bouncy/Glide equipados por você. |
| `/usefulench selftest` | Confirma que os encantamentos carregaram certo, sem precisar craftar/morrer pra testar. |
| `/usefulench debug on` / `debug off` | Liga/desliga log detalhado no console. |
| `/usefulench book [nome]` | Dá direto um livro encantado (`bouncy`, `glide` ou `quick_march`), sem craftar. |

Restrito a operadores — é ferramenta de debug/administração, não pensada pro jogador comum. `selftest` e `book` só cobrem Bouncy, Glide e Quick March; os outros 5 encantamentos se testam craftando normalmente.

## Configuração
Dois ajustes de bigorna em `config/useful_enchantments.json` valem destacar: `anvilMaxCostLevels` (padrão 39) é o teto de custo — acima disso, o custo é limitado nesse valor em vez da bigorna recusar o resultado, então ela nunca mais trava um item por "caro demais"; `anvilRepairCostCap` (padrão 3) trava a penalidade de uso repetido, que na vanilla dobra a cada passagem sem limite nenhum. Pra quem usa Bouncy, `bounceMinHeight` (padrão 1.5 blocos) é a altura mínima de queda pra ativar o bounce sem estar com uma lança na mão.

## Dicas
- Segure uma lança pra ativar o Bouncy em qualquer altura de queda, inclusive no chão plano — dá pra ganhar velocidade horizontal "pogando".
- Agache pra desligar Better Mining, Timber e Veinminer na hora, quando quiser minerar ou cortar só um bloco por vez.
- Passe o mouse em cima de qualquer livro encantado — a lore já mostra o efeito e o nível máximo, sem precisar decorar receita nenhuma.
- A bigorna não recusa mais resultado nenhum por "caro demais" dentro do teto configurado — combine à vontade sem medo de travar um item bom.
