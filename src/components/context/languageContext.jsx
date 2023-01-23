import { createContext } from 'react'

const langContext = createContext()

function LanguageContext({ children }) {
  return <langContext.Provider>{children}</langContext.Provider>
}

export { LanguageContext, langContext }
