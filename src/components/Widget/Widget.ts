/* Components */
import {Title} from '../Title/Title'
import {Form} from '../Form/Form'
import {DatePicker} from '../DatePicker/DatePicker'
import {Description} from '../Description/Description'

/* Utils */
import {html} from '../../utils/html'

/* Types */
import {Translation} from '../../translations/types'

interface Props {
  action: string,
  translation: Translation
}

export const Widget = ({action, translation}: Props) => {
  return html`
    <div class="widget">
      <${Title} text="${translation.title}"/>
      <div class="widget__body">
        <${Form} action="${action}">
          <div class="widget__form-controls">
            <${DatePicker} placeholder="${translation.datepicker.from}" tabIndex="1"/>
            <${DatePicker} placeholder="${translation.datepicker.to}" tabIndex="2"/>
          </div>
          <button class="button widget__submit-button" type="submit" tabindex="3">${translation.button}</button>
        </
        />
        <${Description} text="${translation.description}"/>
      </div>
    </div>`
}
