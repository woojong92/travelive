import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import PropTypes from 'prop-types';
import PostCards from '../components/PostCards';

export default function Username () {

    const [ stories, setStories ]  = useState([
        {
            id: 1,
            User: {
                id: 1,
                nickname: 'woody',
            },
            title: '첫번째 게시글 타이틀',
            content: '첫번째 게시글',
            Images: [{
                src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
            }, {
                src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
            }],
            Comments: [{
                User: {
                    nickname: 'hero',
                },
                content: 'ㅎㅎㅎㅎㅎ',
            }],
        },{
            id: 2,
            User: {
                id: 2,
                nickname: 'kkkk',
            },
            title: '두번째 게시글 타이틀',
            content: '두번째 게시글',
            Images: [{
                src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
            }, {
                src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
            }],
            Comments: [{
                User: {
                    nickname: 'hero',
                },
                content: 'ㅎㅎㅎㅎㅎ',
            }],
        },{
            id: 3,
            User: {
                id: 3,
                nickname: 'kkkk',
            },
            title: '두번째 게시글 타이틀',
            content: '두번째 게시글',
            Images: [{
                src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
            }, {
                src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
            }],
            Comments: [{
                User: {
                    nickname: 'hero',
                },
                content: 'ㅎㅎㅎㅎㅎ',
            }],
        }
    ]);

    return (
        <AppLayout>
            <div>user page</div>
            <PostCards stories={stories} >

            </PostCards>

        </AppLayout>
    )
} 

Username.propType = {
    props : PropTypes.object
}

// https://www.gachitrip.com/@username
export const getServerSideProps = async (context) => {
    console.log('gggg')
    console.log(context.params);
    const res = { 
        ok: true,
        // username: context.params.username 
    }//await fetch(`http://localhost:3000/api/post/${context.params.id}`)
    //const data = await res.json()
    return {props: { ...res }}
}