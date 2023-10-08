import React from 'react'
import Link from 'next/link'
function Albums({ albums }) {
    return (
        <div>
            <ul>
                {
                    albums.map((album) => (
                        <li key={album.id}>
                            <Link href={`/albums/${album.id}`}>
                                <h3>{album.title}</h3>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Albums


export async function getServerSideProps(context) {
    const { params, req, qery } = context
    const res = await fetch("http://localhost:3003/albums")
    const data = await res.json()

    return {
        props: { albums: data }
    }
}