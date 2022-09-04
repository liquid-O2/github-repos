import { SelectedLang } from '../pages';

import useSWR from 'swr';
import TableBody from './tableBody';
const TableHead = () => {
  return (
    <div className='row thead'>
      <h4 className='index col-1-sm justify-flex-start'>#</h4>
      <h4 className='Repos col-5-sm'>Repositories</h4>
      <h4 className='stars col-2-sm'>Stars</h4>
      <h4 className='forks col-2-sm'>Forks</h4>
      <h4 className='openIssues col-2-sm justify-flex-end'>Open Issue</h4>
    </div>
  );
};

const Table = () => {
  return (
    <SelectedLang.Consumer>
      {(lang) => {
        return (
          <div className='container mt-3 mb-3'>
            <TableHead />
            <TableBody lang={lang} />
          </div>
        );
      }}
    </SelectedLang.Consumer>
  );
};

export default Table;
