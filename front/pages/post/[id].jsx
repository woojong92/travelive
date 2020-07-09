import React, { useEffect } from 'react';
// import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PostViewr () {

    const router = useRouter()
    const { id } = router.query

    useEffect( () => {
        console.log(router)
    }, [])

    return <div>post viewer id: {id}</div>
}