import {html} from '../../utils/html'

export const Description = ({text}: { text: string }) => {
  return html`
    <p class="description widget__description">${text}</p>`
}
