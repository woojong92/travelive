import React from 'react';
import { Layout, Button } from 'antd';
import Router from 'next/router';

function SignUpComfirmedPage ( ) {
    return (
        <Layout style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{ 
                border: `1px solid #f5f5f5`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center', 
                padding: '1rem',
                backgroundColor: '#ffffff'
            }}>

                <div style={{
                    margin: '1rem',
                    fontSize: '30px',
                    fontWeight: '600'
                }}>회원가입을 축하합니다 :)</div>

                <div style={{display: 'flex'}}>
                    <Button type="primary" style={{marginRight: '1rem'}} onClick={() => Router.push('/login')}>
                        로그인하기
                    </Button>
                    <Button onClick={() => Router.push('/')}>
                        홈으로
                    </Button>
                </div>

            </div>
        </Layout>
    )
}

export default SignUpComfirmedPage;