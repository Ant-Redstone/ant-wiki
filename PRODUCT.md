# Product

## Register

product

## Users

Jogadores e administradores do servidor Minecraft "Mokwa" (Fabric 26.2), falantes de PT-BR, consultando a wiki
enquanto jogam ou administram — querem uma resposta pontual ("como craftar X", "qual o comando de Y", "o que essa
config faz") em segundos, não uma leitura longa. Uso é de referência sob demanda, não navegação exploratória: a
maioria chega direto numa página de mod específica vindo de um link ou busca, lê a seção que precisa, e sai.

## Product Purpose

Wiki pública (VitePress, GitHub Pages) documentando os 31+ mods "vanilla+" server-side do conjunto Ant — o que
cada um muda no jogo vanilla, como craftar/usar, comandos e configuração. Existe pra jogadores e admins se
resolverem sozinhos em vez de perguntar no chat/Discord toda vez. Sucesso é uma pergunta respondida rápido, sem
precisar perguntar pra ninguém.

## Brand Personality

Voz: direta, brasileira, sem cara de IA, sem emoji, sem preamble (regra já existente do projeto, vale também pro
texto da wiki).

Visual: atmosfera redstone/Nether — escura, técnica, um pouco crua e texturizada, com vocabulário estético
emprestado dos próprios materiais do jogo (obsidiana, redstone, cobre oxidado) em vez de polimento genérico de
SaaS. Confiante e utilitária, não brincalhona — é documentação técnica, não conteúdo infantil de fã.

## Anti-references

- Landing page de startup: hero gigante, gradiente roxo-azul, tudo centralizado, cara de "SaaS corporativo".
- Conteúdo infantilizado: emoji, mascote, tom bobo — o assunto é técnico (crafting, comandos, config) e o texto
  já trata o leitor como adulto; o visual precisa fazer o mesmo.

## Design Principles

1. **Escanear antes de ler** — cada página de mod precisa deixar achar UM fato (uma receita, um comando, um campo
   de config) em segundos; hierarquia e navegação importam mais que qualquer pitch.
2. **Personalidade emprestada do próprio jogo, não de tendência de UI** — redstone, obsidiana, cobre oxidado como
   vocabulário estético, não gradiente roxo genérico de produto de tech.
3. **Uma voz só pro catálogo inteiro** — as 31+ páginas de mod compartilham a mesma estrutura e tom (o que faz,
   como craftar, comandos, config), pra navegar entre mods parecer um sistema coerente, não 31 textos soltos.
4. **Restrição, não decoração** — escuro e técnico não é sinônimo de pesado; tabelas e listas de comando precisam
   de respiro e hierarquia clara, não densidade sem ar.
5. **Respeitar o tempo de quem lê** — direto, sem enrolação, sem preamble (a mesma regra que já vale pro texto
   vale pro design: carregamento rápido, escaneável, sem animação que atravessa o caminho de quem só quer a
   resposta).

## Accessibility & Inclusion

WCAG AA em contraste de texto, foco visível em todo elemento interativo, `prefers-reduced-motion` respeitado em
qualquer animação nova. O alternador claro/escuro do VitePress continua existindo — as duas variantes recebem
atenção de design de verdade, não é só o escuro invertido.
