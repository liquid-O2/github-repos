import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (args) => fetch(args).then((res) => res.json());

const TableBody = (prop) => {
  const { data, error } = useSWR(
    `https://api.github.com/search/repositories?q=stars:>1+language:${prop.lang}&sort=stars&order=desc&type=Repositories`,
    fetcher
  );

  if (data) {
    return (
      <tbody>
        {data.items.map((item, index) => {
          return <TbRow key={index} item={item} index={index} />;
        })}
      </tbody>
    );
  }
};

export default TableBody;

// const fetcher = (args) => fetch(args).then((res) => res.json());
// function TableRow({
// index,
// owner,
// stargazers_count,
// forks,
// open_issues,
// name,
//   });
// const handleFetch = (lang) => {
//   //   console.log(lang);

//   return data;
// };

const TbRow = (prop) => {
  //   const [login, avatar_url] = owner;
  const { id, owner, stargazers_count, forks, open_issues, name, html_url } =
    prop.item;
  const index = prop.index;
  const { login, avatar_url } = owner;
  // console.log(index);
  return (
    <tr>
      <td>{index}</td>
      <td>
        <Link href={html_url}>
          <a>
            <div className='repo-card'>
              <img src={avatar_url} alt={login} width='32px' height='32px' />
              <h5>{name}</h5>
            </div>
          </a>
        </Link>
      </td>
      <td>{stargazers_count}</td>
      <td>{open_issues}</td>
    </tr>
  );
};
