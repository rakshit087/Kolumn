import Editor from "./editor";
interface Props {
  id: string;
  className: string;
  content: any;
  setContent: any;
}

const MyEditor = (props: Props) => {
  return (
    <>
      <Editor
        holder={props.id}
        onData={(data) => {
          props.setContent(JSON.stringify(data));
        }}
        onChange={(data) => {
          props.setContent(JSON.stringify(data));
        }}
        placeholder="Begin writing your amazing piece of art here ✨"
        data={props.content}
      />
      <div id={props.id} className={props.className} />
    </>
  );
};
export default MyEditor;
