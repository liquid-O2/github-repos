import useSWR from 'swr';

const fetcher = (args) => fetch(args).then((res) => res.json());

const useFetch = (language) => {
  const { data, error } = useSWR(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`,
    fetcher
  );
  return data;
};

export default useFetch;
