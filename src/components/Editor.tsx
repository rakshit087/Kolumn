import Editor from "@stfy/react-editor.js";
interface Props {
  id: string;
  className: string;
}
const MyEditor = (Props: Props) => {
  return (
    <>
      <Editor
        autofocus
        holder={Props.id}
        onChange={() => console.log("Something is changing!!")}
        onData={(data) => console.log(data)}
        onReady={() => console.log("Start!")}
        data={{
          time: Date.now(),
          blocks: [
            {
              type: "paragraph",
              data: {
                text: "Content of your amazing article ✨",
                level: 2,
              },
            },
          ],
          version: "2.12.4",
        }}
      />
      <div id={Props.id} className={Props.className}></div>
    </>
  );
};
export default MyEditor;
