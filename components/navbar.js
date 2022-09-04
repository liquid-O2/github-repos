import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='navbar mt-2 text-primary'>
      <div className='container center'>
        <Link href='/'>
          <a>Github Reops</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
