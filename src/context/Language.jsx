import { createContext, useState } from 'react'
import english from '../lang/en.json'
import spanish from '../lang/es.json'
export const LanguageContext = createContext()
function Language({ children }) {
  const [texts, setTexts] = useState({})

  const handleLanguage = (e) => {
    if (e.target.value === 'es') {
      setTexts(spanish)
    } else {
      setTexts(english)
    }
  }
  return (
    <LanguageContext.Provider value={{ texts, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default Language
