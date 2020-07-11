import React from 'react';
import AppLayout from '../../components/AppLayout';
import PropTypes from 'prop-types';
import PostCards from '../../components/PostCards';
import { Avatar, Tabs } from 'antd';
import styled from '@emotion/styled'

const posts = [];

for (let i = 0; i < 23; i++) {
    posts.push({
        id: i,
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
        }]
    });
}

const { TabPane } = Tabs;

const TabsBar = styled(Tabs)`
    .ant-tabs-nav-wrap {
        display: flex;
        flex-direction: center;
    }

    .ant-tabs-nav-list {
        align-self: center;
    }
`;

function UserViewerPage () {

    return (
        <AppLayout>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                
                <div style={{display: 'flex', alignItems: 'center', width: '400px',margin: '2rem 0',  borderBottom: '1px solid #bfbfbf'}}>
                    <Avatar size={100} shape="square" style={{margin: '1rem'}}>U</Avatar>
                    <div>
                        <div style={{ fontSize: '20px'}}>Username</div>
                        <div>Description isladkjf;al skdjf; asldkfj;a </div>
                    </div>
                </div>


                <TabsBar defaultActiveKey="1" size={'large'} centered style={{ margin: '3rem 0'}}>
                    <TabPane tab="글" key="1" />
                    <TabPane tab="사진" key="2" />
                    <TabPane tab="소개" key="3" />
                </TabsBar>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center'}}>
                        <PostCards posts={posts} />
            </div>  

            {/* 리스트 형식으로 변경하기 */}

        </AppLayout>
    )
} 

UserViewerPage.propType = {
    props : PropTypes.object
}

export default UserViewerPage;

// https://www.gachitrip.com/@username
// export const getServerSideProps = async (context) => {
//     console.log('gggg')
//     console.log(context.params);
//     const res = { 
//         ok: true,
//         // username: context.params.username 
//     }//await fetch(`http://localhost:3000/api/post/${context.params.id}`)
//     //const data = await res.json()
//     return {props: { ...res }}
// }