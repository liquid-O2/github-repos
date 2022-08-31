import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';
export default function Home() {
  return (
    <>
      <Head>
        <title>Github Battle</title>
        <meta name='description' content='Github battle' />
      </Head>
      <Navbar />
      <div className='container'></div>
    </>
  );
}
