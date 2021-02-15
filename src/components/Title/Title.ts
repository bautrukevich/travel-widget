import {html} from '../../utils/html'

interface Props {
  text: string
}

export const Title = ({text}: Props) => {
  return html`
    <p class='title widget__title'>${text}</p>`
}
