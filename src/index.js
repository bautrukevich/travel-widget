import './style.css';
import { h, render } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

const Title = ({ text }) => {
  return html`
    <p class='title widget__title'>${text}</p>`
}

const Description = ({ text }) => {
  return html`
    <p class="description widget__description">${text}</p>`
}

const DatePicker = ({ placeholder, tabIndex }) => {
  return html`
    <label class="widget__form-label">
      <input type="text" class="input widget__form-input" readonly
             placeholder=${placeholder} tabindex=${tabIndex}/>
      <svg class="icon widget__input-icon" width="15" height="17" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 7.998s.002 7.25 0 7.002l11.003-.001c-.002 0-.006-7-.006-7L2 7.998zM8 11h4v3H8v-3zm7-5v9a2 2 0 01-2 2H2a2 2 0 01-2-2V6h15zm-3-4V1a1 1 0 00-1-1h-1a1 1 0 00-1 1v1H6V1a1 1 0 00-1-1H4a1 1 0 00-1 1v1H2a2 2 0 00-2 2h15a2 2 0 00-2-2h-1z"
          fill="currentColor" fill-rule="evenodd"/>
      </svg>
    </label>`
}

const Form = ({ action, children }) => {
  return html`
    <form action="${action}" class="widget__form">${children}</form>`
}

const Widget = () => {
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

const createTravelWidget = () => render(html`
  <${Widget}/>`, document.body)

export default createTravelWidget
