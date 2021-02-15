import {ComponentChildren} from 'preact'
import {html} from '../../utils/html'

interface Props {
  action: string,
  children: ComponentChildren
}

export const Form = ({action, children}: Props) => {
  return html`
    <form action="${action}" class="widget__form">${children}</form>`
}
