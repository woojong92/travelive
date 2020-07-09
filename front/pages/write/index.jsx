import React, { useEffect, useCallback } from 'react';
import Editor from '../../components/Editor';
import { useSelector, useDispatch } from 'react-redux';

import Router from 'next/router';
import { Layout, Button } from 'antd';
import { initialize, changeField } from '../../modules/write';

import { UPLOAD_POST_REQUEST } from '../../modules/post';

const { Header, Content } = Layout;

function write() {

    const dispatch = useDispatch();
    const {title, body } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body
    }));
    const { isLoadingPosts, loadPostsError, uploadPostSuccess } = useSelector( state => state.post)

    const onPublish = useCallback( () => {
        dispatch({
            type: UPLOAD_POST_REQUEST,
            payload: {
                id: 10,
                User: {
                    id: 1,
                    nickname: 'woody',
                },
                Images: [{
                    src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                }],
                title,
                body
            }
        })
        if(uploadPostSuccess){
            Router.push('/');
        }

        if(loadPostsError){
            window.alert('에러');
        }

        console.log('publish')
    }, []);

    const onCancel = useCallback( () => {
        Router.back()
    }, [])

    const onDraft = useCallback( () => {
        console.log('draft')
    }, [])

    const onChangeField = useCallback( payload => {
        dispatch(changeField(payload))
    }, [dispatch])
    
    // 언마운트 될 때 초기화
    useEffect( () => {
        return () => {
            dispatch(initialize());
        };
    }, [dispatch])

    return (
        <Layout style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            overflow: 'scroll'
        }}>
            <Header style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '1024px', alignItems: 'center'}}>
                    <Button type="danger" onClick={onCancel}> 취소하기 </Button>
                    {/* <Link href="/"><a style={{ marginRight: '1rem' }}>Travelive</a></Link> */}
                    <div>
                        <Button type="primary" onClick={onPublish} style={{marginRight: '1rem'}} loading={isLoadingPosts}> 출간하기 </Button>
                        <Button onClick={onDraft}> 임시저장 </Button>
                    </div>
                </div>

            </Header>
            
            <Content style={{ backgroundColor: 'white', overflow: 'scroll', display: 'flex' ,justifyContent: 'center'}}>
                <Editor onChangeField={onChangeField} title={title} body={body}/>
            </Content>
            
        </Layout>
    )
}

export default write;