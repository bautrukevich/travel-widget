/* Vendor */
import {render} from 'preact'

/* Components */
import {Widget} from './components/Widget/Widget'

/* Utils */
import {html} from './utils/html'
import {translations} from './translations'

export interface WidgetOptions {
  locale?: 'en' | 'ru'
  action?: string
}

export const createTravelWidget = (
  $parentElement: Element | Document | ShadowRoot | DocumentFragment,
  { locale = 'en', action = '' }: WidgetOptions
) => {
  const translation = translations[locale]

  return render(html`
    <${Widget} translation="${translation}" action="${action}" />`, $parentElement)
}
