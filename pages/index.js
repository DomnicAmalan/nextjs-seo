import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Axios from 'axios';

export default function Home({ data }) {
  console.log(data)
  return (
    <>
    <Head>
      <title>{data.name}</title>
      <meta name='description' content={data.desc} />
    </Head>
    <div>Dataa</div>
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  const {data} = await Axios.get('http://localhost:3000/api/user');
  return {
    props: {
      data
    },
  }
}
