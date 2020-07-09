import React from 'react';
import PropTypes from 'prop-types';

import { Card, Avatar } from 'antd';
import { useRouter } from 'next/router'

function PostCard ({post}) {
    const router = useRouter();

    return (
        <Card
            style={{ width: 300, margin: '1rem', cursor: 'pointer' }}
            cover={
                <img
                    alt="example"
                    src={post.Images[0].src}
                />
            }
            onClick={ () => router.push('/post/[id]', `/post/${ post.id}`)}
            // actions={[
            //     <SettingOutlined key="setting" />,
            //     <EditOutlined key="edit" />,
            //     <EllipsisOutlined key="ellipsis" />,
            // ]}
        >
            <Card.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={post.title}
                description={post.body}
            />
        </Card>
    )
}


function PostCards ({posts} ) {

    if( !posts ) {
        return  <div>없음</div>
    }
    
    return(
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', margin: '2rem 0'}}>
            {
                posts.map( post => <PostCard key={post.id} post={post} />)
            }
        </div>
    )
    
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
    // onClickStoryCard: PropTypes.func,
}

PostCards.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            User: PropTypes.object,
            title: PropTypes.string,
            content: PropTypes.string,
            createdAt: PropTypes.object,
            Comments: PropTypes.arrayOf(PropTypes.object),
            Images: PropTypes.arrayOf(PropTypes.object)
        })
    )
    // onClickStoryCard: PropTypes.func,
}

export default PostCards;