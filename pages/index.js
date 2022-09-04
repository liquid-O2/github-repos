import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';
// import Select from '../components/select';
import Table from '../components/table';
import useSWR from 'swr';
import { useContext, useRef, useState } from 'react';
import React from 'react';
// API Link
// `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
export const SelectedLang = React.createContext();
// const Select = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState('All');
//   const update = (passedLanguage) => {
//     setSelectedLanguage(passedLanguage);
//     lang.current = passedLanguage;
//   };

//   let lang = useRef('');

//   // lang = useContext(SelectedLang);
//   const languages = ['All', 'CSS', 'Javascript', 'Java', 'Ruby', 'Python'];
//   return (
//     <div className='container mt-2 display-f justify-space-between'>
//       <h2 className='text-dark font-lg'>Popular</h2>
//       <select
//         name='tags'
//         id='tags'
//         selected={selectedLanguage}
//         onChange={(e) => update(e.target.value)}
//       >
//         {languages.map((language) => (
//           <option key={language} value={language}>
//             {language}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };
export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const update = (passedLanguage) => {
    setSelectedLanguage(passedLanguage);
    lang.current = passedLanguage;
  };

  let lang = useRef('All');

  // lang = useContext(SelectedLang);
  const languages = ['All', 'CSS', 'Javascript', 'Java', 'Ruby', 'Python'];
  return (
    <>
      <Head>
        <title>Github Battle</title>
        <meta name='description' content='Github battle' />
      </Head>

      <div className='container mt-2 display-f justify-space-between'>
        <h2 className='text-dark font-lg'>Popular</h2>
        <select
          name='tags'
          id='tags'
          selected={selectedLanguage}
          onChange={(e) => update(e.target.value)}
        >
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
  );
}
