import React, {useEffect, useCallback} from 'react';
import {
    Layout,
    Form,
    Input,
    Tooltip,
    // Cascader,
    // Select,
    // Row,
    // Col,
    Checkbox,
    Button,
    // AutoComplete,
  } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { SIGN_UP_REQUEST } from '../../modules/user';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';



// const { Option } = Select;
// const AutoCompleteOption = AutoComplete.Option;

const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

function SignUpPage () {

    const router = useRouter();
    const [form] = Form.useForm()
    const dispatch = useDispatch();
    const { isSignedUp, isSigningUp } = useSelector( state => state.user )

    const onSubmitForm = useCallback((value) => {
        console.log(value);
        dispatch({ 
            type: SIGN_UP_REQUEST,
            payload: value
        })
    }, []); 


    useEffect(() => {
        console.log(isSignedUp)
        if( isSignedUp ) {
            router.push('/signup/comfirmed')
        }
    }, [isSignedUp])

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
            }}>회원가입</div>
            <Form
                {...formItemLayout}
                form={form}
                name="signup"
                onFinish={onSubmitForm}
                initialValues={{
                    // residence: ['zhejiang', 'hangzhou', 'xihu'],
                    // prefix: '86',
                }}
                scrollToFirstError
                style={{ width: '420px'}}
            >

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }

                        return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="nickname"
                    label={
                    <span>
                        Nickname&nbsp;
                        <Tooltip title="What do you want others to call you?">
                        <QuestionCircleOutlined />
                        </Tooltip>
                    </span>
                    }
                    rules={[
                    {
                        required: true,
                        message: 'Please input your nickname!',
                        whitespace: true,
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                    {
                        validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                    },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" style={{marginRight: '1rem'}} loading={isSigningUp}>
                        회원가입하기
                    </Button>
                    <Button type="primary" danger onClick={() => router.push('/')}>
                        취소하기
                    </Button>
                </Form.Item>
            </Form>
            </div>
        </Layout>
    )
}

export default SignUpPage;