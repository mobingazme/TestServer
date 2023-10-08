import React from 'react'

const UserDetail = ({data}) => {
  return (
    <div>
      <h3>{data.name}</h3>
      <h3>{data.email}</h3>
    </div>
  )
}


export default UserDetail

export async function getStaticPaths () {
  const res = await fetch("http://localhost:3003/users");
  const data = await res.json();
  const paths = data.map((user)=>({
    params : {
      usesrId : user.id.toString(),
    },
  }));

  return {
    paths,
    fallback : false
  }
}




export async function getStaticProps ({context}) {
  const { params } = context ;
  const res = await fetch(`http://localhost:3003/users/${params.userId}`);

  const data = await res.json();


  return {
    props :{ data },
  }
}