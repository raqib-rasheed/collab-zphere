import React, { FC, useState } from "react";
import Editor from "@monaco-editor/react";
import { Editor as UIEditor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const AdminInterface: FC = () => {
    const editorState = EditorState.createEmpty();

    const [rawEditor, setRawEditor] = useState<boolean>(false);

    const toggleEditorButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setRawEditor(!rawEditor);
    };

    return (
        <div className="container">
            <button onClick={toggleEditorButtonClick}>Toggle Editor</button>
            {rawEditor ? (
                <Editor
                    defaultLanguage="html"
                    options={{
                        minimap: {
                            enabled: false,
                        },
                    }}
                />
            ) : (
                <UIEditor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    // onEditorStateChange={this.onEditorStateChange}
                />
            )}
        </div>
    );
};

export default AdminInterface;
