import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: 'Wiki do Ant',
  description: 'Guia dos mods do servidor Mokwa (Minecraft Fabric 26.2, server-side)',
  lang: 'pt-BR',
  appearance: 'dark',
  // repo de projeto (não é ant-redstone.github.io), então a URL real fica em /ant-wiki/, não na raiz --
  // sem isso, todo asset (JS/CSS) e link interno resolveria contra a raiz do domínio e quebraria em produção
  // mesmo com o preview local (que serve da raiz) funcionando perfeitamente.
  base: '/ant-wiki/',
  // false (o padrão do VitePress) de propósito: GitHub Pages serve arquivo estático puro, sem reescrever
  // "/mods/portais" pra "/mods/portais.html" como Netlify/Vercel fazem -- com cleanUrls:true todo link
  // interno (sidebar, anterior/próximo) ficaria quebrado em produção. Com false, o VitePress já gera os
  // <a href> com ".html" nos arquivos publicados, então funciona em qualquer host estático simples.
  cleanUrls: false,
  // raw <head> tags NÃO são prefixados com `base` automaticamente pelo VitePress (ao contrário de
  // themeConfig.logo/links internos) -- precisa do caminho completo na mão.
  head: [['link', { rel: 'icon', href: '/ant-wiki/favicon.svg' }]],

  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: 'Começando', link: '/comecando' },
      { text: 'Mods', link: '/mods/' },
    ],
    sidebar: [
      {
        text: 'Começando',
        items: [
          { text: 'Bem-vindo', link: '/' },
          { text: 'Como instalar / entrar', link: '/comecando' },
        ],
      },
      {
        text: 'Armazenamento & Economia',
        items: [
          { text: 'Mochila (bolsas/mochilas)', link: '/mods/mochila' },
          { text: 'Storage Manager (rede de canos)', link: '/mods/storage-manager' },
          { text: 'Baú de Frequência', link: '/mods/frequencia' },
          { text: 'Lojinha (lojas de jogador)', link: '/mods/lojinha' },
          { text: 'Abre Aí (gesto de abrir)', link: '/mods/abreai' },
        ],
      },
      {
        text: 'Terreno & Regras',
        items: [
          { text: 'Posse (terrenos, cadeados, times)', link: '/mods/posse' },
          { text: 'Obscure (ficar invisível)', link: '/mods/obscure' },
          { text: 'Selfrules (regras por jogador)', link: '/mods/selfrules' },
        ],
      },
      {
        text: 'Viagem & Portais',
        items: [
          { text: 'Viagem (menos lag viajando)', link: '/mods/viagem' },
          { text: 'Portais', link: '/mods/portais' },
          { text: 'Adestramento (bichos de estimação)', link: '/mods/adestramento' },
          { text: 'Apito (chamar seu bicho)', link: '/mods/apito' },
        ],
      },
      {
        text: 'Construção',
        items: [
          { text: 'Canhão (schematics)', link: '/mods/canhao' },
          { text: 'Cocho (alimentador de animais)', link: '/mods/cocho' },
          { text: 'Tosquia (tosar vacas)', link: '/mods/tosquia' },
          { text: 'Cooking (culinária)', link: '/mods/cooking' },
        ],
      },
      {
        text: 'Vida & Morte',
        items: [
          { text: 'Túmulo (proteção pós-morte)', link: '/mods/tumulo' },
          { text: 'Deathlog (histórico de mortes)', link: '/mods/deathlog' },
        ],
      },
      {
        text: 'Cosmético',
        items: [
          { text: 'Vanity Armor (armadura visual)', link: '/mods/vanity-armor' },
          { text: 'Useful Enchantments (Glide etc.)', link: '/mods/useful-enchantments' },
          { text: 'Mural (mapas animados)', link: '/mods/mural' },
        ],
      },
      {
        text: 'Comunicação',
        items: [
          { text: 'Correio (correspondência)', link: '/mods/correio' },
          { text: 'Papo (sussurro/grupo)', link: '/mods/papo' },
          { text: 'ImgPreview (preview de imagem no chat)', link: '/mods/imgpreview' },
        ],
      },
      {
        text: 'Diversos',
        items: [
          { text: 'AFK', link: '/mods/afk' },
          { text: 'Patentes', link: '/mods/patentes' },
          { text: 'Nuke', link: '/mods/nuke' },
          { text: 'AntTweaks (miudezas)', link: '/mods/anttweaks' },
        ],
      },
      {
        text: 'Pra administradores',
        items: [
          { text: 'Config Reload', link: '/mods/configreload' },
          { text: 'Recipe Viewer (/recipes)', link: '/mods/recipeviewer' },
          { text: 'Player Heads (catálogo de cabeças)', link: '/mods/playerheads' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ant-Redstone' },
    ],
    search: { provider: 'local' },
    outline: { label: 'Nesta página' },
    docFooter: { prev: 'Anterior', next: 'Próximo' },
    lastUpdated: { text: 'Atualizado em' },
    returnToTopLabel: 'Voltar ao topo',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Tema',
  },

  // Paleta do Painel de Redstone (DESIGN.md) — obsidiana + redstone como único acento, cobre oxidado
  // reservado pra um cluster secundário. Antes disso o mermaid usava um azul-aço sem relação nenhuma
  // com o resto do site; agora um diagrama usa exatamente as mesmas cores que qualquer outra página.
  mermaid: {
    theme: 'dark',
    themeVariables: {
      primaryColor: '#1f1d29',
      primaryTextColor: '#e3e4eb',
      primaryBorderColor: '#f53e39',
      lineColor: '#f53e39',
      secondaryColor: '#0f342c',
      tertiaryColor: '#292733',
      background: '#0b0a12',
      mainBkg: '#1f1d29',
      nodeBorder: '#f53e39',
      clusterBkg: '#14121c',
      titleColor: '#e3e4eb',
      edgeLabelBackground: '#0b0a12',
    },
  },
}))
