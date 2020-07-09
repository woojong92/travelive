const dummyUser = {
    nickname: 'woody',
    Story: [],
    Picture: [],
    Video: [],
    Followings: [],
    Followers: [],
    id: 1,
};

const initialState = {
    isLoggedIn: false, // 로그인 여부
    isLoggingIn: false, // 로그인 시도중
    isLoggingOut: false, // 로그아웃 시도중
    LogInErrorReason: '',
    isSignedUp: false,
    isSigningUp: false,
    signUpErrorReason: '',
    me: null,
    followingList: [],
    followerList: [],
    userInfo: null,
}

export const SIGN_UP_REQUEST = 'user/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'user/LOG_IN_REQUEST'; 
export const LOG_IN_SUCCESS = 'user/LOG_IN_SUCCESS'; 
export const LOG_IN_FAILURE = 'user/LOG_IN_FAILURE'; 

export const LOAD_USER_REQUEST = 'user/LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'user/LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'user/LOAD_USER_FAILURE';

export const LOG_OUT_REQUEST = 'user/LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'user/LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'user/LOG_OUT_FAILURE';

export const LOAD_FOLLOW_REQUEST = 'user/LOAD_FOLLOW_REQUEST';
export const LOAD_FOLLOW_SUCCESS = 'user/LOAD_FOLLOW_SUCCESS';
export const LOAD_FOLLOW_FAILURE = 'user/LOAD_FOLLOW_FAILURE';

export const FOLLOW_USER_REQUEST = 'user/FOLLOW_USER_REQUEST';
export const FOLLOW_USER_SUCCESS = 'user/FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'user/FOLLOW_USER_FAILURE';

export const UNFOLLOW_USER_REQUEST = 'user/UNFOLLOW_USER_REQUEST';
export const UNFOLLOW_USER_SUCCESS = 'user/UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'user/UNFOLLOW_USER_FAILURE';

export const REMOVE_FOLLOWER_REQUEST = 'user/REMOVE_FOLLOWER_REQUEST';
export const REMOVE_FOLLOWER_SUCCESS = 'user/REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'user/REMOVE_FOLLOWER_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';



const user = (state = initialState, action) => {
    switch (action.type) {
      case LOG_IN_REQUEST: {
        return {
          ...state,
          isLoggingIn: true,
          logInErrorReason: '',
        };
      }
      case LOG_IN_SUCCESS: {
        return {
          ...state,
          isLoggingIn: false,
          isLoggedIn: true,
          me: dummyUser,
          isLoading: false,
        };
      }
      case LOG_IN_FAILURE: {
        return {
          ...state,
          isLoggingIn: false,
          isLoggedIn: false,
          logInErrorReason: action.error,
          me: null,
        };
      }
      case LOG_OUT_REQUEST: {
        return {
          ...state,
          isLoggedIn: false,
          me: null,
        };
      }
      case SIGN_UP_REQUEST: {
        return {
          ...state,
          isSigningUp: true,
          isSignedUp: false,
          signUpErrorReason: '',
        };
      }
      case SIGN_UP_SUCCESS: {
        return {
          ...state,
          isSigningUp: false,
          isSignedUp: true,
        };
      }
      case SIGN_UP_FAILURE: {
        return {
          ...state,
          isSigningUp: false,
          signUpErrorReason: action.error,
        };
      }
      default: {
        return {
          ...state,
        };
      }
    }
  };

export default user;