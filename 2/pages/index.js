export default function Home({ posts }) {
 
  return (
    <div>
      <ul>
        {
          posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))
        }
      </ul>

    </div>
  )
}


export async function getStaticProps() {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();


  return {
    props: { posts: data },
  }
}  