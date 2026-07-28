---
title: "Storage Manager"
description: "Rede de prateleiras e canos que agrega baús e barris numa única interface de busca, com autocrafting e acesso remoto."
---

# Storage Manager

Transforma uma parede de baús/barris/shulkers numa rede única: uma prateleira craftada agrega tudo atrás dela numa interface pesquisável e paginada, com canos pra automatizar transporte de item e uma central de autocrafting por cima.

## Como conseguir

Mesa de ferraria: qualquer prateleira de madeira (`<madeira>_shelf`, qualquer uma das 12 variantes) + baú → a mesma prateleira, renomeada "Storage Manager".

## Como usar

Coloque a prateleira encostada numa parede de baús, barris, hoppers, chiseled bookshelves ou shulker boxes — ela escaneia tudo que está conectado atrás dela (inclusive através de correntes, que servem só pra esticar o alcance sem virar armazenamento). Clique direito abre a grade agregada (9x6, paginada); sneak + clique direito força um rescan manual (normalmente nem precisa, colocar um container novo perto já dispara um rescan sozinho).

Na grade: clique esquerdo pega uma pilha, clique direito pega metade, shift+clique manda direto pro seu inventário, duplo clique pega tudo daquele item. O botão de busca abre uma placa descartável pra digitar o termo; o de ordenar cicla entre mais estocado, menos estocado, e nome A-Z/Z-A. O botão de rescan com shift roda uma re-inserção completa (drena e reempilha tudo pra eliminar fragmentação de stacks parciais que sobra do uso do dia a dia).

**Correntes e camuflagem** — correntes de ferro/cobre esticam a rede sem contar como armazenamento; uma "Chain Camouflage" (mesa de ferraria: qualquer bloco + qualquer corrente) disfarça um conector de bloco qualquer, recuperável numa bancada de crafting comum (devolve o bloco + a corrente).

**Pipes** — craft shapeless (corrente de ferro + vela preta + redstone) vira um Pipe: ao mesmo tempo conector e importador/exportador. Cada face tem seu próprio modo (desligado, neutro, import, export, ambos), com filtro por item (whitelist/blacklist) e 5 modos de distribuição entre destinos. Configura com uma Chave Inglesa (escova + redstone na ferraria) pra ciclar modos de face, e papel pra abrir o filtro daquela face. Reach de até 8 blocos através de correntes/pipes, baú duplo conta como um container só, e uma máquina (fornalha etc.) alimentada por face neutra de qualquer pipe fica disponível pra inserção de qualquer outro pipe da mesma rede.

Cada face do filtro (de Pipe ou de Importador/Exportador) tem um botão **"Match"** pra escolher como ele compara item: **por tipo** (padrão — "qualquer poção", "qualquer livro encantado") ou **por item + NBT exato** (só a poção/encantamento específico que você clicou pra adicionar). Útil pra puxar de uma rede com vários tipos misturados — por exemplo, um auto-brewer que só deve receber Poção de Cura, não qualquer poção. Trocar esse modo limpa o filtro daquela face (os dois formatos não convertem um pro outro).

**Terminal de crafting** — upgrade na mesa de ferraria (Storage Manager + bancada de crafting → "Crafting Storage Manager"). Abre uma grade 3x3 de verdade que funciona como padrão reutilizável (os itens ficam ali entre usos): os ingredientes saem da rede primeiro, depois do seu inventário.

**Autocrafting** — um Auto-Crafter (bancada de crafting, shapeless: Crafting Storage Manager + 7 toras de qualquer madeira + 1 crafter) guarda padrões codificados em Crafting Capsules (pedra + bancada de crafting + redstone) via um Pattern Encoder de grade fantasma — os itens usados pra montar a receita não são gastos, só marcados. Itens com padrão disponível aparecem marcados como craftáveis na grade principal mesmo com estoque zero; pedir um craft mostra a árvore de receita completa e deixa escolher entre craftar uma vez ou manter aquele item sempre em estoque.

