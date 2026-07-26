---
name: Wiki do Ant
description: Documentação de referência técnica pros mods do servidor Mokwa — atmosfera obsidiana e redstone, não SaaS.
colors:
  obsidian-void: "#0b0a12"
  obsidian-soft: "#14121c"
  obsidian-raised: "#1f1d29"
  obsidian-seam: "#292733"
  obsidian-line: "#33313f"
  ash-bright: "#e3e4eb"
  ash-muted: "#9c9dab"
  ash-faint: "#7d7f8c"
  redstone: "#f53e39"
  redstone-bright: "#ff7459"
  redstone-deep: "#b7191c"
  copper: "#5bb19b"
  copper-deep: "#026e5b"
  stone-white: "#f7f6fb"
  stone-soft: "#ebeaf1"
  stone-elv: "#ffffff"
  stone-seam: "#d7d6de"
  stone-line: "#c4c3cd"
  ink-bright: "#1d1b26"
  ink-muted: "#53505f"
  ink-faint: "#636171"
  redstone-ink: "#b30018"
  redstone-link: "#a2001b"
  redstone-deep-ink: "#860012"
  copper-ink: "#005c4a"
  copper-ink-deep: "#1b7a66"
typography:
  display:
    fontFamily: "'JetBrains Mono', ui-monospace, 'Cascadia Code', 'SF Mono', Consolas, monospace"
    fontSize: "clamp(1.75rem, 4vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'JetBrains Mono', ui-monospace, 'Cascadia Code', 'SF Mono', Consolas, monospace"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'JetBrains Mono', ui-monospace, 'Cascadia Code', 'SF Mono', Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.01em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "10px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.redstone-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "11px 22px"
  button-primary-hover:
    backgroundColor: "{colors.redstone}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ash-bright}"
    rounded: "{rounded.md}"
    padding: "11px 22px"
  button-secondary-hover:
    backgroundColor: "{colors.obsidian-raised}"
---

# Design System: Wiki do Ant

## 1. Overview

**Creative North Star: "O Painel de Redstone"**

A wiki inteira é um painel técnico iluminado por redstone dentro de uma câmara de obsidiana — a metáfora vem
literalmente dos materiais do próprio Minecraft, não de tendência de UI. O fundo é obsidiana: quase preto, com
um leve tom violeta-azulado (a cor real do bloco no jogo), organizado em camadas tonais (void → soft → raised)
em vez de sombras projetadas. Em cima disso, o **redstone** é o único acento vivo — vermelho-alaranjado que
"acende" em links, botões e estado ativo, do jeito que o pó de redstone brilha quando energizado. Um segundo
acento, **cobre oxidado** (verde-azulado), aparece raramente, reservado pra diferenciação semântica específica
(ex.: badges "server-side" vs. admin). O roxo genérico que a wiki usava antes (`#7c5cff`, tema VitePress padrão
com um accent trocado) foi substituído porque não vinha de lugar nenhum do universo do jogo — era só "roxo de
produto de tech".

O sistema rejeita explicitamente dois vetores: o **SaaS corporativo** (gradiente roxo-azul, hero centralizado
gigante, botão em pílula 100% arredondada) e o **infantil/cartoon** (emoji, mascote, tom bobo). A tipografia de
destaque é monoespaçada — não porque "docs = mono", mas porque o mono lê como painel/console técnico, reforçando
que isso é referência de engenharia (comandos, crafting, config), não uma landing page. O corpo de texto continua
em Inter, sem toque nenhum de decoração — o trabalho de 31+ páginas densas de referência é ser lido rápido, não
admirado.

**Key Characteristics:**
- Fundo quase-preto com tom violeta de obsidiana (não preto neutro, não cinza de SaaS).
- Um único acento vivo (redstone) cobrindo uma fração pequena da superfície; cobre oxidado como acento raro e
  deliberado, nunca disputando espaço com o redstone.
- Sem sombra projetada — profundidade vem de camadas tonais (obsidiana) e, quando algo está "energizado"
  (hover, foco, ativo), um brilho sutil na cor do redstone.
