import { SelectedLang } from '../pages'

import TableBody from './tableBody'
const TableHead = () => {
  return (
    <div className=' thead'>
      <h4 className='index  '>#</h4>
      <h4 className='Repos '>Repositories</h4>
      <h4 className='stars '>Stars</h4>
      <h4 className='forks '>Forks</h4>
      <h4 className='openIssues '>Open Issue</h4>
    </div>
  )
}

const Table = () => {
  return (
    <SelectedLang.Consumer>
      {(lang) => {
        return (
          <div className='container mt-3 mb-3'>
            <TableHead />
            <TableBody lang={lang} />
          </div>
        )
      }}
    </SelectedLang.Consumer>
  )
}

export default Table
