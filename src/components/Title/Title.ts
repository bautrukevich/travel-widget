import {html} from '../../utils/html'

export const Title = ({text}: { text: string }) => {
  return html`
    <p class='title widget__title'>${text}</p>`
}
