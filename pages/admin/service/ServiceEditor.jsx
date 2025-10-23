import React, { useEffect, useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function ServiceEditor({setEditorHtmlContent}) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());


  useEffect(()=>{
    setEditorHtmlContent && setEditorHtmlContent(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  },[editorState]);

  
  return (
    <>
      <div className='border !border-gray-200 p-2'>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <strong>Output:</strong>
        <div className='my-2'
          dangerouslySetInnerHTML={{
            __html: draftToHtml(convertToRaw(editorState.getCurrentContent())),
          }}
        />


        {draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      </div>
    </>
  );
}

export default ServiceEditor;
