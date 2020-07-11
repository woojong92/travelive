import AppLayout from '../../components/AppLayout';
import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

function SearchPage () {

    return (
        <AppLayout>
            <div 
                style={{ display: 'flex', justifyContent: 'center'}}
            >
                <Input 
                    placeholder="검색어를 입력해 주세요." 
                    style={{
                        width: '800px',
                        height: '3rem',
                        margin: '3rem 0'
                    }}
                />
            </div>

        </AppLayout>
    )
} 

SearchPage.propType = {
    props : PropTypes.object
}

export default SearchPage;

