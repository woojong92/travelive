import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Layout, Menu, Button, Avatar, Dropdown } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { LOG_OUT_REQUEST } from '../modules/user';
import Router from 'next/router'


const { Header, Content } = Layout;


function AppLayout ( { children } ) {

    const { isLoggedIn }   = useSelector( state => state.user )
    const { me } = useSelector( state => state.user)
    const dispatch = useDispatch()

    const onLogout = useCallback( () => {
        dispatch( { type: LOG_OUT_REQUEST })
    }, [dispatch])


    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a onClick={() => Router.push('/user/[id]', `/user/@${me.nickname}`)}>내 스토리</a>
            </Menu.Item>
            <Menu.Item key="1">
            <Link href='/write'><a>새글쓰기</a></Link>
            </Menu.Item>
            <Menu.Item key="2">
                <a>임시글</a>
            </Menu.Item>

            <Menu.Divider />    

            <Menu.Item key="3">
                <a>설정</a>
            </Menu.Item>
            <Menu.Item key="4">
                <div onClick={onLogout}>로그아웃</div>
            </Menu.Item>
        </Menu>
    );

    return (
        <Layout style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            overflow: 'auto'
        }}>
                <Header 
                    style={{ 
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '1024px'}}>
                    <Link href="/"><a style={{ marginRight: '1rem' }}>Travelive</a></Link>
                    <Menu className="header__menu"
                        theme="dark" 
                        mode="horizontal" 
                        // defaultSelectedKeys={['home']}
                    >
                        <Menu.Item key="home"><Link href="/"><a>Home</a></Link></Menu.Item>
                        {/* <Menu.Item key="post"><Link href="/post"><a>post</a></Link></Menu.Item> */}
                        <Menu.Item key="general"><Link href="/general"><a>General</a></Link></Menu.Item>
                        <Menu.Item key="qna"><Link href="/qna"><a>Q&A</a></Link></Menu.Item>
                    </Menu>
                    {
                        isLoggedIn ? (
                            <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <SearchOutlined style={{marginRight: '1rem', fontSize: '18px', color: 'whitesmoke'}}/>
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <a onClick={e => e.preventDefault()}>
                                        <Avatar 
                                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
                                            style={{ border: '1px solid whitesmoke'}}
                                        /> 
                                    </a>
                                </Dropdown>
                            </div>
                        ): (
                            <div 
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Button type="primary" style={{ marginRight: '1rem' }}>
                                    <Link href="/signup"><a>회원가입</a></Link>
                                </Button>
                                <Button>
                                    <Link href="/login"><a>로그인</a></Link>
                                </Button>
                            </div>
                        )
                    }
                    </div>
                </Header>

                <Content style={{ padding: '1rem', overflow: 'scroll'}}>
                    {children}
                </Content>
                
        </Layout>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired, 
    // logedIn: PropTypes.bool.isRequired
};

export default AppLayout;