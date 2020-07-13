import React, {useState, useCallback} from 'react';
import AppLayout from '../../components/AppLayout';

import { List, Avatar, Space, Cascader } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

// 국내 vs 해외
const options = [
  {
    value: 'abroad',
    label: '해외',
  },{
    value: 'korea',
    label: '국내',
  }
]

// 대륙
const continent = [
  {
    value: 'Asia',
    label: '아시아',
  },{
    value: 'Africa',
    label: '아프리카',
  },{
    value: 'North America',
    label: '북아메리카',
  },{
    value: 'South America',
    label: '남아메리카',
  },{
    value: 'Europe',
    label: '유럽',
  },{
    value: 'Oceania',
    label: '오세아니아',
  }
]

//
const address1 = [
  {
    value: '서울',
    label: '서울'
  },
  {
    value: '경기',
    label: '경기'
  },
  {
    value: '인천',
    label: '인천'
  },
  {
    value: '광주',
    label: '광주'
  },
  {
    value: '대구',
    label: '대구'
  },
  {
    value: '울산',
    label: '울산'
  },
  {
    value: '강원',
    label: '강원'
  },
  {
    value: '제주',
    label: '제주'
  },
  {
    value: '대전',
    label: '대전'
  },
  {
    value: '충북',
    label: '충북'
  },
  {
    value: '충남',
    label: '충남'
  },
  {
    value: '세종',
    label: '세종'
  },
  {
    value: '부산',
    label: '부산'
  },
  {
    value: '경남',
    label: '경남'
  },
  {
    value: '경북',
    label: '경북'
  },
  {
    value: '전남',
    label: '전남'
  },
  {
    value: '전북',
    label: '전북'
  },
]



function GeneralPage () {

    const [ option, setOption ] = useState('abroad');
    const onChange = useCallback((value) => {
      setOption(value[0])
      // console.log(value[0])
    }, [option])

    return (
        <AppLayout>
            {/* <div style={{display: 'flex', flexDirection: 'column'}}>
                GeneralPage
            </div> */}

          <div style={{display: 'flex',justifyContent: 'center' }}>
            <div style={{width: '1024px'}}>
              <Cascader options={options} onChange={onChange} defaultValue={[option]} />

            </div>

              {
                // option === 'abroad' ? (
                //   <Cascader options={continent}  placeholder="Please select" />
                // ) : option === 'korea' && (
                //   <Cascader options={address1} placeholder="Please select" />
                // )
              }

          </div>

          <div style={{display: 'flex', justifyContent: 'center'}}>
            <List
                style={{
                    width: '1024px',
                    margin: '2rem 0'
                }}
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 10,
                }}
                dataSource={listData}
                footer={
                  <div>
                    <b>ant design</b> footer part
                  </div>
                }
                renderItem={item => (
                  <List.Item
                    key={item.title}
                    actions={[
                      <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                      <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                      <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                      <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                      />
                    }
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                    {item.content}
                  </List.Item>
                )}
              />
            </div>
        </AppLayout>
    )
}

export default GeneralPage;