import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='navbar mt-2 text-primary'>
      <div className='container'>
        <Link href='/'>
          <a>Github Battle</a>
        </Link>
        <div className='right-links display-f justify-space-between'>
          <Link href='/popular'>
            <a className='pr-1'>Popular</a>
          </Link>
          {/* <Link href='Battle'>
            <a>Battle</a>
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
