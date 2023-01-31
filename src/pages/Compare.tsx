import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools"

function onChange(newValue : any) {
  console.log("change", newValue);
}


export default function Compare() {
  return (
    <>
      <div>
        {/* <AceEditor
      mode="javascript"
      theme="github"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true
      }}
    /> */}
    
      </div>
      <div>
      <AceEditor
  placeholder="Placeholder Text"
  mode="javascript"
  theme="monokai"
  name="blah2"
  onChange={onChange}
  fontSize={14}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={`function onLoad(editor) {
  console.log("i've loaded")
}`}
  setOptions={{
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: false,
  enableSnippets: true,
  showLineNumbers: true,
  tabSize: 2,
  }}/>
      </div>
    </>
  );
}
