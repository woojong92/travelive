import React from 'react';
// import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PostViewr () {

    const router = useRouter()
    const { postId } = router.query

    return <div>post viewer id: {postId}</div>
}