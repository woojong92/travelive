import React, { useEffect, useCallback } from 'react';
import { Layout, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../../modules/user';
import { useRouter } from 'next/router';
import { grey } from '@ant-design/colors';

function login () {

    const router = useRouter()
    const { isLoggedIn, isLoggingIn } = useSelector( state => state.user)
    const dispatch = useDispatch();

    const onSubmitForm = useCallback((value) => {
        console.log(value);
        dispatch({ 
            type: LOG_IN_REQUEST,
            payload: value
        })
    }, []); 


    useEffect(() => {
        console.log(isLoggedIn)
        if( isLoggedIn ) {
            router.push('/')
        }
    }, [isLoggedIn])
    
    return (
        <Layout style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{ 
                border: `1px solid ${grey[3]}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center', 
                padding: '1rem'
            }}>
                
            <div style={{
                margin: '1rem',
                fontSize: '30px',
                fontWeight: '600'
            }}>로그인</div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onSubmitForm}
                style={{
                    width: '300px'
                }}
            >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email address!' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />} 
                        placeholder="이메일을 입력하세요." 
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="비밀번호를 입력하세요."
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="#" style={{float: 'right'}}>
                    Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button 
                        type="primary" 
                        htmlType="submit" 
                        className="login-form-button" 
                        style={{ width: '100%'}}
                        loading={isLoggingIn}
                    >
                    Log in
                    </Button>
                    Or <a href="">회원가입하기</a>
                </Form.Item>
            </Form>
            </div>
        </Layout>
    )
}

export default login;