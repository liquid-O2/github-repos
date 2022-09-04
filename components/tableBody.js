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
      <div>
        {data.items.map((item, index) => {
          return <TbRow key={index} item={item} index={index} />;
        })}
      </div>
    );
  }
};

export default TableBody;

const TbRow = (prop) => {
  //   const [login, avatar_url] = owner;
  const { id, owner, stargazers_count, forks, open_issues, name, html_url } =
    prop.item;
  const index = prop.index;
  const { login, avatar_url } = owner;
  // console.log(index);
  return (
    <div className='row tbody'>
      <p className='col-1-sm body-index'>{index}</p>
      <p className='col-5-sm'>
        <Link href={html_url}>
          <a>
            <div className='repo-card'>
              <img src={avatar_url} alt={login} width='32px' height='32px' />
              <h5>{name}</h5>
            </div>
          </a>
        </Link>
      </p>
      <p className='col-2-sm'>{stargazers_count}</p>
      <p className='col-2-sm'>{forks}</p>
      <p className='col-2-sm body-issues'>{open_issues}</p>
    </div>
  );
};
