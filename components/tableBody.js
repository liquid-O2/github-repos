import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (args) => fetch(args).then((res) => res.json())

const TableBody = (prop) => {
  const { data } = useSWR(
    `https://api.github.com/search/repositories?q=stars:>1+language:${prop.lang}&sort=stars&order=desc&type=Repositories`,
    fetcher
  )

  if (data) {
    return (
      <div className='rows'>
        {data.items.map((item, index) => {
          return <TbRow key={index} item={item} index={index} />
        })}
      </div>
    )
  }
}

export default TableBody

const TbRow = (prop) => {
  const { owner, stargazers_count, forks, open_issues, name, html_url } = prop.item
  const index = prop.index
  const { login, avatar_url } = owner

  return (
    <div className=' tbody-row'>
      <p className=' body-index'>{index}</p>
      <p className=''>
        <Link href={html_url}>
          <a>
            <div className='repo-card '>
              <figure className='body-image'>
                <Image src={avatar_url} alt={login} className='' layout='fill' />
              </figure>
              <h5 className='name'>{name}</h5>
            </div>
          </a>
        </Link>
      </p>
      <p className='star-row'>{stargazers_count}</p>
      <p className='forks-row'>{forks}</p>
      <p className=' body-issues'>{open_issues}</p>
    </div>
  )
}
