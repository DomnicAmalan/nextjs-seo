import Head from 'next/head'
import Axios from 'axios';

export default function Home({ data }) {
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
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const {data} = await Axios.get(`http://localhost:3000/api/user/${params.id}`);
  return {
    props: {
      data
    },
    revalidate: 1,
  }
}

