import produce from 'immer';

const dummyPosts = [{
    id: 1,
    User: {
        id: 1,
        nickname: 'woody',
    },
    title: '첫번째 게시글 타이틀',
    body: '첫번째 게시글',
    Images: [{
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    }, {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    }],
    Comments: [{
        User: {
            nickname: 'hero',
        },
        body: 'ㅎㅎㅎㅎㅎ',
    }],
},{
    id: 2,
    User: {
        id: 2,
        nickname: 'kkkk',
    },
    title: '두번째 게시글 타이틀',
    body: '두번째 게시글',
    Images: [{
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    }, {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    }],
    Comments: [{
        User: {
            nickname: 'hero',
        },
        body: 'ㅎㅎㅎㅎㅎ',
    }],
},{
    id: 3,
    User: {
        id: 3,
        nickname: 'kkkk',
    },
    title: '두번째 게시글 타이틀',
    body: '두번째 게시글',
    Images: [{
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    }, {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    }],
    Comments: [{
        User: {
            nickname: 'hero',
        },
        body: 'ㅎㅎㅎㅎㅎ',
    }],
},{
    id: 4,
    User: {
        id: 4,
        nickname: 'kkkk',
    },
    title: '두번째 게시글 타이틀',
    body: '두번째 게시글',
    Images: [{
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    }, {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    }],
    Comments: [{
        User: {
            nickname: 'hero',
        },
        body: 'ㅎㅎㅎㅎㅎ',
    }],
},{
    id: 5,
    User: {
        id: 5,
        nickname: 'kkkk',
    },
    title: '두번째 게시글 타이틀',
    body: '두번째 게시글',
    Images: [{
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    }, {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    }],
    Comments: [{
        User: {
            nickname: 'hero',
        },
        body: 'ㅎㅎㅎㅎㅎ',
    }],
},{
    id: 6,
    User: {
        id: 6,
        nickname: 'kkkk',
    },
    title: '두번째 게시글 타이틀',
    body: '두번째 게시글',
    Images: [{
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    }, {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    }],
    Comments: [{
        User: {
            nickname: 'hero',
        },
        body: 'ㅎㅎㅎㅎㅎ',
    }],
},{
    id: 7,
    User: {
        id: 7,
        nickname: 'kkkk',
    },
    title: '두번째 게시글 타이틀',
    body: '두번째 게시글',
    Images: [{
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    }, {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    }],
    Comments: [{
        User: {
            nickname: 'hero',
        },
        body: 'ㅎㅎㅎㅎㅎ',
    }],
}] // 스토리 페이지에 보일 포스트들,


const initialState = {
    
    imagePaths: [], // 미리보기 이미지 경로

    firstPostsLoaded: false,
    posts: [],
    isLoadingPosts: false,
    loadPostsError: false,
    loadPostsErrorReason: '',
    
    isUploadingPost: false,
    uploadPostSuccess: false,
    uploadPostError: false,
    uploadPostErrorReason: '',

    post: [], // 현재 읽는 포스트
    isReadingPost: false,
    readPostError: false,
    readPostErrorReason: '',

    isUpdatingPost: false,
    updatePostError: false,
    updatePostErrorReason: '',

    deletedPost: [], // 삭제된 포스트 내용
    isDeletingPost: false, 
    deletePostError: false,
    deletePostErrorReason: '',

    isAddingComment: false, //
    addCommentErrorReason: '',
    conmmentAdded: false,
    singlePost: null
}

// 포스트 불러오기
export const LOAD_POSTS_REQUEST = 'post/LOAD_POST_REQUEST';
export const LOAD_POSTS_SUCCESS = 'post/LOAD_POST_SUCCESS';
export const LOAD_POSTS_FAILURE = 'post/LOAD_POST_FAILURE';

// 포스트 추가
export const UPLOAD_POST_REQUEST = 'post/UPLOAD_POST_REQUEST';
export const UPLOAD_POST_SUCCESS = 'post/UPLOAD_POST_SUCCESS';
export const UPLOAD_POST_FAILURE = 'post/UPLOAD_POST_FAILURE';

// 포스트 읽기
export const READ_POST_REQUEST = 'post/READ_POST_REQUEST';
export const READ_POST_SUCCESS = 'post/READ_POST_SUCCESS';
export const READ_POST_FAILURE = 'post/READ_POST_FAILURE';

// 포스트 수정
export const UPDATE_POST_REQUEST = 'post/UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'post/UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'post/UPDATE_POST_FAILURE';

// 포스트 수정
export const DELETE_POST_REQUEST = 'post/DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'post/DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'post/DELETE_POST_FAILURE';


const post = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            // 포스트 데이터 가져오기
            case LOAD_POSTS_REQUEST : {
                draft.isLoadingPosts = true;
                draft.loadPostsError = false;
                draft.loadPostsErrorReason = ''
                break;
            }
            case LOAD_POSTS_SUCCESS : {
                draft.isLoadingPosts = false;
                draft.firstPostsLoaded = true;
                draft.posts = dummyPosts;//action.data;
                break;
            }
            case LOAD_POSTS_FAILURE : {
                draft.isLoadingPosts = false;
                draft.loadPostsError = true;
                draft.loadPostsErrorReason = action.error;
                break;
            }

            // 업로드
            case UPLOAD_POST_REQUEST : {
                draft.isUploadingPost = true;
                draft.uploadPostError = false;
                draft.uploadPostSuccess = false;
                draft.uploadPostErrorReason = '';
                break;
            }
            case UPLOAD_POST_SUCCESS : {
                draft.isUploadingPost = false;
                draft.uploadPostSuccess = true;
                draft.posts.unshift(action.data);
                break;
            }
            case UPLOAD_POST_FAILURE : {
                draft.isUploadingPost = false;
                draft.uploadPostError = true;
                draft.uploadPostErrorReason = action.error;
                break;
            }

            // 읽기
            case READ_POST_REQUEST : {
                draft.isReadingPost = true;
                draft.readPostError = false;
                draft.readPostErrorReason = '';
                break;
            }
            case READ_POST_SUCCESS : {
                draft.isReadingPost = false;
                draft.post = action.data;
                break;
            }
            case READ_POST_FAILURE : {
                draft.isReadingPost = false;
                draft.readPostError = true;
                draft.readPostErrorReason = action.error;
                break;
            }

            // 수정
            case UPDATE_POST_REQUEST : {
                draft.isUpdatingPost = true;
                draft.updatePostError = false;
                draft.updatePostErrorReason = '';
                break;
            }
            case UPDATE_POST_SUCCESS : {
                draft.isUpdatingPost = false;
                // draft.posts 수정!!!
                break;
            }
            case UPDATE_POST_FAILURE : {
                draft.isUpdatingPost = false;
                draft.updatePostError = true;
                draft.updatePostErrorReason = action.error;
                break;
            }

            // 포스트 삭제
            case DELETE_POST_REQUEST : {
                draft.isDeletingPost = true;
                draft.deletePostError = false;
                draft.deletePostErrorReason = '';
                break;
            }
            case DELETE_POST_SUCCESS : {
                draft.isDeletingPost = false;
                draft.deletedPost = action.data; 
                break;
            }
            case DELETE_POST_FAILURE : {
                draft.isDeletingPost = false;
                draft.deletePostError = true;
                draft.deletePostErrorReason = action.error;
                break;
            }

            
            default: {
                break;
            }
        }
    })
};

export default post;