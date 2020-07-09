import React from 'react'
import dynamic from 'next/dynamic'
import styled from "@emotion/styled";
import PropTypes from 'prop-types';


const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p> ,
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]

const EditorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* overflow: scroll; */
    padding: 1rem;
    width: 1024px;
    margin-bottom: 3rem;
`;

const TitleInput = styled.input`
    font-size: 3rem;
    outline: none;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 2rem;
    width: 100%;
`;

const QuillWrapper = styled.div`
    max-width: 1000px;
    width: 100%;
    margin-bottom: 2rem;

    .ql-toolbar {
        border: 0;
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: 2rem;
    }

    .ql-container {
        border: 0;
    }

    .ql-editor {
        padding: 1rem;
        min-height: 320px;
        font-size: 1.125rem;
        line-height: 1.5;
    }
    .ql-editor .ql-blanck::before {
        left: 0px;
    }
`;

export default function Editor({ title, onChangeField}){

    const onChangeTitle = e => {
        onChangeField({ key: 'title', value: e.target.value})
    }

    const onChangeBody = value => {
        onChangeField({ key: 'body', value})
    }
    return (
        <EditorWrapper>
            <TitleInput 
                type="text" 
                placeholder="제목을 입력하세요" 
                onChange={onChangeTitle}
                value={title}
            />
            <QuillWrapper>
                <QuillNoSSRWrapper 
                    placeholder={"내용을 작성하세요..."}
                    modules={modules} 
                    formats={formats} 
                    theme="snow" //"bubble" 
                    onChange={onChangeBody}
                />
            </QuillWrapper>
        </EditorWrapper>
    )
}

Editor.propTypes = {
    title: PropTypes.string,
    onChangeField: PropTypes.func
}