- Títulos em monoespaçado (peso 700, tracking levemente negativo); corpo em Inter, sem exceção.
- Botões com cantos discretos (6px), não em pílula — sensação de interruptor/painel, não de app de assinatura.

## 2. Colors

Paleta de duas famílias: **obsidiana** (neutros, os dois temas) e **redstone** (o único acento vivo), com
**cobre oxidado** como acento secundário raro.

### Primary
- **Redstone** (`#f53e39` escuro / `#b30018` claro): a cor de link, o texto ativo na navegação lateral, o
  contorno do botão primário. É o pó de redstone aceso — usada com parcimônia, nunca como fundo de página ou
  faixa decorativa.
- **Redstone Brilhante** (`#ff7459`, só tema escuro): estado de hover do acento — mais claro/quente que o
  repouso, como se o redstone "acendesse mais forte" ao ser tocado.
- **Redstone Profundo** (`#b7191c` escuro / `#860012` claro): fundo sólido de botão primário e estado ativo/
  pressionado — mais escuro de propósito, pra garantir contraste de texto branco em cima (6.6:1 no escuro,
  7.2:1 no claro via `redstone-ink`).

### Secondary
- **Cobre Oxidado** (`#5bb19b` escuro / `#005c4a` claro): acento raro, reservado pra badges e diferenciação
  semântica específica (ex.: "server-side", seções de administração) — nunca em botão primário, nunca em
  destaque de título.
- **Cobre Profundo** (`#026e5b` escuro / `#1b7a66` claro): fundo sólido quando cobre precisa virar botão/badge
  preenchido (branco em cima: 6.2:1 escuro, 5.2:1 claro).

### Neutral — Obsidiana (tema escuro)
- **Obsidiana Vazio** (`#0b0a12`): fundo da página.
- **Obsidiana Suave** (`#14121c`): barra de navegação, sidebar, hover leve.
- **Obsidiana Elevada** (`#1f1d29`): blocos de código, dropdowns, qualquer superfície "acima" do fundo.
- **Cinza-Costura** (`#292733`): divisores, linhas de grade.
- **Linha Obsidiana** (`#33313f`): bordas.
- **Cinza-Cinza Claro** (`#e3e4eb`): texto principal (15.5:1).
- **Cinza-Cinza Médio** (`#9c9dab`): texto secundário/muted (7.3:1).
- **Cinza-Cinza Fraco** (`#7d7f8c`): texto terciário — legendas, números de linha (4.96:1; nunca abaixo disso).

### Neutral — Pedra (tema claro)
- **Pedra Branca** (`#f7f6fb`): fundo da página — branco frio com o MESMO matiz violeta da obsidiana (não um
  branco neutro nem creme quente), pra os dois temas lerem como o mesmo material sob luz diferente.
- **Pedra Suave** (`#ebeaf1`): navegação, hover leve.
- **Pedra Elevada** (`#ffffff`): dropdowns, blocos elevados.
- **Costura Pedra** (`#d7d6de`): divisores.
- **Linha Pedra** (`#c4c3cd`): bordas.
- **Tinta Escura** (`#1d1b26`): texto principal (15.8:1).
- **Tinta Média** (`#53505f`): texto secundário (7.3:1).
- **Tinta Fraca** (`#636171`): texto terciário (5.61:1).

### Named Rules
**A Regra do Acento Único.** Redstone é a ÚNICA cor viva que carrega significado de marca. Cobre aparece em
menos de 5% de qualquer tela, só onde precisa diferenciar algo semanticamente — nunca decorativo, nunca em par
com redstone na mesma composição visual (botão, badge, título).

**A Regra do Mesmo Mundo.** Tema claro e escuro não são paletas diferentes — são o MESMO material (obsidiana/
pedra, mesmo matiz ~293°) sob luminosidade oposta. Nenhum neutro deste sistema usa matiz amarelo/creme (essa é
a marca registrada de site genérico gerado por IA); o frio violeta-acinzentado é a assinatura em ambos os temas.

