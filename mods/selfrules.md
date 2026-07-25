---
title: "Selfrules"
description: "Liga ou desliga gamerules do vanilla por jogador ou por tipo de mob, sem afetar o resto do servidor."
---

# Selfrules

Gamerule vanilla vale pro mundo inteiro: ligou keepInventory, todo mundo mantém inventário na morte. Selfrules quebra isso em overrides individuais — por jogador ou por tipo de mob (ex. só o creeper, não a entidade individual) — sem mudar o valor real do servidor pra mais ninguém.

## Como conseguir

Já vem disponível — não tem item nem craft, é tudo comando.

## Como usar

1. As 12 regras de escopo jogador (dano de queda/fogo/afogamento/congelamento, pvp, keepInventory, mensagem de morte, respawn imediato, ender pearl ao morrer, phantom, ciclo de dia, ciclo de clima) já vêm liberadas por padrão pra você mudar em SI MESMO, sem precisar de operador — a menos que o admin tenha desligado o self-service de alguma ou travado ela.
2. Ver seus overrides atuais: `/selfrules player <seu nome>`.
3. Mudar uma regra: `/selfrules player <seu nome> <regra> <true|false>`. Pra voltar ao valor real do servidor: `<regra> clear`.
4. `/selfrules list` mostra as 20 regras, o modo atual de cada uma (ON/LOCKED/OFF) e se ela é self-service — pra um não-operador, só aparecem como editáveis as que realmente dá pra mudar.
5. Regra por tipo de mob (`mobGriefing`, `mobDrops` etc.) é sempre coisa de operador: `/selfrules mob <entity_type> <regra> <valor>`.

## Comandos

| Comando | O que faz |
|---|---|
| `/selfrules player <jogador>` | Mostra os overrides atuais daquele jogador. Não-operador só consulta a si mesmo. |
| `/selfrules player <jogador> <regra> <true\|false\|clear>` | Seta ou limpa uma regra pra um jogador. Não-operador só em si mesmo e só numa regra self-service. |
| `/selfrules mob <entity_type>` | Mostra os overrides atuais daquele tipo de mob. |
| `/selfrules mob <entity_type> <regra> <true\|false\|clear>` | Seta ou limpa uma regra por tipo de mob. Sempre operador. |
| `/selfrules list` | Lista as 20 regras: escopo, modo, se é self-service. Aberto a qualquer jogador. |
| `/selfrules reload` | Recarrega a config e os overrides salvos do disco. Sempre operador. |
| `/selfrules test` | Roda um self-test automatizado (só se habilitado na config). Sempre operador. |

## Configuração

Arquivo `config/selfrules-config.jsonc`, escrito uma vez na primeira subida — edições e comentários ficam preservados depois disso. Não recarrega sozinho quando o arquivo muda no disco: depois de editar, roda `/selfrules reload` (ou reinicia). As 12 regras de jogador vêm com self-service LIGADO por padrão (qualquer jogador já pode mexer nelas em si mesmo); quem quiser travar isso numa regra específica desliga ela dentro do bloco `selfService`, por regra. `testCommandEnabled` e `disableAllCommands` vêm `false` por padrão.

## Dicas

- PVP desligado é mútuo: você para de levar dano de outro jogador E também para de conseguir bater nele — não é só proteção de um lado.
- Regra em modo `LOCKED` continua valendo pra quem já tinha override — só trava mudança nova; `OFF` é mais forte, ignora até override que já existia.
- `doDaylightCycle`/`doWeatherCycle` desligado só congela o que VOCÊ vê (dia/clima no seu cliente) — o mundo real, o clima de verdade e o spawn de mob continuam andando normal pra todo mundo.
- `/selfrules list` já filtra pra mostrar só as regras que você, como não-operador, pode realmente mexer.
