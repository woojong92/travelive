import React from 'react';
import PropTypes from 'prop-types';
import '../styles/reset.css';
import 'antd/dist/antd.css';
import withReduxSaga from 'next-redux-saga';

import 'react-quill/dist/quill.snow.css'

import wrapper from '../store/configureStore';

function App ({ Component } ) {
    return (
        <Component></Component>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired
}

export default wrapper.withRedux(withReduxSaga(App));