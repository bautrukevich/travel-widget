import {html} from '../../utils/html'

interface Props {
  text: string
}

export const Description = ({text}: Props) => {
  return html`
    <p class="description widget__description">${text}</p>`
}
