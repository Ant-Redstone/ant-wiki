import { h } from 'vue'
import { onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout),
  setup() {
    onMounted(() => {
      // Layer 3 of the dark-mode mermaid fix: inline `style` attrs on the rendered
      // SVG override the CSS in custom.css, so poll briefly after mount and rewrite them.
      let attempts = 0
      const fix = setInterval(() => {
        document.querySelectorAll('.mermaid svg [style]').forEach((el) => {
          const s = (el as HTMLElement).style
          if (s.fill && !s.fill.includes('#1f1d29')) s.fill = '#1f1d29'
          if (s.stroke && !s.stroke.includes('#f53e39')) s.stroke = '#f53e39'
          if (s.color) s.color = '#e3e4eb'
        })
        if (++attempts >= 20) clearInterval(fix)
      }, 500)

      // Click-to-zoom for any mermaid diagram.
      document.querySelectorAll('.mermaid').forEach((el) => {
        ;(el as HTMLElement).style.cursor = 'zoom-in'
        el.addEventListener('click', () => {
          const modal = document.createElement('div')
          modal.className = 'mermaid-zoom-modal'
          modal.innerHTML = el.outerHTML
          modal.addEventListener('click', () => modal.remove())
          document.body.appendChild(modal)
        })
      })
    })
  },
}
