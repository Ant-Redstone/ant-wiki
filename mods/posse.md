---
title: "Posse"
description: "Reivindique terreno, tranque containers e monte times com um sistema de confiança compartilhado."
---

# Posse

Fora de cadeado e terreno, o servidor continua 100% vanilla — proteger alguma coisa é escolha sua, ninguém protege nada por padrão. Posse junta duas ferramentas: o **Cadeado** tranca um container específico, e o **Marcador de Terreno** reivindica uma área inteira (do bedrock ao topo) contra quebra, construção e roubo — as duas amarradas pelo mesmo sistema de confiança e times.

## Como conseguir

**Cadeado** — bancada, em cruz: um lingote de ferro em cima, embaixo, à esquerda e à direita do centro, e um nugget de ferro bem no meio. Cada craft rende 4 Cadeados de uma vez.

**Marcador de Terreno** — sem formato fixo: 1 papel + 1 graveto + 1 nugget de ferro, em qualquer posição da bancada. Ele sai indestrutível e com brilho de encantado, então não tem erro de qual item é.

## Como usar

### Cadeado
1. Clique com o Cadeado num baú, barril, fornalha (e variantes), funil, dropper, dispenser, suporte de poções, vaso decorado, crafter, estante ou shulker box pra trancar — o item é consumido (volta pra sua mão quando você destranca).
2. Segurando o Cadeado, shift+clique tranca aquele bloco **e todo o resto do mesmo tipo encostado** de uma vez (até um limite) — útil pra fileira de baú.
3. Sem o Cadeado na mão, shift+clique num cadeado seu (ou `/tranca` olhando pro bloco) abre o menu: permitir funis, ver/editar confiados, destrancar.
4. Quem não está na sua lista de confiança nem é amigo global recebe aviso e não consegue abrir nem quebrar.

### Terreno
1. Clique esquerdo com o Marcador marca o canto 1, clique direito marca o canto 2 — só a posição X/Z do clique importa, a altura (Y) é ignorada: a área protegida sempre cobre do bedrock até o limite de construção.
2. Shift+scroll com o marcador na mão desliza a seleção inteira sem precisar clicar de novo.
3. `/terreno criar <nome>` confirma e cria o terreno — o jogo avisa a área em chunks.
4. Volte com `/terreno menu` (dentro do terreno, dono ou GERENTE) pra ajustar proteções, confiar jogadores, renomear, trocar o ícone ou transferir a posse.

### Time
1. `/time criar <nome>` — você vira o líder.
2. Convide com `/time convidar <jogador>`; quem recebe aceita com `/time aceitar` (ou recusa).
3. Ao aceitar, TODOS os terrenos que a pessoa já tem passam a ser do líder — e os que ela criar depois só nascem dela se o líder ligar `/time permitirclaim true`.
4. O limite de terrenos e chunks do líder cresce conforme o time cresce (recalculado na hora — sai um membro, o limite cai de novo).
5. Sair (`/time sair`) ou ser expulso não devolve ao jogador os terrenos já doados ao time.

## Níveis de confiança

Cada terreno tem 9 proteções independentes (construir, containers, matar monstro, matar animal, interagir com bicho, pegar item, porta, mecanismo, decoração), cada uma com um nível mínimo padrão — o dono (ou um GERENTE) ajusta cada uma separadamente no `/terreno menu`, clicando pra ciclar o nível.

| Nível | O que libera (padrão de cada proteção) |
|---|---|
| **VISITANTE** | Andar pela base: portas, portões, trapdoors e camas abrem livre (a menos que o dono trave isso também). |
| **AMIGO** | + abrir containers, pegar item do chão, bater/interagir com bichos (mansos e hostis), usar botão/alavanca/placa de pressão, mexer em quadro/armor stand. |
| **CONSTRUTOR** | + quebrar e colocar bloco. |
| **GERENTE** | + `/terreno menu` completo: liga/desliga qualquer proteção, renomeia, troca ícone, mexe na lista de confiança de outros jogadores. Só não apaga o terreno nem transfere a posse — isso continua exclusivo do dono. |

Um **amigo global** (`/amigos add`) vale automaticamente nível AMIGO em TODOS os seus terrenos e cadeados, sem precisar confiar um por um. Já um Cadeado tem lista de confiança própria e é **mais restrito** que o terreno em que está — mesmo alguém com acesso a containers no terreno não abre um baú com Cadeado, a menos que esteja confiado nele especificamente (ou seja amigo global).

## Comandos

| Comando | O que faz |
|---|---|
| `/posse` | Ajuda rápida com os passos básicos. |
| `/tranca` | Abre o menu do cadeado que você está olhando. |
| `/terreno criar <nome>` | Cria um terreno a partir da seleção do Marcador. |
| `/terreno apagar [n]` | Apaga o terreno em que você está (ou o de índice `n` da sua lista); pede confirmação em 10s. |
| `/terreno lista` | Lista seus terrenos: nome, dimensão, área em chunks, nº de confiados. |
| `/terreno ver [n]` | Mostra a borda do terreno por 20 segundos. |
| `/terreno info` | Mostra dono, nome e seu nível de confiança no terreno em que você está. |
| `/terreno menu` | Abre a GUI de gerenciamento (dono ou GERENTE). |
| `/terreno confiar <jogador> [nivel]` | Concede um nível de confiança (padrão AMIGO). |
| `/terreno desconfiar <jogador>` | Remove a confiança daquele jogador. |
| `/terreno icone` | Define o ícone do terreno como a cabeça que você está segurando. |
| `/terreno transferir <jogador>` | Transfere a posse do terreno (só dono). |
| `/amigos` | Abre a GUI de amigos globais. |
| `/amigos add \| remove <jogador>` | Adiciona/remove um amigo global. |
| `/time` | Mostra as informações do seu time. |
| `/time criar <nome>` | Cria um time novo (você vira líder). |
| `/time convidar <jogador>` | Convida alguém pro seu time. |
| `/time aceitar \| recusar` | Aceita ou recusa um convite pendente. |
| `/time sair` | Sai do time (não devolve terrenos já doados). |
| `/time expulsar <jogador>` | Remove um membro (só líder). |
| `/time permitirclaim <true\|false>` | Permite ou não que membros criem terrenos que já nascem do líder. |
| `/time membros` | Lista os membros do time. |
| `/posse admin apagar <jogador> <n>` | Remove à força o terreno `n` de outro jogador (operador). |

## Configuração

Arquivo `config/posse.json`, com live-reload (aplica sem reiniciar o servidor). Por padrão o Cadeado é consumível (volta ao destrancar) e criar terreno é grátis; os limites atuais são 32 terrenos por jogador, no máximo 64 chunks por terreno e 128 chunks no total por jogador. Um único gesto de "trancar tudo" (shift+clique com Cadeado) processa até 64 containers conectados de uma vez.

## Dicas

- Amigo global vale nível AMIGO em todos os seus terrenos e cadeados de uma vez — não precisa confiar terreno por terreno nem cadeado por cadeado.
- Um Cadeado protege até de quem já tem acesso a container no seu próprio terreno — bom pra um baú pessoal dentro de uma base compartilhada.
- "Aplicar a todos por perto" no menu do Cadeado copia a configuração (hoppers permitidos + confiados) de um cadeado pra todos os seus outros cadeados num raio de 16 blocos.
- Se a lojinha do servidor vender, existe um papel de "permissão temporária" que libera uma proteção específica (abrir container, bater em bicho etc.) por um tempo em QUALQUER terreno, sem precisar virar amigo de ninguém.