## 3. Typography

**Display Font:** 'JetBrains Mono' (com fallback `ui-monospace, 'Cascadia Code', 'SF Mono', Consolas, monospace`)
**Body Font:** Inter (já carregada pelo tema padrão do VitePress — nenhuma fonte nova pro corpo de texto)
**Label/Mono Font:** mesma pilha do Display

**Character:** o mono nos títulos é a cara de painel/console — confiante, técnico, sem enfeite. O Inter no corpo
garante que 31+ páginas de tabela densa e prosa continuem extremamente legíveis; a pilha mono usa só fontes de
sistema (zero custo de rede extra), coerente com a prioridade de carregar rápido.

### Hierarchy
- **Display** (700, `clamp(1.75rem, 4vw, 2.75rem)`, altura de linha 1.15): nome do herói na home, título H1 de
  cada página de mod.
- **Headline** (700, 1.5rem, altura de linha 1.3): H2 de seção dentro de uma página.
- **Title** (600, 1.125rem, altura de linha 1.4): H3, cabeçalho de tabela, nome de componente na sidebar.
- **Body** (400, 16px, altura de linha 1.7, largura máxima ~72ch): todo o corpo de texto, tabelas, listas.
- **Label** (600, 0.8125rem, tracking +0.01em, mono): rótulos de UI pequenos — texto de botão, tag de badge,
  legenda de tabela.

### Named Rules
**A Regra do Mono Só no Topo.** Monoespaçado é reservado pra Display/Headline/Title/Label — nunca pro corpo de
um parágrafo. Um parágrafo inteiro em mono vira ilegível em texto longo; a wiki tem 31+ páginas de prosa, então
o corpo fica sempre em Inter.

## 4. Elevation

Sem sombra projetada em repouso — profundidade vem inteiramente de camadas tonais da própria obsidiana/pedra
(void → soft → raised, cada uma um degrau de luminosidade). A ÚNICA exceção deliberada é o "brilho de redstone":
um `box-shadow` difuso e colorido (não uma sombra neutra) atrás de elementos "energizados" — botão primário em
hover, link ativo na sidebar, campo de formulário em foco. A ideia é literal: redstone acesa emite luz, não
projeta sombra.

### Shadow Vocabulary
- **Brilho de Redstone** (`box-shadow: 0 0 0 3px color-mix(in oklch, var(--vp-c-brand-1) 35%, transparent)`):
  anel de foco/hover em elementos interativos primários. Serve tanto de indicador de foco acessível quanto de
  reforço temático — os dois papéis, o mesmo efeito.
- **Elevação de Camada** (sem box-shadow; só a troca de `background-color` entre void/soft/raised): usado em
  dropdowns, blocos de código, tooltips.

### Named Rules
**A Regra Sem Sombra Neutra.** Nenhum `box-shadow` cinza/preto neutro em lugar nenhum do sistema. Se algo precisa
se destacar, ou é uma camada tonal mais clara (obsidiana/pedra) ou é o brilho de redstone — nunca as duas coisas
disputando a mesma superfície.

## 5. Components

### Buttons
- **Shape:** cantos discretos, 6px de raio — nunca pílula. A pílula 100% arredondada (o padrão anterior, 20px)
  é a marca registrada de landing page de SaaS; 6px lê como painel/interruptor.
- **Primary:** fundo `redstone-deep`/`redstone-ink` (garante 6.6:1/7.2:1 de contraste com texto branco), texto
  branco, padding 11px 22px, peso 600 mono.
- **Hover / Focus:** fundo clareia pra `redstone`/`redstone-bright` (escuro) ou escurece levemente (claro),
  mais o Brilho de Redstone como anel externo. Transição 150ms ease-out, nunca instantânea nem com bounce.
- **Secondary (alt):** fundo transparente, borda `obsidian-line`/`stone-line`, texto `ash-bright`/`ink-bright`;
  hover troca o fundo pra `obsidian-raised`/`stone-soft`.

