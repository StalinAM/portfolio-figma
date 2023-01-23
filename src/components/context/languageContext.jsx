import { createContext } from 'react'

const lang = createContext()

function LanguageContext() {
  return <div>languageContext</div>
}

export { LanguageContext, lang }
