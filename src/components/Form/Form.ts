import {ComponentChildren} from 'preact'
import {html} from '../../utils/html'

export const Form = ({action, children}: {action: string, children: ComponentChildren}) => {
  return html`
    <form action="${action}" class="widget__form">${children}</form>`
}
