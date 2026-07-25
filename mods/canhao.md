---
title: "Canhão de Construção"
description: "Importa schematics .schem/.litematic e constrói a estrutura sozinho, bloco a bloco, puxando material de containers."
---

# Canhão de Construção

Constrói qualquer schematic `.litematic` ou `.schem` sozinho, bloco a bloco, puxando material de uma rede de
containers — sem precisar posicionar cada bloco na mão. Pensado pra estruturas grandes demais pra construir
manualmente.

## Como conseguir
Receita shapeless simples: **1 lodestone + 1 dispenser** → Canhão de Construção (bancada comum, não precisa
de smithing nem template). Alternativa: comando `/canhao dar` (operador) entrega o item direto.

## Como usar
1. Coloque o canhão como um bloco normal.
2. Importe uma schematic com `/canhao carregar <url|nome-do-arquivo>` — aceita link direto (com proteção
   contra SSRF) ou um arquivo já salvo na pasta `schematics/` do servidor. Isso entrega um item "Projeto" no
   seu inventário.
3. Ancore o Projeto: use ele (clique direito) num bloco qualquer — o canto da obra fica ali e a rotação segue
   pra direção que você tava olhando. Shift+clique gira em passos de 90° sem mover a âncora. Usar o Projeto no
   ar (sem mirar em bloco nenhum) abre uma placa pra digitar coordenadas x/y/z exatas em vez de mirar.
4. Use o Projeto já ancorado sobre o canhão colocado (vazio) pra inserir a obra nele — o item é consumido. Se
   o canhão já tiver um Projeto carregado, ejete antes de inserir outro.
5. Clique direito no canhão (sem item na mão) abre a UI de controle: barra de progresso, estoque de pólvora,
   modo de substituição (não sobrescrever / substituir diferente / forçar tudo), iniciar/pausar/cancelar,
   liga/desliga do preview, lista de materiais e ejetar Projeto.
6. O canhão constrói sozinho, retirando material da rede de containers ao redor (inclusive por correntes, no
   padrão do Storage Manager). Se faltar algum material, ele constrói o que der e retoma sozinho quando o
   material voltar — nunca trava a obra inteira por um item faltando. Quebrar o canhão em obra cancela o job e
   devolve o item do canhão + o Projeto carregado.

## Comandos
| Comando | Permissão | O que faz |
|---|---|---|
| `/canhao dar` | operador | Entrega o item do canhão. |
| `/canhao carregar <url\|nome-do-arquivo>` | jogador comum* | Importa uma schematic e entrega o Projeto. Tem cooldown por jogador. |
| `/canhao lista` | qualquer jogador | Lista os Projetos salvos (nome, dimensões, blocos, autor). |
| `/canhao apagar <id-ou-prefixo>` | operador | Apaga um Projeto salvo. Aceita id completo ou prefixo. |
| `/canhao debugparse <caminho>` | operador (uso de depuração) | Analisa um arquivo de schematic por caminho e imprime um resumo no console — útil pra conferir um arquivo antes de importar. |

\* a menos que a config restrinja `/canhao carregar` a operadores.

## Configuração
Arquivo `config/canhao.json`, recarregável a quente via `configreload`. Os números que mais afetam o dia a
dia: `blocosPorTick` (padrão 4 — quantas colocações o canhão tenta por tick), `polvoraPor` (padrão 64 —
consome 1 pólvora a cada N blocos) e `cooldownCarregarSeg` (padrão 30s entre importações por jogador). Também
dá pra restringir `/canhao carregar` a operadores (`carregarSoOp`) e ajustar o preview fantasma (raio,
contorno, escala, duração).

## Dicas
- Ligue o preview fantasma antes de inserir o Projeto — ele mostra os blocos reais próximos da âncora, então
  dá pra conferir orientação e posição antes de gastar o item.
- Portas, camas e plantas altas contam certo na lista de materiais (só a metade que é o item de verdade conta
  1) — não estranhe se o número parecer "baixo" pra um bloco de duas partes.
- Cancelar um job não devolve blocos já colocados — só interrompe os que ainda faltavam.
- Se o servidor reiniciar no meio de uma obra, ela retoma sozinha do ponto salvo, sem precisar reancorar nada.

## Ferramenta opcional de cliente
Tudo acima é 100% server-side — o canhão funciona com qualquer cliente vanilla, sem instalar nada. A única
exceção nesta página é um mod client-side **separado e opcional**, o **Canhão Upload**: em vez de subir a
schematic num link ou no Discord pra depois rodar `/canhao carregar <url>`, esse mod deixa escolher o arquivo
`.schem`/`.litematic` direto do seu computador e mandar pro servidor pela própria rede do jogo. Exige um
servidor rodando canhao 1.3.0 ou mais novo. Sem esse mod instalado, `/canhao carregar` continua funcionando
normalmente por URL ou por arquivo já salvo no servidor — é puramente uma comodidade opcional, não um
requisito.
