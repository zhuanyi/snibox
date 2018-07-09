import hljs from 'highlight.js'
import { getPropertyOrDefault } from './tools'

const hljsModesMatrix = {
  automaticaly: '',
  c: 'cpp',
  html: 'xml'
}

export const highlightCodeBlocks = (component) => {
  if (_.isEqual(component.$store.state.labelSnippets.active.language, 'markdown')) {
    component.$el.querySelectorAll('pre code').forEach((block, i) => {
      hljs.highlightBlock(block);
    })
  }
}

export const processHljsMode = (mode) => {
  return getPropertyOrDefault(hljsModesMatrix, mode)
}
