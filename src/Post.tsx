type PostTypes = {
  author?: string;
  content?: string;
};

export function Post(props: PostTypes) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  );
}