Além da bancada, o encoder tem o **modo Processamento** pra receitas de fornalha, fornalha alta, defumador, cortador de pedra e mesa de ferraria. Esse modo confere a receita contra as receitas reais do jogo — não dá pra inventar "item X vira item Y". Você monta os ingredientes na grade e coloca o resultado; a **quantidade** vem da própria receita, não do que você digitar, então não precisa adivinhar o rendimento (cortar Blackstone Polida em laje dá 2, por exemplo). Se a mensagem for "Arrange a valid recipe", é porque aquela combinação de ingrediente e resultado não corresponde a nenhuma receita registrada.

Se um item aparecer como faltando **ele mesmo** na lista ("não dá pra craftar 64× X — falta: 64× X"), isso quer dizer que nenhum padrão da rede produz esse item: ou não existe padrão codificado pra ele, ou o Auto-Crafter que o guarda não está encostado na rede.

O diálogo de pedido também tem um botão **"Craft max"**: em vez de digitar uma quantidade, ele descobre sozinho a maior quantidade que a rede consegue produzir agora com o material que existe, e enfileira exatamente isso — útil quando você só quer "o máximo possível" sem calcular na mão.

**Dono e acesso** — a primeira pessoa a rodar `/sm_dono` olhando pra uma prateleira vira dona dela; sem dono, qualquer um usa normalmente. Só o dono (ou um operador com a tag de bypass) consegue tornar a prateleira pública, confiar acesso a um jogador específico, ou revogar esse acesso depois.

**Acesso remoto** — um Controle Remoto (mesa de ferraria: baú do ender + estrela do nether) abre, de qualquer lugar e dimensão, a rede em que foi configurado. Pra configurar: abra qualquer Storage Manager segurando um Olho Emaranhado (mesa de ferraria: olho do ender + estrela do nether) — isso aponta o olho pra aquela rede — depois funda o olho já configurado no controle (mesa de ferraria: controle + olho) pra gravar o destino nele de vez.

## Comandos

| Comando | O que faz |
|---|---|
| `/sm_search [texto]` | Reabre a última prateleira que você viu, filtrada pelo texto (vazio = mostra tudo) |
| `/sm_craft <quantidade>` | Enfileira um autocraft pro item selecionado no diálogo de pedido |
| `/sm_craft_max` | Enfileira a maior quantidade craftável agora do item selecionado (o botão "Craft max" do diálogo) |
| `/sm_keep <quantidade>` | Mantém (ou cancela, com 0) manutenção automática de estoque pro item selecionado |
| `/sm_jobs` | Mostra quantos jobs de autocraft estão ativos |
| `/sm_dono` | Reivindica a prateleira que você está olhando (ou mostra quem já é dono) |
| `/sm_publico` | Alterna a prateleira entre pública e privada (só dono) |
| `/sm_confiar <jogador>` | Dá acesso a um jogador específico (só dono) |
| `/sm_desconfiar <jogador>` | Remove o acesso desse jogador (só dono) |

Nenhum comando exige operador — dono é quem manda na própria rede.

## Configuração

Arquivo `config/storage_manager.json`, com live-reload via configreload. Ele controla principalmente a regra de acesso: dá pra desligar a segurança inteira (`segurancaAtiva`), deixar todo operador agir como dono de qualquer rede sem precisar da tag de bypass, ou contar amigos do mod posse automaticamente como confiados numa rede alheia. Não há números de capacidade/cooldown pra ajustar aqui — a exceção é o alcance de 8 blocos dos pipes e o teto de 1024 containers por rede, que são fixos no código, não no config.

## Dicas

- Reivindique a prateleira com `/sm_dono` assim que colocar — sem isso, qualquer um usa a rede (a menos que o admin tenha mudado o padrão pra privado).
- Uma corrente comum nunca vira Pipe sozinha — só um Pipe craftado de verdade, ou uma corrente configurada de propósito com a chave/papel, ganha função de import/export.
- Bolsas do mod mochila plantadas no chão entram na rede automaticamente, se os dois mods estiverem instalados.
- O Controle Remoto é ótimo pra checar ou depositar item de qualquer lugar do mapa sem precisar viajar até a base.
