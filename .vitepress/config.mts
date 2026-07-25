import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: 'Wiki Mokwa',
  description: 'Guia dos mods do servidor Mokwa (Minecraft Fabric 26.2, server-side)',
  lang: 'pt-BR',
  appearance: 'dark',
  // false (o padrão do VitePress) de propósito: GitHub Pages serve arquivo estático puro, sem reescrever
  // "/mods/portais" pra "/mods/portais.html" como Netlify/Vercel fazem -- com cleanUrls:true todo link
  // interno (sidebar, anterior/próximo) ficaria quebrado em produção. Com false, o VitePress já gera os
  // <a href> com ".html" nos arquivos publicados, então funciona em qualquer host estático simples.
  cleanUrls: false,
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],

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

  mermaid: {
    theme: 'dark',
    themeVariables: {
      primaryColor: '#1e3a5f',
      primaryTextColor: '#e0e0e0',
      primaryBorderColor: '#4a9eed',
      lineColor: '#4a9eed',
      secondaryColor: '#2d4a3e',
      tertiaryColor: '#2d2d3d',
      background: '#1a1a2e',
      mainBkg: '#1e3a5f',
      nodeBorder: '#4a9eed',
      clusterBkg: '#16213e',
      titleColor: '#e0e0e0',
      edgeLabelBackground: '#1a1a2e',
    },
  },
}))
