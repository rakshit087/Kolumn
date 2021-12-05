import Editor from "@stfy/react-editor.js";
const MyEditor = () => {
  return (
    <>
      <Editor
        autofocus
        holder="editorjs-container"
        onChange={() => console.log("Something is changing!!")}
        onData={(data) => console.log(data)}
        onReady={() => console.log("Start!")}
        data={{
          time: 1554920381017,
          blocks: [
            {
              type: "paragraph",
              data: {
                text: "Hello Editor.js",
                level: 2,
              },
            },
          ],
          version: "2.12.4",
        }}
      />
      <div id="editorjs-container"></div>
    </>
  );
};
export default MyEditor;
