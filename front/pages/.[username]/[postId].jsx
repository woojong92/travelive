import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '../../components/AppLayout';

function PostViewer ( {post, error, loading} ) {

    // 에러 발생
    if (error ) {
        if( error.response && error.response.status === 404 ) {
            return <div>존재하지 않는 포스트입니다.</div>
        }
        return <div>오류발생</div>
    }

    // 로딩 중이거나 아직 포스트 데이터가 없을 경우
    if ( loading || !post ) {
        return null;
    }

    const { title, body, user, publishedDate, tags } = post;

    return (
        <>
            <div>{title}</div>
            <div>{body}</div>
            <div>{user}</div>
            {
                tags.map(tag => <div key={tag}>#{tag}</div> )
            }
        </>
    )
}

function PostViewerPage (  ) {

    // const { postId } = props;
    // const dispatch = useDispatch();
    const post = {
        title: '테스트 타이틀',
        body: '테스트 포스트 내용',
        user: 'woody',
        publishedDate: '2020-07-07',
        tags: ['테스트', '태그', 'tag']
    }

    const error = false;
    const loading = false;

    useEffect( ( ) => {
        // 1. 처음 마운트될 때 포스트 읽기 api 요청
        // dispatch(readPost(porstId)) 
        return () => {
            // 포스트 페이지에서 벗어날 대 데이터 비우기
            // dispatch(unloadPost())
        }
    }, [])

    return (
        <AppLayout>
            <div>hello</div>
            <PostViewer post={post} error={error} loading={loading}/>
        </AppLayout>
    )
}

export default PostViewerPage;