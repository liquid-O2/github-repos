import { useState } from 'react';

const Select = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const update = (passedLanguage) => {
    setSelectedLanguage(passedLanguage);
  };
  const languages = ['All', 'CSS', 'Javascript', 'Java', 'Ruby', 'Python'];
  return (
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
  );
};

export default Select;
