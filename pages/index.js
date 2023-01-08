import Head from 'next/head'

import Table from '../components/table'

import { useRef, useState } from 'react'
import React from 'react'

export const SelectedLang = React.createContext()

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('All')
  const update = (passedLanguage) => {
    setSelectedLanguage(passedLanguage)
    lang.current = passedLanguage
  }

  let lang = useRef('All')

  const languages = ['All', 'CSS', 'Javascript', 'Java', 'Ruby', 'Python']
  return (
    <>
      <Head>
        <title>Github Repos</title>
        <meta name='description' content='Github repos' />
      </Head>

      <div className='container top display-f justify-space-between'>
        <h2 className='text-dark font-lg'>Popular</h2>
        <select name='tags' id='tags' selected={selectedLanguage} onChange={(e) => update(e.target.value)}>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>

      <SelectedLang.Provider value={lang.current}>
        <Table />
      </SelectedLang.Provider>
    </>
  )
}
