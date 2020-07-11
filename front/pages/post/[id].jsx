import React, { useEffect } from 'react';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import AppLayout from '../../components/AppLayout';


 function PostViewrPage () {

    const router = useRouter()
    const { id } = router.query

    useEffect( () => {
        console.log(router)
    }, [])

    return (
        <AppLayout>
             <div>PostViewrPage : {id}</div>
        </AppLayout>
    )
}


export default PostViewrPage;