### Cards / Containers
- **Corner Style:** 10px (levemente mais generoso que botão, pra diferenciar hierarquia de escala).
- **Background:** um degrau acima do fundo da página na mesma família tonal (nunca introduz um neutro de outro
  matiz).
- **Shadow Strategy:** nenhuma — só a troca de camada tonal (ver Elevation).
- **Border:** 1px `obsidian-line`/`stone-line`, sempre nos 4 lados — **nunca borda lateral colorida como
  destaque** (isso é o "side-stripe" de card de blog genérico; terminantemente banido neste sistema).

### Inputs / Fields
- **Style:** fundo `obsidian-raised`/`stone-elv`, borda 1px `obsidian-line`/`stone-line`, 6px de raio.
- **Focus:** borda vira `redstone`/`redstone-ink` + o Brilho de Redstone como anel externo — o mesmo vocabulário
  do botão primário, não um efeito de foco genérico à parte.

### Navigation (sidebar + nav superior)
- **Style:** fundo `obsidian-soft`/`stone-soft`, texto `ash-muted`/`ink-muted` em repouso.
- **Active/hover:** texto vira `redstone`/`redstone-ink` (mono, peso 600) — sem sublinhado, sem barra lateral
  colorida; o próprio texto "aceso" já é o indicador.
- **Mobile:** mesmo vocabulário, menu deslizante do próprio VitePress — sem componente customizado adicional.

### Code Blocks / Tabelas (o componente mais usado nesta wiki)
- **Style:** fundo `obsidian-raised`/`stone-elv`, texto `ash-muted`/`ink-muted`, cabeçalho de tabela em Label
  (mono, 600, leve tracking) sobre `obsidian-soft`/`stone-soft`.
- **Ênfase:** `código inline` usa `redstone`/`redstone-ink` como cor de texto sobre um fundo levemente tingido
  (`color-mix` com o próprio redstone a ~12%) — nunca uma faixa lateral.

## 6. Do's and Don'ts

### Do:
- **Do** usar `redstone` (`#f53e39`/`#b30018`) como o único acento vivo — link, botão primário, estado ativo.
- **Do** manter os neutros dos dois temas no mesmo matiz (~293°, violeta-acinzentado) — é o que faz claro e
  escuro lerem como o mesmo material.
- **Do** usar camadas tonais (void → soft → raised) pra profundidade, nunca sombra neutra.
- **Do** reservar cobre oxidado pra diferenciação semântica pontual (badge "server-side", seção de admin), não
  como segundo acento decorativo.
- **Do** manter títulos em mono (700, tracking levemente negativo) e corpo em Inter, sem exceção.
- **Do** verificar contraste ≥4.5:1 pra texto de corpo e ≥3:1 pra texto grande antes de fechar qualquer par
  cor-de-texto/cor-de-fundo novo — a paleta acima já foi verificada, mas uma combinação nova (ex.: redstone sobre
  cobre) precisa do mesmo teste.

### Don't:
- **Don't** usar gradiente roxo-azul em hero nem em botão — é exatamente o clichê de SaaS que este sistema
  existe pra evitar.
- **Don't** usar botão em pílula 100% arredondada — 6px é o raio deste sistema, ponto final.
- **Don't** usar `border-left`/`border-right` colorido como destaque decorativo em card, callout ou item de
  lista — nenhuma "faixa lateral" em lugar nenhum.
- **Don't** usar emoji, mascote ou tom infantil em nenhum elemento de UI — o conteúdo é referência técnica pra
  adulto, o visual trata o leitor do mesmo jeito.
- **Don't** tingir nenhum neutro pra creme/amarelo/bege — mesmo em tom sutil, isso é a assinatura visual de
  site gerado por IA em 2026; o frio violeta-acinzentado é a identidade obrigatória dos dois temas.
- **Don't** introduzir uma segunda fonte pro corpo de texto — Inter é a única, em toda página, sempre.
- **Don't** usar sombra neutra cinza/preta — se algo precisa se destacar, é camada tonal ou Brilho de Redstone,
  nunca as duas coisas.
