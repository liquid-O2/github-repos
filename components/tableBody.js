import useSWR from 'swr';

const fetcher = (args) => fetch(args).then((res) => res.json());

const TableBody = (prop) => {
  const { data, error } = useSWR(
    `https://api.github.com/search/repositories?q=stars:>1+language:${prop.lang}&sort=stars&order=desc&type=Repositories`,
    fetcher
  );
  //   console.log(prop.lang);
  return <div>Selected Language is {prop.lang}</div>;
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
const TableRow = (data) => {
  //   const { id, owner, stargazers_count, forks, open_issues, name } = data.items;
  //   console.log(data.prop.items);
  //   const [login, avatar_url] = owner;

  return (
    <tbody>
      {data.prop.items.map((item, index) => {
        return <TbRow key={index} item={item} />;
      })}
    </tbody>
  );
};

const TbRow = (prop) => {
  //   const [login, avatar_url] = owner;
  const { id, owner, stargazers_count, forks, open_issues, name } = prop.item;
  const { index } = prop.index;
  const { login, avatar_url } = owner;

  return (
    <tr>
      <td>{index}</td>
    </tr>
  );
};
