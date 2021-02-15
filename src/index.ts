import './style.css'
import {render} from 'preact'
import {html} from './utils/html'
import {Widget} from './components/Widget/Widget'

const createTravelWidget = () => render(html`
  <${Widget}/>`, document.body)

export default createTravelWidget
