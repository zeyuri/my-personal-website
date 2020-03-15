import Layout from "../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = ({ shows }) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {shows.map(({ id, name }) => (
        <li key={id}>
          <Link href="/p/[id]" as={`/p/${id}`}>
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show Data fetched. Count: ${data.length}`);

  return {
    shows: data.map(({ show }) => show)
  };
};

export default Index;
