import React, { useEffect, useCallback } from 'react';
import AppLayout from '../components/AppLayout';
import PostCards from '../components/PostCards';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_POSTS_REQUEST } from '../modules/post';
import { Tabs } from 'antd';



function PostPage () {
    // const [ loaded, setLoaded ] = useState(false); 
    const dispatch = useDispatch();
    const { posts } = useSelector( state => state.post );
    const { me } = useSelector( state => state.user );

    useEffect( () => {
        dispatch({
            type: LOAD_POSTS_REQUEST
        })
    }, []);

    return (
        <AppLayout>
            {/*
                <div style={{ display: 'flex', justifyContent: 'center'}}> 
                    <div style={{display: 'flex', height: '200px',width: '1024px', backgroundColor: '#00152A', color: '#fff', margin: '1rem 0'}}>
                        액션 영역
                    </div>
                </div>
            */}


            <div style={{ display: 'flex', justifyContent: 'center'}}> 
                <div style={{width: '1024px', margin: '1rem'}}>
                    <Tabs defaultActiveKey="1" >
                        <Tabs.TabPane tab="인기순" key="1">
                        
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="최신순" key="2">
                        
                        </Tabs.TabPane>
                    </Tabs>
                </div>
            </div>
            

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}> 
                <PostCards 
                    posts={posts}
                />
            </div>
        </AppLayout>
    )
}

export default PostPage;