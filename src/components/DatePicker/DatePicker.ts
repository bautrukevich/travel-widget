import {html} from '../../utils/html'

interface Props {
  placeholder: string,
  tabIndex: number
}

export const DatePicker = ({placeholder}: Props) => {
  return html`
    <label class="widget__form-label">
      <input type="text" class="input widget__form-input" readonly
             placeholder=${placeholder} />
      <svg class="icon widget__input-icon" width="15" height="17" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 7.998s.002 7.25 0 7.002l11.003-.001c-.002 0-.006-7-.006-7L2 7.998zM8 11h4v3H8v-3zm7-5v9a2 2 0 01-2 2H2a2 2 0 01-2-2V6h15zm-3-4V1a1 1 0 00-1-1h-1a1 1 0 00-1 1v1H6V1a1 1 0 00-1-1H4a1 1 0 00-1 1v1H2a2 2 0 00-2 2h15a2 2 0 00-2-2h-1z"
          fill="currentColor" fill-rule="evenodd"/>
      </svg>
    </label>`
}
