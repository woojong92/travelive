import React, { useState, useEffect, useCallback } from 'react';
import AppLayout from '../../components/AppLayout';
import PostCards from '../../components/PostCards';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_POSTS_REQUEST } from '../../modules/post';

function PostPage () {
    const [ loaded, setLoaded ] = useState(false); 
    const dispatch = useDispatch();
    const { posts } = useSelector( state => state.post );

    const handleLoadPosts = useCallback( () => {
        dispatch({ type: LOAD_POSTS_REQUEST})
        setLoaded(true)
    }, [dispatch])

    // const onClickStoryCard = useCallback(( story ) => {
    //     router.push(`/story/${story.id}`)
    // }, [])

    
    // 2. 스크롤 될 대 마다 데이터를 추가 시켜 준다. ( 10개 씩 )

    useEffect( () => {
        // 1. 처음 화면이 마운트 될 때 스토리들을 로드한다.
        if(!loaded)
            handleLoadPosts();

        // function onScroll() {
        //     console.log(
        //         window.scrollY, 
        //         document.documentElement.clientHeight, 
        //         document.documentElement.scrollHeight
        //     );
        // }

        // window.addEventListener('scroll', onScroll);

        // // 언마운트 될 때 이벤트 제거
        // return () => {
        //     window.removeEventListener('scroll', onScroll);
        // }

    }, []);

    return (
        <AppLayout>
                <PostCards 
                    posts={posts} 
                    // onClickStoryCard={onClickStoryCard} 
                />
        </AppLayout>
    )
}

export default PostPage;