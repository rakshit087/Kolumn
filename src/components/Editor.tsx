import EditorJS, { LogLevels } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import { useRef, useState } from "react";

const DEFAULT_INITIAL_DATA = () => {
  return {
    time: new Date().getTime(),
    blocks: [
      {
        type: "header",
        data: {
          text: "This is my awesome editor!",
          level: 1,
        },
      },
    ],
  };
};

const EDITTOR_HOLDER_ID = "editorjs";

const Editor = () => {
  const initEditor = () => {
    const ejInstance = useRef();
    const [editorData, setEditorData] = useState(DEFAULT_INITIAL_DATA);
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      logLevel: LogLevels.ERROR,
      data: editorData,
      onChange: async () => {
        let content = await editor.saver.save();
        // Put your logic here to save this data to your DB
        setEditorData(content);
      },
      autofocus: true,
      tools: {
        header: Header,
      },
    });
  };

  return (
    <React.Fragment>
      <div id={EDITTOR_HOLDER_ID}> </div>
    </React.Fragment>
  );
};

export default Editor;
