import Editor from "@stfy/react-editor.js";
interface Props {
  id: string;
  className: string;
  setContent: any;
}

const MyEditor = (Props: Props) => {
  return (
    <>
      <Editor
        holder={Props.id}
        onData={(data) => {
          Props.setContent(JSON.stringify(data));
        }}
        placeholder="Content of your amazing article ✨"
        data={{
          time: Date.now(),
          blocks: [],
          version: "2.12.4",
        }}
      />
      <div id={Props.id} className={Props.className} />
    </>
  );
};
export default MyEditor;
