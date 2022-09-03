import { SelectedLang } from '../pages';
// import useFetch from '../pages/_handleFetch';
import useSWR from 'swr';
import TableBody from './tableBody';
const TableHead = () => {
  return (
    <thead>
      <tr className='table-head-wrapper display-f'>
        <th className='index'>#</th>
        <th className='Repos'>Repositories</th>
        <th className='stars'>Stars</th>
        <th className='forks'>Forks</th>
        <th className='openIssues'>Open Issue</th>
      </tr>
    </thead>
  );
};

// const fetcher = (args) => fetch(args).then((res) => res.json());
const Table = () => {
  return (
    <SelectedLang.Consumer>
      {(lang) => {
        return (
          <div className='container mt-3'>
            <table>
              <TableHead />
            </table>
            <TableBody lang={lang} />
          </div>
        );
      }}
    </SelectedLang.Consumer>
  );
};

export default Table;
