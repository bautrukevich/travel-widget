import {html} from '../../utils/html'
import {Title} from '../Title/Title'
import {Form} from '../Form/Form'
import {DatePicker} from '../DatePicker/DatePicker'
import {Description} from '../Description/Description'

export const Widget = () => {
  return html`
    <div class="widget">
      <${Title} text="Where does it come from? Why do we use it?"/>
      <div class="widget__body">
        <${Form} action="">
          <div class="widget__form-controls">
            <${DatePicker} placeholder="Depart date" tabIndex="1"/>
            <${DatePicker} placeholder="Return date" tabIndex="2"/>
          </div>
          <button class="button widget__submit-button" type="submit" tabindex="3">Search</button>
        </
        />
        <${Description}
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."/>
      </div>
    </div>`
}
